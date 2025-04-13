import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import styles from '@/styles/Careers.module.css';

const Careers = () => {
  const [openJobIndex, setOpenJobIndex] = useState<number | null>(null);

  const toggleJobDetails = (index: number) => {
    setOpenJobIndex(openJobIndex === index ? null : index);
  };

  const jobs = [
    {
      title: 'Web Developer',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'We are looking for a talented Web Developer to join our team and help build modern, responsive web applications.',
      responsibilities: [
        'Develop and maintain web applications using React, Next.js, and TypeScript',
        'Collaborate with designers to implement UI/UX designs',
        'Write clean, maintainable, and well-documented code',
        'Optimize applications for performance and scalability',
        'Participate in code reviews and contribute to team knowledge sharing',
        'Stay up-to-date with the latest web technologies and best practices'
      ],
      requirements: [
        '3+ years of experience in web development',
        'Strong proficiency in JavaScript/TypeScript, HTML, and CSS',
        'Experience with React and modern frontend frameworks',
        'Knowledge of responsive design principles',
        'Familiarity with version control systems (Git)',
        'Experience with RESTful APIs and web services',
        'Strong problem-solving skills and attention to detail'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Flexible work hours and remote work options',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Collaborative and innovative work environment'
      ]
    },
    {
      title: 'Android Developer',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'We are seeking an experienced Android Developer to create high-quality mobile applications for our clients.',
      responsibilities: [
        'Design and build advanced applications for the Android platform',
        'Collaborate with cross-functional teams to define, design, and ship new features',
        'Work with outside data sources and APIs',
        'Unit-test code for robustness, including edge cases, usability, and general reliability',
        'Work on bug fixing and improving application performance',
        'Continuously discover, evaluate, and implement new technologies to maximize development efficiency'
      ],
      requirements: [
        '3+ years of experience in Android development',
        'Strong knowledge of Java and Kotlin',
        'Experience with Android SDK, different versions of Android, and how to deal with different screen sizes',
        'Familiarity with RESTful APIs to connect Android applications to back-end services',
        'Experience with offline storage, threading, and performance tuning',
        'Knowledge of the open-source Android ecosystem and the libraries available for common tasks',
        'Understanding of Google\'s Android design principles and interface guidelines'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Flexible work hours and remote work options',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Collaborative and innovative work environment'
      ]
    },
    {
      title: 'Backend Developer',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'We are looking for a Backend Developer to build robust server-side applications and APIs that power our products.',
      responsibilities: [
        'Design and implement scalable backend services and APIs',
        'Develop and maintain database schemas and queries',
        'Build secure authentication and authorization systems',
        'Optimize application performance and database queries',
        'Implement automated testing and CI/CD pipelines',
        'Collaborate with frontend developers to ensure seamless integration'
      ],
      requirements: [
        '4+ years of experience in backend development',
        'Strong proficiency in Node.js, Python, or Java',
        'Experience with SQL and NoSQL databases',
        'Knowledge of RESTful API design principles',
        'Familiarity with cloud platforms (AWS, GCP, or Azure)',
        'Experience with containerization (Docker) and orchestration (Kubernetes)',
        'Understanding of security best practices and data protection'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Flexible work hours and remote work options',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Collaborative and innovative work environment'
      ]
    },
    {
      title: 'Solutions Architect',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'We are seeking a Solutions Architect to design and implement scalable, secure, and efficient software architectures.',
      responsibilities: [
        'Design system architectures that meet business requirements',
        'Create technical specifications and design documents',
        'Evaluate and select appropriate technologies and frameworks',
        'Guide development teams in implementing architectural patterns',
        'Ensure systems are scalable, maintainable, and secure',
        'Stay current with emerging technologies and architectural trends'
      ],
      requirements: [
        '7+ years of experience in software development',
        '3+ years of experience as a Solutions Architect',
        'Strong knowledge of cloud platforms and services',
        'Experience with microservices architecture',
        'Understanding of security, scalability, and performance considerations',
        'Excellent communication and leadership skills',
        'Ability to balance technical excellence with business constraints'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Flexible work hours and remote work options',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Collaborative and innovative work environment'
      ]
    },
    {
      title: 'iOS Developer',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'We are looking for an iOS Developer to create elegant, user-friendly mobile applications for Apple devices.',
      responsibilities: [
        'Design and build advanced applications for the iOS platform',
        'Collaborate with cross-functional teams to define, design, and ship new features',
        'Work with outside data sources and APIs',
        'Unit-test code for robustness, including edge cases, usability, and general reliability',
        'Work on bug fixing and improving application performance',
        'Continuously discover, evaluate, and implement new technologies to maximize development efficiency'
      ],
      requirements: [
        '3+ years of experience in iOS development',
        'Strong knowledge of Swift and Objective-C',
        'Experience with iOS frameworks and design patterns',
        'Familiarity with RESTful APIs to connect iOS applications to back-end services',
        'Experience with offline storage, threading, and performance tuning',
        'Knowledge of Apple\'s design principles and interface guidelines',
        'Published apps in the App Store is a plus'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Flexible work hours and remote work options',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Collaborative and innovative work environment'
      ]
    },
    {
      title: 'QA Automation Engineer',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'We are seeking a QA Automation Engineer to ensure the quality and reliability of our software products through automated testing.',
      responsibilities: [
        'Design and implement automated test suites for web and mobile applications',
        'Develop and maintain test frameworks and tools',
        'Create test plans and test cases based on requirements',
        'Collaborate with development teams to identify and fix issues',
        'Conduct code reviews for test automation scripts',
        'Contribute to continuous integration and deployment pipelines'
      ],
      requirements: [
        '3+ years of experience in QA automation',
        'Strong proficiency in test automation frameworks (Selenium, Cypress, Appium)',
        'Experience with programming languages (JavaScript, Python, Java)',
        'Knowledge of CI/CD tools and processes',
        'Understanding of software testing methodologies and best practices',
        'Experience with API testing and performance testing',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Flexible work hours and remote work options',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Collaborative and innovative work environment'
      ]
    },
    {
      title: 'Vibe Coder',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'We are looking for a Vibe Coder to bring creativity, energy, and a unique perspective to our development team.',
      responsibilities: [
        'Collaborate with cross-functional teams to create innovative solutions',
        'Contribute to both frontend and backend development',
        'Bring fresh ideas and approaches to technical challenges',
        'Help maintain a positive and productive team culture',
        'Participate in hackathons and innovation initiatives',
        'Mentor junior developers and share knowledge with the team'
      ],
      requirements: [
        '2+ years of experience in software development',
        'Proficiency in multiple programming languages and frameworks',
        'Creative problem-solving abilities',
        'Strong communication and collaboration skills',
        'Passion for technology and innovation',
        'Ability to adapt quickly to new technologies and methodologies',
        'A portfolio of interesting projects or contributions to open source'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Flexible work hours and remote work options',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Collaborative and innovative work environment'
      ]
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'We are seeking a UI/UX Designer to create beautiful, intuitive, and user-centered digital experiences.',
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Conduct user research and usability testing',
        'Create wireframes, prototypes, and high-fidelity designs',
        'Collaborate with developers to ensure design implementation',
        'Develop and maintain design systems and style guides',
        'Stay current with design trends and best practices'
      ],
      requirements: [
        '3+ years of experience in UI/UX design',
        'Proficiency in design tools (Figma, Sketch, Adobe XD)',
        'Strong portfolio demonstrating web and mobile design work',
        'Understanding of user-centered design principles',
        'Experience with responsive design and accessibility standards',
        'Knowledge of HTML, CSS, and JavaScript is a plus',
        'Excellent communication and presentation skills'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Flexible work hours and remote work options',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Collaborative and innovative work environment'
      ]
    },
    {
      title: 'DevOps Engineer',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'We are looking for a DevOps Engineer to streamline our development processes and ensure reliable deployment of our applications.',
      responsibilities: [
        'Design and implement CI/CD pipelines',
        'Automate infrastructure provisioning and configuration',
        'Monitor and optimize system performance and reliability',
        'Implement security best practices and compliance requirements',
        'Collaborate with development teams to improve deployment processes',
        'Troubleshoot and resolve infrastructure and deployment issues'
      ],
      requirements: [
        '4+ years of experience in DevOps or related roles',
        'Strong knowledge of cloud platforms (AWS, GCP, or Azure)',
        'Experience with containerization (Docker) and orchestration (Kubernetes)',
        'Proficiency in infrastructure as code (Terraform, CloudFormation)',
        'Familiarity with CI/CD tools (Jenkins, GitHub Actions, CircleCI)',
        'Experience with monitoring and logging tools',
        'Knowledge of scripting languages (Python, Bash, PowerShell)'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Flexible work hours and remote work options',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Collaborative and innovative work environment'
      ]
    },
    {
      title: 'Product Manager',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'We are seeking a Product Manager to drive the development of our products from concept to launch.',
      responsibilities: [
        'Define product vision, strategy, and roadmap',
        'Gather and prioritize product requirements',
        'Collaborate with cross-functional teams to deliver high-quality products',
        'Conduct market research and competitive analysis',
        'Track product performance and user feedback',
        'Make data-driven decisions to improve product features and user experience'
      ],
      requirements: [
        '4+ years of experience in product management',
        'Strong analytical and problem-solving skills',
        'Excellent communication and leadership abilities',
        'Experience with agile development methodologies',
        'Knowledge of product analytics and user research',
        'Understanding of technical concepts and constraints',
        'Track record of successfully launching and iterating on products'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Flexible work hours and remote work options',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Collaborative and innovative work environment'
      ]
    }
  ];

  return (
    <Layout>
      <div className={styles.careersPage}>
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
              Join Our Team
            </motion.h1>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We're looking for talented individuals who are passionate about technology and innovation.
              Join us in building the future of software development.
            </motion.p>
          </div>
        </motion.section>

        <section className={styles.content}>
          <div className={styles.container}>
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Open Positions
            </motion.h2>
            
            <div className={styles.jobsGrid}>
              {jobs.map((job, index) => (
                <motion.div 
                  key={index}
                  className={styles.jobCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
                >
                  <div 
                    className={styles.jobHeader}
                    onClick={() => toggleJobDetails(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && toggleJobDetails(index)}
                  >
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <div className={styles.jobMeta}>
                      <span className={styles.jobType}>{job.type}</span>
                      <span className={styles.jobLocation}>{job.location}</span>
                    </div>
                    <div className={`${styles.toggleIcon} ${openJobIndex === index ? styles.open : ''}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {openJobIndex === index && (
                      <motion.div 
                        className={styles.jobDetails}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className={styles.jobDescription}>{job.description}</p>
                        
                        <div className={styles.jobSections}>
                          <div className={styles.jobSection}>
                            <h4 className={styles.sectionHeading}>Responsibilities</h4>
                            <ul className={styles.jobList}>
                              {job.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className={styles.jobSection}>
                            <h4 className={styles.sectionHeading}>Requirements</h4>
                            <ul className={styles.jobList}>
                              {job.requirements.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className={styles.jobSection}>
                            <h4 className={styles.sectionHeading}>Benefits</h4>
                            <ul className={styles.jobList}>
                              {job.benefits.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <Link href="/contact" className={styles.applyButton}>
                          Apply Now
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Careers; 