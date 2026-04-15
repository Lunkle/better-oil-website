import { en } from './en';
import { zh } from './zh';

export type LocaleKey = 'en' | 'zh';

// We need to type the nested structure to ensure it's predictable
export type NavItemChild = {
  name: string;
  href: string;
};

export type NavItemParent = {
  parent: string;
  href?: string;
  children?: NavItemChild[];
};

export type NavItem = {
  name: string;
  href: string;
  dropdown?: NavItemParent[];
};

export const dictionaries = {
  en,
  zh,
};
