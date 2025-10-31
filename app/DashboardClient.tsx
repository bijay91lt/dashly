'use client';
import { CLockWidget } from "@/components/widgets/ClockWidget";
import { useCurrentTime } from "@/hooks/useCurrentTime";
import { TodoWidget } from "@/components/widgets/TodoWidget";

export function DashboardClient(){
    const currentTime = useCurrentTime();

    return (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <CLockWidget currentTime={currentTime}/>
            <TodoWidget/>
        </div>
    )
}
