import { DEFAULT_AGENT_CONFIG } from '@/const/settings';
import { ModelProviderCard } from '@/types/llm';
import {
  AnthropicConfig,
  AWSBedrockConfig,
  AzureOpenAIConfig,
  GeminiConfig,
  GoogleConfig,
  GroqConfig,
  HuggingFaceConfig,
  MistralConfig,
  MoonshotConfig,
  OllamaConfig,
  OpenAIConfig,
  PerplexityConfig,
  ZhiPuConfig,
} from '@/types/settings';

export const DEFAULT_OPENAI_CONFIG: OpenAIConfig = {
  OPENAI_API_KEY: '',
  customModelName: 'gpt-3.5-turbo',
  enabled: true,
};

export const DEFAULT_AZURE_OPENAI_CONFIG: AzureOpenAIConfig = {
  apiKey: '',
  deployments: '',
  enabled: false,
};

export const DEFAULT_ANTHROPIC_CONFIG: AnthropicConfig = {
  apiKey: '',
  enabled: false,
};

export const DEFAULT_ZHIPU_CONFIG: ZhiPuConfig = {
  apiKey: '',
  enabled: false,
};

export const DEFAULT_MOONSHOT_CONFIG: MoonshotConfig = {
  apiKey: '',
  enabled: false,
};

export const DEFAULT_GOOGLE_CONFIG: GoogleConfig = {
  apiKey: '',
  enabled: false,
};

export const DEFAULT_BEDROCK_CONFIG: AWSBedrockConfig = {
  accessKeyId: '',
  enabled: false,
  region: '',
  secretAccessKey: '',
};

export const DEFAULT_OLLAMA_CONFIG: OllamaConfig = {
  enabled: false,
};

export const DEFAULT_PERPLEXITY_CONFIG: PerplexityConfig = {
  apiKey: '',
  enabled: false,
};

export const DEFAULT_MISTRAL_CONFIG: MistralConfig = {
  apiKey: '',
  enabled: false,
};

export const DEFAULT_GROQ_CONFIG: GroqConfig = {
  apiKey: '',
  enabled: false,
};

export const DEFAULT_GEMINI_CONFIG: GeminiConfig = {
  apiKey: '',
  enabled: false,
};

export const DEFAULT_HUGGINGFACE_CONFIG: HuggingFaceConfig = {
  apiKey: '',
  enabled: false,
  model: 'gpt2',
};

export const MODEL_PROVIDER_CONFIGS = {
  anthropic: DEFAULT_ANTHROPIC_CONFIG,
  aws: DEFAULT_BEDROCK_CONFIG,
  azure: DEFAULT_AZURE_OPENAI_CONFIG,
  gemini: DEFAULT_GEMINI_CONFIG,
  google: DEFAULT_GOOGLE_CONFIG,
  groq: DEFAULT_GROQ_CONFIG,
  huggingface: DEFAULT_HUGGINGFACE_CONFIG,
  mistral: DEFAULT_MISTRAL_CONFIG,
  moonshot: DEFAULT_MOONSHOT_CONFIG,
  ollama: DEFAULT_OLLAMA_CONFIG,
  openai: DEFAULT_OPENAI_CONFIG,
  perplexity: DEFAULT_PERPLEXITY_CONFIG,
  zhipu: DEFAULT_ZHIPU_CONFIG,
};

export const MODEL_PROVIDER_CARDS: ModelProviderCard[] = [
  { icon: 'openai', id: 'openai', name: 'OpenAI' },
  { icon: 'anthropic', id: 'anthropic', name: 'Anthropic' },
  { icon: 'zhipu', id: 'zhipu', name: 'ZhiPu AI' },
  { icon: 'moonshot', id: 'moonshot', name: 'Moonshot AI' },
  { icon: 'google', id: 'google', name: 'Google AI' },
  { icon: 'azure', id: 'azure', name: 'Azure OpenAI' },
  { icon: 'perplexity', id: 'perplexity', name: 'Perplexity AI' },
  { icon: 'aws', id: 'aws', name: 'AWS Bedrock' },
  { icon: 'ollama', id: 'ollama', name: 'Ollama' },
  { icon: 'mistral', id: 'mistral', name: 'Mistral AI' },
  { icon: 'groq', id: 'groq', name: 'Groq' },
  { icon: 'google', id: 'gemini', name: 'Google Gemini' },
  { icon: 'huggingface', id: 'huggingface', name: 'Hugging Face' },
];

