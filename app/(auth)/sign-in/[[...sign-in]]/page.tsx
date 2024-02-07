import { SignIn } from "@clerk/nextjs";
import PublicNavBar from "@/components/shared/PublicNavBar";

export default function Page() {
  return (
    <div className="flex w-full flex-grow flex-col items-center bg-light-4">
      <PublicNavBar />
      <div className="mt-8">
        <SignIn />;
      </div>
    </div>
  );
}
