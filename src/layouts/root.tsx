import { Link, Outlet } from "react-router"

import { Logo } from "@/components/logo"
import { ThemeToggler } from "@/components/theme-toggler"
import { Button } from "@/components/ui/button"
import { AppRoutes } from "@/config/app-routes"
import { CircleUserRound } from "lucide-react"

export function Root() {
  return (
    <div className="bg-background flex h-screen w-screen flex-col items-center justify-between scroll-smooth">
      <header className="bg-sidebar flex w-full items-center justify-center px-4 py-2 shadow">
        <div className="flex w-full max-w-480 items-center justify-between space-x-2">
          <nav className="flex w-full items-center justify-between space-x-4">
            <Logo />
            <div className="flex items-center justify-center space-x-5">
              <ThemeToggler />

              <Button
                variant="ghost"
                render={<Link to={AppRoutes.SignUp.path} />}
                nativeButton={false}
              >
                <span className="font-normal">Sign up</span>
              </Button>

              <Button
                variant="outline"
                className="rounded-lg"
                render={<Link to={AppRoutes.SignIn.path} />}
                nativeButton={false}
              >
                <CircleUserRound />
                <span className="font-medium">Sign in</span>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex h-full w-full flex-col items-center justify-start">
        <Outlet />
      </main>

      <footer className="flex w-full items-center justify-center p-2">
        <p className="text-muted-foreground font-sans text-xs font-thin">
          &copy; 2025 Clarx Labs. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
