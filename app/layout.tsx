import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor FAQs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} min-h-dvh bg-light-pink bg-[url('/images/background-pattern-mobile.svg')] lg:bg-[url('/images/background-pattern-desktop.svg')] bg-no-repeat bg-contain bg-top`}
      >
        <NextUIProvider className="min-h-dvh flex justify-center items-center">
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
