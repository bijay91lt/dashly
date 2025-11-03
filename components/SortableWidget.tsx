"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableWidgetProps {
  id: string;
  children: React.ReactNode;
}

export function SortableWidget({ id, children }: SortableWidgetProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`sortable-widget cursor-grab active:cursor-grabbing ${
        isDragging ? "opacity-50 z-10" : ""
      }`}
      style={
        {
          transform: CSS.Transform.toString(transform),
          transition: transition,
        } as React.CSSProperties
      }
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
}
