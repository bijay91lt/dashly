"use client";

import { Widget } from "../Widget";
import { useWeather } from "@/hooks/useWeather";
import Image from "next/image";

export function Weatherwidget() {
  const { data, loading, error } = useWeather("Kathmandu");

  return (
    <Widget title="Weather">
      {loading ? (
        <p className="text-sm text-muted-foreground">Loading...</p>
      ) : error ? (
        <p className="text-sm text-desctructive">Error: {error}</p>
      ) : data ? (
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 mb-1">
            <Image
              src={`https://openweathermap.org/img/wn/${data.iconCode}@2x.png`}
              alt={data.description}
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold">{data.temperature}</span>
          </div>
          <p className="text-sm capitalize">{data.description}</p>
          <p className="text-xs text-muted-foreground mt-1">{data.city}</p>
        </div>
      ) : null}
    </Widget>
  );
}
