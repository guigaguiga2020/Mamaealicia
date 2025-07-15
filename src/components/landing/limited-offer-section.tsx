
"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTimer } from '@/hooks/use-timer';

const REMAINING_KITS = 15;

export function LimitedOfferSection() {
  const { timeLeft, isExpired, durationDays } = useTimer({ durationDays: 5 });

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-5xl font-bold text-primary-foreground">{value.toString().padStart(2, '0')}</span>
      <span className="text-sm uppercase text-muted-foreground">{label}</span>
    </div>
  );

  return (
    <section id="limited-offer" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <Card className="max-w-4xl mx-auto p-6 md:p-10 text-center shadow-lg bg-background">
          {isExpired ? (
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Esta oferta especial expirou...</h2>
              <p className="text-muted-foreground md:text-lg">
                Mas não se preocupe! Você ainda pode garantir o kit pelo preço normal e transformar a vida da sua família.
              </p>
              <Button asChild size="lg" className="font-bold text-lg py-7 bg-gradient-to-r from-[#F2A7B1] to-[#F2B18A] text-primary-foreground hover:shadow-lg hover:brightness-105 transition-all">
                <Link href="#ofertas">Ver opções de kits</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-center items-center gap-2">
                <Clock className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Promoção por tempo limitado!</h2>
              </div>
              <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                Essa é sua chance de garantir um presente cheio de fé e diversão para seu filho, sem culpa e com um <strong className="text-primary-foreground/80">desconto especial</strong>. A oferta termina em:
              </p>

              {timeLeft && (
                <div className="flex justify-center items-center gap-4 md:gap-8 my-6" aria-live="polite" role="timer">
                  <TimeUnit value={timeLeft.days} label="Dias" />
                  <span className="text-4xl font-bold text-primary-foreground">:</span>
                  <TimeUnit value={timeLeft.hours} label="Horas" />
                  <span className="text-4xl font-bold text-primary-foreground">:</span>
                  <TimeUnit value={timeLeft.minutes} label="Minutos" />
                  <span className="text-4xl font-bold text-primary-foreground">:</span>
                  <TimeUnit value={timeLeft.seconds} label="Segundos" />
                </div>
              )}

              <p className="text-sm font-semibold text-primary">
                Restam apenas {REMAINING_KITS} kits com preço promocional.
              </p>
              
              <Button asChild size="lg" className="font-bold text-lg py-7 bg-gradient-to-r from-[#F2A7B1] to-[#F2B18A] text-primary-foreground hover:shadow-lg hover:brightness-105 transition-all">
                <Link href="https://www.ggcheckout.com/checkout/v2/lrIi8mBLlZBlWlptTTMJ" target="_blank">Sim, quero garantir meu kit com desconto</Link>
              </Button>

              <p className="text-xs text-muted-foreground pt-4">
                Oferta válida por {durationDays} dias a partir do seu primeiro acesso, ou enquanto durar o estoque.
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
