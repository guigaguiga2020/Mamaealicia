import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";

const forYouList = [
  "Seu filho passa tempo demais nas telas e isso tem te preocupado",
  "Você sente que a infância dele está escapando por entre os dedos",
  "Você deseja trazer mais fé, propósito e conexão para dentro do lar",
  "A rotina é corrida, mas você quer plantar sementes eternas mesmo com pouco tempo",
  "Você quer alternativas reais para educar com amor, limites e valores",
  "Você acredita que a Bíblia pode ser ensinada de forma leve e divertida",
  "Você está cansada de se sentir culpada e quer fazer algo concreto",
];

const notForYouList = [
  "Você acredita que o uso excessivo de telas não afeta a infância",
  "Prefere soluções 100% digitais ou com foco apenas em tecnologia",
  "Não se sente aberta a ensinar valores cristãos para seus filhos",
  "Acredita que fé, brincadeira e educação não combinam",
  "Está procurando apenas mais uma atividade para \"ocupar\" seu filho",
];

export function IsItForYouSection() {
  return (
    <section id="is-it-for-you" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">💡 Esse material é pra você?</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-green-200 bg-green-50/30">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">Esse material é para você se:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {forYouList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-200 bg-red-50/30">
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">Talvez não seja pra você se:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {notForYouList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mt-12 space-y-6">
            <p className="text-lg text-muted-foreground">🌷 Se você chegou até aqui e sentiu que esse material é pra você… então confie. Você não está sozinha — e esse pode ser o primeiro passo de uma nova fase na sua casa.</p>
            <Button asChild size="lg" className="font-bold text-lg py-7 bg-gradient-to-r from-[#F2A7B1] to-[#F2B18A] text-primary-foreground hover:shadow-lg hover:brightness-105 transition-all">
                <Link href="https://www.ggcheckout.com/checkout/v2/lrIi8mBLlZBlWlptTTMJ" target="_blank">
                  Sim, eu quero viver essa transformação com meu filho
                </Link>
            </Button>
        </div>

      </div>
    </section>
  );
}
