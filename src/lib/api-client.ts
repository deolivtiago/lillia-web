import { type Either, left, right } from "fp-ts/Either"

import { APIRoutes } from "@/config/api-routes"

type RequestConfig = RequestInit & {
  params?: Record<string, string | number | boolean>
}

export type HttpError = {
  status: number
  message: string
  data?: unknown
}

const defaultHeaders = { "Content-Type": "application/json" }

async function request<T>(
  endpoint: string,
  config: RequestConfig = {}
): Promise<Either<HttpError, T>> {
  const { params, headers, ...tail } = config
  const url = buildUrl(endpoint, params)
  const req = { ...tail, headers: { ...defaultHeaders, ...headers } }

  return fetch(url, req)
    .then(handleResponse<T>)
    .catch((err) =>
      left({
        status: 0,
        message: err instanceof err ? err.message : "network error",
        data: err,
      })
    )
}

async function handleResponse<T>(
  response: Response
): Promise<Either<HttpError, T>> {
  if (!response.ok) {
    if (response.status === 422) return response.json().then(left)

    return response.json().then((data) =>
      left({
        status: response.status,
        message: response.statusText.toLowerCase(),
        data: data,
      })
    )
  }

  return parseResponse<T>(response)
    .then(right)
    .catch((err) =>
      left({
        status: response.status,
        message: "failed to parse response",
        data: err,
      })
    )
}

async function parseResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("content-type")

  if (contentType?.includes("application/json")) {
    return response.json()
  }

  return response.text() as Promise<T>
}

function buildUrl(
  endpoint: string,
  params?: Record<string, string | number | boolean>
): string {
  const url = new URL(endpoint, APIRoutes.baseUrl())

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value))
    })
  }

  return url.toString()
}

export async function get<T>(
  endpoint: string,
  config?: Omit<RequestConfig, "method" | "body">
): Promise<Either<HttpError, T>> {
  return request<T>(endpoint, {
    ...config,
    method: "GET",
  })
}

export async function post<T>(
  endpoint: string,
  data?: unknown,
  config?: Omit<RequestConfig, "method" | "body">
): Promise<Either<HttpError, T>> {
  return request<T>(endpoint, {
    ...config,
    method: "POST",
    body: JSON.stringify(data),
  })
}

export async function put<T>(
  endpoint: string,
  data?: unknown,
  config?: Omit<RequestConfig, "method" | "body">
): Promise<Either<HttpError, T>> {
  return request<T>(endpoint, {
    ...config,
    method: "PUT",
    body: JSON.stringify(data),
  })
}

export async function del<T>(
  endpoint: string,
  config?: Omit<RequestConfig, "method" | "body">
): Promise<Either<HttpError, T>> {
  return request<T>(endpoint, {
    ...config,
    method: "DELETE",
  })
}
