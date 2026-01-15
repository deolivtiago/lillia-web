import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ThemeProvider } from "@/components/theme-provider"
import { MainLayout } from "@/layouts/main-layout"
import { routes, type AppRoute } from "@/routes"
import { NotFound } from "./pages/not-found"

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            {routes.map((route: AppRoute) => (
              <Route
                path={route.path}
                element={route.element}
                aria-label={route.label.toLowerCase()}
              />
            ))}
            <Route
              path="*"
              element={<NotFound />}
              aria-label="page not found"
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
