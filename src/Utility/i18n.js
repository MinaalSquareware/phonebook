import en from '../Assets/Locales/en.json';
import de from '../Assets/Locales/de.json';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
i18n.translations = {
  en: en,
  'de-DE': de,
};

i18n.locale = Localization.locale;
i18n.defaultLocale = 'en';
i18n.fallbacks = true;
// console.log(i18n.currentLocale());

export function strings(name, params = {}) {
  return i18n.t(name, params);
}
