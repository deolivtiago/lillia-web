export type APIEndpoint = { path: string; label: string }
export type APIEndpoints = (typeof APIEndpoints)[keyof typeof APIEndpoints]

export const APIEndpoints = {
  SignIn: { path: "/auth/sign-in", label: "Sign In" },
  SignUp: { path: "/auth/sign-up", label: "Sign Up" },
} as const

export function baseUrl(): string {
  return `http://localhost:4000`
}

export function urlOf(endpoint: APIEndpoints): string {
  return `${baseUrl()}${endpoint.path}`
}
