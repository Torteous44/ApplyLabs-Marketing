import { Header, Footer } from '@/components/layout'
import { HeroSection, FeatureTilesSection, FeatureGridSection } from '@/components/pages/landing'

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeatureTilesSection />
        <FeatureGridSection />
        {/* Future sections will go here */}
      </main>
      <Footer />
    </>
  )
}
