//const cookieObj = typeof window === 'undefined' ? require('next/headers') : require('universal-cookie');

import en from './public/locales/en.json';
import ae from './public/locales/ae.json';
import da from './public/locales/da.json';
import de from './public/locales/de.json';
import el from './public/locales/el.json';
import es from './public/locales/es.json';
import fr from './public/locales/fr.json';
import hu from './public/locales/hu.json';
import it from './public/locales/it.json';
import ja from './public/locales/ja.json';
import pl from './public/locales/pl.json';
import pt from './public/locales/pt.json';
import ru from './public/locales/ru.json';
import sv from './public/locales/sv.json';
import tr from './public/locales/tr.json';
import zh from './public/locales/zh.json';
const langObj: any = { en, ae, da, de, el, es, fr, hu, it, ja, pl, pt, ru, sv, tr, zh };

// i18n.client.ts
import Cookies from 'universal-cookie';

export const getLangFromClient = () => {
  const cookies = new Cookies();
  return cookies.get('i18nextLng') ?? 'en';
};

export const getTranslation = () => {
    const lang = getLangFromClient();
    const data: any = langObj[lang || 'en'];

    const t = (key: string) => {
        return data[key] ? data[key] : key;
    };

    const initLocale = (themeLocale: string) => {
        const lang = getLangFromClient();
        i18n.changeLanguage(lang || themeLocale);
    };

    const i18n = {
        language: lang,
        changeLanguage: (lang: string) => {
            //const cookies = new cookieObj.default(null, { path: '/' });
            const cookies = new Cookies(null, { path: '/' });
            cookies.set('i18nextLng', lang);
        },
    };

    return { t, i18n, initLocale };
};
