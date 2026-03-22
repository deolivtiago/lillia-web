import { Outlet } from "react-router"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"

import { Footer } from "@/layouts/footer"
import { Navbar } from "@/layouts/navbar"

export function Root() {
  const onClick = async () => {
    toast("Error fetching users", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify({}, null, 2)}</code>
        </pre>
      ),
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    })
  }

  return (
    <div className="bg-background flex min-h-dvh w-screen flex-col items-center justify-between scroll-smooth">
      <header className="bg-sidebar sticky top-0 z-10 flex max-h-16 w-full flex-row items-center justify-center gap-4 border-b px-4 shadow">
        <Navbar>
          <Button variant="outline" className="cursor-pointer" onClick={onClick}>
            toasty!
          </Button>
        </Navbar>
      </header>
      <Toaster position="top-right" />

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
