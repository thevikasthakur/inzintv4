// Content data for the AI Agent Development page
// (/inzint-ai/ai-tech-solutions/ai-agent-development)
//
// Reframed around Inzint's automatic AI-agent coding assistants — the autonomous
// SDLC agents that carry a ticket through plan -> design -> develop -> review ->
// test -> devops -> docs -> release. Copy lives here; the JSX components consume
// this typed object and resolve icons through getIcon() in src/lib/icons.tsx.
//
// Icon-key contract: every `icon` field is typed as `IconKey` (keyof typeof
// iconMap) so an invalid key is a `next build` (tsc) error, and the unit test
// additionally asserts each key is present in iconMap (no Circle fallback).

import type { IconKey } from '@/lib/icons';

export interface AIAgentBadge {
  icon: IconKey;
  text: string;
}

export interface AIAgentStat {
  label: string;
  value: string; // display string, e.g. "8 stages"
}

export interface AIAgentHero {
  badge: AIAgentBadge;
  title: string;
  highlightedTitle: string; // gradient-highlighted fragment rendered after title
  description: string;
  benefits: string[];
  ctaText: string;
  ctaHref: string;
  stats?: AIAgentStat[];
}

export interface AIAgentCapability {
  icon: IconKey;
  title: string;
  description: string;
  features: string[];
  color: string; // tailwind gradient classes, e.g. "from-indigo-500 to-cyan-500"
}

export interface AIAgentHowItWorksStep {
  step: number; // 1-based ordinal
  title: string;
  description: string;
}

export interface AIAgentUseCase {
  title: string;
  description: string;
  results: string[];
}

export interface AIAgentFAQ {
  id: string; // stable slug id, e.g. "what-are-coding-agents"
  question: string;
  answer: string;
}

export interface AIAgentDevelopmentContent {
  hero: AIAgentHero;
  capabilities: AIAgentCapability[];
  howItWorks: AIAgentHowItWorksStep[];
  useCases: AIAgentUseCase[];
  faqs: AIAgentFAQ[];
}

