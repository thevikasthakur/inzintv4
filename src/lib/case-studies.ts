import fs from 'node:fs';
import path from 'node:path';
import { caseStudyRecords, type CaseStudy, type CaseStudyRecord } from '@/data/case-studies';

const WORDS_PER_MINUTE = 225;

/**
 * Word count of the public article, using the same trimming rules as the
 * article routes: drop the H1, stop at the optional cutoff heading and strip
 * inline research citation tokens.
 */
function articleWordCount(record: CaseStudyRecord): number {
  try {
    const source = fs.readFileSync(path.join(process.cwd(), record.markdownPath), 'utf8');
    const body = (record.markdownCutoff ? source.split(record.markdownCutoff)[0] : source)
      .replace(/^# .+\n+/, '')
      .replace(/\s*\u{E200}[^\u{E201}]*\u{E201}/gu, '');

    return body.split(/\s+/).filter(Boolean).length;
  } catch {
    return 0;
  }
}

/** All case studies with derived reading data, newest first. */
export function getCaseStudies(): CaseStudy[] {
  return caseStudyRecords
    .map((record) => {
      const wordCount = articleWordCount(record);

      return {
        ...record,
        wordCount,
        readTime: Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE)),
      };
    })
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
}
