import { type Either } from "fp-ts/lib/Either"
import { createContext } from "react"

import { type AuthResponse } from "@/services/auth-service"

import { type HttpError } from "@/lib/api-client"

interface AuthContextType {
  doSignIn: (credentials: {
    email: string
    password: string
  }) => Promise<Either<HttpError, AuthResponse>>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
