import { CircleUserRound } from "lucide-react"
import { Link } from "react-router"

import { Logo } from "@/components/logo"
import { ThemeToggler } from "@/components/theme-toggler"
import { Button } from "@/components/ui/button"

import { AppRoutes } from "@/config/app-routes"

export function Navbar() {
  return (
    <nav className="flex w-full max-w-480 items-center justify-between space-x-4 px-4 py-2">
      <Logo />
      <div className="flex items-center justify-center space-x-4">
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
  )
}
