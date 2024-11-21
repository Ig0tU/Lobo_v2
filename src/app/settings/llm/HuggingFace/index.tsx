import { Form, Input, Select } from 'antd';
import { useTranslation } from 'react-i18next';

import { modelProviderSelectors } from '@/store/global/selectors';
import { useGlobalStore } from '@/store/global';
import { ProviderConfig } from '../components/ProviderConfig';

const HuggingFace = () => {
  const { t } = useTranslation('setting');
  const [apiKey, model, enableHuggingFace] = useGlobalStore((s) => [
    modelProviderSelectors.huggingFaceAPIKey(s),
    modelProviderSelectors.huggingFaceModel(s),
    modelProviderSelectors.enableHuggingFace(s),
  ]);

  return (
    <ProviderConfig
      id="huggingface"
      configItems={[
        {
          children: (
            <Form.Item
              label={t('llm.HuggingFace.apiKey.title')}
              name="apiKey"
              rules={[{ required: true, message: t('llm.HuggingFace.apiKey.required') }]}
            >
              <Input.Password placeholder={t('llm.HuggingFace.apiKey.placeholder')} />
            </Form.Item>
          ),
          name: 'apiKey',
        },
        {
          children: (
            <Form.Item
              label={t('llm.HuggingFace.model.title')}
              name="model"
              rules={[{ required: true, message: t('llm.HuggingFace.model.required') }]}
            >
              <Select
                options={[
                  { label: 'GPT-2', value: 'gpt2' },
                  { label: 'BERT', value: 'bert-base-uncased' },
                  // Add more model options as needed
                ]}
                placeholder={t('llm.HuggingFace.model.placeholder')}
              />
            </Form.Item>
          ),
          name: 'model',
        },
      ]}
      defaultValue={{
        apiKey,
        model,
      }}
      provider="huggingface"
      title={t('llm.HuggingFace.title')}
      enabled={enableHuggingFace}
    />
  );
};

export default HuggingFace;
