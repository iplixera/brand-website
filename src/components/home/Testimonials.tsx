import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "Plixera transformed our idea into a fully functional MVP in record time. Their expertise in software architecture and development helped us secure our first round of funding.",
    author: "Sarah Johnson",
    position: "CEO, TechStart",
    company: "TechStart Inc."
  },
  {
    quote: "The team at Plixera is exceptional. Their frontend development skills and attention to detail resulted in a beautiful, user-friendly interface that our customers love.",
    author: "Michael Chen",
    position: "Product Manager",
    company: "InnovateSoft"
  },
  {
    quote: "Working with Plixera was a game-changer for our deployment process. Their DevOps expertise helped us streamline our workflow and improve our time to market.",
    author: "Emma Davis",
    position: "CTO",
    company: "CloudScale Solutions"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <p className={styles.sectionDescription}>
          Don't just take our word for it. Here's what our clients have to say about working with Plixera.
        </p>
        
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <blockquote className={styles.quote}>
                {testimonial.quote}
              </blockquote>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.author}</div>
                  <div className={styles.authorPosition}>
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 