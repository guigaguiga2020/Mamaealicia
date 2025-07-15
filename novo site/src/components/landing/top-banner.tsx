
"use client";

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTimer } from '@/hooks/use-timer';

export function TopBanner() {
  const { timeLeft, isExpired } = useTimer({ durationDays: 5 });

  if (isExpired || !timeLeft) {
    return null;
  }
  
  const TimeUnit = ({ value }: { value: number; }) => (
    <div className="flex flex-col items-center">
      <span className="text-lg font-bold">{value.toString().padStart(2, '0')}</span>
    </div>
  );

  return (
    <div className="bg-primary/20 text-primary-foreground/90 py-2 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
        <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <p className="font-semibold text-sm">Promoção por tempo limitado!</p>
        </div>
        <div className="flex items-center gap-2" aria-live="polite" role="timer">
            <TimeUnit value={timeLeft.days} />
            <span className="text-lg font-bold">:</span>
            <TimeUnit value={timeLeft.hours} />
            <span className="text-lg font-bold">:</span>
            <TimeUnit value={timeLeft.minutes} />
            <span className="text-lg font-bold">:</span>
            <TimeUnit value={timeLeft.seconds} />
        </div>
      </div>
    </div>
  );
}
