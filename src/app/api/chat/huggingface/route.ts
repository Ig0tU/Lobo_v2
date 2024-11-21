import { NextRequest, NextResponse } from 'next/server';
import { HfInference } from '@huggingface/inference';

import { getServerConfig } from '@/config/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const { HUGGINGFACE_API_KEY } = getServerConfig();

  if (!HUGGINGFACE_API_KEY) {
    return NextResponse.json({ error: 'Hugging Face API key not configured' }, { status: 500 });
  }

  const hf = new HfInference(HUGGINGFACE_API_KEY);

  try {
    const response = await hf.textGeneration({
      model: 'gpt2',
      inputs: messages[messages.length - 1].content,
      parameters: {
        max_new_tokens: 250,
        temperature: 0.7,
        top_k: 50,
        top_p: 0.95
      }
    });

    return NextResponse.json({ content: response.generated_text });
  } catch (error: any) {
    console.error('Error calling Hugging Face API:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
