import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <span>Plixera</span>
          </Link>
        </div>

        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.menuList}>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 