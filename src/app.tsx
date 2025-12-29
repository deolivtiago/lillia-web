import { Button } from "@/components/ui/button"

export function App() {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center bg-cyan-950">
        <h1 className="m-4 text-3xl font-bold text-white">Hello!</h1>
        <Button className="bg-primary font-bold">DON'T CLICK ME</Button>
      </div>
    </>
  )
}
