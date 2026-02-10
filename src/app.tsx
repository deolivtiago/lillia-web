import { Button } from "@/components/ui/button"

export function App() {
  return (
    <>
      <div className="mx-auto h-screen max-w-7xl space-y-4 p-4 shadow-xl">
        <h1 className="font-serif text-3xl font-bold">Hello</h1>
        <h2 className="font-cursive text-xl font-bold">World</h2>
        <p className="font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-muted-foreground font-mono">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Button>DON'T CLICK</Button>
      </div>
    </>
  )
}
