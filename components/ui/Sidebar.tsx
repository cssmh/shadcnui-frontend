"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/posts", label: "Posts (Stage 1)" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 0.25 }}
      className="h-full w-60 shrink-0 border-r bg-background/60"
    >
      <div className="p-4">
        <div className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground">
          ZettaByte
        </div>
        <nav className="space-y-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                  active && "bg-accent text-accent-foreground"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.aside>
  );
}
