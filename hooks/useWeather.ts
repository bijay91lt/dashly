"use client";

import { useState, useEffect } from "react";

interface WeatherData {
  city: string;
  temperature: number;
  description: string;
  iconCode: string;
}

export function useWeather(city: string) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    (async () => {
      try {
        const response = await fetch(
          `/api/weather?city=${encodeURIComponent(city)}`
        );
        if (!response.ok) throw new Error("Failed to fetch weather");
        const json = await response.json();

        if (!ignore) {
          setData({
            city: json.name,
            temperature: Math.round(json.main.temp),
            description: json.weather[0].description,
            iconCode: json.weather[0].icon,
          });
          setError(null);
        }
      } catch (err: unknown) {
        if (!ignore) {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    })();

    return () => {
      ignore = true;
    };
  }, [city]);

  return { data, loading, error };
}
