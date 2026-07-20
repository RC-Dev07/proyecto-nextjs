"use client";

import {
  IconHome,
  IconInfoCircle,
  IconMenu2,
  IconShoppingBag,
  IconX,
  type Icon,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type MenuItem = {
  name: string;
  path: string;
  icon: Icon;
};

const menuItems: MenuItem[] = [
  {
    name: "Inicio",
    path: "/",
    icon: IconHome,
  },
  {
    name: "Productos",
    path: "/productos",
    icon: IconShoppingBag,
  },
  {
    name: "Sobre nosotros",
    path: "/about",
    icon: IconInfoCircle,
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClasses = (path: string) =>
    `flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200 ${
      pathname === path
        ? "bg-emerald-100 text-emerald-700 font-semibold"
        : "text-slate-300 hover:bg-slate-800 hover:text-emerald-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/">
          <img
            src="/logo/logo-1.png"
            alt="Logo"
            className="h-14 w-auto"
          />
        </Link>

        {/* Menú Desktop */}
        <ul className="hidden items-center gap-3 md:flex">
          {menuItems.map(({ name, path, icon: Icon }) => (
            <li key={path}>
              <Link href={path} className={getLinkClasses(path)}>
                <Icon size={20} />
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="rounded-lg p-2 text-white transition hover:bg-slate-800 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-700 bg-slate-900 md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {menuItems.map(({ name, path, icon: Icon }) => (
              <li key={path}>
                <Link
                  href={path}
                  className={getLinkClasses(path)}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={20} />
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}