import { createBrowserRouter, RouterProvider } from "react-router"

import { ThemeProvider } from "@/components/theme-provider"

import { Root } from "@/layouts/root"
import { Home } from "@/pages/home"
import { NotFound } from "@/pages/not-found"

import { AppRoutes } from "@/config/app-routes"

const router = createBrowserRouter([
  {
    path: AppRoutes.Home.path,
    Component: Root,
    errorElement: <NotFound />,
    children: [{ index: true, Component: Home }],
  },
])

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
