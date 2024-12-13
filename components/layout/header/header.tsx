"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";

interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="flex items-center justify-between p-4">
      {title && <h1 className="text-2xl font-bold">{title}</h1>}
      <ThemeToggle />
    </div>
  );
}