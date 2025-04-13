import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import styles from '@/styles/Services.module.css';

const Services = () => {
  const services = [
    {
      title: 'MVP Development',
      description: 'Transform your startup idea into a working product with our Vibe Coding methodology. We focus on rapid development and iterative improvements.',
      icon: '🚀',
      link: '/services/mvp-development',
      features: [
        'Rapid prototyping',
        'Iterative development',
        'Scalable architecture',
        'Market validation'
      ]
    },
    {
      title: 'Tech Products',
      description: 'Enhance your development workflow with our suite of tech products designed for developers and businesses.',
      icon: '⚡',
      link: '/services/tech-products',
      features: [
        'Localization management',
        'URL shorteners',
        'API integration tools',
        'Developer utilities'
      ]
    },
    {
      title: 'Commercial Products',
      description: 'Streamline your business operations with our specialized commercial products for various industries.',
      icon: '🏢',
      link: '/services/commercial-products',
      features: [
        'Real estate solutions',
        'Healthcare management',
        'Retail analytics',
        'Industry-specific tools'
      ]
    }
  ];

  return (
    <Layout>
      <div className={styles.servicesPage}>
        <motion.section 
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.container}>
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We offer MVP development services for startups and a range of tech and commercial products 
              to help businesses streamline operations and enhance productivity.
            </motion.p>
          </div>
        </motion.section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className={styles.serviceIcon}>{service.icon}</span>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul className={styles.features}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  <Link href={service.link} className={styles.learnMore}>
                    Learn More
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services; 