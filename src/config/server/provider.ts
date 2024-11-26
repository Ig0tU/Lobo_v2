/* eslint-disable sort-keys-fix/sort-keys-fix , typescript-sort-keys/interface */

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CUSTOM_MODELS?: string;

      API_KEY_SELECT_MODE?: string;

      // OpenAI Provider
      OPENAI_API_KEY?: string;
      OPENAI_PROXY_URL?: string;
      OPENAI_FUNCTION_REGIONS?: string;

      // Azure OpenAI Provider
      AZURE_API_KEY?: string;
      AZURE_ENDPOINT?: string;
      AZURE_API_VERSION?: string;
      USE_AZURE_OPENAI?: string;

      // ZhiPu Provider
      ZHIPU_API_KEY?: string;
      ZHIPU_PROXY_URL?: string;

      // Google Provider
      GOOGLE_API_KEY?: string;

      // Moonshot Provider
      MOONSHOT_API_KEY?: string;
      MOONSHOT_PROXY_URL?: string;

      // Perplexity Provider
      PERPLEXITY_API_KEY?: string;

      // Anthropic Provider
      ANTHROPIC_API_KEY?: string;
      ANTHROPIC_PROXY_URL?: string;

      // Mistral Provider
      MISTRAL_API_KEY?: string;

      // Groq Provider
      GROQ_API_KEY?: string;

      // OpenRouter Provider
      OPENROUTER_API_KEY?: string;
      OPENROUTER_CUSTOM_MODELS?: string;

      // ZeroOne Provider
      ZEROONE_API_KEY?: string;

      // TogetherAI Provider
      TOGETHERAI_API_KEY?: string;

      // AWS Credentials
      AWS_REGION?: string;
      AWS_ACCESS_KEY_ID?: string;
      AWS_SECRET_ACCESS_KEY?: string;

      // Ollama Provider;
      OLLAMA_PROXY_URL?: string;
      OLLAMA_CUSTOM_MODELS?: string;

      // Gemini Provider
      GEMINI_API_KEY?: string;

      // Hugging Face Provider
      HUGGINGFACE_API_KEY?: string;
    }
  }
}

export const getProviderConfig = () => {
  if (typeof process === 'undefined') {
    throw new Error('[Server Config] you are importing a server-only module outside of server');
  }

  const ZHIPU_API_KEY = process.env.ZHIPU_API_KEY || '';
  const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || '';
  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || '';
  const MOONSHOT_API_KEY = process.env.MOONSHOT_API_KEY || '';
  const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY || '';
  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || '';
  const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY || '';
  const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
  const ZEROONE_API_KEY = process.env.ZEROONE_API_KEY || '';
  const TOGETHERAI_API_KEY = process.env.TOGETHERAI_API_KEY || '';
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
  const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY || '';

  let regions: string[] = [];
  if (process.env.OPENAI_FUNCTION_REGIONS) {
    regions = process.env.OPENAI_FUNCTION_REGIONS.split(',');
  }

  return {
    CUSTOM_MODELS: process.env.CUSTOM_MODELS,
    API_KEY_SELECT_MODE: process.env.API_KEY_SELECT_MODE,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    OPENAI_PROXY_URL: process.env.OPENAI_PROXY_URL,
    ANTHROPIC_PROXY_URL: process.env.ANTHROPIC_PROXY_URL,
    OPENROUTER_CUSTOM_MODELS: process.env.OPENROUTER_CUSTOM_MODELS,
    MOONSHOT_PROXY_URL: process.env.MOONSHOT_PROXY_URL,
    AWS_REGION: process.env.AWS_REGION,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || '',
    AZURE_API_KEY: process.env.AZURE_API_KEY,
    AZURE_API_VERSION: process.env.AZURE_API_VERSION,
    AZURE_ENDPOINT: process.env.AZURE_ENDPOINT,
    USE_AZURE_OPENAI: process.env.USE_AZURE_OPENAI === '1',
    ENABLE_OLLAMA: !!process.env.OLLAMA_PROXY_URL,
    OLLAMA_PROXY_URL: process.env.OLLAMA_PROXY_URL || '',
    OLLAMA_CUSTOM_MODELS: process.env.OLLAMA_CUSTOM_MODELS,
    ZHIPU_API_KEY,
    AWS_ACCESS_KEY_ID,
    GOOGLE_API_KEY,
    MOONSHOT_API_KEY,
    PERPLEXITY_API_KEY,
    ANTHROPIC_API_KEY,
    MISTRAL_API_KEY,
    GROQ_API_KEY,
    OPENROUTER_API_KEY,
    ZEROONE_API_KEY,
    TOGETHERAI_API_KEY,
    GEMINI_API_KEY,
    HUGGINGFACE_API_KEY,
    OPENAI_FUNCTION_REGIONS: regions,
  };
};

export type ProviderConfig = ReturnType<typeof getProviderConfig>;
