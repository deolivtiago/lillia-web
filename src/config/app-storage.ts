export type StorageKey = { label: string; key: string }
export type AppStorage = (typeof AppStorage)[keyof typeof AppStorage]

export const AppStorage = {
  Theme: { key: "app-theme", label: "Theme" },

  items: function (): StorageKey[] {
    return Object.values(this).filter((it) => typeof it !== "function")
  },
} as const
