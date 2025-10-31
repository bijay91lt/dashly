'use client';

import { useState, useEffect } from "react";

const STORAGE_KEY = 'weather-city';

export function useWeatherCity(){
    const [city, setCity] = useState(() => {
        if(typeof window === 'undefined') return 'Kathmandu';
        return localStorage.getItem(STORAGE_KEY) || 'Kathmandu';
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, city);
    }, [city]);

    return {
        city, 
        setCity,
    };
}