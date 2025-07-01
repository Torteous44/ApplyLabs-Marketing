'use client';

import { useLanguage } from '@/lib/language-context';
import { getTranslation, TranslationKey } from '@/lib/translations';

/**
 * A convenience hook to fetch translated strings using the active language
 * from the global LanguageContext.
 *
 * Usage:
 * const t = useTranslation();
 * const label = t('getStarted');
 */
export function useTranslation() {
  const { language } = useLanguage();
  return (key: TranslationKey) => getTranslation(key, language);
} 