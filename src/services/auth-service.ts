import { AuthSignInInput, AuthSignUpInput } from "@/services/datasources/main-api/inputs"
import { handleResponseOf, withMainAPIClient } from "@/services/datasources/runtime"

const signIn = (payload: typeof AuthSignInInput.Type) =>
  withMainAPIClient(({ auth }) => handleResponseOf(auth.signIn({ payload })))

const signUp = (payload: typeof AuthSignUpInput.Type) =>
  withMainAPIClient(({ auth }) => handleResponseOf(auth.signUp({ payload })))

export const AuthService = { signIn, signUp } as const
