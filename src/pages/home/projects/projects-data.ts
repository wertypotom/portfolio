import type { Project } from './types';
import { jobSniperProject } from './data/jobsniper';
import { neighbourhoodProject } from './data/look-for-neighbourhood';
import { chatProject } from './data/chat';
import { clearConsentProject } from './data/clear-consent';

export type { Project };

export const projects: Project[] = [
  jobSniperProject,
  neighbourhoodProject,
  chatProject,
  clearConsentProject,
];
