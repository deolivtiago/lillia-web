export type AppRoute = { path: string; label: string }
export type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes]

export const AppRoutes = {
  Home: { label: "Home", path: "/" },

  SignIn: { path: "/auth/sign-in", label: "Sign In" },
  SignUp: { path: "/auth/sign-up", label: "Sign Up" },

  items: function (): AppRoute[] {
    return Object.values(this).filter((it) => typeof it !== "function")
  },
} as const
