import { type ReactNode } from "react"

import { AuthContext } from "@/contexts/auth-context"
import { getUser, listUsers, signIn } from "@/services/auth-service"

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={{ listUsers, getUser, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
