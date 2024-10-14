import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationEn from './locales/en/translation.json';
import translationAr from './locales/ar/translation.json';

// Configure i18n
i18n
  .use(LanguageDetector) // Automatically detects the user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEn, // English translations
      },
      ar: {
        translation: translationAr, // Arabic translations
      },
    },
    fallbackLng: 'en', // Default language if no language is detected
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    react: {
      useSuspense: false,
    },
    detection: {
      // Options for language detection
      order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    },
  });

export default i18n;
