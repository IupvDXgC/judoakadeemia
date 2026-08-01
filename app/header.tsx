"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

const links = [
  { href: "/#about", label: "Meist" },
  { href: "/join-us", label: "Liikmetaotlus" },
  { href: "/#contact", label: "Meie tiim" },
  { href: "/groups", label: "Treeningrühmad" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-10 border-b border-brand/20 bg-white/90 backdrop-blur">
      <nav className="relative mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/#home"
          className="text-lg font-bold tracking-tight text-brand"
          onClick={() => setOpen(false)}
        >
          Judoakadeemia
        </Link>

        <ul className="hidden gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-zinc-600 hover:text-brand">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded text-brand hover:bg-brand/10 md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Sulge menüü" : "Ava menüü"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        {open ? (
          <ul
            id={menuId}
            className="absolute inset-x-0 top-full border-b border-brand/20 bg-white px-6 py-3 shadow-sm md:hidden"
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-medium text-zinc-600 hover:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
    </header>
  );
}
