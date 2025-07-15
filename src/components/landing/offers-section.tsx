import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check, Flame } from "lucide-react";
import Link from "next/link";

const individualOffers = [
  {
    title: "KIT AMIGOS DA BÍBLIA",
    age: "2-8 anos",
    features: [
      "+50 atividades lúdicas",
      "Histórias Bíblicas ilustradas",
      "Jogos da memória e quebra-cabeças",
      "Acesso completo ao material infantil"
    ],
    originalPrice: "47",
    promoPrice: "17,00",
    installments: "ou 3x de R$ 8,00",
    ctaText: "Quero este kit infantil",
    checkoutUrl: "https://www.ggcheckout.com/checkout/v2/tpA6U3RnjEWGpI6JJgJ9",
  },
  {
    title: "KIT HERÓIS DA BÍBLIA",
    age: "8-14 anos",
    features: [
      "+32 cartas no estilo \"Trunfo Bíblico\"",
      "Estilo Mangá que os adolescentes adoram",
      "Acesso vitalício com atualizações",
      "Bônus: Um dos nossos materiais mais vendidos",
      "Grupo de pais e professores no WhatsApp"
    ],
    originalPrice: "57",
    promoPrice: "17,90",
    installments: "ou 3x de R$ 8,50",
    ctaText: "Quero esse kit para maiores",
    checkoutUrl: "https://www.ggcheckout.com/checkout/v2/kiZAlEUux2pEbrHYLnLL",
  }
];

const comboOffer = {
  title: "COMBO COMPLETO FAMÍLIA",
  age: "Todos os materiais",
  features: [
    "Kit Heróis da Bíblia",
    "Kit Amigos da Bíblia",
    "Histórias em Disco (10 ensinamentos)",
    "Mapas Bíblicos (30+ mapas)",
    "Cards colecionáveis estilo Funko Pop",
    "+6 bônus exclusivos",
  ],
  originalPrice: "197",
  promoPrice: "47,00",
  installments: "ou 6x de R$ 7,83",
  ctaText: "Quero o combo completo",
  checkoutUrl: "https://www.ggcheckout.com/checkout/v2/lrIi8mBLlZBlWlptTTMJ",
  isPopular: true,
  isPremium: true,
  highlightFeature: "⭐ Maior custo-benefício",
};

export function OffersSection() {
  return (
    <section id="ofertas" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Escolha o kit perfeito para sua família</h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Oferta limitada de lançamento. Garanta já o acesso com valor promocional.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Top Row: Individual Kits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {individualOffers.map((offer) => (
              <Card key={offer.title} className="flex flex-col shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{offer.title}</CardTitle>
                  <CardDescription className="font-bold text-lg text-primary">{offer.age}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {offer.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-center text-center pt-6 mt-auto">
                  <div className="space-y-1">
                      <p className="text-muted-foreground line-through">De R$ {offer.originalPrice}</p>
                      <p className="text-4xl font-extrabold text-foreground">R$ {offer.promoPrice}</p>
                      <p className="text-muted-foreground">{offer.installments}</p>
                  </div>
                  <Button asChild size="lg" className="w-full mt-6 font-bold text-lg py-7 bg-gradient-to-r from-[#F2A7B1] to-[#F2B18A] text-primary-foreground hover:shadow-lg hover:brightness-105 transition-all">
                    <Link href={offer.checkoutUrl} target="_blank">{offer.ctaText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Bottom Row: Combo Offer */}
          <div className="flex justify-center">
            <Card className="flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 transform-gpu w-full max-w-lg lg:max-w-2xl scale-105 bg-gradient-to-br from-secondary/60 to-background border-primary border-2 shadow-primary/20">
              <CardHeader className="text-center">
                <div className="mb-4 text-sm font-bold text-primary-foreground/90 bg-primary/20 rounded-full py-1 px-4 flex items-center justify-center gap-2 self-center"><Flame className="w-4 h-4" /> POPULAR</div>
                <CardTitle className="text-2xl text-primary-foreground">{comboOffer.title}</CardTitle>
                <CardDescription className="font-bold text-lg text-primary-foreground/80">{comboOffer.age}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {comboOffer.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                {comboOffer.highlightFeature && (
                  <div className="mt-4 text-center font-bold text-primary-foreground/90 bg-primary/20 rounded-lg py-2">
                    {comboOffer.highlightFeature}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-col items-center text-center pt-6 mt-auto">
                <div className="space-y-1">
                    <p className="text-foreground/80 line-through">De R$ {comboOffer.originalPrice}</p>
                    <p className="text-4xl font-extrabold text-primary-foreground">R$ {comboOffer.promoPrice}</p>
                    <p className="text-foreground/80">{comboOffer.installments}</p>
                </div>
                <Button asChild size="lg" className="w-full mt-6 font-bold text-lg py-7 bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/40 transition-all">
                  <Link href={comboOffer.checkoutUrl} target="_blank">{comboOffer.ctaText}</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}