import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({ subsets: ["latin"] });

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anuvaad Sangam",
  description: "A Cross Language Chat Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${raleway.className}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
