import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className={styles.hero} ref={ref}>
      <motion.div
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 className={styles.title} variants={itemVariants}>
          MVPs with Speed, Soul, and Flow
        </motion.h1>
        <motion.p className={styles.subtitle} variants={itemVariants}>
          Welcome to Vibe Coding, where we transform your ideas into reality with precision and style.
        </motion.p>
        <motion.div className={styles.ctaContainer} variants={itemVariants}>
          <Link href="/contact" className={styles.primaryCta}>
            Ready to Vibe?
          </Link>
          <Link href="/services" className={styles.secondaryCta}>
            Explore Our Services
          </Link>
        </motion.div>

        <motion.div className={styles.statsContainer} variants={itemVariants}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>100%</div>
            <div className={styles.statLabel}>Energy Level</div>
            <div className={styles.meterContainer}>
              <motion.div 
                className={styles.meterFill} 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 1 }}
              />
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>2-4</div>
            <div className={styles.statLabel}>Weeks MVP Time</div>
            <div className={styles.meterContainer}>
              <motion.div 
                className={styles.meterFill} 
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>∞</div>
            <div className={styles.statLabel}>Creative Flow</div>
            <div className={styles.meterContainer}>
              <motion.div 
                className={styles.meterFill} 
                initial={{ width: 0 }}
                animate={{ width: '95%' }}
                transition={{ duration: 1.5, delay: 1.4 }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 