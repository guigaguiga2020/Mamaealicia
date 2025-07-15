import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const testimonialImages = [
  {
    src: "https://i.imgur.com/GpNyMkz.jpeg",
    alt: "Depoimento de uma mãe em imagem",
    hint: "testimonial screenshot"
  },
  {
    src: "https://i.imgur.com/0YGewwh.jpeg",
    alt: "Depoimento de uma mãe em imagem",
    hint: "testimonial screenshot"
  },
  {
    src: "https://i.imgur.com/8kUtlCl.jpeg",
    alt: "Depoimento de uma mãe em imagem",
    hint: "testimonial screenshot"
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">O que mães reais estão dizendo</h2>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed">
                Veja como a vida de outras famílias foi transformada.
            </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto mt-12"
        >
          <CarouselContent className="-ml-4">
            {testimonialImages.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                       <Image
                        src={testimonial.src}
                        alt={testimonial.alt}
                        width={400}
                        height={600}
                        className="aspect-[4/6] w-full object-contain"
                        data-ai-hint={testimonial.hint}
                       />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  )
}
