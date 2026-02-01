import { Outlet } from "react-router"

import { Toaster } from "@/components/ui/sonner"

import { Navbar } from "@/layouts/navbar"

export function Root() {
  return (
    <div className="bg-background flex h-screen w-screen flex-col items-center justify-between scroll-smooth">
      <header className="bg-sidebar flex w-full items-center justify-center shadow">
        <Navbar />
      </header>
      <Toaster position="top-right" />

      <main className="flex h-full w-full flex-col items-center justify-start">
        <Outlet />
      </main>

      <footer className="flex w-full items-center justify-center p-1">
        <p className="text-muted-foreground font-sans text-xs font-thin">
          &copy; 2025 Clarx Labs. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
