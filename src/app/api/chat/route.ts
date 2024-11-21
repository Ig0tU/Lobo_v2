import { NextRequest, NextResponse } from 'next/server';
import { getServerConfig } from '@/config/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const { messages, provider } = await req.json();
  const config = getServerConfig();

  let response;

  switch (provider) {
    case 'gemini':
      if (!config.GEMINI_API_KEY) {
        return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 500 });
      }
      response = await fetch('/api/chat/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages }),
      });
      break;
    case 'huggingface':
      if (!config.HUGGINGFACE_API_KEY) {
        return NextResponse.json({ error: 'Hugging Face API key not configured' }, { status: 500 });
      }
      response = await fetch('/api/chat/huggingface', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages }),
      });
      break;
    // Add cases for other providers here
    default:
      return NextResponse.json({ error: 'Invalid provider' }, { status: 400 });
  }

  if (!response.ok) {
    const errorData = await response.json();
    return NextResponse.json({ error: errorData.error }, { status: response.status });
  }

  const data = await response.json();
  return NextResponse.json(data);
}
