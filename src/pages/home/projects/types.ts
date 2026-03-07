export interface BaseSection {
  title?: string;
  emoji?: string;
}

export interface OverviewSection extends BaseSection {
  type: 'overview';
  description: string;
  timeline?: string;
  keyCapabilities: string[];
}

export interface ListSection extends BaseSection {
  type: 'list';
  description?: string;
  items: string[];
}

export interface BulletGroupSection extends BaseSection {
  type: 'bulletGroup';
  items: {
    title: string;
    description?: string;
    bullets?: string[];
  }[];
}

export interface GridCardsSection extends BaseSection {
  type: 'gridCards';
  cards: {
    title: string;
    description: string;
  }[];
}

export interface ArchitectureSection extends BaseSection {
  type: 'architecture';
  description?: string;
  layers: {
    name: string;
    description: string;
    components: string[];
  }[];
  systemDesignMermaid?: string;
  backendDiagramMermaid?: string;
}

export interface TechStackSection extends BaseSection {
  type: 'techStack';
  categories: {
    name: string;
    technologies: { name: string; purpose: string }[];
  }[];
  integrations?: string[];
}

export interface MetricsSection extends BaseSection {
  type: 'metrics';
  metrics: {
    name: string;
    value: string;
  }[];
}

export type ProjectSection =
  | OverviewSection
  | ListSection
  | BulletGroupSection
  | GridCardsSection
  | ArchitectureSection
  | TechStackSection
  | MetricsSection;

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  badge?: string;
  link?: string;
  githubLinks?: {
    label: string;
    url: string;
  }[];
  tags: string[];
  overviewText: string;
  sections: ProjectSection[];
}
