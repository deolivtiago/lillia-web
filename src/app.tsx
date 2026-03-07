import { createBrowserRouter, RouterProvider } from "react-router"

import { AuthProvider } from "@/providers/auth-provider"
import { ThemeProvider } from "@/providers/theme-provider"

import { Auth } from "@/layouts/auth"
import { Root } from "@/layouts/root"

import { PrivacyPolicy } from "@/pages/auth/privacy-policy"
import { SignIn } from "@/pages/auth/sign-in"
import { SignUp } from "@/pages/auth/sign-up"
import { TermsOfUse } from "@/pages/auth/terms-of-use"
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
      { path: AppRoutes.SignUp.path, Component: SignUp },
    ],
  },
  {
    path: AppRoutes.Home.path,
    Component: Root,
    errorElement: <NotFound />,
    children: [{ index: true, Component: Home }],
  },
  { path: AppRoutes.TermsOfUse.path, Component: TermsOfUse },
  { path: AppRoutes.PrivacyPolicy.path, Component: PrivacyPolicy },
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
