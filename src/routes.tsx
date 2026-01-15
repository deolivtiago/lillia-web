import type { JSX } from "react"

import { Home } from "@/pages/home"

export type AppRoute = {
  label: string
  path: string
  element: JSX.Element
}

export const routes: AppRoute[] = [
  { label: "Home", path: "/", element: <Home /> },
]
