export interface Project {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  link: string;
  githubLinks?: {
    label: string;
    url: string;
  }[];
  techStack: string[];
  overview: {
    description: string;
    timeline: string;
    keyCapabilities: string[];
  };
  teamRoles?: {
    role: string;
    agent: string;
    focus: string;
  }[];
  architecture: {
    description: string;
    layers: {
      name: string;
      description: string;
      components: string[];
    }[];
  };
  architectureDiagram?: {
    systemDesign: string;
    backendDiagram: string;
  };
  developmentMethodology?: {
    title: string;
    description: string;
    items?: string[];
  }[];
  securityFeatures?: string[];
  qualityAssurance?: {
    title: string;
    items: string[];
  }[];
  techStackDetails: {
    backend: { name: string; purpose: string }[];
    frontend: { name: string; purpose: string }[];
    integrations: string[];
  };
  keyFeatures: {
    title: string;
    description: string;
  }[];
  skillsDemonstrated: {
    technical: string[];
    soft: string[];
  };
  metrics: {
    name: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'jobsniper',
    title: 'JobSniper',
    subtitle: 'AI-Powered Job Aggregation Platform | 3-Week Build',
    coverImage: '/assets/images/jobsniper-cover.png',
    link: 'https://www.jobsniper.work',
    techStack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Redis',
      'BullMQ',
      'Gemini AI',
      'TailwindCSS 4',
    ],
    overview: {
      description:
        'Job seekers waste hours browsing Telegram channels, manually filtering jobs, and tailoring resumes. JobSniper solves this with a centralized platform that scrapes Telegram channels in real-time, parses jobs with AI into structured data, filters via advanced multi-dimensional search, generates AI-tailored resumes (PDF/DOCX), and sends smart Telegram notifications.',
      timeline: '3 weeks (November 29 - December 20, 2025)',
      keyCapabilities: [
        'Orchestrated 7 specialized AI agents for rapid development',
        'Implemented production-grade 3-layer backend architecture',
        'Built real-time scraping system with GramJS',
        'Integrated dual-provider AI pipeline (Gemini + Abacus)',
        'Architected async job processing with BullMQ and Redis',
        'Delivered full CI/CD, security, and payment integration',
      ],
    },
    teamRoles: [
      {
        role: 'Team Lead',
        agent: 'Claude',
        focus: 'Architecture, reviews, planning',
      },
      {
        role: 'Backend Dev',
        agent: 'Claude',
        focus: 'Express APIs, MongoDB queries',
      },
      {
        role: 'Frontend Dev',
        agent: 'Claude',
        focus: 'Next.js, React components',
      },
      { role: 'DevOps', agent: 'Claude', focus: 'Deployment, migrations' },
      {
        role: 'Product Analyst',
        agent: 'Gemini',
        focus: 'User flows, edge cases',
      },
      {
        role: 'Architect',
        agent: 'Gemini',
        focus: 'System design, data models',
      },
      { role: 'QA', agent: 'Claude', focus: 'Validation, security reviews' },
    ],
    architecture: {
      description:
        'Built a production-grade full-stack platform with a clean 3-layer backend architecture (Controller → Service → Repository), async job processing with BullMQ and Redis, and a highly performant Next.js 15 frontend using Server Components and React Query.',
      layers: [
        {
          name: 'HTTP Layer (Controllers)',
          description: 'Request handling and response formatting',
          components: [
            'Joi validation schemas',
            'JWT authentication guard',
            'Unified response format',
          ],
        },
        {
          name: 'Business Logic (Services)',
          description: 'Core application logic and orchestration',
          components: [
            '13 service layers',
            'Service composition',
            'AI provider fallback strategy',
          ],
        },
        {
          name: 'Data Access (Repositories)',
          description: 'Database and file system operations',
          components: [
            'Optimized MongoDB queries',
            'Compound indexes',
            'Atomic updates',
          ],
        },
      ],
    },
    architectureDiagram: {
      systemDesign: `graph TB
    subgraph "Client Layer"
        A[Next.js 15 App]
        B[React 19 Components]
        C[React Query Cache]
        D[Zustand Store]
    end

    subgraph "API Layer"
        E[Express REST API]
        F[NextAuth JWT Middleware]
    end

    subgraph "Business Logic"
        G[Job Service]
        H[Scraper Service]
        I[Sniper Service]
        J[Notification Service]
        K[Payment Service]
    end

    subgraph "Queue Layer"
        L[BullMQ]
        M[Redis Cache]
    end

    subgraph "External Services"
        N[Telegram GramJS]
        O[Telegram Bot API]
        P[Gemini AI]
        Q[Abacus AI]
        R[LemonSqueezy]
    end

    subgraph "Data Layer"
        S[MongoDB Atlas]
        T[File Storage]
    end

    A --> E
    B --> C
    C --> D
    E --> F
    F --> G
    F --> H
    F --> I
    F --> J
    F --> K
    H --> L
    J --> L
    I --> L
    L --> M
    H --> N
    J --> O
    G --> P
    I --> Q
    K --> R
    G --> S
    H --> S
    I --> T`,
      backendDiagram: `flowchart TB
    subgraph HTTP["HTTP Layer (Controllers)"]
        direction LR
        H1["Request validation<br/>(Joi schemas)"]
        H2["JWT authentication<br/>check"]
        H3["Format responses"]
    end
    
    subgraph BL["Business Logic (Services)"]
        direction LR
        B1["Orchestrate operations"]
        B2["Call AI providers"]
        B3["Compose sub-services"]
    end
    
    subgraph DA["Data Access (Repositories)"]
        direction LR
        D1["MongoDB queries"]
        D2["Mongoose models"]
        D3["File system<br/>operations"]
    end
    
    HTTP --> BL
    BL --> DA`,
    },
    developmentMethodology: [
      {
        title: 'Strategic AI Delegation',
        description:
          'Instead of generic "write this" prompts, I orchestrated AI as specialized team members:',
        items: [
          '"Claude (Team Lead): Design 3-layer architecture with path aliases"',
          '"Gemini (Product): Analyze user flow for channel onboarding"',
          '"Claude (Backend): Implement job filtering with MongoDB compound indexes"',
        ],
      },
      {
        title: 'Iterative Refinement',
        description:
          'Never accepted first outputs. Reviewed and refined every piece of code:',
        items: [
          '50+ Claude iterations for core logic',
          'Enforced strict TypeScript types (no "any")',
          'Demanded performance optimizations (indexing, caching)',
        ],
      },
    ],
    securityFeatures: [
      'JWT authentication with HTTP-only cookies',
      'Input validation (Joi schemas on all 30+ endpoints)',
      'Password hashing (bcrypt)',
      'File type validation (PDF/DOCX only)',
      'CORS whitelist configuration',
      'Environment secrets protection',
      'Error sanitization in production',
    ],
    qualityAssurance: [
      {
        title: 'Testing & Quality',
        items: [
          'Jest & Supertest for integration testing',
          'ESLint & Prettier for code consistency',
          'Husky pre-commit hooks (lint-staged)',
          'GitHub Actions for CI/CD',
        ],
      },
    ],
    techStackDetails: {
      backend: [
        {
          name: 'Node.js + Express',
          purpose: 'Scalable REST API architecture',
        },
        {
          name: 'TypeScript 5.3',
          purpose: 'Strict type safety & path aliases',
        },
        {
          name: 'MongoDB Atlas',
          purpose: 'Flexible schema with compound indexes',
        },
        {
          name: 'Redis',
          purpose: 'Job queue persistence & worker coordination',
        },
        {
          name: 'BullMQ',
          purpose: 'Async AI parsing with exponential retry & rate limiting',
        },
        { name: 'GramJS', purpose: 'Real-time Telegram message listening' },
        { name: 'Gemini + Abacus', purpose: 'Dual-provider AI pipeline' },
        { name: 'Joi + JWT', purpose: 'Validation and stateless auth' },
      ],
      frontend: [
        { name: 'Next.js 15', purpose: 'App Router & Server Components' },
        { name: 'React 19', purpose: 'Concurrent features & Actions' },
        { name: 'Tailwind CSS 4', purpose: 'Modern utility-first styling' },
        { name: 'React Query 5', purpose: 'Server state & optimistic updates' },
        { name: 'Zustand', purpose: 'Lightweight client state management' },
        {
          name: 'NextAuth.js',
          purpose: 'Multi-provider OAuth (Google, Yandex)',
        },
        {
          name: 'Internationalization (i18n)',
          purpose: 'Multi-language support (English, Russian)',
        },
      ],
      integrations: [
        'Telegram (GramJS + Bot API)',
        'AI (Gemini + Abacus)',
        'Payments (LemonSqueezy)',
        'Database (MongoDB Atlas)',
        'Queue & Cache (Redis + BullMQ)',
      ],
    },
    keyFeatures: [
      {
        title: 'Advanced Job Filtering',
        description:
          'Multi-dimensional filters (tech stack, level, location) with real-time specific autocomplete, fuzzy search, and persistent user preferences.',
      },
      {
        title: 'AI Resume Tailoring',
        description:
          'Upload a base resume and the system generates a custom PDF/DOCX and cover letter tailored to the specific job description using AI.',
      },
      {
        title: 'Internationalization (i18n)',
        description:
          'Complete multi-language support (English/Russian) with locale detection, dictionary-based translations, and localized routing.',
      },
      {
        title: 'Smart Notifications',
        description:
          'Timezone-aware quiet hours, custom deduplication logic, and interactive Telegram bot notifications with inline action buttons.',
      },
      {
        title: 'Channel Onboarding',
        description:
          'Curated channel bundles ("Tech Starter Pack"), subscription management limits (Free vs Premium), and automated discovery.',
      },
      {
        title: 'Async Job Processing',
        description:
          'Decoupled AI parsing pipeline using BullMQ with Redis: exponential backoff retry, 10 jobs/sec rate limiting, batch enqueuing, and configurable worker concurrency.',
      },
      {
        title: 'Real-Time Scraping',
        description:
          'Event-driven architecture using GramJS listeners for instant job detection, coupled with scheduled cleanup jobs.',
      },
    ],
    skillsDemonstrated: {
      technical: [
        'Full-Stack Architecture (Node.js/Express + Next.js)',
        'TypeScript Mastery (Strict types, interfaces)',
        'Database Optimization (Indexes, TTL, Aggregation)',
        'AI Integration (Prompt engineering, Fallback strategies)',
        'Real-Time Systems (Webhooks, Event listeners)',
        'Message Queue Architecture (BullMQ, Redis)',
        'Internationalization (i18n Architecture)',
        'Security Implementation (Auth, Validation, Sanitization)',
        'Modern Frontend (SSR, RSC, State Management)',
        'DevOps (CI/CD, Docker, Environment Config)',
      ],
      soft: [
        'Strategic AI Orchestration (Team Lead role)',
        'Product Thinking (User Experience, Monetization)',
        'System Design (Scalability, Modularity)',
        'Rapid Prototyping (3-week delivery)',
        'Quality Focus (Documentation, Testing)',
      ],
    },
    metrics: [
      { name: 'Development Time', value: '3 weeks' },
      { name: 'Lines of Code', value: '~15,000+' },
      { name: 'Backend Modules', value: '11' },
      { name: 'Service Layers', value: '13' },
      { name: 'API Endpoints', value: '30+' },
      { name: 'Frontend Components', value: '50+' },
      { name: 'AI Models', value: '2 (Gemini, Abacus)' },
      { name: 'Integrations', value: '5+' },
    ],
  },
];
