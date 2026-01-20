import { Link } from "react-router"

import { Button } from "@/components/ui/button"

import { AppRoutes } from "@/config/app-routes"

export function NotFound() {
  return (
    <div className="bg-background flex h-screen w-screen flex-col items-center justify-center space-y-4">
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-semibold">404</p>
        <h1 className="text-xl">Page not found</h1>
      </div>
      <Button
        variant="outline"
        className="rounded-lg"
        render={<Link to={AppRoutes.Home.path} />}
        nativeButton={false}
      >
        Go back
      </Button>
    </div>
  )
}
