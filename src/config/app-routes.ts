export type AppRoute = { path: string; label: string }
export type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes]

export const AppRoutes = {
  Home: { path: "/", label: "Home" },
  Auth: { path: "/auth", label: "Auth" },

  SignIn: { path: "/auth/sign-in", label: "Sign In" },
  SignUp: { path: "/auth/sign-up", label: "Sign Up" },

  PrivacyPolicy: { path: "/auth/policies", label: "Privacy Policy" },
  TermsOfUse: { path: "/auth/terms", label: "Terms of Use" },
} as const
