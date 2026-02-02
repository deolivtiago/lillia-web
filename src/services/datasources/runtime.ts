import type { HttpClientError } from "@effect/platform/HttpClientError"
import { Console, Effect, Layer, ManagedRuntime } from "effect"

import { MainAPIClient } from "@/services/datasources/main-api/client"
import { MainAPIConfig } from "@/services/datasources/main-api/config"
import {
  MainAPIError,
  ParseError,
  type BadRequest,
  type Forbidden,
  type HttpApiDecodeError,
  type InternalServerError,
  type NotFound,
  type ServiceUnavailable,
  type Unauthorized,
  type UnprocessableContent,
} from "@/services/datasources/main-api/errors"

const MainRuntime = ManagedRuntime.make(
  Layer.mergeAll(MainAPIConfig.Default, MainAPIClient.Default)
)

export const withMainAPIClient = <A, E>(
  handleResponse: (client: MainAPIClient) => Effect.Effect<A, E, MainAPIClient | MainAPIConfig>
) =>
  MainAPIClient.pipe(
    Effect.flatMap(handleResponse),
    Effect.tapErrorCause(Console.debug),
    Effect.tap(Console.debug),
    Effect.either,
    MainRuntime.runPromise
  )

export const handleResponseOf = <A>(
  response: Effect.Effect<
    A,
    | ParseError
    | HttpClientError
    | HttpApiDecodeError
    | Unauthorized
    | Forbidden
    | NotFound
    | BadRequest
    | InternalServerError
    | ServiceUnavailable
    | UnprocessableContent,
    MainAPIClient | MainAPIConfig
  >
) =>
  Effect.catchTags(response, {
    Unauthorized: (_error) =>
      Effect.fail(
        MainAPIError.make({
          message: "Error: unauthorized resource",
          description: "You do not have authorization to access this resource.",
        })
      ),
    Forbidden: (_error) =>
      Effect.fail(
        MainAPIError.make({
          message: "Error: forbidden resource",
          description: "You do not have permission to access this resource.",
        })
      ),
    ServiceUnavailable: (_error) =>
      Effect.fail(
        MainAPIError.make({
          message: "Error: service unavailable",
          description: "Our services are currently unavailable. Please try again later.",
        })
      ),
    BadRequest: (_error) => Effect.fail(MainAPIError.make({ message: "Error: bad request" })),
    NotFound: (_error) => Effect.fail(MainAPIError.make({ message: "Error: invalid resource" })),
    InternalServerError: (_error) =>
      Effect.fail(MainAPIError.make({ message: "Error: unexpected error" })),
    RequestError: (_error) => Effect.fail(MainAPIError.make({ message: "Error: invalid request" })),
    ResponseError: (_error) =>
      Effect.fail(MainAPIError.make({ message: "Error: invalid response" })),
    ParseError: (_error) => Effect.fail(MainAPIError.make({ message: "Error: parsing failure" })),
    HttpApiDecodeError: (_error) =>
      Effect.fail(MainAPIError.make({ message: "Error: decoding failure" })),
    UnprocessableContent: ({ errors }: UnprocessableContent) =>
      Effect.fail(
        MainAPIError.make({
          message: "Error: invalid params",
          description: "Something went wrong. Please check your input information and try again.",
          errors,
        })
      ),
  })
