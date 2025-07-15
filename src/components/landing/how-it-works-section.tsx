import { BookOpen, Users, Gift } from 'lucide-react';

const journeySteps = [
  {
    icon: BookOpen,
    title: "Materiais Infantis (2–8 anos)",
    description: "Atividades lúdicas, histórias bíblicas interativas e jogos que ensinam verdades profundas de forma leve e divertida."
  },
  {
    icon: BookOpen,
    title: "Materiais Pré-adolescentes (8–14 anos)",
    description: "Devocionais, estudos temáticos e desafios que conectam a Palavra com os dilemas e questões da idade."
  },
  {
    icon: Users,
    title: "Comunidade no WhatsApp",
    description: "Um espaço seguro para trocar experiências, tirar dúvidas e receber encorajamento de outras mães na mesma jornada de fé."
  },
  {
    icon: Gift,
    title: "Atualizações & Bônus",
    description: "Acesso a novos materiais adicionados periodicamente e bônus exclusivos para membros."
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sua jornada de conexão começa aqui</h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed">
            É simples, prático e pensado para a rotina de uma mãe real.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
          {/* Vertical line for mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 md:hidden"></div>
          
          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6 md:gap-0 md:grid md:grid-cols-2 md:items-center md:gap-16">
                  {/* Left Side Content (or top on mobile) */}
                  <div className={`md:text-right ${index % 2 === 0 ? 'md:pr-16' : 'md:order-2 md:pl-16'}`}>
                    <h3 className="text-xl font-bold text-primary-foreground/90">{step.title}</h3>
                    <p className="text-muted-foreground mt-1">{step.description}</p>
                  </div>
                  
                  {/* Icon */}
                  <div className={`absolute left-8 -translate-x-1/2 md:relative md:left-auto md:translate-x-0 ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                     <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center ring-8 ring-secondary/50 z-10 relative">
                        <step.icon className="w-8 h-8"/>
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
