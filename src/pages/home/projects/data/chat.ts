import type { Project } from '../types';

export const chatProject: Project = {
  id: 'ai-chat-explorer',
  title: 'AI Chat Explorer',
  subtitle: 'Advanced Multi-Modal AI Assistant & Agentic Workflow Explorer',
  badge: 'Hackathon',
  coverImage: '/assets/images/chat-cover.png', // Placeholder
  githubLinks: [
    {
      label: 'Repository',
      url: 'https://github.com/wertypotom/llm-chat',
    },
  ],
  tags: [
    'Next.js',
    'AI SDK',
    'AutoGen (Python)',
    'LlamaIndex',
    'MCP',
    'Supabase',
    'WebRTC',
    'TailwindCSS',
  ],
  overviewText:
    'A comprehensive exploration of modern AI capabilities built during a hackathon, featuring RAG, multi-agent orchestration, tool use via MCP, and voice interfaces (STT/TTS).',
  sections: [
    {
      type: 'overview',
      description:
        'Built during a fast-paced hackathon, this project served as a deep-dive exploration into the bleeding edge of AI application development. Rather than a simple LLM wrapper, this platform integrates Retrieval-Augmented Generation (RAG) with LlamaIndex and Supabase Vector DB, Model Context Protocol (MCP) for zero-shot Zapier tool execution, and a separate Python sidecar running AutoGen for complex, multi-agent "Analyst vs Critic" debates.',
      timeline: 'Hackathon',
      keyCapabilities: [
        'Architected a hybrid Next.js/FastAPI system connecting TS AI SDKs with Python AutoGen',
        'Implemented a localized RAG pipeline using LlamaIndex for PDF parsing, chunking (Map-Reduce), and semantic search',
        'Integrated Model Context Protocol (MCP) to securely grant the LLM access to external tools like Google Sheets via Zapier',
        'Built a rich, multi-modal UI including WebRTC voice interfaces (Whisper STT / ElevenLabs TTS), and an interactive multi-agent debate stream',
        'Developed a multi-channel presence by connecting the AI backend to a Telegram bot via Webhooks',
      ],
    },
    {
      type: 'list',
      title: 'Engineering & Product Approach',
      description:
        'Focused on rapid capability discovery while maintaining a premium user experience and robust system design.',
      items: [
        'Premium UX First: Designed a dark-mode glassmorphic UI with micro-animations, ensuring the complex AI features felt intuitive and responsive.',
        'Pragmatic Polyglot Architecture: Used TypeScript/Next.js for the core interactive loop where Vercel AI SDK shines, but spun up a Python FastAPI sidecar specifically to leverage AutoGen\'s superior multi-agent capabilities.',
        'Component Injection: Pushed beyond standard markdown by injecting interactive React components (like Support Tickets or Agent Thought chains) directly into the LLM stream.',
        'Exploratory Iteration: Rapidly prototyped disjointed advanced features (RAG, Voice, MCP) and successfully unified them into a single coherent conversational interface.',
      ],
    },
    {
      type: 'architecture',
      title: 'Architecture',
      description:
        'A dual-service architecture. The Next.js frontend handles UI, text/audio streaming, local state, and simple model routing. Complex tasks (like multi-agent debate) are proxied to a FastAPI Python sidecar. Supabase handles standard auth/state alongside pgvector for RAG embeddings.',
      layers: [
        {
          name: 'Client (Next.js / React)',
          description: 'UI & Stream Consumption',
          components: [
            'Vercel AI SDK (useChat)',
            'Web Audio API (Visualizers)',
            'Local Storage (Session caching)',
          ],
        },
        {
          name: 'API Gateway (Next.js Route Handlers)',
          description: 'Orchestration & Tools',
          components: [
            'RouteLLM (Abacus.ai)',
            'Model Context Protocol (MCP) Clients',
            'LlamaIndex Map-Reduce logic',
            'Rate Limiting & Validate',
          ],
        },
        {
          name: 'Agentic Sidecar (FastAPI / Python)',
          description: 'Complex Orchestration',
          components: [
            'AutoGen RoundRobinGroupChat',
            'Server-Sent Events (SSE) Streaming',
            'Analyst & Critic Personas',
          ],
        },
        {
          name: 'Data & Persistence',
          description: 'State & Vectors',
          components: [
            'Supabase (PostgreSQL)',
            'pgvector (Similarity Search)',
          ],
        },
      ],
    },
    {
      type: 'techStack',
      title: 'Tech Stack',
      categories: [
        {
          name: 'Frontend',
          technologies: [
            { name: 'Next.js 14/15', purpose: 'App Router & API Routes' },
            { name: 'React 18+', purpose: 'UI Components' },
            { name: 'Vercel AI SDK', purpose: 'Streaming & Tool execution' },
            { name: 'WebRTC / Web Audio', purpose: 'Voice capturing & visualizers' },
          ],
        },
        {
          name: 'Backend & AI',
          technologies: [
            { name: 'Python / FastAPI', purpose: 'AutoGen Sidecar API' },
            { name: 'AutoGen', purpose: 'Multi-agent orchestration' },
            { name: 'LlamaIndex', purpose: 'RAG, PDF Parsing, and Map-Reduce summaries' },
            { name: 'Model Context Protocol (MCP)', purpose: 'Standardized external tool access' },
          ],
        },
      ],
      integrations: [
        'Abacus.ai (RouteLLM)',
        'Zapier (MCP Tooling)',
        'ElevenLabs (TTS)',
        'OpenAI Whisper (STT)',
        'Telegram API',
      ],
    },
    {
      type: 'gridCards',
      title: 'Key Explorations & Features',
      cards: [
        {
          title: 'Multi-Agent Debate (AutoGen)',
          description:
            'A user query triggers an Analyst and a Critic agent who debate and refine the answer over multiple rounds. The internal thought process is streamed progressively to the UI via Server-Sent Events (SSE).',
        },
        {
          title: 'Zero-Shot Tooling (MCP)',
          description:
            'Implemented the emerging Model Context Protocol to seamlessly grant the LLM access to external APIs (like appending rows to Google Sheets via Zapier) without hardcoding integration logic.',
        },
        {
          title: 'Map-Reduce Document Summarization',
          description:
            'Built a pipeline to parse PDFs, chunk text via SentenceSplitters, run parallel LLM summarization tasks (batched), and reduce them into a final comprehensive summary using LlamaIndex.',
        },
        {
          title: 'Voice-First Contextual UI',
          description:
            'Created an interactive voice overlay that reads the current DOM context (like form inputs) and injects it into the system prompt, allowing the user to fill out applications purely via natural voice conversation.',
        },
      ],
    },
    {
      type: 'bulletGroup',
      title: 'Quality Assurance & Roadmap',
      items: [
        {
          title: 'Identified Weak Spots & Future Improvements',
          bullets: [
            'Latency Bottlenecks: Multi-agent generation and TTS processing inherently add latency. Future iterations should implement WebSocket streaming for audio to achieve true real-time voice interaction.',
            'State Synchronization: Using localStorage limits cross-device continuity. Moving full session state to Supabase would improve the multi-channel (Telegram <-> Web) continuity.',
            'Vector DB Scaling: The current pgvector setup is synchronous during ingestion. Large PDF uploads could block the main thread; parsing should be offloaded to a background queue (e.g. BullMQ).',
            'Observability: Implementing LangSmith or Helicone is critical moving forward to trace exactly where token bloat and multi-agent loops degrade performance.',
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
            'Generative AI Ecosystem (AI SDK, LlamaIndex, AutoGen)',
            'Polyglot System Architecture (TypeScript / Python)',
            'Advanced Data Pipelines (RAG Map-Reduce, Vector Embeddings)',
            'Streaming APIs (SSE, WebRTC Audio Buffers)',
            'Protocol Discovery (Model Context Protocol early adoption)',
          ],
        },
        {
          title: 'Product & Soft Skills',
          bullets: [
            'Product-Minded Engineering (Prioritizing UI micro-interactions for complex features)',
            'Rapid Technological Adoption (Learning and integrating bleeding-edge frameworks in days)',
            'Architectural Pragmatism (Knowing when to leave Node.js for Python to solve specific agentic problems tier)',
          ],
        },
      ],
    },
  ],
};
