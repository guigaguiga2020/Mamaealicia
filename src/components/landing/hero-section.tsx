
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Loader2, PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const [isVideoInitiated, setIsVideoInitiated] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const handlePlayClick = () => {
    setIsVideoInitiated(true);
  };

  const handleIframeLoad = () => {
    setIsIframeLoaded(true);
  };

  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-1 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6 text-center items-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-foreground">
              Você sabe o que as telas estão fazendo com seu filho? Dê o play e veja o que ninguém te contou.
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              A maioria das mães só descobre isso quando já é tarde. Você ainda tem tempo.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <Card className="relative group w-full max-w-3xl aspect-video overflow-hidden shadow-2xl hover:shadow-primary/20 transition-shadow duration-300 rounded-lg">
              {isVideoInitiated && (
                <iframe
                  src="https://www.loom.com/embed/5c257f67d14c460da285be129b29c169?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=1"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                  className={cn(
                    "w-full h-full absolute inset-0 transition-opacity duration-500",
                    isIframeLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={handleIframeLoad}
                ></iframe>
              )}
              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  isIframeLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
              >
                <button
                  onClick={handlePlayClick}
                  className="w-full h-full relative"
                  aria-label="Play Video"
                  disabled={isVideoInitiated}
                >
                  <Image
                    src="https://i.imgur.com/XWgvTC4.jpeg"
                    alt="Video thumbnail"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="video thumbnail"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    {isVideoInitiated && !isIframeLoaded ? (
                      <Loader2 className="w-20 h-20 text-white/80 animate-spin" />
                    ) : (
                      <PlayCircle className="w-20 h-20 text-white/80 drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
                    )}
                  </div>
                </button>
              </div>
            </Card>
            <div className="w-full max-w-md">
              <Button asChild size="lg" className="w-full font-bold text-lg py-7 bg-gradient-to-r from-[#F2A7B1] to-[#F2B18A] text-primary-foreground hover:shadow-lg hover:brightness-105 transition-all">
                <Link href="#ofertas">
                  Quero resgatar o tempo de qualidade com meu filho
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
