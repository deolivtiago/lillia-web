import {
  HttpClient,
  HttpClientRequest,
  HttpClientResponse,
} from "@effect/platform"
import { Effect, Layer, Schema } from "effect"

const BASE_URL = "http://localhost:4000"

export class AuthTokens extends Schema.Class<AuthTokens>("AuthTokens")({
  accessToken: Schema.String,
  refreshToken: Schema.String,
}) {}

export class ValidationError extends Schema.Class<ValidationError>(
  "ValidationError"
)({
  field: Schema.Union(Schema.Literal("email"), Schema.Literal("password")),
  message: Schema.String,
}) {}

export class ValidationErrors extends Schema.Class<ValidationErrors>(
  "ValidationErrors"
)({
  errors: Schema.Array(ValidationError),
}) {}

const UserCredentials = Schema.Struct({
  email: Schema.String,
  password: Schema.String,
})

const UserData = Schema.Struct({
  email: Schema.String,
  password: Schema.String,
})

export class AuthApiError extends Schema.TaggedError<AuthApiError>()(
  "AuthApiError",
  {
    reason: Schema.Union(
      Schema.Literal("network"),
      Schema.Literal("unauthorized"),
      Schema.Literal("validation"),
      Schema.Literal("unknown")
    ),
    message: Schema.String,
    validationErrors: Schema.optional(Schema.Array(ValidationError)),
  }
) {}

const decodeAuthTokens = HttpClientResponse.schemaBodyJson(AuthTokens)
const decodeValidationErrors =
  HttpClientResponse.schemaBodyJson(ValidationErrors)

/**
 * Handles a 422 Unprocessable Entity response by decoding validation errors
 * and returning an AuthApiError with the decoded errors.
 */
const handleValidationResponse = (
  response: HttpClientResponse.HttpClientResponse
) =>
  decodeValidationErrors(response).pipe(
    Effect.mapError(
      () =>
        new AuthApiError({
          reason: "unknown",
          message: "Failed to decode validation error response",
        })
    ),
    Effect.flatMap(({ errors }) =>
      Effect.fail(
        new AuthApiError({
          reason: "validation",
          message: "Validation failed",
          validationErrors: errors,
        })
      )
    )
  )

/**
 * Executes an auth request and handles the response, mapping status codes
 * to typed AuthApiError variants or returning decoded AuthTokens on success.
 */
const executeAuthRequest = (
  request: HttpClientRequest.HttpClientRequest
): Effect.Effect<AuthTokens, AuthApiError, HttpClient.HttpClient> =>
  HttpClient.HttpClient.pipe(
    Effect.flatMap((client) => client.execute(request)),
    Effect.flatMap((response) => {
      switch (response.status) {
        case 200:
        case 201:
          return decodeAuthTokens(response).pipe(
            Effect.mapError(
              () =>
                new AuthApiError({
                  reason: "unknown",
                  message: "Failed to decode auth token response",
                })
            )
          )

        case 401:
          return Effect.fail(
            new AuthApiError({
              reason: "unauthorized",
              message: "Invalid email or password",
            })
          )

        case 422:
          return handleValidationResponse(response)

        default:
          return Effect.fail(
            new AuthApiError({
              reason: "unknown",
              message: `Unexpected status code: ${response.status}`,
            })
          )
      }
    }),
    Effect.catchTag("RequestError", (e) =>
      Effect.fail(
        new AuthApiError({
          reason: "network",
          message: `Network error: ${e.message}`,
        })
      )
    ),
    Effect.catchTag("ResponseError", (e) =>
      Effect.fail(
        new AuthApiError({
          reason: "network",
          message: `Response error: ${e.message}`,
        })
      )
    )
  )

export interface AuthService {
  signIn: (
    email: string,
    password: string
  ) => Effect.Effect<AuthTokens, AuthApiError>

  signUp: (
    email: string,
    password: string
  ) => Effect.Effect<AuthTokens, AuthApiError>
}

export class AuthApi {
  /**
   * Sign in with email and password.
   *
   * Returns `AuthTokens` on success.
   * Fails with `AuthApiError` where reason is one of:
   *   - "validation"    → email/password did not pass server-side validation
   *   - "unauthorized"  → credentials are wrong
   *   - "network"       → request/response transport failure
   *   - "unknown"       → unexpected status or decode failure
   */
  // static signIn = (
  //   email: string,
  //   password: string
  // ): Effect.Effect<AuthTokens, AuthApiError, HttpClient.HttpClient> =>
  //   Effect.gen(function* () {
  //     const body = yield* Schema.encode(UserCredentials)({ email, password })
  //     const request = HttpClientRequest.post(`${BASE_URL}/auth/signin`).pipe(
  //       HttpClientRequest.setHeader("Content-Type", "application/json"),
  //       HttpClientRequest.jsonBody(body),
  //       // jsonBody returns Effect — unwrap it
  //       (effect) => effect
  //     )
  //     return yield* executeAuthRequest(yield* request)
  //   }).pipe(
  //     Effect.catchTag("ParseError", () =>
  //       Effect.fail(
  //         new AuthApiError({
  //           reason: "unknown",
  //           message: "Failed to encode request body",
  //         })
  //       )
  //     )
  //   )
  /**
   * Register a new account with email and password.
   *
   * Returns `AuthTokens` on success (HTTP 201).
   * Fails with the same `AuthApiError` variants as `signIn`.
   */
  // static signUp = (
  //   email: string,
  //   password: string
  // ): Effect.Effect<AuthTokens, AuthApiError, HttpClient.HttpClient> =>
  //   Effect.gen(function* () {
  //     const body = yield* Schema.encode(UserData)({ email, password })
  //     const request = HttpClientRequest.post(`${BASE_URL}/auth/signup`).pipe(
  //       HttpClientRequest.setHeader("Content-Type", "application/json"),
  //       HttpClientRequest.jsonBody(body),
  //       (effect) => effect
  //     )
  //     return yield* executeAuthRequest(yield* request)
  //   }).pipe(
  //     Effect.catchTag("ParseError", () =>
  //       Effect.fail(
  //         new AuthApiError({
  //           reason: "unknown",
  //           message: "Failed to encode request body",
  //         })
  //       )
  //     )
  //   )
}

/**
 * Provide the FetchHttpClient layer and run an auth Effect to a Promise.
 * Use this in React components or hooks.
 *
 * @example
 * ```ts
 * import { BrowserHttpClient } from "@effect/platform-browser"
 *
 * const tokens = await runAuth(AuthApi.signIn("user@example.com", "s3cr3t"))
 * ```
 */
export const runAuth = <A>(
  effect: Effect.Effect<A, AuthApiError, HttpClient.HttpClient>,
  httpClientLayer: Layer.Layer<HttpClient.HttpClient>
): Promise<A> => effect.pipe(Effect.provide(httpClientLayer), Effect.runPromise)
