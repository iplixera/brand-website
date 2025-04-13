import React from 'react';
import Link from 'next/link';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>About Plixera</h2>
            <p className={styles.description}>
              Plixera is a leading software development company specializing in helping businesses transform their ideas into scalable, modern applications. With our expertise in MVP development, software architecture, frontend development, and deployment solutions, we provide end-to-end services to bring your vision to life.
            </p>
            <p className={styles.description}>
              Our team of experienced developers and designers work closely with you to understand your unique requirements and deliver solutions that drive business growth. We believe in transparency, collaboration, and continuous improvement throughout the development process.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Team Members</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
            </div>
            <Link href="/about" className={styles.aboutLink}>
              Learn More About Us
            </Link>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>
              {/* Image will be added later */}
              <div className={styles.placeholderText}>About Plixera</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 