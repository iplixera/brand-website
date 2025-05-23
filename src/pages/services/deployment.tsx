import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import styles from '../../styles/ServiceDetail.module.css';

const Deployment = () => {
  const features = [
    {
      title: "CI/CD Pipeline Setup",
      description: "Set up automated continuous integration and deployment pipelines for faster releases",
      icon: "🔄"
    },
    {
      title: "Cloud Infrastructure",
      description: "Design and implement cloud infrastructure for scalability and reliability",
      icon: "☁️"
    },
    {
      title: "Container Orchestration",
      description: "Manage containerized applications with Kubernetes and Docker",
      icon: "🐳"
    },
    {
      title: "Monitoring & Logging",
      description: "Implement comprehensive monitoring and logging solutions for system visibility",
      icon: "📊"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Infrastructure Assessment",
      description: "Evaluate current infrastructure and identify areas for improvement"
    },
    {
      step: 2,
      title: "DevOps Implementation",
      description: "Set up CI/CD pipelines and implement DevOps best practices"
    },
    {
      step: 3,
      title: "Monitoring Setup",
      description: "Implement comprehensive monitoring and alerting systems"
    },
    {
      step: 4,
      title: "Security Implementation",
      description: "Implement security best practices throughout the deployment pipeline"
    },
    {
      step: 5,
      title: "Optimization",
      description: "Optimize cloud resources and infrastructure costs"
    },
    {
      step: 6,
      title: "Training & Documentation",
      description: "Train your team and provide comprehensive documentation"
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
              Deployment & DevOps
            </motion.h1>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Streamline your development workflow and ensure reliable deployments with our DevOps expertise
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
              <h2>Ready to Optimize Your Deployment?</h2>
              <p>Let's streamline your development workflow and ensure reliable deployments.</p>
              <a href="/contact" className={styles.ctaButton}>Get Started</a>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Deployment; 