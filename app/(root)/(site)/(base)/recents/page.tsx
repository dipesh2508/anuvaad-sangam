"use client";
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { userId } = useAuth();
  return (
    <section>
      <SignedIn>
        <SignOutButton signOutCallback={() => router.push("/")}>
          <Button>Log out</Button>
        </SignOutButton>
      </SignedIn>
    </section>
  );
};

export default Page;
