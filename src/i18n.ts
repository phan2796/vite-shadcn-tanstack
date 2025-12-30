import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import homeEn from './locales/en/home.json';
import homeVi from './locales/vi/home.json';

export const LANGUAGES = {
  en: 'English',
  vi: 'Việt Nam'
};
const resources = {
  en: {
    home: homeEn
  },
  vi: {
    home: homeVi
  }
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: resources,
    fallbackLng: 'en',
    defaultNS: 'home',
    ns: ['home'],
    debug: true,
    // Load language from localStorage if available
    lng: localStorage.getItem('i18nextLng') || 'en',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;