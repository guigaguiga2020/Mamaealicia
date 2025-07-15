import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { BadgeCheck, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-secondary/50">
      <div className="container px-4 md:px-6 py-12 md:py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Chega de culpa e telas – traga fé, diversão e conexão para seu lar.
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-6">
          Dê o primeiro passo para <strong className="text-primary-foreground/80">resgatar momentos inesquecíveis</strong> e plantar sementes eternas no coração do seu filho. A hora é agora.
        </p>
        <div className="flex flex-col items-center gap-4">
            <Button asChild size="lg" className="font-bold text-lg py-7 px-10 bg-gradient-to-r from-[#F2A7B1] to-[#F2B18A] text-primary-foreground hover:shadow-lg hover:brightness-105 transition-all">
                <Link href="https://www.ggcheckout.com/checkout/v2/lrIi8mBLlZBlWlptTTMJ" target="_blank">Sim, eu quero essa transformação!</Link>
            </Button>
            <div className="flex items-center gap-2 text-sm text-green-700 font-semibold">
                <BadgeCheck className="w-5 h-5" />
                <span>100% livre de riscos</span>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">🌷 Acompanhe mais dicas e inspirações no nosso Instagram:</p>
              <a 
                href="https://instagram.com/mamae_alicia_educa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:underline mt-1"
              >
                <Instagram className="w-4 h-4" />
                @mamae_alicia_educa
              </a>
            </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Logo />
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Mamãe Alicia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
