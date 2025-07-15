"use client";

import { useFormState, useFormStatus } from "react-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { generateTitlesAction } from "../actions";
import { useEffect, useRef, useState } from "react";
import { Wand2, Loader2, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Gerando...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-5 w-5" />
          Gerar Títulos
        </>
      )}
    </Button>
  );
}

export function TitleGeneratorForm() {
  const [state, formAction] = useFormState(generateTitlesAction, initialState);
  const [ideas, setIdeas] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      setIdeas(state.data?.titleIdeas || []);
      formRef.current?.reset();
    }
    if (!state.success && state.message) {
       toast({
        title: "Erro na Geração",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <form ref={formRef} action={formAction}>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Gerador de Títulos com IA</CardTitle>
            <CardDescription>
              Descreva o material para receber sugestões de títulos criativos e
              envolventes, com um toque cristão.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="targetAudience">Público-alvo</Label>
              <Input
                id="targetAudience"
                name="targetAudience"
                placeholder="Ex: Crianças de 4 a 7 anos"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subjectMatter">Assunto Principal</Label>
              <Input
                id="subjectMatter"
                name="subjectMatter"
                placeholder="Ex: Histórias da Bíblia sobre coragem, Oração"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tone">Tom Desejado</Label>
              <Select name="tone" defaultValue="playful">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um tom" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="playful">Lúdico e divertido</SelectItem>
                  <SelectItem value="serious">Sério e reflexivo</SelectItem>
                  <SelectItem value="educational">Educacional</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </Card>
      </form>

      {ideas.length > 0 && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Ideias de Títulos Gerados</CardTitle>
            <CardDescription>
              Aqui estão algumas sugestões para você se inspirar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {ideas.map((idea, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-foreground">{idea}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
