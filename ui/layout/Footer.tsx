"use client";

import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-10 text-center sm:grid-cols-2 lg:grid-cols-3 lg:text-left">
        {/* Información */}
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <img src="/logo/logo-1.png" alt="Logo" className="h-16 w-auto" />

          <p className="max-w-xs text-sm leading-6 text-slate-400">
            Encuentra los mejores productos con la mejor calidad y al mejor
            precio.
          </p>

          <span className="text-xs text-slate-500">
            © {currentYear} Todos los derechos reservados.
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 lg:items-start">
          <h3 className="text-lg font-semibold text-white">Navegación</h3>

          <nav className="flex flex-col gap-3">
            <Link href="/" className="transition-colors hover:text-emerald-400">
              Inicio
            </Link>

            <Link
              href="/productos"
              className="transition-colors hover:text-emerald-400"
            >
              Productos
            </Link>

            <Link
              href="/about"
              className="transition-colors hover:text-emerald-400"
            >
              Sobre nosotros
            </Link>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-4 lg:items-start">
          <h3 className="text-lg font-semibold text-white">Síguenos</h3>

          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-slate-800 p-3 transition-all duration-200 hover:-translate-y-1 hover:bg-emerald-600 hover:text-white"
            >
              <IconBrandFacebook size={22} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-slate-800 p-3 transition-all duration-200 hover:-translate-y-1 hover:bg-emerald-600 hover:text-white"
            >
              <IconBrandInstagram size={22} />
            </a>

            <a
              href="https://github.com/RC-Dev07"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-slate-800 p-3 transition-all duration-200 hover:-translate-y-1 hover:bg-emerald-600 hover:text-white"
            >
              <IconBrandGithub size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
