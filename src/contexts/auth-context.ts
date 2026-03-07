import { createContext } from "react"

import { type User } from "@/lib/api-client"

interface AuthContextType {
  listUsers: () => Promise<readonly User[]>
  getUser: (id: number) => Promise<User>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
