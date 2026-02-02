import { type ReactNode } from "react"

import { AuthContext } from "@/contexts/auth-context"
import { doSignIn } from "@/services/auth-service"

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={{ doSignIn }}>{children}</AuthContext.Provider>
  )
}
