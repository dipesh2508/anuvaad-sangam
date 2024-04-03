"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { languages, Language } from "@/lib/constants/language";
import { updateLanguage } from "@/lib/actions/language.actions";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  languages: z.string({
    required_error: "Please select a language",
  }),
});

const LanguageSelectorForm = ({
  id,
}:{
  id: string;
}) => {

  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    await updateLanguage({userId:id, language: values.languages});

    //map language value to key
    const language = languages.find((lang) => lang.value === values.languages);

    if (!language) {
    throw new Error('Language not found');
    }
    toast({
      title: "Language Updated!",
      description: `Your language has been updated to ${language?.key}`,
    });
    //reset the form
    form.reset();
    router.refresh();

    //provide the language to the user
    //update the user's language in the database
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Language</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select a Language" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Languages</SelectLabel>
                    {languages.map(({ key, id, value }) => (
                      <SelectItem key={id} value={`${value}`}>
                        {key}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage your language preferences here.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default LanguageSelectorForm;
