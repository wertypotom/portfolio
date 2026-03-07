import type { Project } from './types';
import { jobSniperProject } from './data/jobsniper';
import { neighbourhoodProject } from './data/look-for-neighbourhood';

export type { Project };

export const projects: Project[] = [
  jobSniperProject,
  neighbourhoodProject
];
