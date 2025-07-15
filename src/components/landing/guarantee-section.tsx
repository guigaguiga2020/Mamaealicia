import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Lock, Mail, MessageSquareHeart } from "lucide-react";

const guarantees = [
  {
    icon: BadgeCheck,
    text: "Garantia de 7 dias – devolução total sem perguntas"
  },
  {
    icon: Lock,
    text: "Pagamento seguro em ambiente 100% protegido"
  },
  {
    icon: Mail,
    text: "Acesso imediato e vitalício por e-mail após a compra"
  },
  {
    icon: MessageSquareHeart,
    text: "Suporte dedicado + acesso à comunidade de mães"
  }
]

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <Card className="max-w-4xl mx-auto shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter">Seu investimento é 100% seguro</h2>
              <p className="text-muted-foreground mt-2">Sua tranquilidade é nossa prioridade.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {guarantees.map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="font-semibold text-primary-foreground/90">{item.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
