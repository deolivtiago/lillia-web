import {
  FetchHttpClient,
  HttpBody,
  HttpClient,
  HttpClientRequest,
  HttpClientResponse,
} from "@effect/platform"
import { Config, Console, Effect, Ref, Schedule, Schema } from "effect"

const BASE_URL = "http://localhost:4000"
const USER_ID = "734b4610-c156-43c0-bb46-ea6a01303aca"

const User = Schema.Struct({
  id: Schema.Number,
  name: Schema.String,
  email: Schema.String,
})

export type User = Schema.Schema.Type<typeof User>

export class GetUserError extends Schema.TaggedError<GetUserError>()(
  "GetUserError",
  { id: Schema.Array(Schema.String) }
) {}

const getAllUsers = (http: HttpClient.HttpClient, url: string) => () =>
  http.execute(HttpClientRequest.get(url)).pipe(
    // HttpClient.retryTransient({ times: 5, schedule: Schedule.exponential(2000) }),
    Effect.tap((it) => Console.log(`${it.request.method}: ${it.request.url}`)),
    Effect.andThen(HttpClientResponse.schemaBodyJson(Schema.Array(User))),
    Effect.tap(Console.log)
    // Effect.catchTag("ParseError", Effect.tap(Console.log)),
    // Effect.catchTags({
    //   ParseError: (error) =>
    //     Effect.succeed("failed parsing response: ".concat(error.message)),
    //   ResponseError: (error) =>
    //     Effect.succeed("failed making request: ".concat(error.message)),
    //   RequestError: (error) =>
    //     Effect.succeed("failed making request: ".concat(error.message)),
    // })
  )

const getUserById =
  (http: HttpClient.HttpClient, url: string) => (id: number) =>
    http.get(url.concat("/", id.toString())).pipe(
      Effect.tap((it) =>
        Console.log(`${it.request.method}: ${it.request.url}`)
      ),
      Effect.andThen(HttpClientResponse.schemaBodyJson(User)),
      Effect.tap(Console.log)
    )

class MainAPIConfig extends Effect.Service<MainAPIConfig>()("MainAPIConfig", {
  effect: Config.all({
    baseUrl: Config.string("MAIN_API_BASE_URL").pipe(
      Config.withDefault("https://jsonplaceholder.typicode.com/users")
    ),
  }),
}) {}

export class MainAPIClient extends Effect.Service<MainAPIClient>()(
  "MainAPIClient",
  {
    effect: Effect.all({
      http: HttpClient.HttpClient,
      config: MainAPIConfig,
    }).pipe(
      Effect.map(({ http, config }) => ({
        getAllUsers: getAllUsers(http, config.baseUrl),
        getUserById: getUserById(http, config.baseUrl),
      }))
    ),
    dependencies: [FetchHttpClient.layer, MainAPIConfig.Default],
  }
) {}

const toSchema =
  <A, I, R>(schema: Schema.Schema<A, I, R>) =>
  (response: HttpClientResponse.HttpClientResponse) =>
    response.json.pipe(Effect.flatMap(Schema.decodeUnknown(schema)))

const withBearerToken = (request: HttpClientRequest.HttpClientRequest) =>
  request.pipe(HttpClientRequest.bearerToken("token"))

const getUser = Effect.gen(function* () {
  const httpClient = yield* HttpClient.HttpClient

  return yield* httpClient
    .get(`${BASE_URL}/users/${USER_ID}`)
    .pipe(Effect.flatMap(toSchema(User)))
})

const createUser = Effect.gen(function* () {
  const token = yield* Ref.make("")

  const httpClient = (yield* HttpClient.HttpClient).pipe(
    HttpClient.mapRequestEffect(
      Effect.fn(function* (res) {
        return res.pipe(
          HttpClientRequest.bearerToken(yield* token.get),
          HttpClientRequest.setHeader("Content-Type", "application/json")
        )
      })
    ),
    HttpClient.mapRequestInput((res) => res),
    HttpClient.retryTransient({
      times: 3,
      schedule: Schedule.exponential(2000),
    })
  )

  const withResponseSchema = <A, I, R>(
    response: HttpClientResponse.HttpClientResponse,
    schema: Schema.Schema<A, I, R>
  ) => response.json.pipe(Effect.flatMap(Schema.decodeUnknown(schema)))

  const withRequestUrl = (
    request: HttpClientRequest.HttpClientRequest,
    url: string
  ): HttpClientRequest.HttpClientRequest =>
    request.pipe(HttpClientRequest.setUrl(url))

  // const withRequestBody = (
  //   request: HttpClientRequest.HttpClientRequest,
  //   json: unknown
  // ): HttpClientRequest.HttpClientRequest =>
  //   request.pipe(
  //     HttpBody.json(json).pipe(
  //       Effect.flatMap((body) => HttpClientRequest.setBody(body))
  //     )
  //   )

  const request = HttpClientRequest.post(`${BASE_URL}/users`).pipe(
    withBearerToken,

    HttpClientRequest.setBody(
      yield* HttpBody.json({
        fullName: "John Doe",
        email: "john.doe@example.com",
      })
    )
  )

  return yield* httpClient.execute(request).pipe(Effect.flatMap(toSchema(User)))
})
