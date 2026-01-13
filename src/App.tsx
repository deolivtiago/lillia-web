import Navbar from './components/navbar'
import { ThemeProvider } from './components/theme-provider'

export function App() {
  return (
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
    </ThemeProvider>
  )
}
