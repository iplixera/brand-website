import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import PaymentForm from '@/components/payment/PaymentForm';
import styles from '@/styles/Pricing.module.css';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const plans = [
  {
    name: 'WordPress Plugins Bundle',
    price: 200,
    description: 'Access to all WordPress plugins with premium support',
    features: [
      'Advanced SEO Pack',
      'Premium Support',
      'Regular Updates',
      'Documentation Access'
    ],
    popular: false
  },
  {
    name: 'JavaScript Plugins Bundle',
    price: 200,
    description: 'Access to all JavaScript plugins with premium support',
    features: [
      'React Components Library',
      'Premium Support',
      'Regular Updates',
      'Documentation Access'
    ],
    popular: false
  },
  {
    name: 'Complete Bundle',
    price: 350,
    description: 'Access to all plugins with premium support and additional benefits',
    features: [
      'All WordPress Plugins',
      'All JavaScript Plugins',
      'Priority Support',
      'Custom Development',
      'Documentation Access'
    ],
    popular: true
  },
  {
    name: 'Test Plugin',
    price: 1,
    description: 'Test plugin for payment integration',
    features: [
      'Basic Features',
      'Email Support',
      'Documentation Access'
    ],
    popular: false
  }
];

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handlePlanSelect = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setError(null);
    setSuccess(null);
  };

  const handlePaymentSuccess = () => {
    setSuccess('Payment successful! Thank you for your purchase.');
    setSelectedPlan(null);
  };

  const handlePaymentError = (error: Error) => {
    setError(error.message || 'An error occurred during payment.');
  };

  return (
    <Layout>
      <SEO title="Pricing - Co-Brand" description="Choose the right plan for your needs" />
      <div className={styles.pricingPage}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Choose Your Plan
            </motion.h1>
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Select the perfect plan for your needs. All plans include access to our premium plugins and support.
            </motion.p>
          </div>
        </section>

        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}

        {success && (
          <div className={styles.successMessage}>
            {success}
          </div>
        )}

        {selectedPlan ? (
          <section className={styles.paymentSection}>
            <div className={styles.container}>
              <div className={styles.selectedPlan}>
                <h3>{selectedPlan.name}</h3>
                <p>${selectedPlan.price}/month</p>
                <button 
                  className={styles.backButton}
                  onClick={() => setSelectedPlan(null)}
                >
                  ← Back to Plans
                </button>
              </div>
              <Elements stripe={stripePromise}>
                <PaymentForm
                  amount={selectedPlan.price}
                  planName={selectedPlan.name}
                  onSuccess={handlePaymentSuccess}
                  onError={handlePaymentError}
                />
              </Elements>
            </div>
          </section>
        ) : (
          <section className={styles.pricingSection}>
            <div className={styles.container}>
              <div className={styles.plansGrid}>
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {plan.popular && (
                      <div className={styles.popularBadge}>Most Popular</div>
                    )}
                    <h2 className={styles.planName}>{plan.name}</h2>
                    <div className={styles.price}>
                      <span className={styles.currency}>$</span>
                      <span className={styles.amount}>{plan.price}</span>
                      <span className={styles.period}>/month</span>
                    </div>
                    <p className={styles.planDescription}>{plan.description}</p>
                    <ul className={styles.featuresList}>
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <span className={styles.checkmark}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={styles.subscribeButton}
                      onClick={() => handlePlanSelect(plan)}
                    >
                      Subscribe Now
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>What payment methods do you accept?</h3>
                <p>We accept all major credit cards through our secure payment processor, Stripe.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I cancel my subscription?</h3>
                <p>Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you offer refunds?</h3>
                <p>We offer a 30-day money-back guarantee if you're not satisfied with our services.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What kind of support do you provide?</h3>
                <p>All plans include email support. Premium plans include priority support and custom development assistance.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 