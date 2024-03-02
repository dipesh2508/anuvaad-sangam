import NavBar from "@/components/shared/NavBar";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <NavBar />
      {children}
    </ClerkProvider>
  );
}
