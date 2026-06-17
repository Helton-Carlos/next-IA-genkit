import { googleAI } from '@genkit-ai/google-genai';
import { genkit, z } from 'genkit';

const ai = genkit({
  plugins: [googleAI()],
});

export const menuSuggestionFlow = ai.defineFlow(
  {
    name: 'menuSuggestionFlow',
    inputSchema: z.object({
      chat: z.object({
        context: z.string(),
        idioma: z.string(),
        nivel: z.string(),
        nome: z.string(),
      }),
    }),
    outputSchema: z.object({ menuItem: z.string() }),
    streamSchema: z.string(),
  },
  async ({ chat }, { sendChunk }) => {
    const { stream, response } = await ai.generateStream({
      model: googleAI.model('gemini-2.5-flash'),
      prompt: `O usuário ${chat.nome} (nível: ${chat.nivel}) enviou a seguinte mensagem no idioma ${chat.idioma}: "${chat.context}". Responda de acordo.`,
    });

    for await (const chunk of stream) {
      sendChunk(chunk.text);
    }

    const { text } = await response;
    return { menuItem: text };
  },
);