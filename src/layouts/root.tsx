import { Outlet } from "react-router"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"

import { Footer } from "@/layouts/footer"
import { Navbar } from "@/layouts/navbar"

export function Root() {
  return (
    <div className="bg-background flex min-h-dvh w-screen flex-col items-center justify-between scroll-smooth">
      <header className="bg-sidebar sticky top-0 z-10 flex max-h-16 w-full flex-row items-center justify-center gap-4 border-b px-4 shadow">
        <Navbar>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() =>
              toast("Event has been created", {
                description:
                  "Sunday, December 03, 2023 at 9:00 AM Sunday, December 03, 2023 at 9:00 AM Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
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
