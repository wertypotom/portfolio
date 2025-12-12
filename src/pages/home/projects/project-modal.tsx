import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { MermaidDiagram } from '../../../components/mermaid-diagram';
import type { Project } from './projects-data';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4'
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className='bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden'
      >
        {/* Header */}
        <div className='flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100'>
          <div>
            <h2 className='text-3xl font-bold text-gray-900'>
              {project.title}
            </h2>
            <p className='text-orange-600 font-semibold'>{project.subtitle}</p>
          </div>
          <div className='flex items-center gap-3'>
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium flex items-center gap-2'
            >
              Visit Site
              <ExternalLink size={16} />
            </a>
            <button
              onClick={onClose}
              className='text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-200 rounded-lg'
              aria-label='Close modal'
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className='flex-1 overflow-y-auto p-6'>
          <div className='max-w-5xl mx-auto space-y-8'>
            {/* Overview */}
            <section>
              <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                <span className='text-orange-500'>🎯</span>
                Project Overview
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                {project.overview.description}
              </p>
              <div className='bg-orange-50 p-4 rounded-lg'>
                <p className='text-sm font-semibold text-gray-700 mb-2'>
                  Timeline: {project.overview.timeline}
                </p>
                <ul className='space-y-2'>
                  {project.overview.keyCapabilities.map((capability, idx) => (
                    <li
                      key={idx}
                      className='flex items-start gap-2 text-gray-700'
                    >
                      <span className='text-orange-500 mt-1'>✓</span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Architecture */}
            <section>
              <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                <span className='text-orange-500'>🏗️</span>
                Architecture Design
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                {project.architecture.description}
              </p>
              <div className='grid md:grid-cols-3 gap-4'>
                {project.architecture.layers.map((layer, idx) => (
                  <div
                    key={idx}
                    className='bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border-2 border-orange-200'
                  >
                    <h4 className='font-bold text-gray-900 mb-2'>
                      {layer.name}
                    </h4>
                    <p className='text-sm text-gray-600 mb-3'>
                      {layer.description}
                    </p>
                    <ul className='space-y-1'>
                      {layer.components.map((component, cidx) => (
                        <li
                          key={cidx}
                          className='text-sm text-gray-700 flex items-start gap-2'
                        >
                          <span className='text-orange-500'>•</span>
                          {component}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* System Design Diagram */}
              {project.architectureDiagram && (
                <div className='mt-6'>
                  <h4 className='font-bold text-gray-900 mb-3 text-lg'>
                    System Design
                  </h4>
                  <MermaidDiagram
                    chart={project.architectureDiagram.systemDesign}
                    id={`system-design-${project.id}`}
                  />
                </div>
              )}

              {/* Backend Architecture Diagram */}
              {project.architectureDiagram && (
                <div className='mt-6'>
                  <h4 className='font-bold text-gray-900 mb-3 text-lg'>
                    Backend 3-Layer Architecture
                  </h4>
                  <MermaidDiagram
                    chart={project.architectureDiagram.backendDiagram}
                    id={`backend-diagram-${project.id}`}
                  />
                </div>
              )}
            </section>

            {/* Tech Stack Details */}
            <section>
              <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                <span className='text-orange-500'>🛠️</span>
                Tech Stack
              </h3>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <h4 className='font-bold text-gray-900 mb-3 text-lg'>
                    Backend
                  </h4>
                  <div className='space-y-2'>
                    {project.techStackDetails.backend.map((tech, idx) => (
                      <div key={idx} className='bg-gray-50 p-3 rounded-lg'>
                        <p className='font-semibold text-gray-900'>
                          {tech.name}
                        </p>
                        <p className='text-sm text-gray-600'>{tech.purpose}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className='font-bold text-gray-900 mb-3 text-lg'>
                    Frontend
                  </h4>
                  <div className='space-y-2'>
                    {project.techStackDetails.frontend.map((tech, idx) => (
                      <div key={idx} className='bg-gray-50 p-3 rounded-lg'>
                        <p className='font-semibold text-gray-900'>
                          {tech.name}
                        </p>
                        <p className='text-sm text-gray-600'>{tech.purpose}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                <span className='text-orange-500'>🚀</span>
                Key Features
              </h3>
              <div className='grid md:grid-cols-2 gap-4'>
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className='bg-gradient-to-br from-orange-50 to-white p-4 rounded-lg border border-orange-200'
                  >
                    <h4 className='font-bold text-gray-900 mb-2'>
                      {feature.title}
                    </h4>
                    <p className='text-gray-700 text-sm'>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Demonstrated */}
            <section>
              <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                <span className='text-orange-500'>🎓</span>
                Skills Demonstrated
              </h3>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <h4 className='font-bold text-gray-900 mb-3 text-lg'>
                    Technical Skills
                  </h4>
                  <ul className='space-y-2'>
                    {project.skillsDemonstrated.technical.map((skill, idx) => (
                      <li
                        key={idx}
                        className='flex items-start gap-2 text-gray-700'
                      >
                        <span className='text-orange-500 mt-1'>✓</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className='font-bold text-gray-900 mb-3 text-lg'>
                    Soft Skills
                  </h4>
                  <ul className='space-y-2'>
                    {project.skillsDemonstrated.soft.map((skill, idx) => (
                      <li
                        key={idx}
                        className='flex items-start gap-2 text-gray-700'
                      >
                        <span className='text-orange-500 mt-1'>✓</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Metrics */}
            <section>
              <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                <span className='text-orange-500'>📊</span>
                Metrics & Impact
              </h3>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className='bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-lg text-center'
                  >
                    <p className='text-2xl font-bold text-gray-900'>
                      {metric.value}
                    </p>
                    <p className='text-sm text-gray-700 mt-1'>{metric.name}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
