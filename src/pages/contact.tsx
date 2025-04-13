import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import styles from '@/styles/Contact.module.css';

const Contact = () => {
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
              Let's Build Your MVP with Vibe
            </motion.h1>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Your Idea → Our Flow → Let's Build
            </motion.p>
          </div>
        </motion.section>

        <section className={styles.content}>
          <div className={styles.container}>
            <motion.div 
              className={styles.whatsappSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className={styles.whatsappCard}>
                <div className={styles.whatsappIcon}>💬</div>
                <h2 className={styles.whatsappTitle}>Start a Vibe Chat</h2>
                <p className={styles.whatsappDescription}>
                  Connect with our team directly on WhatsApp for a quick, friendly conversation about your project.
                </p>
                <a 
                  href="https://wa.me/971585544057" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.whatsappButton}
                >
                  Start a Vibe Chat
                </a>
              </div>
            </motion.div>

            <motion.div 
              className={styles.infoSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className={styles.infoTitle}>Other Ways to Connect</h2>
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>✉️</span>
                  <h3 className={styles.infoCardTitle}>Email</h3>
                  <p className={styles.infoCardContent}>team@plixera.com</p>
                </div>
                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>📍</span>
                  <h3 className={styles.infoCardTitle}>Location</h3>
                  <p className={styles.infoCardContent}>UAE & KSA</p>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <h3 className={styles.socialTitle}>Follow Our Vibe</h3>
                <div className={styles.socialGrid}>
                  <a href="https://www.linkedin.com/company/iplixera" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact; 