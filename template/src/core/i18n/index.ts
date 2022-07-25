import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as resources from './locale';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  // default language app
  detect: (cb: Function) => cb('vi'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use<any>(languageDetector)
  .use(initReactI18next)
  .init({
    resources: resources.default,
    fallbackLng: 'vi',
    ns: ['common'],
    defaultNS: 'common',
    compatibilityJSON: 'v3', // fix on android
  });

export default i18n;
