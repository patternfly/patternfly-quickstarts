import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import { dateTimeFormatter, fromNow } from './datetime';

import cs from '../locales/cs/quickstart.json';
import en from '../locales/en/quickstart.json';
import ja from '../locales/ja/quickstart.json';
import ko from '../locales/ko/quickstart.json';
import zh from '../locales/zh/quickstart.json';

declare const window: Window & {
  windowError: string;
};

i18n
  // .use(new Pseudo({ enabled: pseudolocalizationEnabled, wrapped: true }))
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(detector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      cs: {
        quickstart: cs,
      },
      en: {
        quickstart: en,
      },
      ja: {
        quickstart: ja,
      },
      ko: {
        quickstart: ko,
      },
      zh: {
        quickstart: zh,
      },
    },
    lng: localStorage.getItem('bridge/language'),
    fallbackLng: 'en',
    load: 'languageOnly',
    debug: process.env.NODE_ENV === 'development',
    detection: { caches: [] },
    contextSeparator: '~',
    // add any namespaces you're using here for loading purposes
    ns: ['quickstart'],
    defaultNS: 'quickstart',
    nsSeparator: '~',
    keySeparator: false,
    postProcess: ['pseudo'],
    interpolation: {
      format: function(value, format, lng, options) {
        if (format === 'number') {
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat#Browser_compatibility
          return new Intl.NumberFormat(lng).format(value);
        }
        if (value instanceof Date) {
          if (format === 'fromNow') {
            return fromNow(value, null, options);
          }
          return dateTimeFormatter.format(value);
        }
        return value;
      },
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: true,
      wait: true,
    },
    saveMissing: true,
    missingKeyHandler: function(lng, ns, key) {
      window.windowError = `Missing i18n key "${key}" in namespace "${ns}" and language "${lng}."`;
      // eslint-disable-next-line no-console
      console.error(window.windowError); // we use these in OpenShift to break tests
    },
  });

export default i18n;
