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
  SelectLabel,
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
import { CurrencyLabels } from "@/constants/currency";
import { useCreateFinance } from "@/hooks/mutation/useCreateFiances";
import { createFinanceSchema } from "@/schemas/finances";
import { CurrencyEnum } from "@/types/currency";
import { CreateFinanceFormType } from "@/types/finance";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
export const CreateFinance = () => {
  const [open, setOpen] = React.useState(false);

  const { mutate } = useCreateFinance();
  const formMethods = useForm<CreateFinanceFormType>({
    defaultValues: {
      currency: CurrencyEnum.RON,
      description: "",
      name: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(createFinanceSchema),
  });

  const onSubmit = formMethods.handleSubmit(
    (data, event) => {
      event?.preventDefault();
      mutate(data, {
        onSuccess: (response) => {
          console.log("here");
          const { data } = response;
          setOpen(false);
          toast("Create successfully", {
            id: data.id,
            description: `Successfully create finance ${data.name}`,
            // duration: 3000,
            action: {
              label: "Close",
              onClick(event) {
                toast.dismiss(data.id);
              },
            },
          });
        },
        onError(error, variables, context) {
          console.log({ error, variables, context });
          // @ts-ignore
          toast.error(error.response.data.title, {
            // @ts-ignore
            description: error.response.data.message,
          });
        },
      });
      console.log(data);
    },
    (errors, e) => {
      e?.preventDefault();
      console.log({ errors });
    },
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Create new Finance</Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:w-96">
        <Form {...formMethods}>
          <form onSubmit={onSubmit}>
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
