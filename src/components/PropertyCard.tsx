import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { cardVariants } from '../animations/variants';
import { Badge } from './Badge';
import { Button } from './Button';
import { formatCurrency, initials } from '../utils/format';
import type { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  agentName: string;
  isFavorite: boolean;
  isCompared: boolean;
  onToggleFavorite: (propertyId: string) => void;
  onToggleCompare: (propertyId: string) => void;
}

export function PropertyCard({
  property,
  agentName,
  isFavorite,
  isCompared,
  onToggleFavorite,
  onToggleCompare,
}: PropertyCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="property-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: reduceMotion ? 0 : 0.28 }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
    >
      <Link to={`/properties/${property.slug}`} className="property-card__media" aria-label={property.title}>
        <img src={property.images[0]?.src} alt={property.images[0]?.alt ?? property.title} loading="lazy" />
      </Link>
      <div className="property-card__body">
        <div className="chips">
          <Badge tone={property.verificationStatus === 'verified' ? 'success' : property.verificationStatus === 'reviewed' ? 'warning' : 'default'}>
            {property.verificationStatus === 'sample' ? 'Sample content' : property.verificationStatus === 'verified' ? 'Verified listing' : 'Reviewed listing'}
          </Badge>
          {property.featured ? <Badge tone="brand">Featured</Badge> : null}
          {property.luxury ? <Badge tone="brand">Luxury</Badge> : null}
        </div>
        <div>
          <h3 className="property-card__title">{property.title}</h3>
          <p className="property-card__summary">{property.summary}</p>
        </div>
        <div className="property-meta">
          <span>{property.location.area}</span>
          <span>{property.location.city}</span>
          <span>{property.bedrooms ?? '—'} beds</span>
          <span>{property.bathrooms ?? '—'} baths</span>
          <span>{property.parkingSpaces ?? '—'} parking</span>
        </div>
        <div>
          <span className="property-price">{formatCurrency(property.price, property.currency)}</span>
          <p className="fine-print">{property.purpose === 'rent' ? 'per year' : 'one-time purchase price'}</p>
        </div>
        <div className="property-card__footer">
          <div className="avatar" aria-hidden="true">
            {initials(agentName)}
          </div>
          <div className="card-actions">
            <Button type="button" variant={isFavorite ? 'primary' : 'secondary'} onClick={() => onToggleFavorite(property.id)}>
              {isFavorite ? 'Saved' : 'Save'}
            </Button>
            <Button type="button" variant={isCompared ? 'primary' : 'ghost'} onClick={() => onToggleCompare(property.id)}>
              {isCompared ? 'Compared' : 'Compare'}
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
