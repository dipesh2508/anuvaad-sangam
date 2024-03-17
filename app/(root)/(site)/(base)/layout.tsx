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
    <section className="w-full grid grid-cols-12">
      <LeftSideBar />
      <div className="col-span-11 w-full">
        {children}
      </div>
    </section>
  );
}
