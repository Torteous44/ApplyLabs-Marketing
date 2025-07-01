'use client';
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { TranslationKey } from '@/lib/translations';
import { Modal } from '@/components/ui';

const features: {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  href: string;
}[] = [
  { titleKey: 'autoApplyTitle', descKey: 'autoApplyDesc', href: '#' },
  { titleKey: 'autoFillExtensionTitle', descKey: 'autoFillExtensionDesc', href: '#' },
  { titleKey: 'cvOptimizerTitle', descKey: 'cvOptimizerDesc', href: '#' },
  { titleKey: 'coverLetterAITitle', descKey: 'coverLetterAIDesc', href: '#' },
  { titleKey: 'smartJobBoardTitle', descKey: 'smartJobBoardDesc', href: '#' },
  { titleKey: 'trackingDashboardTitle', descKey: 'trackingDashboardDesc', href: '#' },
];

export default function FeatureGridSection() {
  const t = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="w-full bg-[#F3F3F3] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[340px_1px_1.5fr] gap-x-0 items-stretch mb-10 md:mb-14">
          <h2 className="text-3xl font-normal text-black mb-4 lg:mb-0 pr-6 lg:pr-10">{t('everythingYouNeedHeading')}</h2>
          <div className="hidden lg:block h-full self-stretch bg-black/10 w-px mx-0" />
          <div className="text-base md:text-lg text-black pl-0 lg:pl-10">
            {t('everythingYouNeedDesc')}
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-black/10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-black/10">
            {features.map((f, i) => (
              <article key={f.titleKey} className="relative flex flex-col p-6 min-h-[140px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-[var(--color-brandRed)] inline-block"></span>
                  <span className=" text-xl font-normal text-black">{t(f.titleKey)}</span>
                </div>
                <div className="text-black text-sm md:text-base mb-4 pb-8">{t(f.descKey)}</div>
                <a
                  href={f.href}
                  className="relative w-full pr-8 rounded-full bg-[var(--color-brandBlue)] text-white text-sm font-normal hover:bg-[var(--color-brandBlue)]/90 transition flex items-center justify-left h-8 mt-auto pl-4"
                >
                  {t('learnMore')}
                  <ArrowUpRight className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 stroke-1" />
                </a>
              </article>
            ))}
            {/* CTA cell spans 2 on lg */}
            <div className="lg:col-span-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white flex flex-col lg:flex-row items-center p-6 min-h-[140px]">
              <div className="mb-4 lg:mb-0 max-w-xs">
                <div className="font-normal text-base md:text-lg">{t('getStartedFree')}</div>
                <div className="text-white/90 text-sm md:text-base">{t('ctaDescription')}</div>
              </div>
              <div className="flex-1 flex justify-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-5 py-2 rounded-full bg-white text-gray-900 text-sm font-medium hover:bg-gray-200 transition cursor-pointer"
                >
                  {t('signUp')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
} 