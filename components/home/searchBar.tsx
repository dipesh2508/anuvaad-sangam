"use client";
import Image from "next/image";
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
import { SearchFormSchema } from "@/lib/validations/searchForm";
import { Input } from "@/components/ui/input";
import { getAllUsersByUsername } from "@/lib/actions/user.actions";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import UserSearchCard from "@/components/cards/UserSearchCard";
import RandomUsers from "../shared/RandomUsers";

const SearchBar = ({ image, id, name }: { image: string; id: string; name:string; }) => {
  const [users, setUsers] = useState<any[]>([]);

  const form = useForm<z.infer<typeof SearchFormSchema>>({
    resolver: zodResolver(SearchFormSchema),
    defaultValues: {
      username: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SearchFormSchema>) {
    try {
      const fetchedUsers = await getAllUsersByUsername( id, values.username);
      console.log(fetchedUsers);
      if (Array.isArray(fetchedUsers)) {
        console.log(fetchedUsers);
        setUsers(fetchedUsers);
      } else {
        console.error(fetchedUsers);
      }
    } catch (e: any) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <div className="mt-6 flex h-36 w-36 flex-col content-center justify-center gap-4">
        <Image
          src={image}
          alt="avatar"
          height={120}
          width={120}
          className="mx-auto rounded-full"
        />
        <h2 className="text-center text-xl font-medium">{name}</h2>
      </div>
      <div className=" mt-4 h-[1px] w-10/12 bg-primary-3"></div>
      <div className="mt-4 w-full px-7">
        <h3 className=" font-primary text-lg font-medium">Search</h3>
        <div className=" mt-2 flex flex-col gap-2" />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="m-auto flex w-full flex-1 flex-row justify-between gap-3"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex-1 gap-y-4">
                  <FormControl>
                    <Input placeholder="Enter a username to find" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              <SearchIcon size={18} />
            </Button>
          </form>
        </Form>
        <div className="mt-4 flex flex-col h-auto w-full gap-4">
          
          {users.map((user) => {
            console.log(user)
            return (
            <div key={user.id} className="flex gap-4">
              <UserSearchCard
                image={user.image}
                name={user.name}
                bio={user.bio}
                username={user.username}
                contacts={user.contacts}
                id={id}
                userId={user._id}
              />
            </div>
          )})}
        </div>
      </div>
      <RandomUsers id={id} />
    </>
  );
};

export default SearchBar;
