import { Effect } from "effect"

import { MainAPIClient } from "@/lib/api-client"

export async function listUsers() {
  return Effect.runPromise(
    MainAPIClient.pipe(
      Effect.andThen((http) => http.getAllUsers()),
      Effect.provide(MainAPIClient.Default)
    )
  )
}

export async function getUser(id: number) {
  return Effect.runPromise(
    MainAPIClient.pipe(
      Effect.andThen((http) => http.getUserById(id)),
      Effect.provide(MainAPIClient.Default)
    )
  )
}
