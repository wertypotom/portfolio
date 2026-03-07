import type { Project } from '../types';

export const neighbourhoodProject: Project = {
  id: 'look-for-neighbourhood',
  title: 'Look For Neighbourhood',
  subtitle: 'AI-Powered Neighbourhood Intelligence Platform',
  badge: 'Hackathon',
  coverImage: '/assets/images/neighbourhood-cover.png',
  link: 'https://github.com/wertypotom/look-for-neighbourhood',
  githubLinks: [
    {
      label: 'Backend (Node.js/Express)',
      url: 'https://github.com/wertypotom/look-for-neighbourhood',
    },
    {
      label: 'Frontend (React/Vite)',
      url: 'https://github.com/wertypotom/look-for-neighbourhood-client',
    },
  ],
  tags: [
    'React 19',
    'Vite',
    'Node.js',
    'Express',
    'Supabase',
    'TypeScript',
    'Zod',
    'Abacus AI',
    'MapLibre GL',
  ],
  overviewText:
    'An AI-enriched web application built during the a16z hackathon that generates comprehensive neighbourhood report cards based on a provided ZIP code.',
  sections: [
    {
      type: 'overview',
      description:
        'An AI-enriched web application built during the a16z hackathon that generates comprehensive neighbourhood report cards based on a provided ZIP code. It aggregates structured data in parallel from 7 different sources and uses AI to synthesize concise, human-readable narrative assessments for vibe, safety, rent, and demographics.',
      timeline: '24 hours (a16z Hackathon)',
      keyCapabilities: [
        'Architected a resilient parallel data fetching pipeline from 7 external APIs',
        'Implemented AI enrichment using Abacus with a section-scoped summarization strategy to avoid rate limits and context window bloat',
        'Designed robust internal caching using Supabase (PostgreSQL) with varying TTLs',
        'Built a minimal, fast frontend with React 19, Vite, and MapLibre GL for interactive maps',
      ],
    },
    {
      type: 'list',
      title: 'Engineering Approach',
      description:
        'Focused on rapid prototyping, resilient API integration, and intelligent caching for a 24-hour hackathon environment.',
      items: [
        'Utilized a Fetcher Module Pattern to isolate data sources and allow graceful degradation if an API fails',
        "Replaced traditional RAG with a structured 'AI summarizing' approach (parallel section-scoped LLM calls) for faster, precise reports",
        'Pre-loaded massive datasets (like Zillow CSV) into Supabase to bring query times under 10ms',
        'Prioritized free, unauthenticated APIs first to ensure the project remained accessible and viable within the timeframe',
      ],
    },
    {
      type: 'architecture',
      title: 'Architecture',
      description:
        'The system uses an API Gateway architecture with independent fetcher modules pulling from disparate sources. These feed into Promise.allSettled for parallel execution, which then pass summaries to Abacus AI for scoped enrichment before caching the final object in Supabase.',
      layers: [
        {
          name: 'Client Layer',
          description: 'User Interface & Mapping',
          components: ['React 19', 'Vite', 'MapLibre GL', 'Zip-code search'],
        },
        {
          name: 'API Gateway & Orchestration',
          description: 'Request Processing',
          components: [
            'Express Route Handlers',
            'Zod Validation',
            'Parallel Fetchers (Promise.allSettled)',
            'AI Enrichment Service',
          ],
        },
        {
          name: 'Data Access & Caching',
          description: 'Persistence Layer',
          components: [
            'Supabase (PostgreSQL)',
            'JSONB Cache Storage',
            'TTL-based Eviction',
            'Pre-loaded CSV Data',
          ],
        },
      ],
      systemDesignMermaid: `graph TB
  subgraph "Client Layer"
      A["React App + MapLibre"]
  end

  subgraph "API Gateway (Express)"
      B["Validator (Zod)"]
      C["Orchestrator"]
      D["AI Enricher (Abacus)"]
  end

  subgraph "Data Fetchers"
      E["Rent Fetcher"]
      F["POI Fetcher"]
      G["Safety Fetcher"]
      H["Transit Fetcher"]
      I["Demo Fetcher"]
      J["Sentiment Fetcher"]
  end

  subgraph "External Sources"
      K["Zillow (CSV/DB)"]
      L["Overpass OSM"]
      M["Socrata"]
      N["WalkScore"]
      O["Census"]
      P["Reddit"]
  end

  subgraph "Cache Layer"
      Q["Supabase PostgreSQL"]
  end

  A -->|"GET /api/v1/neighbourhoods/:zip"| B
  B -->|"Check Cache"| Q
  B -->|"Cache Miss"| C
  C --> E & F & G & H & I & J
  E --> K
  F --> L
  G --> M
  H --> N
  I --> O
  J --> P
  E & F & G & H & I & J --> D
  D -->|"Store Result"| Q
  Q --> A`,
    },
    {
      type: 'techStack',
      title: 'Tech Stack',
      categories: [
        {
          name: 'Backend',
          technologies: [
            { name: 'Node.js + Express', purpose: 'API Gateway' },
            { name: 'TypeScript', purpose: 'Strict type safety' },
            {
              name: 'Supabase (PostgreSQL)',
              purpose: 'Cache and pre-loaded data (JSONB)',
            },
            { name: 'Abacus AI', purpose: 'Generative summarization per section' },
            { name: 'Zod', purpose: 'Input validation' },
          ],
        },
        {
          name: 'Frontend',
          technologies: [
            { name: 'React 19', purpose: 'UI Layer' },
            { name: 'Vite', purpose: 'Build tool' },
            { name: 'MapLibre GL', purpose: 'Interactive map rendering' },
            { name: '@turf/turf', purpose: 'Geospatial calculations' },
          ],
        },
      ],
      integrations: [
        'Socrata SODA API (Safety)',
        'Overpass OSM API (POIs)',
        'Census Bureau ACS (Demographics)',
        'Walk Score API',
        'Reddit API (Sentiment)',
        'Zillow ZORI (Rent Data)',
      ],
    },
    {
      type: 'gridCards',
      title: 'Key Features',
      cards: [
        {
          title: 'Multi-Source Data Aggregation',
          description:
            'Blends data from 7 unique sources including Socrata, Census Bureau, and Reddit to paint a hyper-accurate picture of a zip code.',
        },
        {
          title: 'Section-Scoped AI Summaries',
          description:
            'Instead of monolithic prompts, uses 7 parallel micro-prompts sent to Abacus AI for deterministic, focused narrative insights.',
        },
        {
          title: 'Advanced TTL Caching strategy',
          description:
            'Prevents external rate-limiting and improves TTFB by intelligently varying TTL in Supabase (e.g., 24h for Rent, 6h for Reddit Sentiment).',
        },
        {
          title: 'Graceful Degradation Design',
          description:
            'Fetch modules run independently using Promise.allSettled; if an external API goes down, the rest of the report still generates seamlessly.',
        },
      ],
    },
    {
      type: 'bulletGroup',
      title: 'Quality Assurance & Roadmap',
      items: [
        {
          title: 'Potential Future Improvements',
          bullets: [
            'Message Brokers (RabbitMQ/Kafka): Decouple the data extraction from HTTP request-response cycle to process heavy AI tasks asynchronously',
            'SSE or WebSockets: Stream partial AI responses section-by-section to the client as they complete, improving perceived performance',
            'Cache Revalidation: Implement stale-while-revalidate patterns to update cache in the background without blocking user requests',
            'Request Interception & Deduplication: Prevent redundant external API calls if multiple users request the same zip simultaneously before caching finishes',
          ],
        },
      ],
    },
    {
      type: 'bulletGroup',
      title: 'Skills Demonstrated',
      items: [
        {
          title: 'Technical',
          bullets: [
            'API Aggregation & Orchestration',
            'Parallel Processing (Promise.allSettled)',
            'LLM Prompt Engineering & Context Management',
            'Database Caching (PostgreSQL JSONB)',
            'Resiliency & Error Handling',
            'Geospatial Mapping (MapLibre)',
          ],
        },
        {
          title: 'Soft Skills',
          bullets: [
            'Hackathon Execution (Speed & Trade-offs)',
            'Technical Decision Making (RAG vs Structured AI)',
            'Resource Optimization (API Rate Limits)',
          ],
        },
      ],
    },
    {
      type: 'metrics',
      title: 'Project Metrics',
      metrics: [
        { name: 'Development Time', value: '24 hours' },
        { name: 'Data Sources', value: '7 APIs' },
        { name: 'Parallel Jobs', value: '7 AI Calls' },
        { name: 'Caching Layers', value: 'Supabase JSONB' },
      ],
    },
  ],
};
