"use client";

import { SettingSideBarLinks } from "@/lib/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoExitOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { SignOutButton, SignedIn } from "@clerk/nextjs";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const SettingSideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="border-r-dark-4 bg-dark-2 sticky top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r pb-5 pt-28 max-md:hidden">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {SettingSideBarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          let Icon = link.icon;
          return (
            <Link key={link.id} href={link.route}>
              <div
                className={`flex items-center gap-4 rounded-md p-3 ${
                  isActive ? "bg-primary-6 text-light-2" : "text-primary-8"
                }`}
              >
                <Icon size={24} />
                <p className=" max-lg:hidden">{link.title}</p>
              </div>
            </Link>
          );
        })}
        <hr />
        <div className="mt-28">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="h-max w-full gap-3 p-4" variant="logout">
                <IoExitOutline size={24} />
                Log Out
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  {"You'll be logged out and redirected to the homepage."}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <SignedIn>
                  <SignOutButton signOutCallback={() => router.push("/")}>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </SignOutButton>
                </SignedIn>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
};

export default SettingSideBar;
