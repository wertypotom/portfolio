import { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from '../../../components/modal';
import { ProjectCard } from './project-card';
import { ProjectModal } from './project-modal';
import { projects } from './projects-data';
import type { Project } from './projects-data';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id='projects'
        className='py-10 sm:py-16 md:py-20 px-4 bg-white overflow-hidden'
      >
        <div className='container mx-auto'>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='w-8/10 h-1 bg-orange-500 mx-auto mb-10'
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-3xl mb-5 sm:text-4xl font-bold text-center text-gray-900 sm:mb-8 md:mb-10'
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-xl text-gray-700 mb-12 leading-relaxed text-center max-w-4xl mx-auto'
          >
            Showcasing{' '}
            <span className='font-semibold text-orange-600'>
              production-grade applications
            </span>{' '}
            built with modern tech stacks, clean architecture, and AI
            integration.
          </motion.p>

          {/* Projects Grid */}
          <div className='flex justify-center max-w-7xl mx-auto'>
            <div className='w-full max-w-md'>
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Modal isOpen={!!selectedProject}>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </Modal>
    </>
  );
};
