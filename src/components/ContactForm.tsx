import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className={styles.formContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.formTitle}>Send us a Message</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? styles.inputError : ''}
          />
          {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? styles.inputError : ''}
          />
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="service">Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="mvp">MVP Development</option>
            <option value="architecture">Software Architecture</option>
            <option value="devops">Deployment & DevOps</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={errors.message ? styles.inputError : ''}
          />
          {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
        </div>

        <motion.button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>

        {submitStatus === 'success' && (
          <motion.div
            className={styles.successMessage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Thank you for your message! We'll get back to you soon.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            className={styles.errorMessage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            There was an error sending your message. Please try again later.
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm; 