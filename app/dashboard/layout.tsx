import { Header } from "@/components/Header";
import { Sidebar } from "@/components/ui/Sidebar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex min-w-0 grow flex-col">
          <Header />
          <main className="mx-auto w-full max-w-7xl grow px-4 py-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
