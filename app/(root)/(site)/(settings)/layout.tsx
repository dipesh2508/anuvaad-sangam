import SettingSideBar from "@/components/shared/SettingSideBar";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row">
        <SettingSideBar />
        {children}
        <Toaster />
    </div>
  );
}
