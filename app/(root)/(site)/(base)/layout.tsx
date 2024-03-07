import LeftSideBar from "@/components/shared/LeftSideBar";
import NavBar from "@/components/shared/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row">
      <LeftSideBar />
      <section className="flex min-h-screen flex-1 flex-col items-center px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
        {children}
      </section>
    </div>
  );
}
