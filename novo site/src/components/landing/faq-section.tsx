import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Meu filho não vai se interessar por esse tipo de material.",
    answer: "Acredite, muitas mães pensaram a mesma coisa no começo — e acabaram surpreendidas. Os materiais da Mamãe Alicia foram feitos com base no universo infantil, com atividades lúdicas, coloridas e divertidas, que captam a atenção mesmo de crianças muito agitadas ou conectadas. É só apresentar com carinho e deixar que a curiosidade natural dele faça o resto. 🌟 Experimente e veja como o coraçãozinho dele responde."
  },
  {
    question: "Eu não tenho tempo para acompanhar meu filho nessas atividades.",
    answer: "A ideia aqui não é dar mais uma tarefa pra você, e sim facilitar sua vida. As atividades são simples, intuitivas e muitas podem ser feitas com autonomia — ou em momentos curtos de conexão. É menos sobre quantidade de tempo, e mais sobre qualidade. 🌿 Aos poucos, você vai perceber que é possível participar sem sobrecarga."
  },
  {
    question: "Eu já tentei de tudo e nada funciona para tirar meu filho da tela.",
    answer: "Essa é uma dor real e comum. Mas o segredo está em substituir, não só proibir. O Kit Mamãe Alicia propõe uma alternativa concreta — com propósito, diversão e significado. Muitos pais notaram mudanças já nos primeiros dias, quando a criança entende que existe outra forma de brincar e aprender. 👣 Um passo de cada vez, com amor e paciência."
  },
  {
    question: "Meu filho usa a tela para estudar ou se acalmar, não é tão ruim assim.",
    answer: "A tecnologia em si não é o problema — o excesso e a dependência, sim. O que oferecemos não é uma rejeição às telas, mas um resgate do equilíbrio e das experiências do mundo real. É possível usar o digital com consciência e, ao mesmo tempo, cultivar momentos que marcam a infância. 💡 O equilíbrio começa quando mostramos outras possibilidades."
  },
  {
    question: "É mais barato deixar ele no celular do que comprar mais uma coisa.",
    answer: "A tela parece gratuita, mas o custo emocional e comportamental pode sair caro a longo prazo. O kit foi pensado para ser acessível e ter um valor real na vida da criança. É um investimento na saúde emocional, no vínculo familiar e na fé — algo que nenhum aplicativo entrega. 💖 Se puder escolher, escolha o que deixa memória, não só distração."
  },
  {
    question: "Mas todo mundo usa tela hoje em dia, isso é normal.",
    answer: "É verdade, virou algo comum. Mas comum não quer dizer saudável. Você não precisa seguir o que “todo mundo” faz — você pode ser o ponto de virada na história da sua família. A infância passa rápido. E toda decisão conta. 🌈 Ser diferente hoje é o que pode garantir um futuro mais leve pro seu filho."
  },
  {
    question: "Isso é coisa de mãe perfeita, e eu não dou conta nem da rotina básica.",
    answer: "A Mamãe Alicia não foi feita pra mães perfeitas (porque elas não existem). Foi feita pra mães reais, que erram, choram e recomeçam todo dia. Aqui não tem julgamento. Tem apoio. 💌 O primeiro passo é sempre pequeno — e você não está sozinha nessa jornada."
  },
  {
    question: "Meu filho é muito agitado, ele não vai parar pra fazer essas atividades.",
    answer: "Esse tipo de criança, na verdade, se beneficia ainda mais de atividades manuais, criativas e com propósito. Os kits envolvem movimento, interação e curiosidade — não são apenas tarefas no papel. 💥 Já vimos muitas mães se surpreenderem com filhos superativos que, pela primeira vez, se envolveram de verdade."
  },
  {
    question: "Eu não sou religiosa, será que isso vai funcionar pra mim?",
    answer: "Claro! O conteúdo tem base cristã, mas os valores que ele transmite — como amor, gratidão, obediência e empatia — são universais. Se você acredita na importância de educar com propósito e construir uma base ética forte, esse material vai fazer sentido pra sua família. 🌻 Sinta-se livre para adaptar conforme seus princípios."
  },
  {
    question: "Deve ser só mais um curso digital ou conteúdo que vai ficar parado aqui.",
    answer: "A diferença está na proposta: aqui, você recebe materiais físicos e prontos pra usar — é algo que realmente entra na rotina. E o melhor: muitas mães contam que os filhos pedem para repetir as atividades, de tão envolventes que são. 📦 É um presente real para a infância — não mais um link perdido no e-mail."
  },
];


export function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Perguntas Frequentes</h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Respostas para as dúvidas que podem estar no seu coração de mãe.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
