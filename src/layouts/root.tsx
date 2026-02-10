import { Link, Outlet } from "react-router"

import { AppRoutes } from "@/config/app-routes"

export function Root() {
  return (
    <div className="bg-background flex h-screen w-screen flex-col items-center justify-between scroll-smooth">
      <header className="bg-sidebar flex w-full items-center justify-center shadow">
        <nav className="flex max-w-7xl items-center justify-center space-x-2 p-2">
          <Link to={AppRoutes.Home.path}>
            <span className="font-serif text-2xl font-semibold opacity-80 hover:opacity-100">
              lillia
            </span>
          </Link>
        </nav>
      </header>

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
