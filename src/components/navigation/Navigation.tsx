import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoContainer}>
            <span className={styles.logoText}>Plixera</span>
            <span className={styles.logoSlogan}>Vibe Coding • Creative Tech</span>
          </div>
        </Link>
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.menuList}>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 