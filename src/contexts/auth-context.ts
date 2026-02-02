import { createContext } from "react"

import { AuthService } from "@/services/auth-service"

interface AuthContextType {
  AuthService: typeof AuthService
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
