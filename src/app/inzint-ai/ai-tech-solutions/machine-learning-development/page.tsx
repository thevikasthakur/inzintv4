import { Metadata } from 'next';
import { FAQSection, FooterSection } from '@/components/sections';
import AIServiceTemplate from '@/components/sections/ai/AIServiceTemplate';

export const metadata: Metadata = {
  alternates: { canonical: '/inzint-ai/ai-tech-solutions/machine-learning-development' },
  title: 'Machine Learning Development | ML Solutions & Services',
  description: 'ML solutions for predictive analytics and automation. Expert machine learning development services for intelligent business applications.',
  keywords: ['machine learning development', 'ML services', 'predictive analytics', 'ML automation', 'AI ML solutions'],
};

const pageData = {
  hero: {
    badge: { icon: 'cpu', text: 'Machine Learning Development' },
    title: 'Transform Data into',
    highlightedTitle: 'Intelligent Insights',
    description: 'Build powerful machine learning solutions for predictive analytics, automation, and intelligent decision-making. From prototype to production, we deliver ML models that drive real business value.',
    benefits: ['Predictive Analytics', 'Automated Decision Making', 'Scalable ML Pipelines', 'Production-Ready Models'],
    ctaText: 'Start Your ML Project',
    gradient: 'from-cyan-600 to-blue-600',
  },
  services: [
    {
      icon: 'database',
      title: 'Data Engineering',
      description: 'Build robust data pipelines for ML model training',
      features: ['Data Collection', 'ETL Pipelines', 'Feature Engineering', 'Data Warehousing'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: 'brain',
      title: 'Model Development',
      description: 'Design and train custom ML models for your needs',
      features: ['Algorithm Selection', 'Model Training', 'Hyperparameter Tuning', 'Model Evaluation'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'trending-up',
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven predictions',
      features: ['Time Series Analysis', 'Forecasting', 'Anomaly Detection', 'Pattern Recognition'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'zap',
      title: 'ML Ops',
      description: 'Deploy, monitor, and maintain ML models at scale',
      features: ['Model Deployment', 'CI/CD Pipelines', 'Monitoring', 'Auto-retraining'],
      color: 'from-orange-500 to-red-500',
    },
  ],
  useCases: [
    {
      title: 'Forecasting and anomaly detection',
      description: 'Time-series models for demand, usage and productivity data, as in our PeopleParity tracker.',
      results: ['Baseline before ML', 'Explainable alerts', 'Retraining schedule'],
    },
    {
      title: 'Classification and extraction',
      description: 'Turn documents, tickets and forms into structured data with confidence scores and review thresholds.',
      results: ['Human review thresholds', 'Deterministic tests', 'Monitoring for drift'],
    },
    {
      title: 'Recommendation and ranking',
      description: 'Personalised ordering of content or products, evaluated offline before anyone sees it.',
      results: ['Offline evaluation', 'Staged rollout', 'Cold-start fallbacks'],
    },
  ],
};

export default function MachineLearningPage() {
  return (
    <main className="min-h-screen">
      <AIServiceTemplate data={pageData} />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
