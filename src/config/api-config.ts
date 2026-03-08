export type APIEndpoint = { path: string; label: string }
export type APIEndpoints = (typeof APIEndpoints)[keyof typeof APIEndpoints]

export const APIEndpoints = {
  SignIn: { path: "/api/auth/sign-in" },
  SignUp: { path: "/api/auth/sign-up" },
  SignOut: { path: "/api/auth/sign-out" },
  SendCode: { path: "/api/auth/send-code" },
  ConfirmAccount: { path: "/api/auth/confirm-account" },
  RefreshToken: { path: "/api/auth/refresh-token" },
  ResetPassword: { path: "/api/auth/reset-password" },
  ChangeEmail: { path: "/api/auth/change-email" },
  ChangePassword: { path: "/api/auth/change-password" },
  UserInfo: { path: "/api/auth/user-info" },
  Users: { path: "/api/users" },
  Roles: { path: "/api/roles" },
} as const

export function baseUrl(): string {
  return `http://localhost:4000`
}

export function urlOf(endpoint: APIEndpoints): string {
  return `${baseUrl()}${endpoint.path}`
}
