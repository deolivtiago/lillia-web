import { Schema } from "effect"

export class User extends Schema.Class<User>("User")({
  id: Schema.UUID,
  fullName: Schema.String,
  email: Schema.NonEmptyTrimmedString,
  isVerified: Schema.Boolean,
}) {}

export class Tokens extends Schema.Class<Tokens>("Tokens")({
  accessToken: Schema.String,
  refreshToken: Schema.String,
}) {}

export class UserListOutput extends Schema.Class<UserListOutput>("UserListOutput")({
  data: Schema.Array(User),
}) {}

export class UserOutput extends Schema.Class<UserOutput>("UserOutput")({
  data: User,
}) {}

export class TokensOutput extends Schema.Class<TokensOutput>("TokensOutput")({
  data: Tokens,
}) {}
