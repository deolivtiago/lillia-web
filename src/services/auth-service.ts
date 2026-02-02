import type { Either } from "fp-ts/lib/Either"

import { post, type HttpError } from "@/lib/api-client"

import { APIRoutes } from "@/config/api-routes"

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

export async function doSignIn(
  credentials: UserCredentials
): Promise<Either<HttpError, AuthResponse>> {
  return post<AuthResponse>(APIRoutes.SignIn.endpoint, credentials)
}
