
"use client";

import { useEffect, useState } from 'react';

const TIMER_STORAGE_KEY = 'firstVisitTime';

type TimerOptions = {
  durationDays: number;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function useTimer({ durationDays }: TimerOptions) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // This code only runs on the client
    let firstVisitTime: number | null = null;
    const storedTime = localStorage.getItem(TIMER_STORAGE_KEY);

    if (storedTime) {
      firstVisitTime = parseInt(storedTime, 10);
    } else {
      firstVisitTime = new Date().getTime();
      localStorage.setItem(TIMER_STORAGE_KEY, firstVisitTime.toString());
    }

    const expirationTime = firstVisitTime + durationDays * 24 * 60 * 60 * 1000;

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = expirationTime - now;

      if (distance < 0) {
        clearInterval(intervalId);
        setIsExpired(true);
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [durationDays]);

  return { timeLeft, isExpired, durationDays };
}
