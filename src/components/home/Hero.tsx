import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={`${styles.hero} ai-section-dark`}>
      <div className={styles.heroContent}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transform Your Ideas into Reality with <span className="ai-gradient-text">Plixera</span>
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We specialize in MVP development for startups and offer a suite of tech and commercial products 
          to help businesses streamline operations and enhance productivity.
        </motion.p>
        <motion.div 
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/contact" className="ai-button">
            Get Started
          </Link>
          <Link href="/services" className={styles.secondaryCta}>
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 