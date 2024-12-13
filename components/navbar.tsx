"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Shield } from "lucide-react";

const routes = [
  { href: "/", label: "Home" },
  { href: "/executive-board", label: "Executive Board" },
  { 
    href: "/history", 
    label: "History",
    subItems: [
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
                {route.subItems ? (
                  <>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-base font-medium",
                        pathname === route.href &&
                          "bg-primary text-primary-foreground"
                      )}
                    >
                      {route.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[300px]">
                        {route.subItems.map((subItem) => (
                          <li key={subItem.href}>
                            <NavigationMenuLink asChild>
                              {subItem.external ? (
                                <a
                                  href={subItem.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subItem.label}
                                  </div>
                                </a>
                              ) : (
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subItem.label}
                                  </div>
                                </Link>
                              )}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
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
                )}
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
            <Link href="https://dev-app.platinumnupes.com">Members Only</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}