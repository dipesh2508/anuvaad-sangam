import { ClerkProvider, currentUser } from "@clerk/nextjs";
import "../globals.css";
import { Montserrat } from "next/font/google";
import PublicNavBar from "@/components/shared/PublicNavBar";
import PublicFooter from "@/components/shared/PublicFooter";
import { redirect } from "next/navigation";


export const metadata = {
  title: "Anuvaad Sangam",
  description: "Anuvaad Sangam is a cross language chat application that allows you to chat with anyone in any language. It uses the power of AI to translate your messages in real time.",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  if(user){
    redirect("/recents");
  }
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${montserrat.className} bg-dark-1`}>
          <main className="flex min-h-screen w-full items-center justify-center">
            <section className="flex w-full flex-grow flex-col items-center bg-light-4">
              <PublicNavBar />
              {children}
            </section>
          </main>
          <PublicFooter />
        </body>
      </html>
    </ClerkProvider>
  );
}
