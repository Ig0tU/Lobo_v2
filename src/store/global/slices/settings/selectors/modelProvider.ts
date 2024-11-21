import { GlobalStore } from '@/store/global';
import { currentSettings } from './settings';

const modelProvider = (s: GlobalStore) => currentSettings(s).languageModel;

// ... (keep existing provider configurations)

const enableGemini = (s: GlobalStore) => modelProvider(s).gemini.enabled;
const geminiAPIKey = (s: GlobalStore) => modelProvider(s).gemini.apiKey;

const enableHuggingFace = (s: GlobalStore) => modelProvider(s).huggingface.enabled;
const huggingFaceAPIKey = (s: GlobalStore) => modelProvider(s).huggingface.apiKey;
const huggingFaceModel = (s: GlobalStore) => modelProvider(s).huggingface.model;

export const modelProviderSelectors = {
  // ... (keep existing selectors)
  enableGemini,
  geminiAPIKey,
  enableHuggingFace,
  huggingFaceAPIKey,
  huggingFaceModel,
};

