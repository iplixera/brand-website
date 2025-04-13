import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import styles from '@/styles/About.module.css';

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that drive business growth.',
      icon: '💡'
    },
    {
      title: 'Quality',
      description: 'We maintain the highest standards in every aspect of our work, from code quality to user experience.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure their vision is realized through effective communication and partnership.',
      icon: '🤝'
    }
  ];

  const team = [
    {
      name: 'Karim Magdy',
      role: 'Founder & CEO',
      bio: 'Experienced software architect and entrepreneur with a passion for building innovative solutions.',
      image: '/team/karim.jpg'
    }
    // Add more team members as needed
  ];

  return (
    <Layout>
      <div className={styles.aboutPage}>
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
              About Plixera
            </motion.h1>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We are a technology company focused on building innovative solutions for startups and enterprises.
              Our mission is to empower businesses with cutting-edge technology that drives growth and success.
            </motion.p>
          </div>
        </motion.section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.mission}>
              <h2>Our Mission</h2>
              <p>
                At Plixera, we are dedicated to transforming ideas into successful digital products.
                We specialize in MVP development for startups and provide innovative SaaS solutions
                for frontend developers and real estate businesses.
              </p>
            </div>

            <div className={styles.values}>
              <h2>Our Values</h2>
              <div className={styles.valuesGrid}>
                {values.map((value, index) => (
                  <motion.div 
                    key={index}
                    className={styles.valueCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className={styles.valueIcon}>{value.icon}</span>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={styles.team}>
              <h2>Our Team</h2>
              <div className={styles.teamGrid}>
                {team.map((member, index) => (
                  <motion.div 
                    key={index}
                    className={styles.teamCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className={styles.teamImage}>
                      <img src={member.image} alt={member.name} />
                    </div>
                    <h3>{member.name}</h3>
                    <p className={styles.role}>{member.role}</p>
                    <p className={styles.bio}>{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About; 