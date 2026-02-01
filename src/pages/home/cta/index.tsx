import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from '@/components/smoothui/magnetic-button';

export const CTA = () => {
  return (
    <section className='bg-orange-50 py-16 px-4 border-t-2 border-b-2 border-orange-200'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex flex-col md:flex-row items-center justify-between gap-6'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Interested in working with me?
          </h2>
          <MagneticButton
            asChild
            strength={0.3}
            radius={150}
            className='bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 hover:scale-105 transition-all font-semibold shadow-lg flex items-center gap-2 cursor-pointer'
          >
            <Link
              target='_blank'
              to="mailto:andrey.povstyanko.00@gmail.com?subject=🤘 Hi Andrey, I'd like to hire you"
            >
              Contact Now
              <ArrowRight
                size={24}
                className='group-hover:scale-110 transition-transform'
              />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};
