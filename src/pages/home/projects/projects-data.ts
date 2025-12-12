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
    subtitle: 'AI-Powered Job Aggregation Platform',
    coverImage: '/assets/images/jobsniper-cover.png',
    link: 'https://www.jobsniper.work',
    githubLinks: [
      {
        label: 'Frontend',
        url: 'https://github.com/wertypotom/telegram-jobs-client',
      },
      {
        label: 'Backend',
        url: 'https://github.com/wertypotom/telegram-jobs-server',
      },
    ],
    techStack: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Telegram API',
      'Gemini AI',
      'TailwindCSS 4',
    ],
    overview: {
      description:
        'JobSniper automates job discovery and application by monitoring curated Telegram channels in real-time, parsing unstructured job posts with AI into structured data, filtering jobs with advanced multi-dimensional search, generating AI-tailored resumes for each position, and sending smart notifications for matching opportunities.',
      timeline: '8 days (November 29 - December 10, 2025)',
      keyCapabilities: [
        'Monitoring curated Telegram channels in real-time',
        'Parsing unstructured job posts with AI into structured data',
        'Filtering jobs with advanced multi-dimensional search',
        'Generating AI-tailored resumes for each position',
        'Sending smart notifications for matching opportunities',
      ],
    },
    architecture: {
      description:
        'Full-stack application built with a modern 3-layer backend architecture and a performant Next.js frontend with React Query for server state management.',
      layers: [
        {
          name: 'HTTP Layer (Controllers)',
          description: 'Request handling and response formatting',
          components: [
            'Request validation (Joi schemas)',
            'JWT authentication check',
            'Format responses',
          ],
        },
        {
          name: 'Business Logic (Services)',
          description: 'Core application logic and orchestration',
          components: [
            'Orchestrate operations',
            'Call AI providers',
            'Compose sub-services',
          ],
        },
        {
          name: 'Data Access (Repositories)',
          description: 'Database and file system operations',
          components: [
            'MongoDB queries',
            'Mongoose models',
            'File system operations',
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
    end

    subgraph "External Services"
        K[Telegram GramJS]
        L[Telegram Bot API]
        M[Gemini AI]
        N[Abacus AI]
    end

    subgraph "Data Layer"
        O[MongoDB Atlas]
        P[File Storage]
    end

    A --> E
    B --> C
    C --> D
    E --> F
    F --> G
    F --> H
    F --> I
    F --> J
    H --> K
    J --> L
    G --> M
    I --> N
    G --> O
    H --> O
    I --> P`,
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
    techStackDetails: {
      backend: [
        {
          name: 'Node.js 18+',
          purpose: 'Async/await, event-driven architecture',
        },
        { name: 'Express.js 4', purpose: 'Lightweight REST API framework' },
        {
          name: 'TypeScript 5.3',
          purpose: 'Type safety, interfaces, path aliases',
        },
        {
          name: 'MongoDB Atlas',
          purpose: 'Flexible schema for unstructured job data',
        },
        { name: 'Mongoose 8', purpose: 'Schema validation, middleware hooks' },
        {
          name: 'GramJS 2.26',
          purpose: 'Official Telegram library for message scraping',
        },
        { name: 'Gemini API', purpose: 'Job parsing, resume tailoring' },
        {
          name: 'JWT + bcrypt',
          purpose: 'Stateless auth, secure password hashing',
        },
      ],
      frontend: [
        { name: 'Next.js 15', purpose: 'React framework with App Router' },
        { name: 'React 19', purpose: 'Latest React with concurrent features' },
        { name: 'TypeScript 5.7', purpose: 'Strict type safety' },
        {
          name: 'Tailwind CSS 4',
          purpose: 'Utility-first CSS, OKLCH color space',
        },
        { name: 'React Query 5', purpose: 'Server state caching, mutations' },
        { name: 'Zustand 5', purpose: 'Lightweight client state' },
        { name: 'NextAuth.js 4', purpose: 'Multi-provider OAuth' },
      ],
      integrations: [
        'Telegram GramJS (Real-time scraping)',
        'Telegram Bot API (Notifications)',
        'Gemini AI + Abacus.ai (Dual provider)',
        'MongoDB Atlas (Optimized schemas)',
      ],
    },
    keyFeatures: [
      {
        title: 'Advanced Job Filtering',
        description:
          'Multi-dimensional filters: tech stack, level, location, experience, job function with real-time autocomplete and fuzzy search.',
      },
      {
        title: 'AI Resume Tailoring',
        description:
          'Upload base resume and AI customizes it per job, generating PDF, DOCX, cover letter, and Telegram message.',
      },
      {
        title: 'Smart Notifications',
        description:
          'Custom filters per user, quiet hours (timezone-aware), deduplication, and Telegram bot with inline keyboards.',
      },
      {
        title: 'Channel Onboarding',
        description:
          'Curated bundles like "Tech Starter Pack" and "Senior Roles" with 6 swaps/month for free tier.',
      },
      {
        title: 'Real-Time Scraping',
        description:
          'GramJS listener for new messages, external page scraping, and auto-cleanup for jobs older than 7 days.',
      },
    ],
    skillsDemonstrated: {
      technical: [
        'Full-Stack Development (Node.js/Express + Next.js/React)',
        'TypeScript Mastery (Strict types, interfaces, path aliases)',
        'Database Design (MongoDB schema optimization, indexing)',
        'RESTful API Design (Request validation, error handling)',
        'Multi-provider Authentication (JWT, OAuth, NextAuth)',
        'AI Integration (Prompt engineering, dual-provider fallback)',
        'Real-Time Systems (Telegram message listening, webhooks)',
        'State Management (React Query + Zustand)',
        'Security (Input validation, file upload restrictions)',
      ],
      soft: [
        'Project Planning (Breaking complex system into 11 modules)',
        'AI Collaboration (Strategic delegation to AI agents)',
        'Code Quality (Clean architecture, type safety)',
        'Product Thinking (User flows, onboarding, free tier limits)',
        'Time Management (Production-ready in 8 days)',
      ],
    },
    metrics: [
      { name: 'Development Time', value: '8 days' },
      { name: 'Lines of Code', value: '~15,000+' },
      { name: 'Backend Modules', value: '11' },
      { name: 'Service Layers', value: '13' },
      { name: 'API Endpoints', value: '30+' },
      { name: 'Frontend Components', value: '50+' },
      { name: 'AI Models Used', value: '2 (Gemini, Abacus)' },
      { name: 'External Integrations', value: '4' },
    ],
  },
];
