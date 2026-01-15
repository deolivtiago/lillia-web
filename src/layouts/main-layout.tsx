import { Outlet } from "react-router-dom"

export function MainLayout() {
  return (
    <>
      <header>
        <span>Lillia Platform</span>
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
