import { Schema } from "effect"

import { RegExpUtils } from "@/lib/utils"

const NonBlankString = Schema.NonEmptyTrimmedString.annotations({
  message: () => "can't be blank",
})

const ValidEmail = NonBlankString.pipe(
  Schema.minLength(3, { message: () => "must be at least 3 character(s)" }),
  Schema.maxLength(128, { message: () => "must be at most 128 character(s)" }),
  Schema.pattern(RegExpUtils.email, { message: () => "has invalid format" })
)

const ValidPassword = NonBlankString.pipe(
  Schema.minLength(6, { message: () => "should be at least 6 character(s)" }),
  Schema.maxLength(72, { message: () => "should be at most 72 character(s)" }),
  Schema.pattern(RegExpUtils.password, {
    message: () => "must have number(s), uppercase, lowercase, and special character(s)",
  })
)

const ValidFullName = NonBlankString.pipe(
  Schema.minLength(3, { message: () => "should be at least 3 character(s)" }),
  Schema.maxLength(255, { message: () => "should be at most 255 character(s)" })
)

const ValidRoleId = NonBlankString.pipe(
  Schema.pattern(RegExpUtils.role, { message: () => "has invalid format" })
)

const ValidPermission = NonBlankString.pipe(
  Schema.pattern(RegExpUtils.permission, { message: () => "has invalid format" })
)

const ValidVerificationCode = NonBlankString.pipe(
  Schema.length(6, { message: () => "should be 6 character(s)" })
)

export const AuthSignUpInput = Schema.Struct({
  id: Schema.optional(Schema.UUID),
  fullName: ValidFullName,
  email: ValidEmail,
  password: ValidPassword,
})

export const AuthSignInInput = Schema.Struct({
  email: ValidEmail,
  password: ValidPassword,
})

export const AuthSignOutInput = Schema.Struct({
  accessToken: Schema.optional(Schema.NonEmptyTrimmedString),
  refreshToken: Schema.optional(Schema.NonEmptyTrimmedString),
})

export const AuthRefreshTokenInput = Schema.Struct({
  refreshToken: Schema.NonEmptyTrimmedString,
})

export const UserConfirmAccountInput = Schema.Struct({
  email: ValidEmail,
  code: ValidVerificationCode,
})

export const AuthResetPasswordInput = Schema.Union(
  UserConfirmAccountInput,
  Schema.Struct({ newPassword: ValidPassword })
)

export const AuthChangeEmailInput = Schema.Struct({
  email: ValidEmail,
  password: NonBlankString,
  newEmail: ValidEmail,
})

export const AuthChangePasswordInput = Schema.Struct({
  email: ValidEmail,
  password: NonBlankString,
  newPassword: ValidPassword,
})

export const UserCreateInput = Schema.Struct({
  fullName: ValidFullName,
  isVerified: Schema.optional(Schema.Boolean),
  roleId: Schema.optional(ValidRoleId),
  email: ValidEmail,
  password: ValidPassword,
})

export const UserUpdateInput = Schema.Struct({
  fullName: ValidFullName,
  isVerified: Schema.optional(Schema.Boolean),
  roleId: Schema.optional(ValidRoleId),
  email: ValidEmail,
})

export const RoleCreateInput = Schema.Struct({
  id: ValidRoleId,
  permissions: Schema.Array(ValidPermission),
})
