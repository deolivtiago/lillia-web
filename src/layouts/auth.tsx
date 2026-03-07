import { Outlet } from "react-router"

import { Toaster } from "@/components/ui/sonner"

import { Navbar } from "@/layouts/navbar"

export function Auth() {
  return (
    <div className="bg-background flex min-h-dvh w-screen flex-col items-center justify-between scroll-smooth">
      <header className="bg-sidebar sticky top-0 z-10 flex max-h-16 w-full flex-row items-center justify-center gap-4 border-b px-4 shadow">
        <Navbar />
      </header>
      <Toaster position="top-right" />

      <main className="flex w-full flex-1 flex-col items-center justify-center overflow-auto">
        <Outlet />
      </main>

      <footer className="bg-background text-muted-foreground w-full text-center text-xs font-thin">
        © 2025 Clarx Labs. All rights reserved.
      </footer>
    </div>
  )
}
