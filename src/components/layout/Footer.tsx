import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Plixera</h3>
          <p>Your trusted partner in software development and localization services.</p>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Services</h4>
          <ul>
            <li><Link href="/services/mvp-development">MVP Development</Link></li>
            <li><Link href="/services/software-architecture">Software Architecture</Link></li>
            <li><Link href="/services/frontend-development">Frontend Development</Link></li>
            <li><Link href="/services/deployment">Deployment & DevOps</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Connect</h4>
          <ul>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Plixera. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 