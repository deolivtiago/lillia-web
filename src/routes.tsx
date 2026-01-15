import type { JSX } from "react"

import { About } from "@/pages/about"
import { Home } from "@/pages/home"
import { SignIn } from "@/pages/sign-in"

export type AppRoute = {
  label: string
  path: string
  element: JSX.Element
}

export const routes: AppRoute[] = [
  { label: "Home", path: "/", element: <Home /> },
  { label: "Sign In", path: "/sign-in", element: <SignIn /> },
  { label: "About Us", path: "/about-us", element: <About /> },
]
