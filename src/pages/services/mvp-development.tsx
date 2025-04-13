import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

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
            <motion.div 
              className={styles.features}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className={styles.featureCard}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className={styles.process}>
              <motion.h2 
                className={styles.processTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our Process
              </motion.h2>
              <motion.div 
                className={styles.processSteps}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {process.map((step, index) => (
                  <motion.div 
                    key={index}
                    className={styles.step}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                    }}
                  >
                    <div className={styles.stepNumber}>{step.step}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div 
              className={styles.cta}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className={styles.ctaTitle}>Ready to Build Your MVP?</h2>
              <p className={styles.ctaDescription}>
                Let's discuss your project and create a plan to bring your idea to life.
                Our team is ready to help you build a successful MVP.
              </p>
              <Link href="/contact" className={styles.ctaButton}>
                Get Started
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MVPDevelopment; 