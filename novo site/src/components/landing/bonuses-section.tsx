import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Palette, HeartHandshake } from "lucide-react";

const bonuses = [
  {
    icon: Calendar,
    title: "Planner de Leitura Bíblica",
    description: "Um guia para organizar a leitura em família de forma consistente e prazerosa."
  },
  {
    icon: Palette,
    title: "Pack de Artes para Colorir",
    description: "Versículos e cenas bíblicas em formato de desenho para as crianças pintarem."
  },
  {
    icon: HeartHandshake,
    title: "Guia de Oração em Família",
    description: "Dicas práticas para tornar a oração um hábito diário e significativo no seu lar."
  },
]

export function BonusesSection() {
  return (
    <section id="bonuses" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">E não é só isso! Leve também...</h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Ao garantir seu acesso hoje, você recebe estes bônus incríveis sem custo adicional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {bonuses.map((bonus) => (
            <Card key={bonus.title} className="text-center shadow-lg p-4">
              <CardHeader className="items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                  <bonus.icon className="w-8 h-8" />
                </div>
                <CardTitle>{bonus.title}</CardTitle>
                <Badge className="bg-[#F2A7B1] text-primary-foreground">GRÁTIS</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{bonus.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
