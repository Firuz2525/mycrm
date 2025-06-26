import Header from "../components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js + Tailwind Starter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark:bg-gray-600">
      <body className="text-gray-900">
        <Header />
        <Toaster richColors />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
