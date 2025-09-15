import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 dark:from-[#232946] dark:via-[#1a1a2e] dark:to-[#0f3460]">
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">
        Welcome to ZettaByte
      </h1>
      <nav className="flex flex-col gap-4 w-full max-w-xs">
        <Link
          href="/dashboard"
          className="block w-full text-center py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg hover:scale-105 transition-transform"
        >
          Dashboard
        </Link>
        <Link
          href="/posts"
          className="block w-full text-center py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-pink-400 to-yellow-400 text-white shadow-lg hover:scale-105 transition-transform"
        >
          Posts
        </Link>
      </nav>
    </main>
  );
}
