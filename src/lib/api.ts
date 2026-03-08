import { HttpApi, HttpApiEndpoint, HttpApiGroup } from "@effect/platform"
import { Schema } from "effect"

export const UserId = Schema.Number.pipe(Schema.brand("UserId"))
export type UserId = typeof UserId.Type

export const UserIdFromString = Schema.NumberFromString.pipe(
  Schema.compose(UserId)
)

export class User extends Schema.Class<User>("User")({
  id: UserId,
  email: Schema.NonEmptyTrimmedString,
  isVerified: Schema.Boolean,
}) {}

export class UserNotFound extends Schema.TaggedError<UserNotFound>()(
  "UserNotFound",
  {
    id: Schema.Number,
  }
) {}

export class UsersApiGroup extends HttpApiGroup.make("users")
  .add(
    HttpApiEndpoint.get("getAllUsers", "/users").addSuccess(Schema.Array(User))
  )
  .add(
    HttpApiEndpoint.get("getUserById", "/users/:id")
      .addSuccess(User)
      .addError(UserNotFound, { status: 404 })
      .setPath(Schema.Struct({ id: UserIdFromString }))
  )
  .add(
    HttpApiEndpoint.post("createUser", "/users")
      .addSuccess(User)
      .setPayload(Schema.Struct({ email: Schema.NonEmptyTrimmedString }))
  )
  .add(
    HttpApiEndpoint.patch("completeUser", "/users/:id")
      .addSuccess(User)
      .addError(UserNotFound, { status: 404 })
      .setPath(Schema.Struct({ id: UserIdFromString }))
  )
  .add(
    HttpApiEndpoint.del("removeUser", "/users/:id")
      .addSuccess(Schema.Void)
      .addError(UserNotFound, { status: 404 })
      .setPath(Schema.Struct({ id: UserIdFromString }))
  ) {}

export class UsersApi extends HttpApi.make("api").add(UsersApiGroup) {}
