import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const socialProof = [
  {
    name: "Mariana Costa",
    image: "https://i.imgur.com/bojeKxT.jpeg",
    imageHint: "woman smiling",
    testimonial: "“Antes eu me sentia culpada por deixar minha filha tanto tempo no celular… agora, nossos momentos juntos têm propósito. Ela aprendeu sobre a Bíblia brincando, e eu voltei a ser sua maior influência. Foi a melhor decisão que tomei como mãe.”",
  },
  {
    name: "Sofia Almeida",
    image: "https://i.imgur.com/eO5uLnZ.jpeg",
    imageHint: "happy mother",
    testimonial: "“Diminuímos o tempo de tela em mais de 70%! As atividades são tão envolventes que as crianças nem lembram do tablet. É um alívio e uma bênção imensa.”",
  }
]

export function TransformationSection() {
  return (
    <section id="transformation" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Veja a transformação que te espera</h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Resultados que vão muito além do papel.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialProof.map((proof) => (
            <Card key={proof.name} className="shadow-lg">
              <CardContent className="p-8 flex flex-col items-center text-center">
                 <Image 
                    src={proof.image} 
                    alt={`Depoimento de ${proof.name}`} 
                    width={100} 
                    height={100} 
                    className="w-[100px] h-[100px] rounded-full object-cover mb-6"
                    data-ai-hint={proof.imageHint}
                  />
                  <p className="font-bold font-headline text-xl text-primary-foreground/90 mb-4">{proof.name}</p>
                  <p className="text-base text-muted-foreground">{proof.testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
