import { motion } from 'framer-motion';
import type { Project } from './projects-data';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={onClick}
      className='group w-full h-full flex flex-col cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]'
    >
      {/* Cover Image */}
      <div className='relative shrink-0 h-64 bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden'>
        <img
          src={project.coverImage ? project.coverImage : '/placeholder.png'}
          alt={project.title}
          className='w-full h-full object-cover'
          onError={(e) => {
            // Revert to a gradient fallback if image fails to load (e.g., missing file)
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjdjZWJiIi8+Cjwvc3ZnPg==';
          }}
        />
        {project.badge && (
          <div className='absolute top-4 right-4 z-10'>
            <span className='px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-sm'>
              {project.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className='p-6 flex flex-col flex-1'>
        <h3 className='text-2xl font-bold text-gray-900 mb-2'>
          {project.title}
        </h3>
        <p className='text-orange-600 font-semibold mb-4'>{project.subtitle}</p>

        {/* Tech Stack Tags */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.tags.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className='px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium'
            >
              {tech}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className='px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium'>
              +{project.tags.length - 5} more
            </span>
          )}
        </div>

        <p className='text-gray-600 line-clamp-3 mb-4'>
          {project.overviewText}
        </p>

        <div className='mt-auto pt-2 text-orange-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all'>
          View Details
          <span className='transform group-hover:translate-x-1 transition-transform'>
            →
          </span>
        </div>
      </div>
    </motion.div>
  );
};
