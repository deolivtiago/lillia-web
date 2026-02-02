import { Schema } from "effect"

import { RegExpUtils } from "@/lib/utils"

export const AuthSignUpInput = Schema.Struct({
  id: Schema.optional(Schema.UUID),
  fullName: Schema.NonEmptyTrimmedString.pipe(Schema.length({ min: 3, max: 255 })),
  email: Schema.NonEmptyTrimmedString.pipe(
    Schema.length({ min: 3, max: 128 })
    // Schema.pattern(RegExpUtils.email)
  ),
  password: Schema.Redacted(
    Schema.NonEmptyTrimmedString.pipe(
      Schema.length({ min: 6, max: 72 })
      // Schema.pattern(RegExpUtils.password)
    )
  ),
})

export const AuthSignInInput = Schema.Struct({
  email: Schema.NonEmptyTrimmedString.pipe(Schema.pattern(RegExpUtils.email)),
  password: Schema.Redacted(Schema.NonEmptyTrimmedString),
})

export const AuthSignOutInput = Schema.Struct({
  accessToken: Schema.optional(Schema.NonEmptyTrimmedString),
  refreshToken: Schema.optional(Schema.NonEmptyTrimmedString),
})

export const AuthRefreshTokenInput = Schema.Struct({
  refreshToken: Schema.NonEmptyTrimmedString,
})

export const UserConfirmAccountInput = Schema.Struct({
  email: Schema.NonEmptyTrimmedString.pipe(Schema.pattern(RegExpUtils.email)),
  code: Schema.NonEmptyTrimmedString.pipe(Schema.length(6)),
})

export const AuthResetPasswordInput = Schema.Union(
  UserConfirmAccountInput,
  Schema.Struct({
    newPassword: Schema.Redacted(
      Schema.NonEmptyTrimmedString.pipe(
        Schema.length({ min: 6, max: 72 }),
        Schema.pattern(RegExpUtils.password)
      )
    ),
  })
)

export const AuthChangeEmailInput = Schema.Struct({
  email: Schema.NonEmptyTrimmedString.pipe(Schema.pattern(RegExpUtils.email)),
  password: Schema.Redacted(Schema.NonEmptyTrimmedString),
  newEmail: Schema.NonEmptyTrimmedString.pipe(
    Schema.length({ min: 3, max: 128 }),
    Schema.pattern(RegExpUtils.email)
  ),
})

export const AuthChangePasswordInput = Schema.Struct({
  email: Schema.NonEmptyTrimmedString.pipe(Schema.pattern(RegExpUtils.email)),
  password: Schema.Redacted(Schema.NonEmptyTrimmedString),
  newPassword: Schema.Redacted(
    Schema.NonEmptyTrimmedString.pipe(
      Schema.length({ min: 6, max: 72 }),
      Schema.pattern(RegExpUtils.password)
    )
  ),
})

export const UserCreateInput = Schema.Struct({
  fullName: Schema.NonEmptyTrimmedString.pipe(Schema.length({ min: 3, max: 255 })),
  isVerified: Schema.optional(Schema.Boolean),
  roleId: Schema.optional(Schema.NonEmptyTrimmedString),
  email: Schema.NonEmptyTrimmedString.pipe(
    Schema.length({ min: 3, max: 128 }),
    Schema.pattern(RegExpUtils.email)
  ),
  password: Schema.Redacted(
    Schema.NonEmptyTrimmedString.pipe(
      Schema.length({ min: 6, max: 72 }),
      Schema.pattern(RegExpUtils.password)
    )
  ),
})

export const UserUpdateInput = Schema.Struct({
  fullName: Schema.NonEmptyTrimmedString.pipe(Schema.length({ min: 3, max: 255 })),
  isVerified: Schema.optional(Schema.Boolean),
  roleId: Schema.optional(Schema.NonEmptyTrimmedString),
  email: Schema.NonEmptyTrimmedString.pipe(
    Schema.length({ min: 3, max: 128 }),
    Schema.pattern(RegExpUtils.email)
  ),
})
