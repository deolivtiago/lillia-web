import { Effect } from "effect"

import { getUsers } from "@/lib/api"
import { MainAPIClient } from "@/lib/api-client"

export async function listUsers() {
  return Effect.runPromise(getUsers)
}

export async function getUser(id: string) {
  return Effect.runPromise(
    MainAPIClient.pipe(
      Effect.andThen((http) => http.getUserById(id)),
      Effect.andThen(({ data }) => Effect.succeed(data)),
      Effect.provide(MainAPIClient.Default)
    )
  )
}

export async function signIn(email: string, password: string) {
  return Effect.runPromise(
    MainAPIClient.pipe(
      Effect.andThen((http) => http.signIn({ email, password })),
      Effect.andThen(({ data }) => Effect.succeed(data)),
      Effect.provide(MainAPIClient.Default)
    )
  )
}
