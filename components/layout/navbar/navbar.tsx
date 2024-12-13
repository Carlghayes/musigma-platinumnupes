"use client";

import { Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavLink } from "./nav-link";
import { NavMenu } from "./nav-menu";

const routes = [
  { href: "/", label: "Home" },
  { href: "/executive-board", label: "Executive Board" },
  { 
    label: "History",
    items: [
      {
        href: "/history",
        label: "Chapter History",
        external: false,
      },
      {
        href: "https://www.kappaalphapsi1911.com/history/",
        label: "National History",
        external: true,
      },
      {
        href: "https://southwesternprovince1911.org/history/",
        label: "Province History",
        external: true,
      }
    ]
  },
  { href: "/lineage", label: "Lineage" },
  { href: "/calendar", label: "Calendar" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">MuSig.</span>
        </Link>
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
          {routes.map((route) => 
            'items' in route ? (
              <NavMenu key={route.label} {...route} />
            ) : (
              <NavLink key={route.href} href={route.href}>
                {route.label}
              </NavLink>
            )
          )}
        </nav>
        <div className="ml-auto">
          <Button asChild>
            <Link href="https://members.abg-fraternity.org">
              Members Only
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}