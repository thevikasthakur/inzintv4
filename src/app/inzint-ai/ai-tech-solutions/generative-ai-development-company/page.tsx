import { Metadata } from 'next';
import GenerativeAIHeroSection from '@/components/sections/ai/GenerativeAIHeroSection';
import GenerativeAIServicesSection from '@/components/sections/ai/GenerativeAIServicesSection';
import GenerativeAIUseCasesSection from '@/components/sections/ai/GenerativeAIUseCasesSection';
import GenerativeAITechStackSection from '@/components/sections/ai/GenerativeAITechStackSection';
import { FAQSection, FooterSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Generative AI Development Company | GPT & LLM Solutions',
  description: 'Build next-generation applications with GPT, LLMs, and generative AI models. Expert generative AI development services for innovative business solutions.',
  keywords: ['generative AI development', 'GPT integration', 'LLM development', 'AI application development', 'ChatGPT development'],
};

export default function GenerativeAIPage() {
  return (
    <main className="min-h-screen">
      <GenerativeAIHeroSection />
      <GenerativeAIServicesSection />
      <GenerativeAIUseCasesSection />
      <GenerativeAITechStackSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
