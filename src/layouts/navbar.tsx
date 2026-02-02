import { CircleUserRound } from "lucide-react"
import { Link } from "react-router"
import { toast } from "sonner"

import { Logo } from "@/components/logo"
import { ThemeToggler } from "@/components/theme-toggler"
import { Button } from "@/components/ui/button"

import { AppRoutes } from "@/config/app-routes"

export function Navbar() {
  return (
    <nav className="3xl:max-w-480 flex w-full items-center justify-between space-x-4 p-2 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-400">
      <Logo />
      <Button
        variant="outline"
        className="cursor-pointer"
        onClick={() =>
          toast("Event has been created", {
            description:
              "Sunday, December 03, 2023 at 9:00 AM Sunday, December 03, 2023 at 9:00 AM Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
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