export const aiAgentDevelopmentContent: AIAgentDevelopmentContent = {
  hero: {
    badge: {
      icon: 'bot',
      text: 'AI Agent Development',
    },
    title: 'Ship software with',
    highlightedTitle: 'autonomous AI coding agents',
    description:
      'Inzint builds AI-agent coding assistants that move work through your software lifecycle on their own — reading a ticket, designing the approach, writing the code, opening a pull request, reviewing and merging it, generating tests, deploying to your integration environment, and keeping the docs current. You stay in control of the board; the agents do the busywork.',
    benefits: [
      'Agents that own a ticket end to end, from plan to deploy',
      'Every change ships behind your existing build and test gate',
      'Pull requests you review — the agents never bypass your checks',
      'Wired to your task board, repo, and CI — no rip-and-replace',
    ],
    ctaText: 'Talk to our team',
    ctaHref: '/contact',
    stats: [
      { label: 'Lifecycle stages automated', value: '8 stages' },
      { label: 'Pull requests, not black boxes', value: 'PR-first' },
      { label: 'Runs on your own repo & CI', value: 'Your stack' },
    ],
  },

  capabilities: [
    {
      icon: 'sparkles',
      title: 'Autonomous Planning',
      description:
        'A planning agent turns a rough card into scoped, dependency-ordered tickets with clear acceptance criteria, so work is broken down before a line of code is written.',
      features: [
        'Reads the codebase read-only to scope the work',
        'Splits features into small, independent tickets',
        'Writes acceptance criteria and the exact gate per ticket',
        'Orders tickets by dependency',
      ],
      color: 'from-indigo-500 to-cyan-500',
    },
    {
      icon: 'code',
      title: 'Code Generation & Pull Requests',
      description:
        'A develop agent implements one module per ticket against the design, adds tests, runs the gate green, and opens a pull request into your integration branch — it never merges on its own.',
      features: [
        'Branches off your integration branch',
        'Implements exactly one module per pull request',
        'Adds or extends tests with the change',
        'Opens a reviewable PR — never a silent merge',
      ],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: 'file-check',
      title: 'Automated Review & Merge',
      description:
        'A review agent judges each pull request against the ticket criteria and design, checks diff quality and a green gate, then squash-merges or bounces it back with actionable notes.',
      features: [
        'Reviews the diff against acceptance criteria',
        'Confirms CI and the DO-NOT-TOUCH guard are green',
        'Squash-merges into the integration branch',
        'Sends weak PRs back with rework notes',
      ],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: 'shield',
      title: 'Test Generation & QA',
      description:
        'A test agent runs the full suite against the acceptance criteria after merge, strengthens coverage where it is thin, and records a pass or fail — failures route the ticket straight back to development.',
      features: [
        'Runs unit, integration, and e2e suites',
        'Adds tests where coverage is thin',
        'Signs off with an explicit pass or fail',
        'Routes failures back to the develop stage',
      ],
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: 'rocket',
      title: 'CI & Deployment',
      description:
        'A devops agent ships each tested change to your integration environment, keeps the CI workflow and infra config healthy, and confirms a passing health check before marking the ticket deployed.',
      features: [
        'Deploys tested changes to the dev environment',
        'Owns the CI workflow and infra config',
        'Applies migrations and config safely',
        'Verifies a passing health check',
      ],
      color: 'from-fuchsia-500 to-pink-500',
    },
    {
      icon: 'book-open',
      title: 'Docs Upkeep',
      description:
        'A docs agent maintains the shared knowledge base — surveying architecture, modules, and data models on first run, then auditing that the docs still match reality as the code changes.',
      features: [
        'Bootstraps a docs knowledge base from the codebase',
        'Keeps module and architecture docs current',
        'Audits docs against the real code',
        'Serves as the source every other agent reads first',
      ],
      color: 'from-violet-500 to-purple-500',
    },
  ],

  howItWorks: [
    {
      step: 1,
      title: 'Plan',
      description:
        'The planning agent researches the codebase and turns a rough request into scoped, dependency-ordered tickets with acceptance criteria on the board.',
    },
    {
      step: 2,
      title: 'Design',
      description:
        'A design agent decides the technical approach for each ticket — interfaces, data model, files to touch, edge cases, and test strategy — before any code is written.',
    },
    {
      step: 3,
      title: 'Develop',
      description:
        'A develop agent implements one module against the design, adds tests, runs the gate green, and opens a pull request into the integration branch.',
    },
    {
      step: 4,
      title: 'Review',
      description:
        'A review agent judges the pull request against the ticket and design, confirms a green gate, then squash-merges it or sends it back with notes.',
    },
    {
      step: 5,
      title: 'Test',
      description:
        'A test agent runs the full suite against the acceptance criteria, strengthens thin coverage, and records a pass or fail on the ticket.',
    },
    {
      step: 6,
      title: 'DevOps',
      description:
        'A devops agent deploys the tested change to the integration environment and confirms CI, the build artifact, and a health check are all green.',
    },
    {
      step: 7,
      title: 'Docs',
      description:
        'A docs agent audits and updates the knowledge base so the documentation stays in step with the shipped change, closing out the ticket lifecycle.',
    },
  ],

  useCases: [
    {
      title: 'Clearing a backlog of small tickets',
      description:
        'Point the agents at a board full of well-scoped tickets and let them work through the queue — planning, coding, reviewing, and deploying each one behind your gate.',
      results: [
        'Routine tickets move without manual hand-offs',
        'Engineers focus on hard problems, not busywork',
        'Every change still lands as a reviewable PR',
      ],
    },
    {
      title: 'Keeping a project continuously integrated',
      description:
        'The agents branch off the integration branch, rebase, and re-run the gate on every change, so the mainline stays green and deployable throughout the cycle.',
      results: [
        'Integration branch stays green and deployable',
        'Merge conflicts caught early by re-gating on rebase',
        'Tested changes reach the dev environment automatically',
      ],
    },
    {
      title: 'Documentation that stays current',
      description:
        'As the agents change code, the docs stage audits and updates the knowledge base in the same lifecycle, so architecture and module docs never drift from reality.',
      results: [
        'Docs update alongside the code that changed them',
        'A single knowledge base every agent reads first',
        'Less onboarding time for new engineers',
      ],
    },
  ],

  faqs: [
    {
      id: 'what-are-ai-coding-agents',
      question: 'What are AI-agent coding assistants?',
      answer:
        'They are autonomous agents that carry a software task through its whole lifecycle — planning, design, coding, review, testing, deployment, and documentation — instead of just suggesting snippets in your editor. Each stage is a focused agent dispatched per ticket from your task board.',
    },
    {
      id: 'do-agents-merge-on-their-own',
      question: 'Do the agents merge code without human oversight?',
      answer:
        'The develop agent only ever opens a pull request — it never merges. A separate review agent judges the PR against the ticket and design and confirms a green gate before squash-merging, and you can keep a human in the loop at review or release. Every change is a reviewable diff, not a black box.',
    },
    {
      id: 'work-with-our-stack',
      question: 'Do the agents work with our existing repo and CI?',
      answer:
        'Yes. The agents run against your own repository, task board, and CI pipeline. They branch off your integration branch and every change must pass your existing build and test gate — there is no rip-and-replace of your tooling.',
    },
    {
      id: 'how-is-quality-guarded',
      question: 'How is code quality guarded?',
      answer:
        'Quality is enforced by gates rather than trust: the build and test suite must pass on every pull request, a review agent checks the diff against acceptance criteria, and a test agent re-runs the full suite after merge. Failures route the ticket back to development automatically.',
    },
    {
      id: 'what-is-do-not-touch',
      question: 'Can we protect sensitive files from the agents?',
      answer:
        'Yes. Each project defines a DO-NOT-TOUCH list of paths — such as secrets and credentials — that the agents must never modify. If a ticket would require changing one, the agent blocks the ticket and asks for a human instead of guessing.',
    },
    {
      id: 'how-do-we-get-started',
      question: 'How do we get started?',
      answer:
        'We onboard your project by learning its stack, gate commands, branch model, and protected paths, then wire the agents to your board and repo. Reach out through our contact page and our team will scope a pilot with you.',
    },
  ],
};
