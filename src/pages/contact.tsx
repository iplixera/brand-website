import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import styles from '@/styles/Contact.module.css';

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contactPage}>
        <div className={styles.hero}>
          <div className={styles.container}>
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your ideas to life.
            </motion.p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              <motion.div 
                className={styles.whatsappCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className={styles.whatsappIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.828z"/>
                  </svg>
                </div>
                <h3 className={styles.whatsappTitle}>WhatsApp Us</h3>
                <p className={styles.whatsappDescription}>
                  Prefer to chat? Reach out to us on WhatsApp for quick responses and real-time communication.
                </p>
                <a 
                  href="https://wa.me/14155552671" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.whatsappButton}
                >
                  Start a Chat
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact; 