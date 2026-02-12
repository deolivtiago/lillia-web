export type AppRoute = { label: string; path: string }
export type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes]

export const AppRoutes = {
  Home: { path: "/", label: "Home" },
  Auth: { path: "/auth", label: "Auth" },

  SignIn: { path: "/auth/sign-in", label: "Sign In" },
  SignUp: { path: "/auth/sign-up", label: "Sign Up" },

  TermsOfUse: { path: "/auth/terms-of-use", label: "Terms of Use" },
  PrivacyPolicy: { path: "/auth/privacy-policy", label: "Privacy Policy" },

  items: function (): AppRoute[] {
    return Object.values(this).filter((it) => typeof it !== "function")
  },
} as const
