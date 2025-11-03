"use client";
// import dynamic from "next/dynamic";
// import { CLockWidget } from "@/components/widgets/ClockWidget";
// import { useCurrentTime } from "@/hooks/useCurrentTime";
// import { Weatherwidget } from "@/components/widgets/WeatherWidget";
import { Dashboard } from "./Dashboard";

// const TodoWidget = dynamic(
//   () =>
//     import("@/components/widgets/TodoWidget").then((mod) => ({
//       default: mod.TodoWidget,
//     })),
//   { ssr: false }
// );

export function DashboardClient() {
  // const currentTime = useCurrentTime();

  return (
    // <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
    //   <CLockWidget currentTime={currentTime} />
    //   <TodoWidget />
    //   <Weatherwidget />
    // </div>
    <Dashboard />
  );
}
