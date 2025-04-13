import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import styles from '@/styles/ServiceDetail.module.css';

const MVPDevelopment = () => {
  const features = [
    {
      title: 'Rapid Prototyping',
      description: 'We quickly build functional prototypes to validate your ideas and get feedback from users.',
      icon: '⚡'
    },
    {
      title: 'Iterative Development',
      description: 'Our Vibe Coding methodology focuses on continuous improvement and rapid iterations.',
      icon: '🔄'
    },
    {
      title: 'Scalable Architecture',
      description: 'We design your MVP with scalability in mind, ensuring it can grow with your business.',
      icon: '🏗️'
    },
    {
      title: 'Market Validation',
      description: 'We help you validate your product-market fit through user testing and feedback.',
      icon: '📊'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery',
      description: 'We start by understanding your vision, target audience, and business goals.'
    },
    {
      step: '2',
      title: 'Planning',
      description: 'We create a detailed roadmap with milestones and deliverables.'
    },
    {
      step: '3',
      title: 'Development',
      description: 'We build your MVP using our Vibe Coding methodology for rapid development.'
    },
    {
      step: '4',
      title: 'Testing',
      description: 'We thoroughly test your MVP to ensure it meets quality standards.'
    },
    {
      step: '5',
      title: 'Launch',
      description: 'We help you launch your MVP and gather initial user feedback.'
    },
    {
      step: '6',
      title: 'Iteration',
      description: 'We continuously improve your product based on user feedback and analytics.'
    }
  ];

  return (
    <Layout>
      <div className={styles.servicePage}>
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
              MVP Development
            </motion.h1>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Transform your startup idea into a working product with our Vibe Coding methodology.
              We focus on rapid development and iterative improvements to help you validate your
              business concept and get to market faster.
            </motion.p>
          </div>
        </motion.section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.features}>
              <h2>Key Features</h2>
              <div className={styles.featuresGrid}>
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className={styles.featureCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className={styles.featureIcon}>{feature.icon}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={styles.process}>
              <h2>Our Process</h2>
              <div className={styles.processSteps}>
                {process.map((step, index) => (
                  <motion.div 
                    key={index}
                    className={styles.processStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className={styles.stepNumber}>{step.step}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={styles.cta}>
              <h2>Ready to Build Your MVP?</h2>
              <p>
                Let's discuss your project and how we can help bring your vision to life.
                Contact us today to get started.
              </p>
              <a href="/contact" className={styles.ctaButton}>Get in Touch</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MVPDevelopment; 