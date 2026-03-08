export type AppRoute = { path: string; label: string }
export type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes]

export const AppRoutes = {
  Home: { path: "/", label: "Home" },
} as const
