import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import styles from '@/styles/ServiceDetail.module.css';

const TechProducts = () => {
  const features = [
    {
      title: 'Localization Management',
      description: 'Streamline your app localization process with our powerful tools. Manage translations, automate workflows, and ensure consistent messaging across all languages.',
      icon: '🌐'
    },
    {
      title: 'URL Shortener',
      description: 'Create short, memorable links for your marketing campaigns. Track clicks, analyze performance, and manage your links all in one place.',
      icon: '🔗'
    },
    {
      title: 'API Integration Tools',
      description: 'Connect your applications with third-party services effortlessly. Our tools simplify API integration, authentication, and data synchronization.',
      icon: '🔄'
    },
    {
      title: 'Developer Utilities',
      description: 'Boost your productivity with our suite of developer tools. From code formatters to testing utilities, we have everything you need to streamline your workflow.',
      icon: '🛠️'
    }
  ];

  const process = [
    {
      title: 'Identify Your Needs',
      description: 'We help you identify which of our tech products can solve your specific challenges and improve your workflow.'
    },
    {
      title: 'Choose Your Solution',
      description: 'Select from our range of tech products or request a customized solution tailored to your unique requirements.'
    },
    {
      title: 'Implementation',
      description: 'Our team guides you through the implementation process, ensuring a smooth integration with your existing systems.'
    },
    {
      title: 'Ongoing Support',
      description: 'We provide continuous support and updates to ensure your tech products remain effective and up-to-date.'
    }
  ];

  return (
    <Layout>
      <div className={styles.servicePage}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Tech Products
            </motion.h1>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Enhance your development workflow with our suite of tech products designed for developers and businesses.
            </motion.p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <motion.div 
              className={styles.features}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>Our Tech Products</h2>
              <div className={styles.featuresGrid}>
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className={styles.featureCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <span className={styles.featureIcon}>{feature.icon}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className={styles.process}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2>How It Works</h2>
              <div className={styles.processSteps}>
                {process.map((step, index) => (
                  <motion.div 
                    key={index}
                    className={styles.processStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className={styles.stepNumber}>{index + 1}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className={styles.cta}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2>Ready to enhance your tech workflow?</h2>
              <p>Contact us to learn more about our tech products and how they can benefit your business.</p>
              <a href="/contact" className={styles.ctaButton}>Get in Touch</a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TechProducts; 