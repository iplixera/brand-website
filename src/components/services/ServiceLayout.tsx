import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ServiceLayout.module.css';

interface ServiceLayoutProps {
  title: string;
  description: string;
  features: string[];
  benefits: Array<{
    title: string;
    description: string;
  }>;
  processSteps: Array<{
    title: string;
    description: string;
  }>;
  technologies?: string[];
  children?: React.ReactNode;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  description,
  features,
  benefits,
  processSteps,
  technologies,
  children
}) => {
  return (
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
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            {title}
          </motion.h1>
          <motion.p 
            className={styles.description}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact" className={styles.cta}>
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className={styles.features}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Key Features
          </motion.h2>
          <motion.ul 
            className={styles.featureList}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className={styles.featureItem}
                variants={fadeInUp}
              >
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      <motion.section 
        className={styles.benefits}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Benefits
          </motion.h2>
          <motion.div 
            className={styles.benefitsGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className={styles.benefitCard}
                variants={fadeInUp}
              >
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className={styles.process}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          <motion.div 
            className={styles.processSteps}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className={styles.processStep}
                variants={fadeInUp}
              >
                <div className={styles.stepNumber}>{index + 1}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {technologies && (
        <motion.section 
          className={styles.technologies}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.container}>
            <motion.h2 
              className={styles.sectionTitle}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Technologies We Use
            </motion.h2>
            <motion.div 
              className={styles.techGrid}
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {technologies.map((tech, index) => (
                <motion.div 
                  key={index} 
                  className={styles.techItem}
                  variants={fadeInUp}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {children}

      <motion.section 
        className={styles.cta}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.container}>
          <motion.h2 
            className={styles.ctaTitle}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className={styles.ctaDescription}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's discuss how we can help bring your vision to life.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact" className={styles.ctaButton}>
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServiceLayout; 