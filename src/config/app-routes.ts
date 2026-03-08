export type AppRoute = { path: string; label: string }
export type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes]

export const AppRoutes = {
  Home: { path: "/", label: "Home" },

  SignIn: { path: "/auth/sign-in", label: "Sign In" },
  SignUp: { path: "/auth/sign-up", label: "Sign Up" },
} as const
