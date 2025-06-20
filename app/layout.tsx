import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Next.js + Tailwind Starter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-white shadow p-4 text-xl font-bold">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline mx-2">About</a>
          <a href="/products" className="hover:underline">Products</a>
        </header>
        <main className="p-6">{children}</main>
        <footer className="bg-white shadow p-4 mt-10 text-center text-sm">
          © 2025 My App
        </footer>
      </body>
    </html>
  );
}
