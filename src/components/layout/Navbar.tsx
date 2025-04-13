import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Vibe Coding
        </Link>

        <div className={styles.desktopMenu}>
          <Link href="/services" className={styles.menuItem}>
            Services
          </Link>
          <Link href="/about" className={styles.menuItem}>
            About
          </Link>
          <Link href="/contact" className={styles.menuItem}>
            Contact
          </Link>
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`} />
        </button>
      </div>

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
          <Link href="/contact" className={styles.mobileMenuItem} onClick={toggleMobileMenu}>
            Contact
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 