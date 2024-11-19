import { Shield } from "lucide-react";
import Link from "next/link";

export default function Footer() {
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
          <div className="pb-6">
            <Link href="/executive-board" className="text-sm leading-6">
              Executive Board
            </Link>
          </div>
          <div className="pb-6">
            <Link href="/history" className="text-sm leading-6">
              History
            </Link>
          </div>
          <div className="pb-6">
            <Link href="/lineage" className="text-sm leading-6">
              Lineage
            </Link>
          </div>
          <div className="pb-6">
            <Link href="/calendar" className="text-sm leading-6">
              Calendar
            </Link>
          </div>
        </nav>
        <p className="mt-8 text-center text-xs leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} Mu Sigma Chapter of Kappa Alpha Psi Fraternity, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}