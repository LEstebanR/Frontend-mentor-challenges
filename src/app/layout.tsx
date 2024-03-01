import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import BreadCrumb from "@/components/breadcrumbs";
import clsx from "clsx";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor Challenges",
  description: "Frontend mentor challenges solutions by @LEstebanR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={clsx(inter.className)}>
        <BreadCrumb
          separator={<span>{"/"}</span>}
          containerClasses="flex py-2 "
          capitalizeLinks
        />
        <main className="flex w-full flex-col items-center gap-4 bg-bg">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
