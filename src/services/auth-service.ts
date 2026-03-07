import { Effect } from "effect"

import { MainAPIClient } from "@/lib/api-client"

export type UserCredentials = {
  email: string
  password: string
}

export type AuthResponse = SignInData | SignInErrors

export type SignInData = {
  data: { accessToken: string; refreshToken: string }
}

export type SignInErrors = {
  errors: { [key: string]: string[] }
}

type SignInPayload = {
  email: string
  password: string
}

type SignInResponse = {
  data: {
    access_token: string
    refresh_token: string
  }
}

type SignInResult = {
  accessToken: string
  refreshToken: string
}

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
