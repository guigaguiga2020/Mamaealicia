import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { TitleGeneratorForm } from "./components/title-generator-form";

export default function TitleGeneratorPage() {
  return (
    <div className="bg-secondary/50 min-h-screen">
      <header className="bg-background/95 border-b">
        <div className="container mx-auto flex h-16 items-center justify-start max-w-4xl">
          <Button asChild variant="ghost">
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Voltar para a página inicial
            </Link>
          </Button>
        </div>
      </header>
      <main className="py-8 md:py-16">
        <div className="container">
          <TitleGeneratorForm />
        </div>
      </main>
    </div>
  );
}
