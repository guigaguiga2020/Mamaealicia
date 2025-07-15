"use server";

import { generateTitleIdeas, AiTitleGeneratorInput, AiTitleGeneratorOutput } from "@/ai/flows/ai-title-generator";
import { z } from "zod";

const AiTitleGeneratorInputSchema = z.object({
  targetAudience: z.string().min(3, "Por favor, descreva o público-alvo."),
  subjectMatter: z.string().min(3, "Por favor, descreva o assunto."),
  tone: z.string(),
});

type FormState = {
  success: boolean;
  message: string;
  data?: AiTitleGeneratorOutput;
}

export async function generateTitlesAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawFormData = {
    targetAudience: formData.get("targetAudience"),
    subjectMatter: formData.get("subjectMatter"),
    tone: formData.get("tone"),
  };

  const validatedFields = AiTitleGeneratorInputSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Erro de validação. Verifique os campos.",
    };
  }

  try {
    const result = await generateTitleIdeas(validatedFields.data as AiTitleGeneratorInput);
    if (result && result.titleIdeas.length > 0) {
      return {
        success: true,
        message: "Títulos gerados com sucesso!",
        data: result,
      };
    } else {
       return { success: false, message: "A IA não conseguiu gerar títulos. Tente novamente com informações diferentes." };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Ocorreu um erro ao se comunicar com a IA. Tente novamente mais tarde." };
  }
}
