"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-yellow-500 font-semibold"
      : "text-gray-300 hover:text-yellow-500";

  return (
    <header className="flex space-x-6 p-4 bg-white dark:bg-gray-800 shadow">
      <Link href="/" className={linkClass("/")}>
        Home
      </Link>
      <Link href="/mangal" className={linkClass("/mangal")}>
        Mangal
      </Link>
      {/* <Link href="/pcb" className={linkClass('/pcb')}>
        Pcb
      </Link> */}
    </header>
  );
}
