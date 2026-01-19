export type AppRoute = { label: string; path: string }
export type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes]

export const AppRoutes = {
  Home: { label: "Home", path: "/" },
  About: { label: "About", path: "/about" },

  entries: function (): AppRoute[] {
    return Object.values(this).filter((it) => typeof it !== "function")
  },
} as const
