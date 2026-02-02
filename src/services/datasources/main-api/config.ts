import { Config, Effect } from "effect"

export class MainAPIConfig extends Effect.Service<MainAPIConfig>()("MainAPIConfig", {
  effect: Config.all({
    baseUrl: Config.string("MAIN_API_BASE_URL").pipe(Config.withDefault("http://localhost:4000")),
  }),
}) {}

export type APIRoute = { endpoint: string }
export type APIRoutes = (typeof APIRoutes)[keyof typeof APIRoutes]

const APIRoutes = {
  SignIn: { endpoint: "/api/auth/sign-in" },
  SignUp: { endpoint: "/api/auth/sign-up" },
  SignOut: { endpoint: "/api/auth/sign-out" },
  SendCode: { endpoint: "/api/auth/send-code" },
  ConfirmAccount: { endpoint: "/api/auth/confirm-account" },
  RefreshToken: { endpoint: "/api/auth/refresh-token" },
  ResetPassword: { endpoint: "/api/auth/reset-password" },
  ChangeEmail: { endpoint: "/api/auth/change-email" },
  ChangePassword: { endpoint: "/api/auth/change-password" },
  UserInfo: { endpoint: "/api/auth/user-info" },

  Users: { endpoint: "/api/users" },
  Roles: { endpoint: "/api/roles" },
} as const

export async function urlOf(route: APIRoute): Promise<string> {
  return MainAPIConfig.pipe(
    Effect.flatMap(({ baseUrl }) => Effect.succeed(baseUrl.concat(route.endpoint))),
    Effect.provide(MainAPIConfig.Default),
    Effect.runPromise
  )
}
