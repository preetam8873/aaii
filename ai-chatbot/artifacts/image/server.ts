import { myProvider } from '@/lib/ai/providers';
import { createDocumentHandler } from '@/lib/artifacts/server';
import { experimental_generateImage } from 'ai';

export const imageDocumentHandler = createDocumentHandler<'image'>({
  kind: 'image',
  onCreateDocument: async ({ title, dataStream }) => {
    // Gemini does not support image generation via this SDK
    throw new Error(
      'Image generation is not supported with Google Gemini in this app.',
    );
  },
  onUpdateDocument: async ({ description, dataStream }) => {
    // Gemini does not support image generation via this SDK
    throw new Error(
      'Image generation is not supported with Google Gemini in this app.',
    );
  },
});
