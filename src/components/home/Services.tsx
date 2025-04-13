import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    title: 'MVP Development',
    description: 'Transform your startup idea into a working product with our Vibe Coding methodology. We focus on rapid development and iterative improvements.',
    link: '/services/mvp-development',
    icon: '🚀',
    features: ['Rapid Prototyping', 'Iterative Development', 'Technical Architecture', 'Scalable Solutions']
  },
  {
    title: 'Tech Products',
    description: 'Enhance your development workflow with our suite of tech products including localization tools, URL shorteners, and API integration solutions.',
    link: '/services/tech-products',
    icon: '⚡',
    features: ['Localization Tools', 'URL Shorteners', 'API Integration', 'Developer Tools']
  },
  {
    title: 'Commercial Products',
    description: 'Streamline your business operations with our specialized commercial products for industries like real estate, healthcare, and retail.',
    link: '/services/commercial-products',
    icon: '🏢',
    features: ['Industry Solutions', 'Custom Workflows', 'Integration Services', 'Support & Training']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.p 
          className={styles.sectionDescription}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We offer MVP development services for startups and a range of tech and commercial products to help businesses thrive.
        </motion.p>
        
        <motion.div 
          className={styles.serviceGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className={styles.serviceCard}
              variants={itemVariants}
            >
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.serviceFeature}>
                    <span className={styles.featureIcon}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={service.link} className={styles.serviceLink}>
                Learn More
                <span className={styles.linkArrow}>→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 