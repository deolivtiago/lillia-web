export type APIRoute = { endpoint: string }
export type APIRoutes = (typeof APIRoutes)[keyof typeof APIRoutes]

export const APIRoutes = {
  SignIn: { endpoint: "/api/auth/sign-in" },
  SignUp: { endpoint: "/api/auth/sign-up" },
  SignOut: { endpoint: "/api/auth/sign-out" },
  SendCode: { endpoint: "/api/auth/send-code" },
  ConfirmAccount: { endpoint: "/api/auth/confirm-account" },
  RefreshToken: { endpoint: "/api/auth/refresh-token" },
  ResetPassword: { endpoint: "/api/auth/reset-password" },
  ChangeEmail: { endpoint: "/api/auth/change-email" },
  ChangePassword: { endpoint: "/api/auth/change-password" },

  items: function (): APIRoute[] {
    return Object.values(this).filter((it) => typeof it !== "function")
  },

  baseUrl: function (): string {
    return "http://localhost:4000"
  },

  urlOf: function (route: APIRoute): string {
    return `${this.baseUrl()}${route.endpoint}`
  },
} as const
