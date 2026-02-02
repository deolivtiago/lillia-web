import {
  BadRequest,
  Forbidden,
  HttpApiDecodeError,
  InternalServerError,
  NotFound,
  ServiceUnavailable,
  Unauthorized,
} from "@effect/platform/HttpApiError"
import { Schema } from "effect"
import { ParseError } from "effect/ParseResult"

class MainAPIError extends Schema.TaggedError<MainAPIError>()("MainAPIError", {
  message: Schema.String,
  description: Schema.String.pipe(
    Schema.optionalWith({
      default: () => "An unexpected error occurred. Please try again later or contact the support.",
    })
  ),
  errors: Schema.Record({ key: Schema.String, value: Schema.Array(Schema.String) }).pipe(
    Schema.optionalWith({ default: () => ({}) })
  ),
}) {}

class UnprocessableContent extends Schema.Class<UnprocessableContent>("UnprocessableContent")({
  message: Schema.String.pipe(Schema.optionalWith({ default: () => "Unprocessable Content" })),
  errors: Schema.Record({ key: Schema.String, value: Schema.Array(Schema.String) }).pipe(
    Schema.optionalWith({ default: () => ({}) })
  ),
  _tag: Schema.Literal("UnprocessableContent").pipe(
    Schema.optionalWith({ default: () => "UnprocessableContent" })
  ),
}) {}

export {
  BadRequest,
  Forbidden,
  HttpApiDecodeError,
  InternalServerError,
  MainAPIError,
  NotFound,
  ParseError,
  ServiceUnavailable,
  Unauthorized,
  UnprocessableContent,
}
