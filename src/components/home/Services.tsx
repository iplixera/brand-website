import React from 'react';
import Link from 'next/link';
import styles from './Services.module.css';

const services = [
  {
    title: 'MVP Development',
    description: 'Transform your startup idea into a working product with our Vibe Coding methodology. We focus on rapid development and iterative improvements.',
    link: '/services/mvp-development',
    icon: '🚀'
  },
  {
    title: 'Tech Products',
    description: 'Enhance your development workflow with our suite of tech products including localization tools, URL shorteners, and API integration solutions.',
    link: '/services/tech-products',
    icon: '⚡'
  },
  {
    title: 'Commercial Products',
    description: 'Streamline your business operations with our specialized commercial products for industries like real estate, healthcare, and retail.',
    link: '/services/commercial-products',
    icon: '🏢'
  }
];

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <p className={styles.sectionDescription}>
          We offer MVP development services for startups and a range of tech and commercial products to help businesses thrive.
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