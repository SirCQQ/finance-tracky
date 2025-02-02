"use client";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { CurrencyLabels, FinanceTypeLabels } from "@/constants/labels";

import { createFinanceSchema } from "@/schemas/finances";
import { createFinance } from "@/server/mutation/finance";

import { CreateFinanceFormType } from "@/types/finance";
import { zodResolver } from "@hookform/resolvers/zod";
import { FinanceTypeEnum, CurrencyEnum } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const CreateFinance = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const formMethods = useForm<CreateFinanceFormType>({
    defaultValues: {
      currency: CurrencyEnum.RON,
      type: FinanceTypeEnum.Household,
      description: "",
      name: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(createFinanceSchema),
  });

  const onSubmit = formMethods.handleSubmit(async (data, event) => {
    event?.preventDefault();
    try {
      const response = await createFinance(data);
      setOpen(false);
      toast("Create successfully", {
        id: response.id,
        description: `Successfully create finance ${response.name}`,
        duration: 3000,
        action: {
          label: "Close",
          onClick() {
            toast.dismiss(response.id);
          },
        },
      });
      formRef.current?.reset();
      router.refresh();
    } catch (e) {
      let error = e as Error;
      console.log({ error: error.message });
      toast.error("Invalid request", {
        description: error.message,
      });
    }
  });

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Create new Finance</Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:w-96">
        <Form {...formMethods}>
          <form onSubmit={onSubmit} ref={formRef}>
            <SheetHeader>
              <SheetTitle>Create a new Finance situation</SheetTitle>
            </SheetHeader>
            <Box className="m-0 flex flex-col justify-between gap-4 p-0">
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Finance name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Household" {...field} required />
                    </FormControl>
                    <FormDescription>
                      Name of the finance that you want to track
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Finance main currency</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue
                            placeholder="Select a fruit"
                            onChange={field.onChange}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value={CurrencyEnum.EUR}>
                              {CurrencyLabels[CurrencyEnum.EUR]}
                            </SelectItem>
                            <SelectItem value={CurrencyEnum.RON}>
                              {CurrencyLabels[CurrencyEnum.RON]}
                            </SelectItem>
                            <SelectItem value={CurrencyEnum.USD}>
                              {CurrencyLabels[CurrencyEnum.USD]}
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      Name of the finance that you want to track
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Finance Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue
                            placeholder="Select a finance type"
                            onChange={field.onChange}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value={FinanceTypeEnum.Household}>
                              {FinanceTypeLabels[FinanceTypeEnum.Household]}
                            </SelectItem>
                            <SelectItem value={FinanceTypeEnum.SavingAccount}>
                              {FinanceTypeLabels[FinanceTypeEnum.SavingAccount]}
                            </SelectItem>
                            <SelectItem
                              value={FinanceTypeEnum.Investments}
                              disabled
                            >
                              {FinanceTypeLabels[FinanceTypeEnum.Investments]}
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      Name of the finance that you want to track
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Finance description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Description of the financial situation"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      A couple of word about the finance
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Box>
            <SheetFooter className="my-8 flex items-center justify-end self-end">
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
              {/* <SheetClose asChild> */}
              <Button type="submit" variant="default">
                Create
              </Button>
              {/* </SheetClose> */}
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};
