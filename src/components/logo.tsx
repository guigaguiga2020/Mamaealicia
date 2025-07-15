import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-2xl font-bold font-headline text-primary-foreground", className)}>
      <Heart className="w-7 h-7 text-[#F2A7B1]" />
      <span className="text-foreground">Mamãe Alicia</span>
    </div>
  );
}
