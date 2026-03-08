import { createContext } from "react"

import { type Tokens, type User } from "@/lib/api-client"

interface AuthContextType {
  listUsers: () => Promise<readonly User[]>
  getUser: (id: string) => Promise<User>
  signIn: (email: string, password: string) => Promise<Tokens>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
