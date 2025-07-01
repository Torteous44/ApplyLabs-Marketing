'use client';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { TranslationKey } from '@/lib/translations';
import AutoApplyMockup from '../../composed/AutoApplyMockup';
import ResumeOptimizerMockup from '../../composed/ResumeOptimizerMockup';
import ProgressDashboardMockup from '../../composed/ProgressDashboardMockup';

const features: {
  icon: string;
  headingKey: TranslationKey;
  descKey: TranslationKey;
  mockupAlt: string;
}[] = [
  {
    icon: '/Mouse.svg',
    headingKey: 'applyOnAutopilot',
    descKey: 'applyOnAutopilotDesc',
    mockupAlt: 'AutoApply',
  },
  {
    icon: '/document..svg',
    headingKey: 'documentsThatWin',
    descKey: 'documentsThatWinDesc',
    mockupAlt: 'Documents',
  },
  {
    icon: '/Progress.svg',
    headingKey: 'seeYourProgress',
    descKey: 'seeYourProgressDesc',
    mockupAlt: 'Progress',
  },
] as const;

export default function FeatureTilesSection() {
  const t = useTranslation();
  return (
    <section className="bg-white text-black w-full py-16 md:py-28">
      <div className="max-w-7xl mx-auto flex flex-col gap-20 md:gap-28 px-4 md:px-8">
        {features.map((feature, i) => (
          <div key={feature.headingKey} className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
            {/* Left: Icon + Text in a row */}
            <div className="flex-[1] flex flex-col min-w-[320px] max-w-2xl">
              <div className="flex flex-row items-center gap-4 md:gap-5">
                <Image src={feature.icon} alt="" width={28} height={28} className="mt-[-8] shrink-0" />
                <div className="font-normal text-xl md:text-2xl">{t(feature.headingKey as TranslationKey)}</div>
              </div>
              <div className="text-md md:text-lg text-black/80 leading-snug mt-2">{t(feature.descKey as TranslationKey)}</div>
            </div>
            {/* Right: Mockup placeholder */}
            <div className="hidden md:flex flex-[2] w-full justify-center md:justify-end">
              <div className="w-full md:w-[720px] h-[280px] md:h-[420px] bg-white border-[0.5px] border-black rounded-lg overflow-hidden flex flex-col">
                {/* macOS-style tab bar */}
                <div className="bg-gray-100 border-b border-gray-300 px-4 py-2 flex items-center">
                  {/* Traffic light buttons */}
                  <div className="flex gap-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  {/* Tab title */}
                  <div className="text-sm text-gray-600 font-medium">{feature.mockupAlt}</div>
                </div>
                {/* Content area */}
                <div className="flex-1 flex items-center justify-center">
                  {i === 0 ? (
                    <AutoApplyMockup />
                  ) : i === 1 ? (
                    <ResumeOptimizerMockup />
                  ) : i === 2 ? (
                    <ProgressDashboardMockup />
                  ) : (
                    <span className="text-gray-300 text-base">{feature.mockupAlt}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 