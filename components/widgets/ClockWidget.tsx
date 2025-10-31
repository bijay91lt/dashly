import { Widget } from "../Widget";

interface ClockWidgetProps {
  currentTime: Date;
}

export function CLockWidget({ currentTime }: ClockWidgetProps) {
  const timeString = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <Widget title="Clock">
      <div className="text-2xl font-mono tabular-nums" suppressHydrationWarning>
        {timeString}
      </div>
    </Widget>
  );
}
