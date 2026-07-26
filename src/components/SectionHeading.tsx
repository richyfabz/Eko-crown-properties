import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function SectionHeading({ eyebrow, title, description, action }: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="section-heading-row"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: reduceMotion ? 0 : 0.25 }}
    >
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="section-title">{title}</h2>
        {description ? <p className="lede">{description}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </motion.div>
  );
}
