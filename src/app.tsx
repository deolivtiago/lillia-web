import { createBrowserRouter, RouterProvider } from "react-router"

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
  return <RouterProvider router={router} />
}
