"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export function useFetch<T = unknown>(url: string, init?: RequestInit) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const controllerRef = useRef<AbortController | null>(null);

  const fetchData = useCallback(async () => {
    if (!url) return;
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    setState((s) => ({ ...s, loading: true, error: null }));

    try {
      const res = await fetch(url, {
        ...init,
        signal: controller.signal,
        // Disable Next.js fetch cache for test; change as needed
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const json = (await res.json()) as T;
      setState({ data: json, loading: false, error: null });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err?.name === "AbortError") return;
      setState({
        data: null,
        loading: false,
        error: err?.message ?? "Unknown error",
      });
    }
  }, [url, init]);

  useEffect(() => {
    fetchData();
    return () => controllerRef.current?.abort();
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { ...state, refetch };
}
