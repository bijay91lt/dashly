'use client';
import { CLockWidget } from "@/components/widgets/ClockWidget";
import { useCurrentTime } from "@/hooks/useCurrentTime";

export default function Home() {
  const currentTime = useCurrentTime();

  return(
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-bold">Dashly</h1>
      <p className="mt-2 text-muted-foreground">Your personal Dasdhboard</p>

      <div className="mt-6 grid grid-cols-1 sm:grid:cols-2 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-1">
          <CLockWidget currentTime={currentTime}/>
        </div>
      </div>
    </div>
  )
}