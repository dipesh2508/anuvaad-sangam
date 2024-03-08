import LeftSideBar from "@/components/shared/LeftSideBar";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = await currentUser();
  if(!user){
    redirect("/sign-in");
  }
  
  return (
    <section className="flex flex-row">
      <LeftSideBar />
      <div className="flex min-h-screen flex-1 flex-col items-center px-6 pb-10 py-8 max-md:pb-32 sm:px-10">
        {children}
      </div>
    </section>
  );
}
