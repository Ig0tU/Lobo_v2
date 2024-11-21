import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { modelProviderSelectors } from '@/store/global/selectors';
import { useGlobalStore } from '@/store/global';
import { ProviderConfig } from '../components/ProviderConfig';

const Gemini = () => {
  const { t } = useTranslation('setting');
  const [apiKey, enableGemini] = useGlobalStore((s) => [
    modelProviderSelectors.geminiAPIKey(s),
    modelProviderSelectors.enableGemini(s),
  ]);

  return (
    <ProviderConfig
      id="gemini"
      configItems={[
        {
          children: (
            <Form.Item
              label={t('llm.Gemini.apiKey.title')}
              name="apiKey"
              rules={[{ required: true, message: t('llm.Gemini.apiKey.required') }]}
            >
              <Input.Password placeholder={t('llm.Gemini.apiKey.placeholder')} />
            </Form.Item>
          ),
          name: 'apiKey',
        },
      ]}
      defaultValue={{
        apiKey,
      }}
      provider="gemini"
      title={t('llm.Gemini.title')}
      enabled={enableGemini}
    />
  );
};

export default Gemini;
