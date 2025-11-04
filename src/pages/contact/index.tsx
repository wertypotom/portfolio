import { type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import Section from '../../ui/section'
import Container from '../../ui/container'
import Button from '../../ui/button'
import './styles.css'

import contactBg from '../../assets/images/contact-bg.png'

const contactItems = [
  {
    label: 'Phone',
    value: '+01 123 654 8096',
    href: 'tel:+011236548096',
    color: 'hsl(177, 39%, 72%)',
    icon: <FiPhone />,
  },
  {
    label: 'Mail',
    value: 'info@domainname.com',
    href: 'mailto:info@domainname.com',
    color: 'hsl(41, 99%, 64%)',
    icon: <FiMail />,
  },
  {
    label: 'Visit My Studio',
    value: 'Warnwe Park Streetperrine,\nFL 33157 New York City',
    href: undefined,
    color: 'hsl(19, 97%, 85%)',
    icon: <FiMapPin />,
  },
]

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // hook up to backend or email service
  }

  return (
    <motion.main
      className='page-contact'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <article>
        <Section className='page-contact__section' bgImage={contactBg}>
          <Container className='page-contact__container'>
            <motion.form
              className='page-contact__form'
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <h2 className='page-contact__form-title'>Get in touch</h2>
              <p className='page-contact__form-text'>
                Our friendly team would love to hear from you.
              </p>

              <div className='page-contact__row'>
                <label className='page-contact__field'>
                  <span>First name</span>
                  <input
                    type='text'
                    name='firstName'
                    placeholder='Name *'
                    required
                  />
                </label>

                <label className='page-contact__field'>
                  <span>Your email</span>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email *'
                    required
                  />
                </label>
              </div>

              <label className='page-contact__field'>
                <span>Subject</span>
                <input type='text' name='subject' placeholder='Subject *' />
              </label>

              <label className='page-contact__field'>
                <span>Your message</span>
                <textarea
                  name='message'
                  placeholder='Your message *'
                  rows={4}
                  required
                />
              </label>

              <div className='page-contact__actions'>
                <Button type='submit' variant='tertiary'>
                  Send Message
                </Button>
              </div>
            </motion.form>

            <motion.div
              className='page-contact__info'
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <ul className='page-contact__list'>
                {contactItems.map((item) => (
                  <li key={item.label} className='page-contact__item'>
                    <span
                      className='page-contact__icon'
                      style={{ backgroundColor: item.color }}
                    >
                      {item.icon}
                    </span>

                    <div>
                      <p className='page-contact__label'>{item.label}</p>
                      {item.href ? (
                        <a className='page-contact__value' href={item.href}>
                          {item.value}
                        </a>
                      ) : (
                        <address className='page-contact__value'>
                          {item.value}
                        </address>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Container>
        </Section>
      </article>
    </motion.main>
  )
}
