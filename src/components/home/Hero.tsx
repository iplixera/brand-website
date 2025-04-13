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
          We specialize in MVP development for startups and offer a suite of tech and commercial products 
          to help businesses streamline operations and enhance productivity.
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