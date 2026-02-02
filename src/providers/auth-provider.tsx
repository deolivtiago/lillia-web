import { type ReactNode } from "react"

import { AuthContext } from "@/contexts/auth-context"
import { AuthService } from "@/services/auth-service"

export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={{ AuthService }}>{children}</AuthContext.Provider>
}
