import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import styles from '../../styles/ServiceDetail.module.css';

const SoftwareArchitecture = () => {
  const features = [
    {
      title: "System Design",
      description: "Design scalable, maintainable, and robust software systems",
      icon: "🏗️"
    },
    {
      title: "Microservices Architecture",
      description: "Implement microservices architecture for better scalability and maintainability",
      icon: "🔧"
    },
    {
      title: "Cloud-Native Solutions",
      description: "Design cloud-native solutions that leverage modern cloud technologies",
      icon: "☁️"
    },
    {
      title: "API Design",
      description: "Create well-designed APIs for seamless integration between systems",
      icon: "🔌"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Requirements Analysis",
      description: "Understand your business needs, technical requirements, and future growth plans"
    },
    {
      step: 2,
      title: "Architecture Design",
      description: "Create a comprehensive architecture design that meets your requirements"
    },
    {
      step: 3,
      title: "Implementation Planning",
      description: "Develop a detailed implementation plan with clear milestones and deliverables"
    },
    {
      step: 4,
      title: "Security Architecture",
      description: "Design security architecture to protect your data and systems"
    },
    {
      step: 5,
      title: "Performance Optimization",
      description: "Optimize system performance through efficient architecture and design patterns"
    },
    {
      step: 6,
      title: "Review & Documentation",
      description: "Review the architecture with stakeholders and provide comprehensive documentation"
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
              Software Architecture
            </motion.h1>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Build scalable, maintainable, and robust software systems with our expert architecture services
            </motion.p>
          </div>
        </section>

        <div className={styles.content}>
          <div className={styles.container}>
            <section className={styles.features}>
              <h2>Key Features</h2>
              <div className={styles.featuresGrid}>
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className={styles.featureCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className={styles.featureIcon}>{feature.icon}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className={styles.process}>
              <h2>Our Process</h2>
              <div className={styles.processSteps}>
                {process.map((step, index) => (
                  <motion.div 
                    key={index}
                    className={styles.processStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={styles.stepNumber}>{step.step}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className={styles.cta}>
              <h2>Ready to Design Your Architecture?</h2>
              <p>Let's create a scalable, maintainable, and robust software system together.</p>
              <a href="/contact" className={styles.ctaButton}>Get Started</a>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SoftwareArchitecture; 