import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import config from '../../config';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Phone,
      href: `tel:${config.phoneNumber}`,
    },
    {
      icon: Mail,
      href: `mailto:andrey.povstyanko.00@gmail.com?subject=🤘 Hi Andrey, I'd like to hire you`,
    },
    ...(config.showWhatsApp
      ? [
          {
            icon: FaWhatsapp,
            href: `https://wa.me/${config.phoneNumber.replace(/\+/g, '')}`,
          },
        ]
      : []),
    ...(config.showTelegram
      ? [
          {
            icon: FaTelegram,
            href: `https://t.me/${config.telegramUsername}`,
          },
        ]
      : []),
    {
      icon: Github,
      href: 'https://github.com/wertypotom',
    },
    ...(config.showLinkedIn
      ? [
          {
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/andrey-povstyanko/',
          },
        ]
      : []),
  ];

  return (
    <footer
      id='contact'
      className='bg-orange-50 text-gray-800 py-12 border-t-2 border-orange-200'
    >
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-3xl font-bold text-center mb-8'
        >
          Contact me
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='flex justify-center space-x-6 mb-6'
        >
          {socialLinks.map((social, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                target='_blank'
                to={social.href}
                className='w-12 h-12 bg-white border-2 border-orange-200 rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:shadow-lg transition-all'
              >
                <social.icon size={20} />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </footer>
  );
};

export default Footer;
