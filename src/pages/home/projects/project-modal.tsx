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
          <div className='max-w-5xl mx-auto space-y-10'>
            {/* Overview */}
            <section>
              <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                <span className='text-orange-500'>🎯</span>
                Project Overview
              </h3>
              <p className='text-gray-700 leading-relaxed mb-6 text-lg'>
                {project.overview.description}
              </p>
              <div className='bg-orange-50 p-6 rounded-xl border border-orange-100'>
                <div className='flex flex-wrap gap-4 mb-4 text-sm font-semibold text-gray-600'>
                  <span className='px-3 py-1 bg-white rounded-full border border-orange-200'>
                    📅 {project.overview.timeline}
                  </span>
                </div>
                <h4 className='font-bold text-gray-900 mb-3'>
                  Key Capabilities Delivered:
                </h4>
                <ul className='space-y-2'>
                  {project.overview.keyCapabilities.map((capability, idx) => (
                    <li
                      key={idx}
                      className='flex items-start gap-3 text-gray-700'
                    >
                      <span className='text-orange-500 mt-1 font-bold'>✓</span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* AI Team Roles (The Achievement) */}
            {project.teamRoles && (
              <section>
                <div className='flex items-center gap-3 mb-6'>
                  <h3 className='text-2xl font-bold text-gray-900'>
                    The AI Team
                  </h3>
                  <span className='px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wide'>
                    Orchestrated
                  </span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                  {project.teamRoles.map((role, idx) => (
                    <div
                      key={idx}
                      className='bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group'
                    >
                      <div className='absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity'>
                        {role.agent.includes('Claude') ? '🧠' : '✨'}
                      </div>
                      <div className='font-bold text-gray-900 mb-1'>
                        {role.role}
                      </div>
                      <div className='text-sm font-semibold text-purple-600 mb-2'>
                        {role.agent}
                      </div>
                      <div className='text-xs text-gray-500 leading-snug'>
                        {role.focus}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Development Methodology */}
            {project.developmentMethodology && (
              <section>
                <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                  <span className='text-orange-500'>🧠</span>
                  Development Methodology
                </h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  {project.developmentMethodology.map((method, idx) => (
                    <div
                      key={idx}
                      className='bg-gray-50 rounded-xl p-5 border border-gray-100'
                    >
                      <h4 className='font-bold text-gray-900 text-lg mb-2'>
                        {method.title}
                      </h4>
                      <p className='text-gray-700 text-sm mb-3'>
                        {method.description}
                      </p>
                      {method.items && (
                        <ul className='space-y-1.5'>
                          {method.items.map((item, i) => (
                            <li
                              key={i}
                              className='text-sm text-gray-600 flex items-start gap-2'
                            >
                              <span className='text-orange-400 mt-1'>•</span>
                              <span className='italic'>
                                "{item.replace(/^"|"$/g, '')}"
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Architecture */}
            <section>
              <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                <span className='text-orange-500'>🏗️</span>
                Architecture Design
              </h3>
              <p className='text-gray-700 leading-relaxed mb-6'>
                {project.architecture.description}
              </p>
              <div className='grid md:grid-cols-3 gap-4 mb-8'>
                {project.architecture.layers.map((layer, idx) => (
                  <div
                    key={idx}
                    className='bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-200 shadow-sm'
                  >
                    <h4 className='font-bold text-gray-900 mb-2'>
                      {layer.name}
                    </h4>
                    <p className='text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider'>
                      {layer.description}
                    </p>
                    <ul className='space-y-1.5'>
                      {layer.components.map((component, cidx) => (
                        <li
                          key={cidx}
                          className='text-sm text-gray-700 flex items-start gap-2'
                        >
                          <span className='text-blue-500 mt-1'>🔹</span>
                          {component}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* System Design Diagram */}
              {project.architectureDiagram && (
                <div className='space-y-8'>
                  <div>
                    <h4 className='font-bold text-gray-900 mb-3 text-lg border-l-4 border-orange-500 pl-3'>
                      Full System System Design
                    </h4>
                    <div className='bg-white p-2 rounded-lg border border-gray-100 shadow-sm'>
                      <MermaidDiagram
                        chart={project.architectureDiagram.systemDesign}
                        id={`system-design-${project.id}`}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className='font-bold text-gray-900 mb-3 text-lg border-l-4 border-orange-500 pl-3'>
                      Backend 3-Layer Details
                    </h4>
                    <div className='bg-white p-2 rounded-lg border border-gray-100 shadow-sm'>
                      <MermaidDiagram
                        chart={project.architectureDiagram.backendDiagram}
                        id={`backend-diagram-${project.id}`}
                      />
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Quality & Security (New) */}
            {(project.securityFeatures || project.qualityAssurance) && (
              <section>
                <h3 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                  <span className='text-orange-500'>🛡️</span>
                  Quality & Security
                </h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  {project.qualityAssurance?.map((qa, idx) => (
                    <div
                      key={idx}
                      className='bg-white border border-gray-200 rounded-xl p-5 shadow-sm'
                    >
                      <h4 className='font-bold text-gray-900 mb-4 text-lg flex items-center gap-2'>
                        <span className='text-blue-500'>🧪</span> {qa.title}
                      </h4>
                      <ul className='space-y-2'>
                        {qa.items.map((item, i) => (
                          <li
                            key={i}
                            className='flex items-start gap-2 text-gray-700 text-sm'
                          >
                            <span className='text-green-500 font-bold'>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {project.securityFeatures && (
                    <div className='bg-white border border-gray-200 rounded-xl p-5 shadow-sm'>
                      <h4 className='font-bold text-gray-900 mb-4 text-lg flex items-center gap-2'>
                        <span className='text-red-500'>🔒</span> Security
                        Implemented
                      </h4>
                      <ul className='space-y-2'>
                        {project.securityFeatures.map((item, i) => (
                          <li
                            key={i}
                            className='flex items-start gap-2 text-gray-700 text-sm'
                          >
                            <span className='text-green-500 font-bold'>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}

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
                      <div
                        key={idx}
                        className='bg-gray-50 p-3 rounded-lg border border-gray-100 flex justify-between items-center group hover:border-orange-200 transition-colors'
                      >
                        <span className='font-semibold text-gray-900 text-sm'>
                          {tech.name}
                        </span>
                        <span className='text-xs text-gray-500 group-hover:text-orange-600 transition-colors'>
                          {tech.purpose}
                        </span>
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
                      <div
                        key={idx}
                        className='bg-gray-50 p-3 rounded-lg border border-gray-100 flex justify-between items-center group hover:border-orange-200 transition-colors'
                      >
                        <span className='font-semibold text-gray-900 text-sm'>
                          {tech.name}
                        </span>
                        <span className='text-xs text-gray-500 group-hover:text-orange-600 transition-colors'>
                          {tech.purpose}
                        </span>
                      </div>
                    ))}
                  </div>

                  {project.techStackDetails.integrations && (
                    <div className='mt-6'>
                      <h4 className='font-bold text-gray-900 mb-3 text-lg'>
                        Key Integrations
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {project.techStackDetails.integrations.map(
                          (integration, idx) => (
                            <span
                              key={idx}
                              className='px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold border border-blue-100'
                            >
                              {integration}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
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
                    className='bg-gradient-to-br from-orange-50/50 to-white p-5 rounded-xl border border-orange-100 hover:border-orange-300 transition-colors'
                  >
                    <h4 className='font-bold text-gray-900 mb-2'>
                      {feature.title}
                    </h4>
                    <p className='text-gray-600 text-sm leading-relaxed'>
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
                <div className='bg-gray-50 rounded-xl p-5'>
                  <h4 className='font-bold text-gray-900 mb-3 text-lg border-b border-gray-200 pb-2'>
                    Technical Skills
                  </h4>
                  <ul className='space-y-2'>
                    {project.skillsDemonstrated.technical.map((skill, idx) => (
                      <li
                        key={idx}
                        className='flex items-start gap-2 text-gray-700 text-sm'
                      >
                        <span className='text-orange-500 mt-1 text-xs'>●</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='bg-gray-50 rounded-xl p-5'>
                  <h4 className='font-bold text-gray-900 mb-3 text-lg border-b border-gray-200 pb-2'>
                    Soft Skills
                  </h4>
                  <ul className='space-y-2'>
                    {project.skillsDemonstrated.soft.map((skill, idx) => (
                      <li
                        key={idx}
                        className='flex items-start gap-2 text-gray-700 text-sm'
                      >
                        <span className='text-orange-500 mt-1 text-xs'>●</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Metrics */}
            <section className='bg-gray-900 text-white rounded-2xl p-8'>
              <h3 className='text-2xl font-bold mb-6 flex items-center gap-2'>
                <span className='text-orange-500'>📊</span>
                Metrics & Impact
              </h3>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                {project.metrics.map((metric, idx) => (
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
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
