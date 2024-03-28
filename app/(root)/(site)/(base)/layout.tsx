import LeftSideBar from "@/components/shared/LeftSideBar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <section className="w-full grid grid-cols-12">
      <LeftSideBar />
      <div className="col-span-11 w-full">
        {children}
      </div>
    </section>
  );
}
