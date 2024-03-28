"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
import * as z from "zod";

import { Button } from "@/components/ui/button";
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
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { ChangeEvent, use, useState } from "react";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadThing";
import { updateUser } from "@/lib/actions/user.actions";
import { usePathname, useRouter } from "next/navigation";
import { languages } from "@/lib/constants/language";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
    email: string;
    language: string;
  };
  btnTitle: string;
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("media");
  const router = useRouter();
  const pathname = usePathname();
  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image || "",
      name: user?.name || "",
      username: user?.username || "",
      bio: user?.bio || "",
      language: "English",
    },
  });

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void,
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";

        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    const blob = values.profile_photo;

    const hasImageChanged = isBase64Image(blob);
    console.log("WORKING");

    if (hasImageChanged) {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].url) {
        values.profile_photo = imgRes[0].url;
      }
    }

    //update user profile
    await updateUser({
      userId: user.id,
      username: values.username,
      name: values.name,
      bio: values.bio,
      image: values.profile_photo,
      path: pathname,
      email: user.email,
      language: values.language
    });

    if (pathname === "/profile/edit") {
      router.back();
    } else {
      router.push("/recents");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10"
      >
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="account-form_image-label">
                {field.value ? (
                  <Image
                    src={field.value}
                    alt="profile photo"
                    width={96}
                    height={96}
                    priority
                    className="rounded-full object-contain"
                  />
                ) : (
                  <Image
                    src={field.value}
                    alt="profile photo"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                )}
              </FormLabel>
              <FormControl className="text-base-semibold flex-1 text-primary-9">
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="upload a photo"
                  className="account-form_image-input"
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-slate-900">Name</FormLabel>
              <FormControl className="text-base-semibold flex-1 text-primary-9">
                <Input
                  type="text"
                  className="account-form_input no focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-slate-900">Username</FormLabel>
              <FormControl className="text-base-semibold flex-1 text-primary-9">
                <Input
                  type="text"
                  className="account-form_input no focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-slate-900">Bio</FormLabel>
              <FormControl className="text-base-semibold flex-1 text-primary-9">
                <Textarea
                  rows={10}
                  className="account-form_input no focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
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
                    {languages.map(({ language, id }) => (
                      <SelectItem key={id} value={language}>
                        {language}
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
        <Button type="submit" variant="outline">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AccountProfile;