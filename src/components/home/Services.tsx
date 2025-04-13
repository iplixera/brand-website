import React from 'react';
import Link from 'next/link';
import styles from './Services.module.css';

const services = [
  {
    title: 'MVP Development',
    description: 'Transform your ideas into a working product with our MVP development services. We focus on delivering core features quickly and efficiently.',
    link: '/services/mvp-development',
    icon: '🚀'
  },
  {
    title: 'Software Architecture',
    description: 'Build scalable and maintainable applications with our expert software architecture services. We design robust systems that grow with your business.',
    link: '/services/software-architecture',
    icon: '🏗️'
  },
  {
    title: 'Frontend Development',
    description: 'Create beautiful, responsive user interfaces with our frontend development expertise. We use modern technologies to build engaging user experiences.',
    link: '/services/frontend-development',
    icon: '🎨'
  },
  {
    title: 'Deployment & DevOps',
    description: 'Streamline your development workflow with our deployment and DevOps services. We help you set up CI/CD pipelines and cloud infrastructure.',
    link: '/services/deployment',
    icon: '⚙️'
  }
];

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <p className={styles.sectionDescription}>
          We offer a comprehensive range of services to help you build and scale your software products.
        </p>
        
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <Link href={service.link} className={styles.serviceLink}>
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 