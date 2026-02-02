import { createBrowserRouter, RouterProvider } from "react-router"

import { AuthProvider } from "@/providers/auth-provider"
import { ThemeProvider } from "@/providers/theme-provider"

import { Root } from "@/layouts/root"

import { Home } from "@/pages/home"
import { NotFound } from "@/pages/not-found"

import { AppRoutes } from "@/config/app-routes"
import { AppStorage } from "@/config/app-storage"

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
    <ThemeProvider defaultTheme="system" storageKey={AppStorage.Theme.key}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  )
}
