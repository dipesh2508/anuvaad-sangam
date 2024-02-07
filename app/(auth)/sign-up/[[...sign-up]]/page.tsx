import PublicNavBar from "@/components/shared/PublicNavBar";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex w-full flex-grow flex-col items-center bg-light-4">
      <PublicNavBar />
      <div className="mt-6">
        <SignUp />;
      </div>
    </div>
  );
}
