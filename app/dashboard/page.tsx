"use client";

import { useFetch } from "@/hooks/useFetch";
import { User, UserCard } from "@/components/UserCard";
import { CardList } from "@/components/ui/CardList";

export default function DashboardPage() {
  const { data, loading, error, refetch } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Dashboard (Stage 2)
          </h1>
          <p className="text-sm text-muted-foreground">
            Sidebar + Header + Content with reusable components, custom hook,
            and animation.
          </p>
        </div>
        <button
          onClick={refetch}
          className="inline-flex h-9 items-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Refresh
        </button>
      </div>

      <CardList
        items={data ?? []}
        isLoading={loading}
        error={error}
        renderItem={(u) => <UserCard user={u} />}
      />
    </div>
  );
}
