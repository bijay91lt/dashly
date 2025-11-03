"use client";

import { useState, useEffect } from "react";
import { WidgetLayoutItem } from "@/types/widget";

const DEFAULT_LAYOUT: WidgetLayoutItem[] = [
  { id: "clock" },
  { id: "todo" },
  { id: "weather" },
];

const STORAGE_KEY = "widget-layout";

export function useWidgetLayout() {
  const [layout, setLayout] = useState<WidgetLayoutItem[]>(DEFAULT_LAYOUT);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setLayout(JSON.parse(stored));
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(layout));
    }
  }, [layout, isHydrated]);

  const moveWidget = (dragIndex: number, hoverIndex: number) => {
    const newLayout = [...layout];
    const [moved] = newLayout.splice(dragIndex, 1);
    newLayout.splice(hoverIndex, 0, moved);
    setLayout(newLayout);
  };

  return {
    layout,
    moveWidget,
  };
}
