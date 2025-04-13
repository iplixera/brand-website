import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import styles from '@/styles/ServiceDetail.module.css';

const FrontendDevelopment = () => {
  const features = [
    {
      title: "Modern Tech Stack",
      description: "Built with React, Next.js, and TypeScript for optimal performance and maintainability",
      icon: "⚡"
    },
    {
      title: "Responsive Design",
      description: "Fully responsive layouts that work seamlessly across all devices and screen sizes",
      icon: "📱"
    },
    {
      title: "Performance Optimization",
      description: "Optimized for speed with code splitting, lazy loading, and efficient asset management",
      icon: "🚀"
    },
    {
      title: "Developer Experience",
      description: "Enhanced developer tools and workflows for efficient development and debugging",
      icon: "🛠️"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Requirements Analysis",
      description: "Understanding your needs and defining the scope of the frontend development project"
    },
    {
      step: 2,
      title: "Architecture Design",
      description: "Planning the technical architecture and selecting the right tools and libraries"
    },
    {
      step: 3,
      title: "Development",
      description: "Building the frontend with clean, maintainable code and modern best practices"
    },
    {
      step: 4,
      title: "Testing",
      description: "Comprehensive testing including unit tests, integration tests, and cross-browser testing"
    },
    {
      step: 5,
      title: "Optimization",
      description: "Performance optimization and code refinement for the best user experience"
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
              Frontend Development
            </motion.h1>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Building modern, responsive, and performant web applications with the latest technologies
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
              <h2>Ready to Build Your Frontend?</h2>
              <p>Let's create a modern, responsive, and performant web application together.</p>
              <a href="/contact" className={styles.ctaButton}>Get Started</a>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FrontendDevelopment; 