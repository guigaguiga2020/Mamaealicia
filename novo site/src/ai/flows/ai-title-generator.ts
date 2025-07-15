'use server';

/**
 * @fileOverview Generates creative and engaging titles for Christian-themed children's materials.
 *
 * - generateTitleIdeas - A function that generates title ideas.
 * - AiTitleGeneratorInput - The input type for the generateTitleIdeas function.
 * - AiTitleGeneratorOutput - The return type for the generateTitleIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiTitleGeneratorInputSchema = z.object({
  targetAudience: z
    .string()
    .describe('The target audience for the children\'s material (e.g., ages 4-7).'),
  subjectMatter: z.string().describe('The subject matter of the material (e.g., Bible stories, prayer).'),
  tone: z.string().describe('The desired tone of the title (e.g., playful, serious, educational).'),
});

export type AiTitleGeneratorInput = z.infer<typeof AiTitleGeneratorInputSchema>;

const AiTitleGeneratorOutputSchema = z.object({
  titleIdeas: z.array(z.string()).describe('An array of creative title ideas.'),
});

export type AiTitleGeneratorOutput = z.infer<typeof AiTitleGeneratorOutputSchema>;

export async function generateTitleIdeas(input: AiTitleGeneratorInput): Promise<AiTitleGeneratorOutput> {
  return aiTitleGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiTitleGeneratorPrompt',
  input: {schema: AiTitleGeneratorInputSchema},
  output: {schema: AiTitleGeneratorOutputSchema},
  prompt: `You are a creative marketing expert specializing in generating titles for Christian-themed children's materials.

  Generate multiple title options based on the following information:

  Target Audience: {{{targetAudience}}}
  Subject Matter: {{{subjectMatter}}}
  Tone: {{{tone}}}

  Provide at least 5 title ideas.`,
});

const aiTitleGeneratorFlow = ai.defineFlow(
  {
    name: 'aiTitleGeneratorFlow',
    inputSchema: AiTitleGeneratorInputSchema,
    outputSchema: AiTitleGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
