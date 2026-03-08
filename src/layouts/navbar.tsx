import { Link } from "react-router"

import { UserCircleIcon } from "@phosphor-icons/react"

import { Logo } from "@/components/logo"
import { ThemeToggler } from "@/components/theme-toggler"
import { Button } from "@/components/ui/button"

import { AppRoutes } from "@/config/app-routes"

export function Navbar() {
  return (
    <nav className="container flex items-center justify-between gap-2 p-2">
      <Logo />
      <div className="flex gap-4">
        <ThemeToggler />

        <Button variant="ghost" render={<Link to={AppRoutes.SignUp.path} />} nativeButton={false}>
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
