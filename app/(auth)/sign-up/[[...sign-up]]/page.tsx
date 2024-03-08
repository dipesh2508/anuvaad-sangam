"use client"
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-6">
      <SignUp />;
    </div>
  );
}
