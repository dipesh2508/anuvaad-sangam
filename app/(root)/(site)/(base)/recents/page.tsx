'use client'
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { userId } = useAuth();
  return (
    <SignedIn>
      <SignOutButton signOutCallback={() => router.push("/sign-in")}>
        <div className="flex cursor-pointer gap-4 p-4">
          <p className="text-primary-6 max-lg:hidden">Logout</p>
        </div>
      </SignOutButton>
    </SignedIn>
  );
};

export default Page;
