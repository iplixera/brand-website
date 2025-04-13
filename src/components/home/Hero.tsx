import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
        duration: 0.8,
      },
    },
  };

  return (
    <section className={styles.hero} ref={ref}>
      <div className={styles.background}>
        <div className={styles.gradientOrb} />
        <div className={styles.codeSnippets}>
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className={styles.codeSnippet}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
            >
              <pre>
                <code>
                  {`const vibe = new VibeCoding();
vibe.energy = 'high';
vibe.flow = 'smooth';
vibe.build();`}
                </code>
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div variants={itemVariants}>
          <h1 className={styles.title}>
            <span className={styles.gradientText}>MVPs with</span>
            <br />
            Speed, Soul, and Flow
          </h1>
          
          <p className={styles.subtitle}>
            <span className={styles.monoText}>Welcome to Vibe Coding</span>
            <br />
            We create digital experiences that feel alive.
          </p>
          
          <div className={styles.ctaContainer}>
            <Link href="/contact" className={styles.ctaButton}>
              <span>Ready to Vibe?</span>
              <motion.span
                className={styles.arrow}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
            
            <Link href="/services" className={styles.secondaryButton}>
              Explore Our Vibe
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          className={styles.stats}
          variants={itemVariants}
        >
          <div className={styles.stat}>
            <div className={styles.vibeMeter}>
              <div className={styles.vibeMeterFill} style={{ width: '100%' }}></div>
            </div>
            <span className={styles.number}>100%</span>
            <span className={styles.label}>Energy Level</span>
          </div>
          <div className={styles.stat}>
            <div className={styles.vibeMeter}>
              <div className={styles.vibeMeterFill} style={{ width: '80%' }}></div>
            </div>
            <span className={styles.number}>48h</span>
            <span className={styles.label}>MVP Time</span>
          </div>
          <div className={styles.stat}>
            <div className={styles.vibeMeter}>
              <div className={styles.vibeMeterFill} style={{ width: '90%' }}></div>
            </div>
            <span className={styles.number}>∞</span>
            <span className={styles.label}>Creative Flow</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 