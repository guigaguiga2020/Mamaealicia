import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function EmpathySection() {
  return (
    <section id="empathy" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Card className="shadow-lg">
            <CardHeader>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                Você já se sentiu culpada por ver seu filho preso na tela e sonhou com momentos de conexão real e aprendizado bíblico?
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground md:text-lg">
                Se a resposta for sim, saiba que você não está sozinha. A maternidade moderna nos impõe desafios que nenhuma outra geração enfrentou. Entre a rotina, o trabalho e a avalanche de informações, parece impossível encontrar tempo e energia para <strong className="text-primary-foreground/80">plantar as sementes eternas</strong> que tanto desejamos. Criamos a Mamãe Alicia para ser seu braço direito nessa jornada, com materiais que transformam o aprendizado da Palavra em uma aventura <strong className="text-primary-foreground/80">cheia de fé e diversão, sem culpa e com muita intencionalidade cristã.</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
