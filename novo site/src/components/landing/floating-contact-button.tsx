"use client";

import Link from 'next/link';
import { Instagram } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function FloatingContactButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://www.instagram.com/mamae_alicia_educa?igsh=OGhtbXp2eGh0a2Y5&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Suporte pelo Instagram"
            className="fixed bottom-4 right-4 z-50 w-14 h-14 bg-[#F2A7B1] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <Instagram className="w-7 h-7 text-white" />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-background border-primary text-primary-foreground">
          <p>Tire suas dúvidas ou fale comigo pelo Instagram</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
