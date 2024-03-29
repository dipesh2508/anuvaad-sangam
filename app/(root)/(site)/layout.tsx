import NavBar from "@/components/shared/NavBar";
import { fetchUser } from "@/lib/actions/user.actions";
import { ClerkProvider } from "@clerk/nextjs";
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

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  
  return (
    <ClerkProvider>
      <NavBar />
      {children}
    </ClerkProvider>
  );
}
