import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Vibe Coding
          </motion.span>
        </Link>

        <nav className={styles.desktopMenu}>
          <motion.div className={styles.menuItems}>
            <Link href="/services" className={styles.menuItem}>
              Services
            </Link>
            <Link href="/about" className={styles.menuItem}>
              About
            </Link>
            <Link href="/careers" className={styles.menuItem}>
              Careers
            </Link>
            <Link href="/contact" className={styles.menuItem}>
              Contact
            </Link>
          </motion.div>
          <motion.div
            className={styles.cta}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact" className={styles.ctaButton}>
              Get Started
            </Link>
          </motion.div>
        </nav>

        <button
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/services" className={styles.mobileMenuItem} onClick={toggleMobileMenu}>
                Services
              </Link>
              <Link href="/about" className={styles.mobileMenuItem} onClick={toggleMobileMenu}>
                About
              </Link>
              <Link href="/careers" className={styles.mobileMenuItem} onClick={toggleMobileMenu}>
                Careers
              </Link>
              <Link href="/contact" className={styles.mobileMenuItem} onClick={toggleMobileMenu}>
                Contact
              </Link>
              <Link href="/contact" className={styles.mobileCtaButton} onClick={toggleMobileMenu}>
                Get Started
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar; 