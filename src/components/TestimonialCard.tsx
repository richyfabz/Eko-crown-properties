import { motion, useReducedMotion } from 'framer-motion';
import { cardVariants } from '../animations/variants';
import { initials } from '../utils/format';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="testimonial-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: reduceMotion ? 0 : 0.26 }}
    >
      <div className="testimonial-card__meta">
        {testimonial.image ? (
          <img className="testimony-image" src={testimonial.image} alt={testimonial.label} loading="lazy" />
        ) : (
          <div className="avatar" aria-hidden="true" style={{ width: '3.5rem', height: '3.5rem' }}>
            {initials(testimonial.name)}
          </div>
        )}
        <div>
          <strong>{testimonial.name}</strong>
          <div className="fine-print">{testimonial.location}</div>
        </div>
      </div>
      <p className="testimonial-card__quote">"{testimonial.quote}"</p>
      <div className="chips">
        <span className="pill success">{testimonial.rating.toFixed(1)} / 5.0</span>
      </div>
    </motion.article>
  );
}
