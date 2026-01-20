import type { JSX } from "react"

import { MonitorIcon, MoonIcon, SunIcon } from "@phosphor-icons/react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import { type Theme } from "@/contexts/theme-context"

import { useTheme } from "@/hooks/use-theme"

export function ThemeToggler() {
  const { setTheme } = useTheme()

  const items: { label: string; value: Theme; icon: JSX.Element }[] = [
    { label: "default", value: "system", icon: <MonitorIcon /> },
    { label: "light", value: "light", icon: <SunIcon /> },
    { label: "dark", value: "dark", icon: <MoonIcon /> },
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
