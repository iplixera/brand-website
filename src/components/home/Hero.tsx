import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Transform Your Ideas into Reality with Plixera
        </h1>
        <p className={styles.subtitle}>
          We specialize in MVP development, software architecture, frontend development, and deployment solutions.
          Let us help you build scalable, modern applications.
        </p>
        <div className={styles.ctaContainer}>
          <Link href="/contact" className={styles.primaryCta}>
            Get Started
          </Link>
          <Link href="/services" className={styles.secondaryCta}>
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 