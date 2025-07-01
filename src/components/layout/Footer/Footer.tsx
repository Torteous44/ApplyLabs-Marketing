'use client'

import Link from 'next/link'
import { ArrowRight, Linkedin } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export interface FooterProps {
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  const t = useTranslation();

  return (
    <footer className={`w-full bg-white text-black ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-10 flex flex-col min-h-[260px]">
        <div className="flex flex-col md:flex-row w-full min-h-[180px]">
          {/* Left: Newsletter & Logo */}
          <div className="flex-[2] flex flex-col justify-between md:pr-8">
            <div>
              <h3 className="text-2xl font-normal mb-4">{t('subscribeNewsletter')}</h3>
              <form className="flex items-center mb-8 max-w-xs">
                <input
                  type="email"
                  placeholder=""
                  className="flex-1 border border-black rounded-full px-4 py-2 h-10 outline-none text-base bg-white"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="-ml-10 z-10 bg-none rounded-full p-2 hover:bg-none"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </form>
            </div>
            <div className="mt-auto mb-2">
              <Link href="/" className="flex items-center">
                <img src="/Logo.svg" alt="ApplyLab" className="h-12 md:h-16" />
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-black/20 mx-8" />

          {/* Center: Navigation */}
          <div className="flex-1 flex flex-col justify-between md:px-8">
            <nav className="mt-2 mb-8">
              <ul className="space-y-2 text-xl font-normal">
                <li><Link href="#">{t('product')}</Link></li>
                <li><Link href="#">{t('solutions')}</Link></li>
                <li><Link href="#">{t('blog')}</Link></li>
                <li><Link href="#">{t('careers')}</Link></li>
              </ul>
            </nav>
            <div className="text-xs text-black/80 space-y-1">
              <div><Link href="/privacy">{t('privacyPolicy')}</Link></div>
              <div><Link href="#">{t('termsOfService')}</Link></div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-black/20 mx-8" />

          {/* Right: Social & Copyright */}
          <div className="flex-1 flex flex-col justify-between md:pl-8">
            <div className="flex flex-col items-start mt-2 mb-8 gap-2">
              <a href="#" className="inline-block" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="inline-block" aria-label="X">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
              </a>
            </div>
            <div className="text-xs text-black/80 mb-2">
              <div>@ 2025</div>
              <div>Madrid, Spain</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer } 