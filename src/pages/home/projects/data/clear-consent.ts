import type { Project } from '../types';

export const clearConsentProject: Project = {
  id: 'clear-consent',
  title: 'ClearConsent',
  subtitle: 'AI-Powered Medical Liability Shield & Teach-Back Automation',
  badge: 'Product MVP',
  coverImage: '/assets/images/clearconsent.png',
  githubLinks: [
    {
      label: 'Repository',
      url: 'https://github.com/wertypotom/clear-consent',
    },
  ],
  tags: [
    'Product Strategy',
    'Next.js 16',
    'AI Document Parsing',
    'PostgreSQL / SQLite',
    'Recharts',
    'Healthcare Tech',
  ],
  overviewText:
    'A product-led MVP addressing a multi-billion dollar healthcare loophole. ClearConsent transforms static, college-level legal PDFs into interactive, 6th-grade level "Teach-Back" experiences to shield hospitals from medical malpractice lawsuits.',
  sections: [
    {
      type: 'overview',
      emoji: '💡',
      description:
        'This project was built to demonstrate end-to-end Product Engineering—identifying a massive financial loophole in a specific industry, formulating a solution based on established best practices, and rapidly prototyping a technical MVP to capture the market. The goal wasn\'t just writing code; it was solving a $400,000+ per-incident business problem.',
      timeline: 'MVP Development',
      keyCapabilities: [
        'Identified the "Failure to Inform" legal loophole costing US hospitals billions annually in malpractice settlements.',
        'Sized a total addressable eConsent market projecting growth to $1.5 Billion by 2030.',
        'Formulated a solution digitizing the medical "Teach-Back" gold standard, scaling a 15-minute doctor conversation into a 2-minute automated AI flow.',
        'Architected an MVP that translates complex legal PDFs into 6th-grade reading levels (FDA/NIH compliant) with scenario-based comprehension quizzes.',
        'Designed a "Legal Audit Certificate" feature to produce bulletproof courtroom evidence of patient comprehension.',
      ],
    },
    {
      type: 'gridCards',
      title: 'The Problem vs. The Solution',
      emoji: '⚖️',
      cards: [
        {
          title: 'The Multi-Million Dollar Loophole',
          description:
            'When complications arise, patients sue claiming "I didn\'t know the risks." Hospitals rely on a signed 10-page dense PDF as defense. In court, this fails because signing a college-level document doesn\'t prove actual comprehension, leading to massive verdicts (e.g., a recent $951M Utah verdict).',
        },
        {
          title: 'The "Teach-Back" Bottleneck',
          description:
            'The medical gold standard for patient safety is "Teach-Back" (asking the patient to explain the risk back to the doctor). However, overworked doctors skip this 75% of the time due to time pressure, and manual verbal confirmation leaves no legal "receipt" or proof.',
        },
        {
          title: 'AI Translation & Validation',
          description:
            'ClearConsent ingests existing hospital PDFs and uses AI to translate them into 6th-grade interactive modules. It generates adaptive, scenario-based quizzes to test the patient on the highest-risk complications before allowing a signature.',
        },
        {
          title: 'The Legal Audit Certificate',
          description:
            'Instead of just capturing a signature, the system logs time-on-page, tooltip interactions, and perfect 100% quiz scores. It bundles this telemetry into a Legal Audit Certificate, providing hospitals with bulletproof evidence of patient education.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Business Strategy & Go-To-Market',
      emoji: '📈',
      description:
        'Approached the engineering architecture through the lens of a startup founder and Product Owner.',
      items: [
        'Ideal Customer Profile (ICP): Targeted Risk Management and Legal Departments rather than clinical doctors, aligning the product with the executives protecting the hospital\'s bottom line.',
        'Strategic Partnerships: Positioned the product for Medical Malpractice Insurers, who are incentivized to mandate the software across policyholders to reduce their own massive payout risks.',
        'ROI Formulation: At $20,000/year, the software pays for 20 years of its own cost by preventing just a single $400,000 lawsuit settlement. Every subsequent prevention is pure profit.',
        'Frictionless Adoption: Engineered to integrate alongside (rather than replace) existing heavy monolithic EHR/DocuSign workflows, lowering the barrier to entry.',
      ],
    },
    {
      type: 'techStack',
      title: 'MVP Tech Stack',
      emoji: '🛠️',
      categories: [
        {
          name: 'Core Application',
          technologies: [
            { name: 'Next.js 16 (React 19)', purpose: 'Full-stack App Router framework' },
            { name: 'Tailwind CSS', purpose: 'Rapid UI styling' },
            { name: 'Lucide React', purpose: 'Iconography' },
          ],
        },
        {
          name: 'Data & Processing',
          technologies: [
            { name: 'pdf-parse / mammoth', purpose: 'Ingesting heavy legal PDFs and Word docs' },
            { name: 'Vercel Postgres', purpose: 'Production relational database' },
            { name: 'better-sqlite3', purpose: 'Local development database mirroring' },
            { name: 'Recharts', purpose: 'Generating Legal Audit telemetry visualizations' },
          ],
        },
      ],
    },
    {
      type: 'bulletGroup',
      title: 'Why This Matters',
      emoji: '🎯',
      items: [
        {
          title: 'Engineer with a Product Hat',
          bullets: [
            'Demonstrates the ability to identify high-value ($$$) business problems before writing a single line of code.',
            'Values Time-to-Market: Chose a pragmatic, familiar stack (Next.js, Postgres, Tailwind) to rapidly prototype the most crucial value proposition rather than over-engineering infrastructure.',
            'Focuses on the end-user incentive structure: Built a product that makes the hospital safer (doctors), legally defended (lawyers), and financially secure (executives).',
          ],
        },
      ],
    },
  ],
};
