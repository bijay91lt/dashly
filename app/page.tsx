import { DashboardClient } from "./DashboardClient";

export default function Home() {

  return(
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-bold">Dashly</h1>
      <DashboardClient />
    </div>
  )
}