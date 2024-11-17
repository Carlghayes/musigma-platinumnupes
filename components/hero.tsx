import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="hero-pattern absolute inset-0 opacity-10" />
      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="absolute -top-48 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl">
              <div
                className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff8080] to-[#dc143c] opacity-30"
                style={{
                  clipPath:
                    'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                }}
              />
            </div>
            <h1 className="text-6xl font-bold tracking-tight sm:text-7xl">
              Alpha Beta Gamma
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Building Leaders, Creating Bonds, Serving Community
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="text-lg" asChild>
                <Link href="/history">Our History</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg" asChild>
                <Link href="/calendar">Upcoming Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}