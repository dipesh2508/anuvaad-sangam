import SettingSideBar from "@/components/shared/SettingSideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row">
        <SettingSideBar />
        {children}

    </div>
  );
}
