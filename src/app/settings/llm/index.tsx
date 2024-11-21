import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import PageTitle from '@/components/PageTitle';
import { MODEL_PROVIDER_CONFIGS } from '@/const/settings';

import Anthropic from './Anthropic';
import AWSBedrock from './AWSBedrock';
import AzureOpenAI from './AzureOpenAI';
import Gemini from './Gemini';
import Google from './Google';
import Groq from './Groq';
import HuggingFace from './HuggingFace';
import Mistral from './Mistral';
import Moonshot from './Moonshot';
import Ollama from './Ollama';
import OpenAI from './OpenAI';
import Perplexity from './Perplexity';
import ZhiPu from './ZhiPu';

const LLMSettings = memo(() => {
  const { t } = useTranslation('setting');

  return (
    <div>
      <PageTitle title={t('llm.title')} />
      <OpenAI />
      <AzureOpenAI />
      <Anthropic />
      <Google />
      <Gemini />
      <HuggingFace />
      <Groq />
      <Mistral />
      <Moonshot />
      <Ollama />
      <Perplexity />
      <ZhiPu />
      <AWSBedrock />
    </div>
  );
});

export default LLMSettings;
