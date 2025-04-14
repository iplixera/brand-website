import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/common/SEO';
import styles from '@/styles/Plugins.module.css';

const plugins = {
  wordpress: [
    {
      name: 'Advanced SEO Pack',
      description: 'Enhance your WordPress site\'s SEO with advanced features, schema markup, and social media integration.',
      features: ['Schema Markup', 'Social Media Preview', 'XML Sitemap', 'Meta Tag Manager'],
      price: 200,
      type: 'WordPress'
    },
    {
      name: 'E-commerce Pro',
      description: 'Transform your WordPress site into a powerful e-commerce platform with advanced features.',
      features: ['Product Management', 'Payment Gateway Integration', 'Inventory Control', 'Order Management'],
      price: 200,
      type: 'WordPress'
    },
    {
      name: 'Security Shield',
      description: 'Protect your WordPress site with advanced security features and real-time monitoring.',
      features: ['Malware Scanning', 'Firewall Protection', 'Login Security', 'Backup System'],
      price: 200,
      type: 'WordPress'
    }
  ],
  javascript: [
    {
      name: 'React Components Library',
      description: 'A comprehensive collection of reusable React components for modern web applications.',
      features: ['UI Components', 'Form Elements', 'Data Display', 'Navigation Components'],
      price: 200,
      type: 'JavaScript'
    },
    {
      name: 'Vue.js Toolkit',
      description: 'Essential tools and components for building Vue.js applications efficiently.',
      features: ['State Management', 'Router Integration', 'UI Components', 'Utility Functions'],
      price: 200,
      type: 'JavaScript'
    },
    {
      name: 'Node.js API Suite',
      description: 'Complete toolkit for building robust Node.js APIs with best practices.',
      features: ['Authentication', 'Rate Limiting', 'Data Validation', 'Error Handling'],
      price: 200,
      type: 'JavaScript'
    }
  ]
};

const PluginsPage = () => {
  return (
    <Layout>
      <SEO 
        title="Plugins - WordPress & JavaScript Solutions"
        description="Explore our collection of premium WordPress and JavaScript plugins. Enhance your website with our powerful tools and solutions."
      />
      <div className={styles.pluginsPage}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Premium Plugins
            </motion.h1>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Enhance your website with our powerful WordPress and JavaScript plugins
            </motion.p>
          </div>
        </section>

        <section className={styles.pluginsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>WordPress Plugins</h2>
            <div className={styles.pluginsGrid}>
              {plugins.wordpress.map((plugin, index) => (
                <motion.div 
                  key={plugin.name}
                  className={styles.pluginCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className={styles.pluginName}>{plugin.name}</h3>
                  <p className={styles.pluginDescription}>{plugin.description}</p>
                  <ul className={styles.featuresList}>
                    {plugin.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className={styles.pluginFooter}>
                    <span className={styles.price}>${plugin.price}/month</span>
                    <button className={styles.subscribeButton}>Subscribe Now</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.pluginsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>JavaScript Plugins</h2>
            <div className={styles.pluginsGrid}>
              {plugins.javascript.map((plugin, index) => (
                <motion.div 
                  key={plugin.name}
                  className={styles.pluginCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className={styles.pluginName}>{plugin.name}</h3>
                  <p className={styles.pluginDescription}>{plugin.description}</p>
                  <ul className={styles.featuresList}>
                    {plugin.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className={styles.pluginFooter}>
                    <span className={styles.price}>${plugin.price}/month</span>
                    <button className={styles.subscribeButton}>Subscribe Now</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PluginsPage; 