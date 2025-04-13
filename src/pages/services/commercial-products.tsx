import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import styles from '@/styles/ServiceDetail.module.css';

const CommercialProducts = () => {
  const features = [
    {
      title: 'Real Estate Solutions',
      description: 'Streamline your real estate business with our specialized tools for property management, client engagement, and transaction tracking.',
      icon: '🏠'
    },
    {
      title: 'Healthcare Management',
      description: 'Improve patient care and operational efficiency with our healthcare management solutions designed for clinics, hospitals, and medical practices.',
      icon: '🏥'
    },
    {
      title: 'Retail Analytics',
      description: 'Gain valuable insights into your retail business with our analytics tools. Track inventory, analyze customer behavior, and optimize your operations.',
      icon: '🛍️'
    },
    {
      title: 'Industry-Specific Tools',
      description: 'We develop customized solutions for various industries, addressing unique challenges and requirements specific to your business sector.',
      icon: '🏭'
    }
  ];

  const process = [
    {
      title: 'Industry Analysis',
      description: 'We analyze your industry-specific challenges and requirements to identify the most effective solutions.'
    },
    {
      title: 'Solution Design',
      description: 'Our team designs a tailored solution that addresses your unique business needs and integrates seamlessly with your existing systems.'
    },
    {
      title: 'Implementation',
      description: 'We guide you through the implementation process, ensuring a smooth transition and minimal disruption to your operations.'
    },
    {
      title: 'Continuous Improvement',
      description: 'We regularly update and enhance our commercial products based on industry trends and customer feedback.'
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
              Commercial Products
            </motion.h1>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Streamline your business operations with our specialized commercial products for various industries.
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
              <h2>Our Commercial Products</h2>
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
              <h2>Ready to streamline your business operations?</h2>
              <p>Contact us to learn more about our commercial products and how they can benefit your industry.</p>
              <a href="/contact" className={styles.ctaButton}>Get in Touch</a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CommercialProducts; 