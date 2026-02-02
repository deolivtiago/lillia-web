import { HttpApiEndpoint, HttpApiGroup } from "@effect/platform"
import { NoContent } from "@effect/platform/HttpApiSchema"
import { Schema } from "effect"

import {
  AuthChangeEmailInput,
  AuthChangePasswordInput,
  AuthRefreshTokenInput,
  AuthResetPasswordInput,
  AuthSignInInput,
  AuthSignOutInput,
  AuthSignUpInput,
  UserConfirmAccountInput,
} from "@/services/datasources/main-api/inputs"
import { TokensOutput, UserOutput } from "@/services/datasources/main-api/outputs"

export class AuthAPIGroup extends HttpApiGroup.make("auth")
  .add(
    HttpApiEndpoint.post("signIn", "/sign-in")
      .setPayload(AuthSignInInput)
      .addSuccess(TokensOutput, { status: 200 })
  )
  .add(
    HttpApiEndpoint.post("signUp", "/sign-up")
      .setPayload(AuthSignUpInput)
      .addSuccess(UserOutput, { status: 201 })
  )
  .add(
    HttpApiEndpoint.del("signOut", "/sign-out")
      .setPayload(AuthSignOutInput)
      .addSuccess(NoContent, { status: 204 })
  )
  .add(
    HttpApiEndpoint.post("refreshToken", "/refresh-token")
      .setPayload(AuthRefreshTokenInput)
      .addSuccess(TokensOutput, { status: 200 })
  )
  .add(
    HttpApiEndpoint.get("sendCode", "/send-code")
      .setUrlParams(Schema.Struct({ email: Schema.NonEmptyTrimmedString }))
      .addSuccess(NoContent, { status: 204 })
  )
  .add(
    HttpApiEndpoint.post("confirmAccount", "/confirm-account")
      .setPayload(UserConfirmAccountInput)
      .addSuccess(UserOutput, { status: 200 })
  )
  .add(
    HttpApiEndpoint.post("changeEmail", "/change-email")
      .setPayload(AuthChangeEmailInput)
      .addSuccess(UserOutput, { status: 200 })
  )
  .add(
    HttpApiEndpoint.post("changePassword", "/change-password")
      .setPayload(AuthChangePasswordInput)
      .addSuccess(UserOutput, { status: 200 })
  )
  .add(
    HttpApiEndpoint.post("resetPassword", "/reset-password")
      .setPayload(AuthResetPasswordInput)
      .addSuccess(UserOutput, { status: 200 })
  )
  .prefix("/auth") {}
