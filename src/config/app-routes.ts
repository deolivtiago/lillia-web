export type AppRoute = { path: string; label: string }
export type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes]

export const AppRoutes = {
  Home: { path: "/", label: "Home" },
  Auth: { path: "/auth", label: "Auth" },

  SignIn: { path: "/auth/sign-in", label: "Sign In" },
  SignUp: { path: "/auth/sign-up", label: "Sign Up" },

  Terms: { path: "/auth/terms", label: "Terms of Service" },
  Privacy: { path: "/auth/privacy", label: "Privacy Policy" },

  items: function (): AppRoute[] {
    return Object.values(this).filter((it) => typeof it !== "function")
  },
} as const
