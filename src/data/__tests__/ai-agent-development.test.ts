import { describe, expect, it } from 'vitest';

import {
  aiAgentDevelopmentContent,
  type AIAgentDevelopmentContent,
} from '@/data/ai-agent-development';
import { iconMap } from '@/lib/icons';

const content: AIAgentDevelopmentContent = aiAgentDevelopmentContent;

describe('aiAgentDevelopmentContent', () => {
  describe('well-formed', () => {
    it('has a fully populated hero', () => {
      const { hero } = content;
      expect(hero.title.trim()).not.toBe('');
      expect(hero.highlightedTitle.trim()).not.toBe('');
      expect(hero.description.trim()).not.toBe('');
      expect(hero.ctaText.trim()).not.toBe('');
      expect(hero.ctaHref.trim()).not.toBe('');
      expect(hero.benefits.length).toBeGreaterThan(0);
      expect(hero.benefits.every((b) => b.trim() !== '')).toBe(true);
      expect(hero.badge.text.trim()).not.toBe('');
    });

    it('has non-empty top-level content arrays', () => {
      expect(content.capabilities.length).toBeGreaterThan(0);
      expect(content.howItWorks.length).toBeGreaterThan(0);
      expect(content.useCases.length).toBeGreaterThan(0);
      expect(content.faqs.length).toBeGreaterThan(0);
    });

    it('has fully populated capabilities', () => {
      for (const cap of content.capabilities) {
        expect(cap.title.trim()).not.toBe('');
        expect(cap.description.trim()).not.toBe('');
        expect(cap.color.trim()).not.toBe('');
        expect(cap.features.length).toBeGreaterThan(0);
        expect(cap.features.every((f) => f.trim() !== '')).toBe(true);
      }
    });

    it('has fully populated use cases', () => {
      for (const uc of content.useCases) {
        expect(uc.title.trim()).not.toBe('');
        expect(uc.description.trim()).not.toBe('');
        expect(uc.results.length).toBeGreaterThan(0);
        expect(uc.results.every((r) => r.trim() !== '')).toBe(true);
      }
    });

    it('has fully populated how-it-works steps', () => {
      for (const step of content.howItWorks) {
        expect(step.title.trim()).not.toBe('');
        expect(step.description.trim()).not.toBe('');
      }
    });

    it('has fully populated faqs', () => {
      for (const faq of content.faqs) {
        expect(faq.id.trim()).not.toBe('');
        expect(faq.question.trim()).not.toBe('');
        expect(faq.answer.trim()).not.toBe('');
      }
    });
  });

  describe('icon-key contract', () => {
    it('every icon value is a real key of iconMap (no Circle fallback)', () => {
      const iconKeys: string[] = [
        content.hero.badge.icon,
        ...content.capabilities.map((c) => c.icon),
      ];
      for (const key of iconKeys) {
        expect(iconMap).toHaveProperty(key);
      }
    });
  });

  describe('invariants', () => {
    it('faq ids are unique', () => {
      const ids = content.faqs.map((f) => f.id);
      expect(new Set(ids).size).toBe(ids.length);
    });

    it('howItWorks step values are contiguous 1..n in array order', () => {
      content.howItWorks.forEach((step, index) => {
        expect(step.step).toBe(index + 1);
      });
    });
  });
});
