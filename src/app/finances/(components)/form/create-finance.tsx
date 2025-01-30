import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { CurrencyEnum } from "@/types/currency";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createFinanceSchema = z.object({
  name: z.string().min(3, {
    message: "Name is mandatory and needs to be atleast 3 characters long",
  }),
  currency: z.enum([CurrencyEnum.EUR, CurrencyEnum.RON, CurrencyEnum.USD], {
    message: "Currency is not in the list",
  }),
  description: z.string().optional(),
});

type CreateFinanceFormType2 = z.infer<typeof createFinanceSchema>;

export const CreateFinance = () => {
  const formMethods = useForm<CreateFinanceFormType2>({
    defaultValues: {
      currency: CurrencyEnum.RON,
      description: "",
      name: "",
    },
    mode: "onBlur",
    resolver: zodResolver(createFinanceSchema),
  });

  return (
    <Form {...formMethods}>
      <Card className="w-96 p-4">
        <CardHeader>
          <CardTitle>Create a new Finance situation</CardTitle>
        </CardHeader>
        <CardContent>
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Finance name</FormLabel>
                <FormControl>
                  <Input placeholder="Household" {...field} />
                </FormControl>
                <FormDescription>
                  Name of the finance that you want to track
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>

        <CardFooter className="flex items-center justify-end">
          <Button type="submit">Create </Button>
        </CardFooter>
      </Card>
    </Form>
  );
};
