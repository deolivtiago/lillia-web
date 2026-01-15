import { Link, NavLink, Outlet } from "react-router-dom"

import { NavbarOld } from "@/components/navbar"
import { routes, type AppRoute } from "@/routes"

type NavbarProps = { routes: AppRoute[] }

function Navbar({ routes }: NavbarProps) {
  return (
    <nav>
      <NavbarOld />
      <div>
        <Link to="/">
          <span>Lillia Platform</span>
        </Link>

        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink to={route.path} aria-label={route.label.toLowerCase()}>
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export function MainLayout() {
  return (
    <>
      <header>
        <Navbar routes={routes} />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2025 Clarx Labs. All rights reserved.</p>
      </footer>
    </>
  )
}
