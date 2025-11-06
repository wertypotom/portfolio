import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const recommendations = [
  {
    image: '/assets/images/rec-1.jpeg',
    name: 'Tuomas Hyypiä',
    title: 'Product Manager at M-Files',
    profile: 'https://www.linkedin.com/in/tuomashyypia/',
    text: 'I have had the pleasure of working with Andrey as a Scrum Master and Product Owner. He is a talented developer who quickly grasps new concepts and technologies. Furthermore, he consistently delivers solutions on time. I recommend Andrey for a wide range of software development projects as his adaptability and technical skills make him a valuable asset in various settings.',
  },
  {
    image: '/assets/images/rec-2.jpeg',
    name: 'Alexandr Lukyanov',
    title: 'Lead Software Architect',
    profile: 'https://www.linkedin.com/in/lavir/',
    text: `It’s been a pleasure working with Andrey, who has been part of our team as a Software Developer.

    He successfully built a project from the ground up and also led the migration of one of our core projects from JavaScript to TypeScript, completing it smoothly and improving the overall quality and maintainability of the codebase. 

    Andrey is a skilled and reliable developer. He learns quickly and handles tasks efficiently. And I’m confident he will be a great addition to any organization. If you’re looking for a talented Software Developer, a rising star, I can strongly recommend him.
    `,
  },
]

export const Recommendations = () => {
  return (
    <section id='recommendations' className=' bg-orange-50/40 py-20 px-4'>
      <div className='container mx-auto py-5'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-4xl font-bold text-center text-gray-900 mb-12'
        >
          Recommendations
        </motion.h2>

        <div className='flex flex-wrap gap-8 justify-center items-center max-w-7xl mx-auto'>
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className='bg-white p-8 rounded-2xl shadow-xl relative w-full max-w-md h-80'
            >
              <Link
                to={rec.profile}
                target='_blank'
                className='flex items-center mb-4'
              >
                <img
                  src={rec.image}
                  alt={rec.name}
                  className='w-16 h-16 rounded-full object-cover mr-4'
                />
                <div>
                  <p className='font-semibold text-gray-900'>{rec.name}</p>
                  <p className='text-sm text-gray-500'>{rec.title}</p>
                </div>
              </Link>
              <div className='h-44 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-orange-100'>
                <p className='text-gray-600 italic'>{rec.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
