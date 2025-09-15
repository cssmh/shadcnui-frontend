"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header({ className }: { className?: string }) {
  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
      className={cn(
        "sticky top-0 z-40 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="size-2 rounded-full bg-primary" />
          <span className="text-sm font-medium text-muted-foreground">ZettaByte Test</span>
        </div>
        <div className="text-sm text-muted-foreground">MD MOMIN HOSSAIN</div>
      </div>
    </motion.header>
  );
}