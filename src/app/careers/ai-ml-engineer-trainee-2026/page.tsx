import type { Metadata } from 'next';
import TraineePosting from './TraineePosting';

export const metadata: Metadata = {
  title: 'Full Stack AI & ML Engineer Trainee (2026 Batch)',
  description:
    'Closed posting for the 2026 batch of full stack AI and ML engineer trainees at Inzint, Noida. Recruitment for the 2027 batch opens in November 2026.',
  alternates: { canonical: '/careers/ai-ml-engineer-trainee-2026' },
};

export default function TraineePostingPage() {
  return <TraineePosting />;
}
