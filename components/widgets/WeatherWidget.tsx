"use client";

import { Widget } from "../Widget";
import { useWeather } from "@/hooks/useWeather";
import Image from "next/image";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useWeatherCity } from "@/hooks/useWeatherCity";

export function Weatherwidget() {
  const { city: currentCity, setCity } = useWeatherCity();
  const { data, loading, error } = useWeather(currentCity);

  const [inputValue, setInputValue] = useState(currentCity);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (inputValue.trim()) {
      setCity(inputValue.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setInputValue(currentCity);
    setIsEditing(false);
  };

  return (
    <Widget title="Weather">
      {isEditing ? (
        <div className="space-y-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") handleCancel();
            }}
            autoFocus
            className="text-sm"
          />
          <div className="flex gap-1">
            <Button size="sm" onClick={handleSave}>
              Save
            </Button>
            <Button size="sm" variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-start">
            <div>
              {loading ? (
                <p className="text-sm text-muted-foreground">Loading...</p>
              ) : error ? (
                <p className="text-sm text-destructive">Error: {error}</p>
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
                    <span className="text-2xl font-bold">
                      {data.temperature}°C
                    </span>
                  </div>
                  <p className="text-sm capitalize">{data.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {data.city}
                  </p>
                </div>
              ) : null}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(true)}
              className="h-6 w-6 p-0"
            >
              ✏️
            </Button>
          </div>
        </div>
      )}
    </Widget>
  );
}
