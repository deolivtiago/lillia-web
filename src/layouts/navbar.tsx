import { Link } from "react-router"

import { UserCircleIcon } from "@phosphor-icons/react"

import { Logo } from "@/components/logo"
import { ThemeToggler } from "@/components/theme-toggler"
import { Button } from "@/components/ui/button"

import { AppRoutes } from "@/config/app-routes"

import { cn } from "@/lib/utils"

export function Navbar({ className, children }: React.ComponentProps<"nav">) {
  return (
    <nav
      className={cn(
        "container flex w-full items-center justify-between gap-4 px-4 py-2",
        className
      )}
    >
      <Logo />

      {children}

      <div className="flex gap-4">
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
          <UserCircleIcon />
          <span className="font-medium">Sign in</span>
        </Button>
      </div>
    </nav>
  )
}
