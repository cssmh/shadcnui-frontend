/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CardList } from "@/components/ui/CardList";
import { Post, PostCard } from "@/components/ui/PostCard";
import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Failed with ${res.status}`);
        const data = (await res.json()) as Post[];
        setPosts(data);
      } catch (err: any) {
        if (err?.name !== "AbortError")
          setError(err?.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Posts (Stage 1)</h1>
        <p className="text-sm text-muted-foreground">
          Fetched from jsonplaceholder and displayed with Tailwind + Framer
          Motion fade-in.
        </p>
      </div>

      <CardList
        items={posts}
        isLoading={loading}
        error={error}
        renderItem={(p) => <PostCard post={p} />}
      />
    </div>
  );
}
