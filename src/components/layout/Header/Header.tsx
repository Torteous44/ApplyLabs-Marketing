'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/language-context'
import { useTranslation } from '@/hooks/useTranslation'
import { useScrolled } from '@/hooks/useScrolled'
import { Modal } from '@/components/ui'
import { useState } from 'react'

export interface HeaderProps {
  className?: string
}

const Header = ({ className }: HeaderProps) => {
  const { language, toggleLanguage } = useLanguage()
  const t = useTranslation()
  const scrolled = useScrolled(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-none',
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/Logo.svg"
              alt="ApplyLab"
              className="h-8 md:h-9"
            />
          </Link>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-black font-medium">
              {t('getStarted')}
            </span>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-10 h-10 bg-[var(--color-brandBlue)] rounded-full flex items-center justify-center hover:bg-[var(--color-brandBlue)]/90 transition-colors cursor-pointer"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1H1M9 1V9" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="w-px h-6 bg-gray-300"></div>
            <button
              onClick={toggleLanguage}
              className="w-10 h-10 bg-[#AA1D1F] rounded-full flex items-center justify-center hover:bg-[#8A1517] transition-colors text-white font-medium text-sm cursor-pointer"
              title={t('switchToSpanish')}
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden flex items-center space-x-3">
            <span className="text-black font-medium text-sm">
              {t('getStarted')}
            </span>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-8 h-8 bg-[#0C1442] rounded-full flex items-center justify-center hover:bg-[#14216c] transition-colors cursor-pointer"
            >
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1H1M9 1V9" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="w-px h-5 bg-gray-300"></div>
            <button
              onClick={toggleLanguage}
              className="w-8 h-8 bg-[#AA1D1F] rounded-full flex items-center justify-center hover:bg-[#8A1517] transition-colors text-white font-medium text-xs"
              title={t('switchToSpanish')}
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  )
}

export { Header } 