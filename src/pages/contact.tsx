import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/ContactForm';
import styles from '@/styles/Contact.module.css';

const Contact = () => {
  const contactInfo = [
    {
      title: 'Email',
      content: 'team@plixera.com',
      icon: '✉️'
    },
    {
      title: 'Phone',
      content: '+971 58 55 44 057',
      icon: '📞'
    },
    {
      title: 'Location',
      content: 'UAE & KSA',
      icon: '📍'
    }
  ];

  return (
    <Layout>
      <div className={styles.contactPage}>
        <motion.section 
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.container}>
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </motion.p>
          </div>
        </motion.section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.formSection}>
                <ContactForm />
              </div>

              <motion.div 
                className={styles.infoSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className={styles.infoTitle}>Contact Information</h2>
                <div className={styles.infoGrid}>
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index}
                      className={styles.infoCard}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <span className={styles.infoIcon}>{info.icon}</span>
                      <h3 className={styles.infoCardTitle}>{info.title}</h3>
                      <p className={styles.infoCardContent}>{info.content}</p>
                    </motion.div>
                  ))}
                </div>

                <div className={styles.socialLinks}>
                  <h3 className={styles.socialTitle}>Follow Us</h3>
                  <div className={styles.socialGrid}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact; 