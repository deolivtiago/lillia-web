import { Config, Effect } from "effect"

export class MainAPIConfig extends Effect.Service<MainAPIConfig>()("MainAPIConfig", {
  effect: Config.all({
    baseUrl: Config.string("MAIN_API_BASE_URL").pipe(Config.withDefault("http://localhost:4000")),
  }),
}) {}
