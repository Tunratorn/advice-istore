import { createI18n } from 'vue-i18n';
import lang_en from "../locales/en.json";
import lang_th from "../locales/th.json";

export default defineNuxtPlugin((nuxtApp) => {
  const messages = {
    en: lang_en,
    th: lang_th
  };

  const i18n = createI18n({
    legacy: false, // Use Composition API
    locale: 'en', // Default locale
    fallbackLocale: 'en', // Fallback locale
    messages, // Messages object
  });

  nuxtApp.vueApp.use(i18n);

});
