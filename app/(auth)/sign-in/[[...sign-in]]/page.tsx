"use client"
import { SignIn } from "@clerk/nextjs";

export default function Page() {

  return (
    <div className="mt-8">
      <SignIn />;
    </div>
  );
}
