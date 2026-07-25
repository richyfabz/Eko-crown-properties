import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { cardVariants } from '../animations/variants';
import type { LocationProfile } from '../types';

interface LocationCardProps {
  location: LocationProfile;
  propertyCount: number;
}

export function LocationCard({ location, propertyCount }: LocationCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="location-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: reduceMotion ? 0 : 0.26 }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
    >
      <Link to={`/locations/${location.slug}`} className="property-card__media" aria-label={location.name}>
        <img src={location.image} alt={`${location.name} skyline and neighbourhood context`} loading="lazy" />
      </Link>
      <div className="location-card__body">
        <div className="chips">
          <span className="pill brand">{propertyCount} sample properties</span>
          <span className="pill">{location.state}</span>
        </div>
        <h3 className="property-card__title">{location.name}</h3>
        <p className="property-card__summary">{location.overview}</p>
        <Link className="button button-secondary" to={`/locations/${location.slug}`}>
          Explore location
        </Link>
      </div>
    </motion.article>
  );
}
