import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import styles from '../../styles/ServiceDetail.module.css';

const BackendDevelopment = () => {
  const features = [
    {
      title: "Scalable Architecture",
      description: "Design and implement backend systems that can scale with your business growth",
      icon: "🏗️"
    },
    {
      title: "API Development",
      description: "Build robust RESTful and GraphQL APIs for seamless frontend integration",
      icon: "🔌"
    },
    {
      title: "Database Design",
      description: "Optimize database schemas and queries for performance and reliability",
      icon: "🗄️"
    },
    {
      title: "Security Implementation",
      description: "Implement industry-standard security practices to protect your data",
      icon: "🔒"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Requirements Analysis",
      description: "Understanding your backend requirements and system architecture needs"
    },
    {
      step: 2,
      title: "Architecture Design",
      description: "Designing a scalable and maintainable backend architecture"
    },
    {
      step: 3,
      title: "Development",
      description: "Building the backend with clean, efficient, and secure code"
    },
    {
      step: 4,
      title: "Testing",
      description: "Comprehensive testing including unit tests, integration tests, and API testing"
    },
    {
      step: 5,
      title: "Optimization",
      description: "Performance optimization and code refinement for the best system performance"
    },
    {
      step: 6,
      title: "Deployment",
      description: "Smooth deployment process with CI/CD integration and monitoring setup"
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
              Backend Development
            </motion.h1>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Building robust, scalable, and secure backend systems to power your applications
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
              <h2>Ready to Build Your Backend?</h2>
              <p>Let's create a robust, scalable, and secure backend system together.</p>
              <a href="/contact" className={styles.ctaButton}>Get Started</a>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BackendDevelopment; 