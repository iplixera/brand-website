import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandSection}>
            <Link href="/" className={styles.logo}>
              Plixera
            </Link>
            <p className={styles.tagline}>
              Building MVPs with Speed, Soul, and Flow
            </p>
            <div className={styles.socialLinks}>
              <a href="https://twitter.com/plixera" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                Twitter
              </a>
              <span className={styles.linkSeparator}>•</span>
              <a href="https://linkedin.com/company/plixera" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LinkedIn
              </a>
              <span className={styles.linkSeparator}>•</span>
              <a href="https://github.com/plixera" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GitHub
              </a>
            </div>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linksGroup}>
              <h3 className={styles.linksTitle}>Services</h3>
              <nav className={styles.linksList}>
                <Link href="/services/mvp-development" className={styles.link}>
                  MVP Development
                </Link>
                <Link href="/services/web-development" className={styles.link}>
                  Web Development
                </Link>
                <Link href="/services/mobile-development" className={styles.link}>
                  Mobile Development
                </Link>
                <Link href="/services/ai-integration" className={styles.link}>
                  AI Integration
                </Link>
              </nav>
            </div>

            <div className={styles.linksGroup}>
              <h3 className={styles.linksTitle}>Company</h3>
              <nav className={styles.linksList}>
                <Link href="/about" className={styles.link}>
                  About Us
                </Link>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
                <Link href="/blog" className={styles.link}>
                  Blog
                </Link>
                <Link href="/careers" className={styles.link}>
                  Careers
                </Link>
              </nav>
            </div>

            <div className={styles.linksGroup}>
              <h3 className={styles.linksTitle}>Contact</h3>
              <nav className={styles.linksList}>
                <a href="mailto:team@plixera.com" className={styles.link}>
                  team@plixera.com
                </a>
                <a href="https://wa.me/1234567890" className={styles.link}>
                  WhatsApp Preferred
                </a>
                <p className={styles.address}>
                  UAE - Sharjah Free Zone
                </p>
              </nav>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Plixera. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <span className={styles.linkSeparator}>•</span>
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