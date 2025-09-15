"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

type CardListProps<T> = {
  items: T[];
  isLoading?: boolean;
  error?: string | null;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export function CardList<T>({
  items,
  isLoading,
  error,
  renderItem,
  className,
}: CardListProps<T>) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-40 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
        {error}
      </div>
    );
  }

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className={
        className ?? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      }
    >
      {items.map((itemData, index) => (
        <motion.li key={index} variants={item}>
          {renderItem(itemData, index)}
        </motion.li>
      ))}
    </motion.ul>
  );
}
