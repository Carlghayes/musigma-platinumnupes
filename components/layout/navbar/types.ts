"use client";

export interface NavMenuItem {
  href: string;
  label: string;
  external?: boolean;
}

export interface NavMenuProps {
  label: string;
  items: NavMenuItem[];
}

export type NavRoute = 
  | { href: string; label: string }
  | { label: string; items: NavMenuItem[] };