import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.textContent}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h1 className={styles.title} variants={itemVariants}>
            Building Digital
            <br />
            <span className={styles.highlight}>Excellence</span>
          </motion.h1>
          
          <motion.p className={styles.subtitle} variants={itemVariants}>
            We create innovative solutions that drive business growth and transform ideas into reality
          </motion.p>

          <motion.div className={styles.stats} variants={itemVariants}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>98%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>150+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>10+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
          </motion.div>

          <motion.div className={styles.ctaContainer} variants={itemVariants}>
            <Link href="/contact" className={`${styles.cta} ${styles.primaryCta}`}>
              Start Your Project
            </Link>
            <Link href="/services" className={`${styles.cta} ${styles.secondaryCta}`}>
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.imageContent}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageOverlay} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 