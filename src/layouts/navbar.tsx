import { NavLink } from "react-router"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { AppRoutes } from "@/config/app-routes"

export function Navbar() {
  return (
    <nav className="flex max-w-7xl items-center justify-between space-x-2">
      <ul className="flex items-center justify-between space-x-2 p-2">
        {AppRoutes.entries().map(({ label, path }) => (
          <li>
            <NavLink to={path} aria-label={label.toLowerCase()} end>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <NavMenu />
    </nav>
  )
}

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {AppRoutes.entries().map((it) => (
            <NavigationMenuTrigger>{it.label}</NavigationMenuTrigger>
          ))}
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            {AppRoutes.entries().map((it) => (
              <NavigationMenuLink>{it.label}</NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
