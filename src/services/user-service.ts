import { Schema } from "effect"

import { UserCreateInput, UserUpdateInput } from "@/services/datasources/main-api/inputs"
import { handleResponseOf, withMainAPIClient } from "@/services/datasources/runtime"

const listUsers = () => withMainAPIClient(({ users }) => handleResponseOf(users.listUsers()))

const getUser = (id: typeof Schema.UUID.Type) =>
  withMainAPIClient(({ users }) => handleResponseOf(users.getUser({ path: { id } })))

const createUser = (payload: typeof UserCreateInput.Type) =>
  withMainAPIClient(({ users }) => handleResponseOf(users.createUser({ payload })))

const updateUser = (id: typeof Schema.UUID.Type, payload: typeof UserUpdateInput.Type) =>
  withMainAPIClient(({ users }) => handleResponseOf(users.updateUser({ path: { id }, payload })))

const deleteUser = (id: typeof Schema.UUID.Type) =>
  withMainAPIClient(({ users }) => handleResponseOf(users.deleteUser({ path: { id } })))

export const UserService = {
  listUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} as const
