import { en } from './en';
import { zh } from './zh';

export const locales = {
  en,
  zh,
};

export type Locale = keyof typeof locales;
export type Translation = typeof en;
