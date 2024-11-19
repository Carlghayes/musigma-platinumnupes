"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Shield } from "lucide-react";

const routes = [
  { href: "/", label: "Home" },
  { href: "/executive-board", label: "Executive Board" },
  { href: "/history", label: "History" },
  { href: "/lineage", label: "Lineage" },
  { href: "/calendar", label: "Calendar" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">MuSig.</span>
        </Link>
        <NavigationMenu className="mx-6">
          <NavigationMenuList>
            {routes.map((route) => (
              <NavigationMenuItem key={route.href}>
                <Link href={route.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-base font-medium",
                      pathname === route.href &&
                        "bg-primary text-primary-foreground"
                    )}
                  >
                    {route.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto">
          <Button
            variant="default"
            size="lg"
            className="text-base font-medium"
            asChild
          >
            <Link href="https://members.abg-fraternity.org">Members Only</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}