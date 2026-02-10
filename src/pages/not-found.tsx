import { Link } from "react-router"

import { Button } from "@/components/ui/button"

import { AppRoutes } from "@/config/app-routes"

export function NotFound() {
  return (
    <div className="bg-background flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="font-serif text-3xl font-bold">404</h1>
      <p className="pb-4 text-xl">Page not found</p>
      <Button
        variant="outline"
        nativeButton={false}
        render={<Link to={AppRoutes.Home.path} />}
      >
        Go back
      </Button>
    </div>
  )
}
