import type { JSX } from "react"

import { Monitor, Moon, Sun } from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import { type Theme } from "@/contexts/theme-context"

import { useTheme } from "@/hooks/use-theme"

export function ThemeToggler() {
  const { setTheme } = useTheme()

  const items: { label: string; value: Theme; icon: JSX.Element }[] = [
    { label: "default", value: "system", icon: <Monitor /> },
    { label: "light", value: "light", icon: <Sun /> },
    { label: "dark", value: "dark", icon: <Moon /> },
  ] as const

  return (
    <div>
      <span className="sr-only">Toggle theme</span>
      <ToggleGroup>
        {items.map((it) => (
          <ToggleGroupItem
            variant="outline"
            size="sm"
            aria-label={`Toggle ${it.label} theme`}
            onClick={() => setTheme(it.value)}
            children={it.icon}
            key={it.value}
          />
        ))}
      </ToggleGroup>
    </div>
  )
}
