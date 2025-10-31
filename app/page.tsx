import { Button } from "@/components/ui/button";

export default function Home() {
  return(
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-bold">Dashly</h1>
      <p className="mt-2 text-muted-foreground">Your personal Dasdhboard</p>

      <Button className='mt-4'>Test Button</Button>
    </div>
  )
}