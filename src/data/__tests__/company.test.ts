import { describe, expect, it } from 'vitest';

import { company } from '@/data/company';

describe('company.contact', () => {
  it('uses the current HR/jobs phone number', () => {
    expect(company.contact.phoneJobs).toBe('+91 92899 09175');
  });

  it('keeps the primary email and phone populated', () => {
    expect(company.contact.email.trim()).not.toBe('');
    expect(company.contact.phone.trim()).not.toBe('');
  });
});
