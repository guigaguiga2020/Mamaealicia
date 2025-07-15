import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { EmpathySection } from '@/components/landing/empathy-section';
import { AuthoritySection } from '@/components/landing/authority-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { IsItForYouSection } from '@/components/landing/is-it-for-you-section';
import { LimitedOfferSection } from '@/components/landing/limited-offer-section';
import { OffersSection } from '@/components/landing/offers-section';
import { BonusesSection } from '@/components/landing/bonuses-section';
import { TransformationSection } from '@/components/landing/transformation-section';
import { GuaranteeSection } from '@/components/landing/guarantee-section';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';
import { FloatingContactButton } from '@/components/landing/floating-contact-button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <EmpathySection />
        <AuthoritySection />
        <TestimonialsSection />
        <HowItWorksSection />
        <IsItForYouSection />
        <LimitedOfferSection />
        <OffersSection />
        <BonusesSection />
        <TransformationSection />
        <GuaranteeSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  );
}
