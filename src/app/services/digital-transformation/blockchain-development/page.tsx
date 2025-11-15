import ServiceHeroSection from '@/components/sections/services/ServiceHeroSection';
import { FooterSection, ServicesSection, TechnologiesSection, FAQSection } from '@/components/sections';

export const metadata = {
  title: 'Blockchain Development Services | Smart Contracts & DApps',
  description: 'Build decentralized applications and smart contracts. Ethereum, Solidity, and Web3 development.',
};

export default function BlockchainDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <ServiceHeroSection
        badge={{ icon: 'link', text: 'Blockchain Development' }}
        title="Blockchain &"
        highlightedTitle="Web3 Solutions"
        description="Build decentralized applications, smart contracts, and blockchain solutions. Expert development on Ethereum, Solidity, and emerging Web3 technologies."
      />
      <ServicesSection />
      <TechnologiesSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
