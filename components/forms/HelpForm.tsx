"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Textarea } from "../ui/textarea";
import { toast } from "@/components/ui/use-toast";

import { helpFormValidation } from "@/lib/validations/helpForm";

const HelpForm = () => {
  const form = useForm<z.infer<typeof helpFormValidation>>({
    resolver: zodResolver(helpFormValidation),
    defaultValues: {
      Email: "",
      helpDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof helpFormValidation>) {
    toast({
      title: "Help Request Sent!",
      description:
        "We have received your help request. We will get back to you soon.",
    });

    console.log(values);
    form.reset();
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="m-auto grid w-full gap-4"
      >
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem className="gap-y-4">
              <FormLabel className="font-secondary text-xl font-semibold">
                Email
              </FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>This is your Email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="helpDescription"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="font-secondary text-xl font-semibold">
                Help Description
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Description" {...field} />
              </FormControl>
              <FormDescription>
                Write the description about the Issue
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button className="px-8" type="submit">
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default HelpForm;
