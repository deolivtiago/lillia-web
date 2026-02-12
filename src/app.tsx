import { createBrowserRouter, RouterProvider } from "react-router"

import { AuthProvider } from "@/providers/auth-provider"
import { ThemeProvider } from "@/providers/theme-provider"

import { Auth } from "@/layouts/auth"
import { Root } from "@/layouts/root"

import { SignIn } from "@/pages/auth/sign-in"
import { Home } from "@/pages/home"
import { NotFound } from "@/pages/not-found"

import { AppRoutes } from "@/config/app-routes"
import { AppStorage } from "@/config/app-storage"

const router = createBrowserRouter([
  {
    path: AppRoutes.Auth.path,
    Component: Auth,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: NotFound },
      { path: AppRoutes.SignIn.path, Component: SignIn },
    ],
  },
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
