import {
  FetchHttpClient,
  HttpApi,
  HttpApiClient,
  HttpApiEndpoint,
  HttpApiError,
  HttpApiGroup,
} from "@effect/platform"
import { Console, Effect, Schema } from "effect"

export const User = Schema.Struct({
  id: Schema.NonEmptyTrimmedString,
  email: Schema.NonEmptyTrimmedString,
  isVerified: Schema.Boolean,
})

export type User = Schema.Schema.Type<typeof User>

export class UserNotFound extends Schema.TaggedError<UserNotFound>()(
  "UserNotFound",
  { id: Schema.NonEmptyTrimmedString }
) {}

const usersGroup = HttpApiGroup.make("users")
  .add(
    HttpApiEndpoint.get("getAllUsers", "/users")
      .addSuccess(Schema.Struct({ data: Schema.Array(User) }))
      .addError(HttpApiError.Unauthorized)
      .addError(HttpApiError.NotFound)
  )
  .add(
    HttpApiEndpoint.get("getUserById", "/users/:id")
      .addSuccess(User)
      .addError(UserNotFound, { status: 404 })
      .setPath(Schema.Struct({ id: Schema.NonEmptyTrimmedString }))
      .addError(HttpApiError.NotFound)
  )
  .add(
    HttpApiEndpoint.post("createUser", "/users")
      .addSuccess(User)
      .setPayload(Schema.Struct({ email: Schema.NonEmptyTrimmedString }))
      .addError(HttpApiError.NotFound)
  )
  .add(
    HttpApiEndpoint.patch("completeUser", "/users/:id")
      .addSuccess(User)
      .addError(UserNotFound, { status: 404 })
      .setPath(Schema.Struct({ id: Schema.NonEmptyTrimmedString }))
      .addError(HttpApiError.NotFound)
  )
  .add(
    HttpApiEndpoint.del("removeUser", "/users/:id")
      .addSuccess(Schema.Void)
      .addError(UserNotFound, { status: 404 })
      .setPath(Schema.Struct({ id: Schema.NonEmptyTrimmedString }))
      .addError(HttpApiError.NotFound)
  )

export const apiClient = HttpApiClient.make(
  HttpApi.make("api").add(usersGroup),
  { baseUrl: "http://localhost:4000/api" }
)

export const getUsers = apiClient.pipe(
  Effect.flatMap((api) => api.users.getAllUsers()),
  Effect.andThen(({ data }) => Effect.succeed(data)),
  Effect.tap(Console.debug),
  Effect.provide(FetchHttpClient.layer)
)
