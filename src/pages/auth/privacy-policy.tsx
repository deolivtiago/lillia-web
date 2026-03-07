import { Footer } from "@/layouts/footer"
import { Navbar } from "@/layouts/navbar"
import { Toaster } from "sonner"

export function PrivacyPolicy() {
  return (
    <div className="bg-background flex h-screen w-screen flex-col">
      <header className="bg-sidebar sticky top-0 z-10 shadow-sm">
        {/*<nav className="container mx-auto px-4 py-4">
          <ul className="flex gap-6">
            <li>
              <Link to={AppRoutes.Home.path}>Home</Link>
            </li>
            <li>
              <Link to={AppRoutes.Home.path}>About</Link>
            </li>
            <li>
              <Link to={AppRoutes.Home.path}>Contact</Link>
            </li>
          </ul>
        </nav>*/}
        <Navbar />
      </header>
      <Toaster position="top-right" />

      <div className="flex flex-1 flex-col items-center justify-center overflow-auto">
        <main className="container mx-auto flex-1">
          <div className="bg-primary px-4 py-8">
            <h1 className="text-2xl font-bold">Main Content</h1>
            <p>
              This area fills all available space between header and footer.
            </p>
          </div>
          <div className="bg-primary px-4 py-8">
            <h1 className="text-2xl font-bold">Main Content</h1>
            <p>
              This area fills all available space between header and footer.
            </p>
          </div>
          <div className="bg-primary px-4 py-8">
            <h1 className="text-2xl font-bold">Main Content</h1>
            <p>
              This area fills all available space between header and footer.
            </p>
          </div>
          <div className="bg-primary px-4 py-8">
            <h1 className="text-2xl font-bold">Main Content</h1>
            <p>
              This area fills all available space between header and footer.
            </p>
          </div>
          <div className="bg-primary px-4 py-8">
            <h1 className="text-2xl font-bold">Main Content</h1>
            <p>
              This area fills all available space between header and footer.
            </p>
          </div>
          <div className="bg-primary px-4 py-8">
            <h1 className="text-2xl font-bold">Main Content</h1>
            <p>
              This area fills all available space between header and footer.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
