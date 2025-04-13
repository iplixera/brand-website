import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>About Us</h3>
          <p className={styles.description}>
            We build innovative digital solutions that transform ideas into reality. Our focus is on creating products that make a difference.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Services</h3>
          <nav className={styles.links}>
            <Link href="/services/mvp-development" className={styles.link}>
              MVP Development
            </Link>
            <Link href="/services/tech-products" className={styles.link}>
              Tech Products
            </Link>
            <Link href="/services/consulting" className={styles.link}>
              Consulting
            </Link>
            <Link href="/services/custom-solutions" className={styles.link}>
              Custom Solutions
            </Link>
          </nav>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Contact</h3>
          <div className={styles.contactInfo}>
            <p className={styles.contactItem}>
              <span className={styles.label}>Email:</span>
              <a href="mailto:team@plixera.com" className={styles.contactLink}>
                team@plixera.com
              </a>
            </p>
            <p className={styles.contactItem}>
              <span className={styles.label}>Location:</span>
              <span>San Francisco, CA</span>
            </p>
            <p className={styles.contactItem}>
              <span className={styles.label}>Hours:</span>
              <span>Mon-Fri: 9AM-6PM PST</span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            © {currentYear} Vibe Coding. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 