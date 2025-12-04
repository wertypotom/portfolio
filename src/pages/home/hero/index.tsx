import { motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from '../../../components/modal';

export const HeroSection = () => {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const handleViewResume = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsPdfModalOpen(true);
  };

  return (
    <>
      <section
        id='hero'
        className='hero-section relative pt-32 pb-10 px-4 overflow-hidden bg-orange-50/40'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='absolute top-[-10%] right-[-15%] w-[50%] h-[60%] bg-orange-300/40 -rotate-45 rounded-[20%]'
          style={{
            transformOrigin: 'center',
          }}
        />

        <div className='container mx-auto relative z-10'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className='text-orange-600 font-semibold tracking-wider mb-4 text-lg'
              >
                👋 Hi, I'm Andrey Povstyanko
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight'
              >
                Senior Web Developer
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className='text-xl text-gray-700 mb-4 leading-relaxed'
              >
                5+ years building performant, intuitive web applications with{' '}
                <span className='font-semibold text-orange-600'>
                  React, Next.js & TypeScript
                </span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className='text-lg text-gray-600 mb-8'
              >
                📍 Milwaukee, WI • Open to relocation across the US
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className='flex flex-wrap gap-4'
              >
                <Link
                  target='_blank'
                  to="mailto:andrey.povstyanko.00@gmail.com?subject=🤘 Hi Andrey, I'd like to hire you"
                  className='inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all hover:scale-105 shadow-lg'
                >
                  Let's Work Together
                  <ArrowRight className='ml-2' size={20} />
                </Link>
                <a
                  href='/assets/resume.pdf'
                  onClick={handleViewResume}
                  className='inline-flex items-center bg-white text-gray-800 px-8 py-3 rounded-full border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-all hover:scale-105'
                >
                  View Resume
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative flex justify-center'
            >
              <img
                src='/assets/images/banner-me.png'
                alt='Andrey Povstyanko'
                className='w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl mx-auto drop-shadow-2xl object-contain'
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      <Modal isOpen={isPdfModalOpen}>
        {isPdfModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4'
            onClick={() => setIsPdfModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className='bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden'
            >
              {/* Modal Header */}
              <div className='flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50'>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Resume - Andrey Povstyanko
                </h3>
                <div className='flex items-center gap-3'>
                  <a
                    href='/assets/resume.pdf'
                    download='Andrey_Povstyanko_Resume.pdf'
                    className='px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium'
                  >
                    Download PDF
                  </a>
                  <button
                    onClick={() => setIsPdfModalOpen(false)}
                    className='text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-200 rounded-lg'
                    aria-label='Close modal'
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className='flex-1 overflow-hidden'>
                <iframe
                  src='/assets/resume.pdf'
                  className='w-full h-full border-0'
                  title='Resume PDF'
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </Modal>
    </>
  );
};
