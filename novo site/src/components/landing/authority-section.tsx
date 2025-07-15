import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export function AuthoritySection() {
  return (
    <section id="authority" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center">
            <Image
              src="https://i.imgur.com/yXDYklP.png"
              width={400}
              height={400}
              alt="Mamãe Alicia"
              className="rounded-lg shadow-2xl"
              data-ai-hint="product mockup"
            />
          </div>
          <Card className="shadow-lg">
            <CardHeader>
              <p className="text-lg font-semibold text-primary">Mamãe Alicia, Educadora Cristã</p>
              <CardTitle className="text-3xl md:text-4xl">Quem está por trás de tudo isso?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground text-base md:text-lg">
              <p>
                Oi, eu sou a Alicia! Mãe, esposa, e apaixonada por ver crianças crescendo com corações que amam a Jesus. Como muitas de vocês, eu senti na pele a dificuldade de competir com as telas. Vi a necessidade de criar algo que fosse tão atrativo quanto um jogo, mas que edificasse a alma.
              </p>
              <p>
                Com formação em pedagogia e anos de experiência no ministério infantil, desenvolvi um método que une diversão e profundidade bíblica. Já ajudei centenas de mães a <strong className="text-primary-foreground/80">resgatar momentos preciosos</strong> e a construir um alicerce de fé sólido na vida dos seus pequenos. Meu maior desejo é que sua família também experimente essa transformação.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
