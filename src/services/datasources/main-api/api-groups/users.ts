import { HttpApiEndpoint, HttpApiGroup } from "@effect/platform"
import { Forbidden, Unauthorized } from "@effect/platform/HttpApiError"
import { NoContent } from "@effect/platform/HttpApiSchema"
import { Schema } from "effect"

import { UserCreateInput, UserUpdateInput } from "@/services/datasources/main-api/inputs"
import { UserListOutput, UserOutput } from "@/services/datasources/main-api/outputs"

export const UsersAPIGroup = HttpApiGroup.make("users")
  .add(HttpApiEndpoint.get("listUsers", "/").addSuccess(UserListOutput, { status: 200 }))
  .add(
    HttpApiEndpoint.get("getUser", "/:id")
      .setPath(Schema.Struct({ id: Schema.UUID }))
      .addSuccess(UserOutput, { status: 200 })
  )
  .add(
    HttpApiEndpoint.post("createUser", "/")
      .setPayload(UserCreateInput)
      .addSuccess(UserOutput, { status: 201 })
  )
  .add(
    HttpApiEndpoint.put("updateUser", "/:id")
      .setPath(Schema.Struct({ id: Schema.UUID }))
      .setPayload(UserUpdateInput)
      .addSuccess(UserOutput, { status: 200 })
  )
  .add(
    HttpApiEndpoint.del("deleteUser", "/:id")
      .setPath(Schema.Struct({ id: Schema.UUID }))
      .addSuccess(NoContent, { status: 204 })
  )
  .prefix("/users")
  .addError(Unauthorized, { status: 401 })
  .addError(Forbidden, { status: 403 })
