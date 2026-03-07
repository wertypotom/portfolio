import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { MermaidDiagram } from '../../../components/mermaid-diagram';
import type { Project, ProjectSection } from './types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const SectionRenderer = ({ section, projectId }: { section: ProjectSection; projectId: string }) => {
  switch (section.type) {
    case 'overview':
      return (
        <section>
          <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
            <span className='text-orange-500'>{section.emoji || '🎯'}</span>
            Project Overview
          </h3>
          <p className='text-gray-700 leading-relaxed mb-6 text-lg'>
            {section.description}
          </p>
          <div className='bg-orange-50 p-6 rounded-xl border border-orange-100'>
            {section.timeline && (
              <div className='flex flex-wrap gap-4 mb-4 text-sm font-semibold text-gray-600'>
                <span className='px-3 py-1 bg-white rounded-full border border-orange-200'>
                  📅 {section.timeline}
                </span>
              </div>
            )}
            <h4 className='font-bold text-gray-900 mb-3'>
              Key Capabilities Delivered:
            </h4>
            <ul className='space-y-2'>
              {section.keyCapabilities.map((capability: string, idx: number) => (
                <li key={idx} className='flex items-start gap-3 text-gray-700'>
                  <span className='text-orange-500 font-bold shrink-0 leading-relaxed'>✓</span>
                  <span className='leading-relaxed'>{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      );

    case 'list':
      return (
        <section>
          <div className='flex items-center gap-3 mb-6'>
            <h3 className='text-2xl font-bold text-gray-900 flex items-center gap-2'>
              {section.emoji && <span className='text-orange-500'>{section.emoji}</span>}
              {section.title}
            </h3>
          </div>
          <div className='bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200'>
            {section.description && (
              <p className='text-gray-700 mb-4 font-medium'>
                {section.description}
              </p>
            )}
            <ul className='space-y-3'>
              {section.items.map((point: string, idx: number) => (
                <li key={idx} className='flex items-start gap-3 text-gray-700'>
                  <span className='text-blue-500 font-bold text-lg shrink-0 leading-relaxed'>✓</span>
                  <span className='leading-relaxed'>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      );

    case 'bulletGroup':
      return (
        <section>
          <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
            <span className='text-orange-500'>{section.emoji || '🧠'}</span>
            {section.title}
          </h3>
          <div className='grid md:grid-cols-2 gap-6'>
            {section.items.map((method: { title: string; description?: string; bullets?: string[] }, idx: number) => (
              <div key={idx} className='bg-gray-50 rounded-xl p-5 border border-gray-100'>
                <h4 className='font-bold text-gray-900 text-lg mb-2'>
                  {method.title}
                </h4>
                {method.description && (
                  <p className='text-gray-700 text-sm mb-3'>{method.description}</p>
                )}
                {method.bullets && (
                  <ul className='space-y-1.5'>
                    {method.bullets.map((item: string, i: number) => (
                      <li key={i} className='text-sm text-gray-600 flex items-start gap-2'>
                        <span className='text-orange-400 mt-1'>•</span>
                        <span className='italic'>"{item.replace(/^"|"$/g, '')}"</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      );

    case 'architecture':
      return (
        <section>
          <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
            <span className='text-orange-500'>{section.emoji || '🏗️'}</span>
            {section.title || 'Architecture Design'}
          </h3>
          {section.description && (
            <p className='text-gray-700 leading-relaxed mb-6'>{section.description}</p>
          )}
          <div className='grid md:grid-cols-3 gap-4 mb-8'>
            {section.layers.map((layer: { name: string; description?: string; components: string[] }, idx: number) => (
              <div key={idx} className='bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-200 shadow-sm'>
                <h4 className='font-bold text-gray-900 mb-2'>{layer.name}</h4>
                <p className='text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider'>
                  {layer.description}
                </p>
                <ul className='space-y-1.5'>
                  {layer.components.map((component: string, cidx: number) => (
                    <li key={cidx} className='text-sm text-gray-700 flex items-start gap-2'>
                      <span className='text-blue-500 mt-1'>🔹</span>
                      {component}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {(section.systemDesignMermaid || section.backendDiagramMermaid) && (
            <div className='space-y-8'>
              {section.systemDesignMermaid && (
                <div>
                  <h4 className='font-bold text-gray-900 mb-3 text-lg border-l-4 border-orange-500 pl-3'>
                    System Design
                  </h4>
                  <div className='bg-white p-2 rounded-lg border border-gray-100 shadow-sm'>
                    <MermaidDiagram chart={section.systemDesignMermaid} id={`system-design-${projectId}`} />
                  </div>
                </div>
              )}
              {section.backendDiagramMermaid && (
                <div>
                  <h4 className='font-bold text-gray-900 mb-3 text-lg border-l-4 border-orange-500 pl-3'>
                    Backend Flow
                  </h4>
                  <div className='bg-white p-2 rounded-lg border border-gray-100 shadow-sm'>
                    <MermaidDiagram chart={section.backendDiagramMermaid} id={`backend-diagram-${projectId}`} />
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      );

    case 'techStack':
      return (
        <section>
          <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
            <span className='text-orange-500'>{section.emoji || '🛠️'}</span>
            {section.title || 'Tech Stack'}
          </h3>
          <div className='grid md:grid-cols-2 gap-6'>
            {section.categories.map((cat: { name: string; technologies: { name: string; purpose?: string }[] }, idx: number) => (
              <div key={idx} className={idx === section.categories.length - 1 && section.categories.length % 2 !== 0 ? 'md:col-span-2' : ''}>
                <h4 className='font-bold text-gray-900 mb-3 text-lg'>{cat.name}</h4>
                <div className='space-y-2'>
                  {cat.technologies.map((tech: { name: string; purpose?: string }, tidx: number) => (
                    <div key={tidx} className='bg-gray-50 p-3 rounded-lg border border-gray-100 flex justify-between items-center group hover:border-orange-200 transition-colors'>
                      <span className='font-semibold text-gray-900 text-sm'>{tech.name}</span>
                      <span className='text-xs text-gray-500 group-hover:text-orange-600 transition-colors'>{tech.purpose}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {section.integrations && (
            <div className='mt-6'>
              <h4 className='font-bold text-gray-900 mb-3 text-lg'>Key Integrations</h4>
              <div className='flex flex-wrap gap-2'>
                {section.integrations.map((integration: string, idx: number) => (
                  <span key={idx} className='px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold border border-blue-100'>
                    {integration}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      );

    case 'gridCards':
      return (
        <section>
          <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
            <span className='text-orange-500'>{section.emoji || '🚀'}</span>
            {section.title}
          </h3>
          <div className='grid md:grid-cols-2 gap-4'>
            {section.cards.map((card: { title: string; description: string }, idx: number) => (
              <div key={idx} className='bg-gradient-to-br from-orange-50/50 to-white p-5 rounded-xl border border-orange-100 hover:border-orange-300 transition-colors'>
                <h4 className='font-bold text-gray-900 mb-2'>{card.title}</h4>
                <p className='text-gray-600 text-sm leading-relaxed'>{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      );

    case 'metrics':
      return (
        <section className='bg-gray-900 text-white rounded-2xl p-8'>
          <h3 className='text-2xl font-bold mb-6 flex items-center gap-2'>
            <span className='text-orange-500'>{section.emoji || '📊'}</span>
            {section.title}
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {section.metrics.map((metric: { name: string; value: string }, idx: number) => (
              <div key={idx} className='text-center'>
                <p className='text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400'>
                  {metric.value}
                </p>
                <p className='text-sm text-gray-400 mt-2 font-medium uppercase tracking-wide'>
                  {metric.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      );

    default:
      return null;
  }
};

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
            <h2 className='text-3xl font-bold text-gray-900 flex items-center gap-3'>
              {project.title}
              {project.badge && (
                <span className='px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm'>
                  {project.badge}
                </span>
              )}
            </h2>
            <p className='text-orange-600 font-semibold mt-1'>{project.subtitle}</p>
          </div>
          <div className='flex items-center gap-3'>
            {project.link ? (
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium flex items-center gap-2'
              >
                Visit Site
                <ExternalLink size={16} />
              </a>
            ) : null}
            {project.githubLinks && project.githubLinks.length > 0 && (
              <select
                className='px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400'
                onChange={(e) => {
                  if (e.target.value) {
                    window.open(e.target.value, '_blank', 'noopener,noreferrer');
                    e.target.value = '';
                  }
                }}
                defaultValue=""
              >
                <option value="" disabled>View Code</option>
                {project.githubLinks.map((link, idx) => (
                  <option key={idx} value={link.url} className='bg-white text-gray-900'>
                    {link.label}
                  </option>
                ))}
              </select>
            )}
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
          <div className='max-w-5xl mx-auto space-y-10'>
            {project.sections.map((section, idx) => (
              <SectionRenderer key={idx} section={section} projectId={project.id} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
