import { Shield } from "lucide-react";
import Link from "next/link";
import { footerLinks } from "./footer-links";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <div className="flex justify-center">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6" />
            <span className="font-bold">MuSig.</span>
          </Link>
        </div>
        <nav
          className="mt-8 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {footerLinks.map((link) => (
            <div key={link.href} className="pb-6">
              <Link href={link.href} className="text-sm leading-6">
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-xs leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} Mu Sigma Chapter of Kappa Alpha Psi
          Fraternity, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}