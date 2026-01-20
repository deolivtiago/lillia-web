export type StorageKey = { label: string; key: string }
export type AppStorage = (typeof AppStorage)[keyof typeof AppStorage]

export const AppStorage = {
  Theme: { key: "app-theme", label: "Theme" },
} as const
