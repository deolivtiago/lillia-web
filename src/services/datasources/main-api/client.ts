import { FetchHttpClient, HttpApi, HttpApiClient } from "@effect/platform"
import { Effect } from "effect"

import { AuthAPIGroup } from "@/services/datasources/main-api/api-groups/auth"
import { UsersAPIGroup } from "@/services/datasources/main-api/api-groups/users"
import { MainAPIConfig } from "@/services/datasources/main-api/config"
import {
  BadRequest,
  InternalServerError,
  NotFound,
  ServiceUnavailable,
  UnprocessableContent,
} from "@/services/datasources/main-api/errors"

class MainAPI extends HttpApi.make("MainAPI")
  .add(AuthAPIGroup)
  .add(UsersAPIGroup)
  .prefix("/api")
  .addError(NotFound, { status: 404 })
  .addError(BadRequest, { status: 400 })
  .addError(InternalServerError, { status: 500 })
  .addError(ServiceUnavailable, { status: 503 })
  .addError(UnprocessableContent, { status: 422 }) {}

export class MainAPIClient extends Effect.Service<MainAPIClient>()("MainAPIClient", {
  dependencies: [MainAPIConfig.Default, FetchHttpClient.layer],
  effect: Effect.flatMap(MainAPIConfig, (config) => HttpApiClient.make(MainAPI, config)),
}) {}
