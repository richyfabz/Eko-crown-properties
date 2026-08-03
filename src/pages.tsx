import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link, Navigate, Route, Routes, useParams, useSearchParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { brand, categories, faqs, locations, properties, services, stats, storySlides, testimonials, agents } from './data/siteData';
import { familyAssets } from './data/assets';
import { siteImages } from './data/siteImages';
import type { SearchFilters, Property, PropertyPurpose } from './types';
import { Button, ButtonLink } from './components/Button';
import { Badge } from './components/Badge';
import { Container } from './components/Container';
import { Layout } from './components/Layout';
import { StoryCarousel } from './components/StoryCarousel';
import { LocationCard } from './components/LocationCard';
import { PropertyCard } from './components/PropertyCard';
import { SectionHeading } from './components/SectionHeading';
import { Seo } from './components/Seo';
import { TestimonialCard } from './components/TestimonialCard';
import { Gallery } from './features/property-details/Gallery';
import { PropertySearchPanel } from './features/property-search/PropertySearchPanel';
import { filterProperties, filtersToSearchParams, searchParamsToFilters } from './features/property-search/filterProperties';
import { useLocalIds } from './hooks/useLocalIds';
import { formatCurrency, initials } from './utils/format';

type PageProps = {
  title: string;
  description: string;
  canonicalPath: string;
  image?: string;
  children: ReactNode;
};

function Page({ title, description, canonicalPath, image, children }: PageProps) {
  return (
    <>
      <Seo title={title} description={description} canonicalPath={canonicalPath} image={image} />
      {children}
    </>
  );
}

function EmptyState({ title, description, action, actionHref }: { title: string; description: string; action: string; actionHref: string }) {
  return (
    <div className="panel stack">
      <h3>{title}</h3>
      <p className="muted">{description}</p>
      <div className="button-row">
        <ButtonLink href={actionHref}>{action}</ButtonLink>
      </div>
    </div>
  );
}

function formatPropertyLabel(property: Property) {
  const bed = property.bedrooms ? `${property.bedrooms} bed` : 'Bedrooms on request';
  const bath = property.bathrooms ? `${property.bathrooms} bath` : 'Bathrooms on request';
  return `${bed} · ${bath}`;
}

function useComparedProperties() {
  const compare = useLocalIds('ekocrown-compare');
  return compare;
}

function useFavoriteProperties() {
  const favorites = useLocalIds('ekocrown-favorites');
  return favorites;
}

function useRecentlyViewedProperties() {
  const recent = useLocalIds('ekocrown-recently-viewed');
  return recent;
}

function addRecent(recentIds: string[], setRecent: (ids: string[]) => void, id: string) {
  setRecent([id, ...recentIds.filter((current) => current !== id)].slice(0, 8));
}

function HomePage() {
  const reduceMotion = useReducedMotion();
  const featured = properties.filter((property) => property.featured).slice(0, 3);
  const homepageLocations = locations.slice(0, 3);
  const favorites = useFavoriteProperties();
  const compare = useComparedProperties();

  return (
    <Page
      title={`${brand.name} | Premium Nigerian Real Estate`}
      description="Search premium Nigerian homes, explore trusted locations, book inspections, and speak with a professional agent."
      canonicalPath="/"
      image={siteImages.modernVilla}
    >
      <section className="hero">
        <Container wide>
          <div className="hero-grid">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.35 }}
            >
              <p className="eyebrow">Premium Nigerian real estate</p>
              <h1 className="hero-title">
                Trusted homes for buyers, renters, and sellers who want clarity before commitment.
              </h1>
              <p>
                Explore verified sample listings, calm property storytelling, and direct contact paths that help users move
                from discovery to inspection without confusion. The interface is designed for Nigerian buyers, diaspora
                clients, and property owners who want a professional experience from the first click.
              </p>
              <div className="button-row">
                <ButtonLink href="/properties">Browse properties</ButtonLink>
                <ButtonLink href="/book-inspection" variant="secondary">
                  Book inspection
                </ButtonLink>
              </div>
              <div className="chips">
                <Badge tone="brand">Verified sample listings</Badge>
                <Badge tone="success">Mobile-first discovery</Badge>
                <Badge tone="warning">Honest front-end forms</Badge>
              </div>
            </motion.div>

            <motion.div
              className="hero-card"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.35, delay: 0.08 }}
            >
              <div className="hero-image">
                <img src={siteImages.heroDuplex} alt="Modern duplex with a landscaped front approach and private carport" />
              </div>
              <div className="hero-panel">
                <div className="callout">
                  <h3>Start with a guided search</h3>
                  <p className="muted">
                    Filter by purpose, location, price, bedrooms, and trust level. Search state is reflected in the URL for
                    easy sharing and return visits.
                  </p>
                  <div className="button-row">
                    <ButtonLink href="/properties">Open search</ButtonLink>
                    <ButtonLink href="/locations" variant="secondary">
                      Explore locations
                    </ButtonLink>
                  </div>
                </div>
                <div className="hero-stats">
                  {stats.map((stat) => (
                    <div key={stat.label} className="stat-card">
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                      <span className="stat-note">{stat.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="section-tight">
        <Container wide>
          <SectionHeading
            eyebrow="Quick search"
            title="Start in the right place."
            description="The first decision is usually purpose. Use this entry point to move straight into the right listings."
            action={<ButtonLink href="/properties" variant="secondary">Open catalogue</ButtonLink>}
          />
          <div className="panel stack">
            <div className="section-grid two">
              {[
                { title: 'Buy', description: 'Family homes, villas, duplexes, and premium apartments.', href: '/buy' },
                { title: 'Rent', description: 'Serviced apartments and practical premium rentals.', href: '/rent' },
              ].map((item) => (
                <article key={item.title} className="callout">
                  <h3>{item.title}</h3>
                  <p className="muted">{item.description}</p>
                  <div className="button-row">
                    <ButtonLink href={item.href}>View {item.title.toLowerCase()}</ButtonLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container wide>
          <SectionHeading
            eyebrow="Featured listings"
            title="Premium homes that tell a clear story."
            description="Sample listings are arranged with strong photography, visible verification, and a straightforward route to contact."
            action={<ButtonLink href="/properties" variant="secondary">See all listings</ButtonLink>}
          />
          <div className="property-grid">
            {featured.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                agentName={agents.find((agent) => agent.id === property.agentId)?.name ?? 'Property advisor'}
                isFavorite={favorites.ids.includes(property.id)}
                isCompared={compare.ids.includes(property.id)}
                onToggleFavorite={favorites.toggle}
                onToggleCompare={compare.toggle}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-tight">
        <Container wide>
          <SectionHeading
            eyebrow="Property categories"
            title="A calmer way to begin the search."
            description="Users can move by intent, not by endless filters. Each category points to a useful next step."
          />
          <div className="section-grid three">
            {categories.map((category) => (
              <article key={category.id} className="service-card">
                <div className="service-card__body">
                  <h3>{category.title}</h3>
                  <p className="muted">{category.description}</p>
                  <ButtonLink href={category.href} variant="secondary">
                    Explore
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container wide>
          <SectionHeading
            eyebrow="Locations"
            title="Premium areas with a clear local context."
            description="Each location page explains lifestyle, landmarks, schools, transport, and the kinds of homes users can expect."
          />
          <div className="section-grid three">
            {homepageLocations.map((location) => (
              <LocationCard
                key={location.slug}
                location={location}
                propertyCount={properties.filter((property) => property.location.slug === location.slug || property.location.city === location.name).length}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-tight">
        <Container wide>
          <div className="split-layout">
            <div className="stack">
              <SectionHeading eyebrow="Why choose us" title="Trust first. Conversion second." />
              <p className="lede">
                The experience keeps the emphasis on verified sample inventory, professional presentation, and low-friction
                contact paths. Every page is designed to reduce uncertainty before asking users to act.
              </p>
              <div className="section-grid two">
                {services.map((service) => (
                  <article key={service.id} className="panel stack">
                    <h3>{service.title}</h3>
                    <p className="muted">{service.summary}</p>
                    <ButtonLink href={service.href} variant="secondary">
                      Learn more
                    </ButtonLink>
                  </article>
                ))}
              </div>
            </div>
            <div className="panel stack">
              <SectionHeading eyebrow="How it works" title="A clear buying flow." />
              <ol className="list">
                <li>Search with purpose, location, and trust filters.</li>
                <li>Open a property page to review gallery, features, and nearby context.</li>
                <li>Save, compare, book an inspection, or contact the agent.</li>
                <li>Receive a calm follow-up path instead of a dead end.</li>
              </ol>
              <div className="map-frame">
                <img src={familyAssets.map} alt="Stylized map illustration used for the location section" loading="lazy" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container wide>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trust grows through real stories and honest labels."
            description="Sample testimonial content is clearly marked and presented with a calm, editorial layout."
          />
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <StoryCarousel
        eyebrow="Customer care and family stories"
        title="A scrolling story section with stronger contrast."
        description="Families, remote buyers, and location context now sit on image-led cards with a sticky scroll background, softer blur, and clearer text."
        backgroundImage={familyAssets.storyBackground}
        slides={storySlides}
      />

      <section className="section-tight">
        <Container wide>
          <SectionHeading eyebrow="FAQs" title="Helpful answers before the first conversation." />
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.id} className="faq-card">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container wide>
          <div className="callout">
            <p className="eyebrow">Final CTA</p>
            <div className="section-heading-row" style={{ marginBottom: 0 }}>
              <div>
                <h2 className="section-title">Ready to browse, book, or list a property?</h2>
                <p className="lede">
                  Move into the right next step with a site that remains honest, accessible, and quick on mobile.
                </p>
              </div>
              <div className="button-row">
                <ButtonLink href="/properties">Browse properties</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Contact us
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Page>
  );
}

function PropertyDirectoryPage({ purpose, title, description }: { purpose?: PropertyPurpose; title: string; description: string }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const favorites = useFavoriteProperties();
  const compare = useComparedProperties();
  const filters = useMemo(() => searchParamsToFilters(searchParams, purpose), [purpose, searchParams]);
  const filtered = useMemo(() => filterProperties(properties, filters), [filters]);

  const updateFilters = (next: SearchFilters) => setSearchParams(filtersToSearchParams(next), { replace: true });

  const resetFilters = () => {
    const next = purpose ? filtersToSearchParams({ purpose }) : new URLSearchParams();
    setSearchParams(next, { replace: true });
  };

  return (
    <Page title={`${title} | ${brand.name}`} description={description} canonicalPath={purpose ? `/${purpose === 'buy' ? 'buy' : 'rent'}` : '/properties'}>
      <section className="page-hero">
        <Container wide>
          <p className="eyebrow">{title}</p>
          <h1 className="page-title">{title}</h1>
          <p className="lede">{description}</p>
          <div className="button-row">
            <ButtonLink href="/book-inspection">Book inspection</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact an agent
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="section-tight">
        <Container wide>
          <form onSubmit={(event) => event.preventDefault()}>
            <PropertySearchPanel properties={properties} value={filters} onChange={updateFilters} onReset={resetFilters} />
          </form>
          <div className="result-header">
            <p>
              Showing <strong>{filtered.length}</strong> properties
            </p>
            <div className="chips">
              {purpose ? <Badge tone="brand">{purpose === 'buy' ? 'Buy' : 'Rent'} listings</Badge> : null}
              {filters.verifiedOnly ? <Badge tone="success">Verified only</Badge> : null}
              {filters.featuredOnly ? <Badge tone="brand">Featured only</Badge> : null}
              {filters.luxuryOnly ? <Badge tone="warning">Luxury only</Badge> : null}
            </div>
          </div>
          {filtered.length ? (
            <div className="property-grid">
              {filtered.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  agentName={agents.find((agent) => agent.id === property.agentId)?.name ?? 'Property advisor'}
                  isFavorite={favorites.ids.includes(property.id)}
                  isCompared={compare.ids.includes(property.id)}
                  onToggleFavorite={favorites.toggle}
                  onToggleCompare={compare.toggle}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No properties matched those filters."
              description="Try clearing one or two filters, or search by area and property type to broaden the result set."
              action="Reset filters"
              actionHref={purpose ? `/${purpose}` : '/properties'}
            />
          )}
        </Container>
      </section>
    </Page>
  );
}

function PropertyDetailPage() {
  const params = useParams();
  const property = properties.find((item) => item.slug === params.slug);
  const agent = agents.find((item) => item.id === property?.agentId);
  const favorites = useFavoriteProperties();
  const compare = useComparedProperties();
  const recent = useRecentlyViewedProperties();

  useEffect(() => {
    if (!property) {
      return;
    }

    if (recent.ids[0] !== property.id) {
      addRecent(recent.ids, recent.setIds, property.id);
    }
  }, [property, recent]);

  if (!property) {
    return <Navigate to="/404" replace />;
  }

  const related = properties.filter((item) => item.id !== property.id && item.location.city === property.location.city).slice(0, 3);
  const recentlyViewed = properties.filter((item) => recent.ids.includes(item.id) && item.id !== property.id).slice(0, 3);
  const isFavorite = favorites.ids.includes(property.id);
  const isCompared = compare.ids.includes(property.id);

  return (
    <Page
      title={`${property.title} | ${brand.name}`}
      description={property.summary}
      canonicalPath={`/properties/${property.slug}`}
      image={property.images[0]?.src}
    >
      <section className="page-hero">
        <Container wide>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/properties">Properties</Link>
            <span>/</span>
            <span>{property.title}</span>
          </div>
          <p className="eyebrow">{property.location.city}</p>
          <h1 className="page-title">{property.title}</h1>
          <p className="lede">{property.summary}</p>
          <div className="chips">
            <Badge tone={property.verificationStatus === 'verified' ? 'success' : property.verificationStatus === 'reviewed' ? 'warning' : 'default'}>
              {property.verificationStatus === 'sample' ? 'Sample content' : 'Verified context'}
            </Badge>
            {property.featured ? <Badge tone="brand">Featured</Badge> : null}
            {property.luxury ? <Badge tone="brand">Luxury</Badge> : null}
            <Badge tone="default">{property.location.area}</Badge>
          </div>
        </Container>
      </section>

      <section className="section-tight">
        <Container wide>
          <div className="detail-layout">
            <div className="stack">
              <Gallery title={property.title} images={property.images} />
              <div className="panel stack">
                <SectionHeading eyebrow="Property overview" title="A practical view of the home." />
                <p>{property.description}</p>
                <div className="section-grid two">
                  <div>
                    <h3>Features</h3>
                    <ul className="list">
                      {property.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Amenities</h3>
                    <ul className="list">
                      {property.amenities.map((amenity) => (
                        <li key={amenity}>{amenity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="panel stack">
                <SectionHeading eyebrow="Nearby places" title="What the neighbourhood offers." />
                <div className="section-grid three">
                  <div>
                    <h3>Schools</h3>
                    <ul className="list">
                      {property.nearbySchools.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Hospitals</h3>
                    <ul className="list">
                      {property.nearbyHospitals.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Shopping</h3>
                    <ul className="list">
                      {property.nearbyShopping.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="map-placeholder">{property.mapLabel}</div>
              </div>

              <div className="panel stack">
                <SectionHeading eyebrow="Photography and media" title="Gallery, lightbox, and future-ready placeholders." />
                <div className="section-grid two">
                  <div className="callout">
                    <h3>Floor plans</h3>
                    <p className="muted">{property.floorPlanNote}</p>
                  </div>
                  <div className="callout">
                    <h3>Virtual tour</h3>
                    <p className="muted">{property.virtualTourNote}</p>
                  </div>
                </div>
              </div>

              <div className="panel stack">
                <SectionHeading eyebrow="Related properties" title="Similar homes nearby." />
                {related.length ? <div className="property-grid">{related.map((item) => <PropertyMini key={item.id} property={item} />)}</div> : <p className="muted">No related properties available yet.</p>}
              </div>

              {recentlyViewed.length ? (
                <div className="panel stack">
                  <SectionHeading eyebrow="Recently viewed" title="Pick up where you left off." />
                  <div className="property-grid">
                    {recentlyViewed.map((item) => (
                      <PropertyMini key={item.id} property={item} />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <aside className="detail-aside">
              <div className="panel stack">
                <div className="chips">
                  <Badge tone="brand">{property.purpose === 'buy' ? 'For sale' : 'For rent'}</Badge>
                  <Badge tone={property.available ? 'success' : 'warning'}>{property.available ? 'Available' : 'Not available'}</Badge>
                </div>
                <div>
                  <span className="property-price">{formatCurrency(property.price, property.currency)}</span>
                  <p className="fine-print">{property.purpose === 'rent' ? 'per year' : 'one-time purchase price'}</p>
                </div>
                <div className="property-meta">
                  <span>{formatPropertyLabel(property)}</span>
                  <span>{property.propertyType}</span>
                  <span>{property.location.city}</span>
                </div>
                <div className="callout">
                  <h3>Inspection window</h3>
                  <p className="muted">{property.inspectionWindow}</p>
                </div>
                <div className="button-row">
                  <Button type="button" onClick={() => favorites.toggle(property.id)}>
                    {isFavorite ? 'Saved' : 'Save property'}
                  </Button>
                  <Button type="button" variant={isCompared ? 'primary' : 'secondary'} onClick={() => compare.toggle(property.id)}>
                    {isCompared ? 'Compared' : 'Compare'}
                  </Button>
                </div>
                <ButtonLink href={`/book-inspection?property=${property.slug}`}>Book inspection</ButtonLink>
                <ButtonLink href={`/contact?property=${property.slug}`} variant="secondary">
                  Contact agent
                </ButtonLink>
                <div className="notice">
                  This is a sample listing experience. Replace sample content with live inventory when the backend is connected.
                </div>
                {agent ? (
                  <div className="callout">
                    <p className="eyebrow">Agent</p>
                    <h3>{agent.name}</h3>
                    <p className="muted">{agent.role}</p>
                    <p className="fine-print">{agent.bio}</p>
                    <div className="button-row">
                      <a className="button button-secondary" href={`tel:${agent.phone}`}>
                        Call
                      </a>
                      <a className="button button-ghost" href={`mailto:${agent.email}`}>
                        Email
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </Page>
  );
}

function PropertyMini({ property }: { property: Property }) {
  return (
    <article className="service-card">
      <Link to={`/properties/${property.slug}`} className="property-card__media">
        <img src={property.images[0].src} alt={property.images[0].alt} loading="lazy" />
      </Link>
      <div className="service-card__body">
        <h3>{property.title}</h3>
        <p className="muted">{property.location.area}</p>
        <strong>{formatCurrency(property.price, property.currency)}</strong>
        <Link className="button button-secondary" to={`/properties/${property.slug}`}>
          View property
        </Link>
      </div>
    </article>
  );
}

function LocationsPage() {
  return (
    <Page title={`Locations | ${brand.name}`} description="Explore location guides, lifestyle context, and featured properties across premium Nigerian markets." canonicalPath="/locations">
      <section className="page-hero">
        <Container wide>
          <p className="eyebrow">Locations</p>
          <h1 className="page-title">Location guides that reduce uncertainty.</h1>
          <p className="lede">
            Each guide explains lifestyle, landmarks, transport, schools, and the kinds of properties users can expect.
          </p>
        </Container>
      </section>
      <section className="section-tight">
        <Container wide>
          <div className="section-grid three">
            {locations.map((location) => (
              <LocationCard
                key={location.slug}
                location={location}
                propertyCount={properties.filter((property) => property.location.slug === location.slug || property.location.city === location.name).length}
              />
            ))}
          </div>
        </Container>
      </section>
    </Page>
  );
}

function LocationDetailPage() {
  const params = useParams();
  const location = locations.find((item) => item.slug === params.slug);

  if (!location) {
    return <Navigate to="/404" replace />;
  }

  const featured = properties.filter((property) => location.featuredPropertySlugs.includes(property.slug));

  return (
    <Page title={`${location.name} | ${brand.name}`} description={location.overview} canonicalPath={`/locations/${location.slug}`} image={location.image}>
      <section className="page-hero">
        <Container wide>
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/locations">Locations</Link>
            <span>/</span>
            <span>{location.name}</span>
          </div>
          <p className="eyebrow">{location.state}</p>
          <h1 className="page-title">{location.name}</h1>
          <p className="lede">{location.overview}</p>
        </Container>
      </section>

      <section className="section-tight">
        <Container wide>
          <div className="detail-layout">
            <div className="stack">
              <div className="panel stack">
                <SectionHeading eyebrow="Lifestyle" title="How the area feels." />
                <p>{location.lifestyle}</p>
                <img src={location.image} alt={`${location.name} aerial cityscape`} />
              </div>
              <div className="panel stack">
                <SectionHeading eyebrow="Landmarks and access" title="What is nearby." />
                <div className="section-grid two">
                  <div>
                    <h3>Landmarks</h3>
                    <ul className="list">
                      {location.landmarks.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Transportation</h3>
                    <ul className="list">
                      {location.transport.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="panel stack">
                <SectionHeading eyebrow="Schools, hospitals, shopping" title="Essential services in one place." />
                <div className="section-grid three">
                  <div>
                    <h3>Schools</h3>
                    <ul className="list">
                      {location.schools.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Hospitals</h3>
                    <ul className="list">
                      {location.hospitals.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Shopping</h3>
                    <ul className="list">
                      {location.shopping.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="panel stack">
                <SectionHeading eyebrow="Market summary" title="Sample-only pricing note." />
                <p className="notice">{location.marketNote}</p>
                <div className="section-grid two">
                  <div>
                    <h3>Common property types</h3>
                    <ul className="list">
                      {location.propertyTypes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Featured listings</h3>
                    <ul className="list">
                      {featured.map((item) => (
                        <li key={item.id}>
                          <Link to={`/properties/${item.slug}`}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <aside className="detail-aside">
              <div className="panel stack">
                <SectionHeading eyebrow="Location gallery" title="A visual context block." />
                <img src={location.image} alt={`${location.name} cityscape`} />
                <div className="button-row">
                  <ButtonLink href="/properties">Find homes here</ButtonLink>
                  <ButtonLink href="/contact" variant="secondary">
                    Ask about this area
                  </ButtonLink>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </Page>
  );
}

function AgentsPage() {
  return (
    <Page title={`Agents | ${brand.name}`} description="Meet the advisors who help buyers, renters, and sellers move with clarity." canonicalPath="/agents">
      <section className="page-hero">
        <Container wide>
          <p className="eyebrow">Agents</p>
          <h1 className="page-title">A calm team with local expertise.</h1>
          <p className="lede">Agent profiles are concise, professional, and designed to make the next conversation feel easy.</p>
        </Container>
      </section>
      <section className="section-tight">
        <Container wide>
          <div className="section-grid three">
            {agents.map((agent) => (
              <article key={agent.id} className="testimonial-card">
                <div className="testimonial-card__meta">
                  <div className="avatar" aria-hidden="true">
                    {initials(agent.name)}
                  </div>
                  <div>
                    <strong>{agent.name}</strong>
                    <div className="fine-print">{agent.role}</div>
                  </div>
                </div>
                <p className="muted">{agent.bio}</p>
                <div className="chips">
                  {agent.languages.map((language) => (
                    <Badge key={language}>{language}</Badge>
                  ))}
                  {typeof agent.yearsExperience === 'number' ? <Badge tone="brand">{agent.yearsExperience} years</Badge> : null}
                </div>
                <div className="button-row">
                  <a className="button button-secondary" href={`tel:${agent.phone}`}>
                    Call
                  </a>
                  <a className="button button-ghost" href={`mailto:${agent.email}`}>
                    Email
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </Page>
  );
}

function AboutPage() {
  return (
    <Page title={`About | ${brand.name}`} description="Learn how the brand, workflow, and trust system are structured for a premium property experience." canonicalPath="/about">
      <section className="page-hero">
        <Container wide>
          <p className="eyebrow">About</p>
          <h1 className="page-title">Designed to feel like a trusted real estate advisor.</h1>
          <p className="lede">
            The product is built around clarity, respectful communication, and an editorial presentation that helps users
            evaluate homes without pressure.
          </p>
        </Container>
      </section>
      <section className="section-tight">
        <Container wide>
          <div className="split-layout">
            <div className="panel stack">
              <SectionHeading eyebrow="Our approach" title="What this experience does well." />
              <ul className="list">
                <li>Clear search, filtering, and URL state</li>
                <li>Visible trust indicators without fabricated claims</li>
                <li>Strong mobile layouts and readable typography</li>
                <li>Honest form states and explicit sample labeling</li>
              </ul>
            </div>
            <div className="panel stack">
              <SectionHeading eyebrow="What comes next" title="Ready for future integrations." />
              <ul className="list">
                <li>Backend listings</li>
                <li>Map provider</li>
                <li>CRM or email handoff</li>
                <li>Analytics events</li>
              </ul>
              <div className="notice">
                The current release intentionally preserves a calm, production-ready front end while the backend is still pending.
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Page>
  );
}

function BlogPage() {
  return (
    <Page title={`Blog | ${brand.name}`} description="Editorial guides and sample articles for the Nigerian property journey." canonicalPath="/blog">
      <section className="page-hero">
        <Container wide>
          <p className="eyebrow">Blog</p>
          <h1 className="page-title">Editorial guidance for better property decisions.</h1>
          <p className="lede">This section is intentionally sample-led and ready for later content migration.</p>
        </Container>
      </section>
      <section className="section-tight">
        <Container wide>
          <div className="section-grid three">
            {[
              'How to inspect a Lagos apartment with confidence',
              'What diaspora buyers should ask before a remote viewing',
              'How to compare family homes without getting overwhelmed',
            ].map((title) => (
              <article key={title} className="service-card">
                <div className="service-card__body">
                  <Badge tone="brand">Sample article</Badge>
                  <h3>{title}</h3>
                  <p className="muted">Short editorial guidance designed to support the property journey rather than distract from it.</p>
                  <ButtonLink href="/contact" variant="secondary">
                    Ask a question
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </Page>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  return (
    <Page title={`Contact | ${brand.name}`} description="Speak with an agent by form, phone, WhatsApp, or email." canonicalPath="/contact">
      <section className="page-hero">
        <Container wide>
          <p className="eyebrow">Contact</p>
          <h1 className="page-title">Reach the agency without friction.</h1>
          <p className="lede">{brand.responseNote}</p>
        </Container>
      </section>
      <section className="section-tight">
        <Container wide>
          <div className="detail-layout">
            <form
              className="panel stack"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <SectionHeading eyebrow="Contact form" title="Tell us what you need." />
              {submitted ? <div className="alert">Thanks. This front-end release is ready for backend wiring later.</div> : null}
              <div className="form-grid">
                <label className="field">
                  <span>Name</span>
                  <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} type="email" required />
                </label>
                <label className="field">
                  <span>Phone</span>
                  <input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} required />
                </label>
                <label className="field">
                  <span>Message</span>
                  <textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required />
                </label>
              </div>
              <div className="notice">
                This form currently confirms locally and does not send data to a live backend.
              </div>
              <div className="button-row">
                <Button type="submit">Send enquiry</Button>
                <ButtonLink href="/book-inspection" variant="secondary">
                  Book inspection instead
                </ButtonLink>
              </div>
            </form>
            <aside className="detail-aside">
              <div className="panel stack">
                <SectionHeading eyebrow="Direct contact" title="Choose the easiest path." />
                <div className="stack">
                  <a className="button button-secondary" href={`tel:${brand.phone}`}>
                    Call {brand.phone}
                  </a>
                  <a className="button button-secondary" href={`mailto:${brand.email}`}>
                    Email {brand.email}
                  </a>
                  <a className="button button-primary" href={`https://wa.me/${brand.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                </div>
                <div className="callout">
                  <h3>Office</h3>
                  <p className="muted">{brand.address}</p>
                  <p className="fine-print">{brand.hours}</p>
                </div>
                <div className="map-placeholder">Map placeholder or integration-ready area.</div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </Page>
  );
}

function BookInspectionPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', propertySlug: '', preferredDate: '', preferredTime: '', notes: '' });
  const steps = ['Details', 'Schedule', 'Confirm'];

  const selectedProperty = properties.find((property) => property.slug === form.propertySlug);

  return (
    <Page title={`Book Inspection | ${brand.name}`} description="Book a property inspection with a clear, honest, mobile-friendly flow." canonicalPath="/book-inspection">
      <section className="page-hero">
        <Container wide>
          <p className="eyebrow">Book inspection</p>
          <h1 className="page-title">Book a viewing in a calm, guided flow.</h1>
          <p className="lede">The form stays honest about its current front-end-only submission state.</p>
        </Container>
      </section>
      <section className="section-tight">
        <Container wide>
          <div className="detail-layout">
            <form
              className="panel stack"
              onSubmit={(event) => {
                event.preventDefault();
                if (step < 2) {
                  setStep((current) => current + 1);
                  return;
                }
                setSubmitted(true);
              }}
            >
              <div className="progress">
                {steps.map((item, index) => (
                  <div key={item} className={`progress-step${index <= step ? ' active' : ''}`}>
                    {index + 1}. {item}
                  </div>
                ))}
              </div>

              {submitted ? (
                <div className="alert">
                  Inspection request saved locally. Connect a backend to deliver the request in production.
                </div>
              ) : null}

              {step === 0 ? (
                <div className="form-grid">
                  <label className="field">
                    <span>Full name</span>
                    <input value={form.fullName} onChange={(event) => setForm({ ...form, fullName: event.target.value })} required />
                  </label>
                  <label className="field">
                    <span>Email</span>
                    <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
                  </label>
                  <label className="field">
                    <span>Phone</span>
                    <input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} required />
                  </label>
                  <label className="field">
                    <span>Property</span>
                    <select value={form.propertySlug} onChange={(event) => setForm({ ...form, propertySlug: event.target.value })} required>
                      <option value="">Select a property</option>
                      {properties.map((property) => (
                        <option key={property.slug} value={property.slug}>
                          {property.title}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              ) : null}

              {step === 1 ? (
                <div className="form-grid">
                  <label className="field">
                    <span>Preferred date</span>
                    <input type="date" value={form.preferredDate} onChange={(event) => setForm({ ...form, preferredDate: event.target.value })} required />
                  </label>
                  <label className="field">
                    <span>Preferred time</span>
                    <input type="time" value={form.preferredTime} onChange={(event) => setForm({ ...form, preferredTime: event.target.value })} required />
                  </label>
                  <label className="field">
                    <span>Notes</span>
                    <textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} placeholder="Budget, move-in timing, or questions." />
                  </label>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="stack">
                  <div className="callout">
                    <h3>Review</h3>
                    <p className="muted">{form.fullName || 'Full name not entered yet'}</p>
                    <p className="muted">{selectedProperty ? selectedProperty.title : 'No property selected'}</p>
                    <p className="muted">
                      {form.preferredDate || 'Date pending'} at {form.preferredTime || 'time pending'}
                    </p>
                  </div>
                  <div className="notice">
                    After submission, users should see exactly what happens next. This release confirms locally only.
                  </div>
                </div>
              ) : null}

              <div className="form-actions">
                <Button
                  type="button"
                  variant="secondary"
                  disabled={step === 0}
                  onClick={() => setStep((current) => Math.max(0, current - 1))}
                >
                  Back
                </Button>
                <div className="button-row">
                  <Button type="submit">{step === 2 ? 'Request inspection' : 'Next'}</Button>
                </div>
              </div>
            </form>

            <aside className="detail-aside">
              <div className="panel stack">
                <SectionHeading eyebrow="Selected property" title="Context follows the user." />
                {selectedProperty ? (
                  <>
                    <img src={selectedProperty.images[0].src} alt={selectedProperty.images[0].alt} />
                    <p className="muted">{selectedProperty.summary}</p>
                    <strong>{formatCurrency(selectedProperty.price, selectedProperty.currency)}</strong>
                  </>
                ) : (
                  <p className="muted">Choose a listing to see supporting context here.</p>
                )}
                <div className="notice">The flow does not pretend to submit to a backend until one exists.</div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </Page>
  );
}

function SellPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', propertyType: '', address: '', notes: '' });
  const steps = ['Intro', 'Property', 'Confirmation'];

  return (
    <Page title={`Sell | ${brand.name}`} description="List a property through a calm, multi-step seller journey." canonicalPath="/sell">
      <section className="page-hero">
        <Container wide>
          <p className="eyebrow">Sell</p>
          <h1 className="page-title">Sell a property without friction.</h1>
          <p className="lede">The seller flow stays simple, progressive, and honest about front-end-only submission.</p>
        </Container>
      </section>
      <section className="section-tight">
        <Container wide>
          <div className="detail-layout">
            <form
              className="panel stack"
              onSubmit={(event) => {
                event.preventDefault();
                if (step < 2) {
                  setStep((current) => current + 1);
                  return;
                }
                setSubmitted(true);
              }}
            >
              <div className="progress">
                {steps.map((item, index) => (
                  <div key={item} className={`progress-step${index <= step ? ' active' : ''}`}>
                    {index + 1}. {item}
                  </div>
                ))}
              </div>

              {submitted ? <div className="alert">Seller submission saved locally. Backend handoff can be added later.</div> : null}

              {step === 0 ? (
                <div className="stack">
                  <div className="callout">
                    <h3>Why list with us?</h3>
                    <p className="muted">A calmer process, transparent communication, and a clear expectation of what happens next.</p>
                  </div>
                  <div className="form-grid">
                    <label className="field">
                      <span>Name</span>
                      <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
                    </label>
                    <label className="field">
                      <span>Email</span>
                      <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
                    </label>
                    <label className="field">
                      <span>Phone</span>
                      <input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} required />
                    </label>
                    <label className="field">
                      <span>Property type</span>
                      <input value={form.propertyType} onChange={(event) => setForm({ ...form, propertyType: event.target.value })} required />
                    </label>
                  </div>
                </div>
              ) : null}

              {step === 1 ? (
                <div className="form-grid">
                  <label className="field">
                    <span>Property address</span>
                    <input value={form.address} onChange={(event) => setForm({ ...form, address: event.target.value })} required />
                  </label>
                  <label className="field">
                    <span>Notes</span>
                    <textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} placeholder="Number of bedrooms, title docs, timing, and inspection notes." />
                  </label>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="callout">
                  <h3>Review and confirm</h3>
                  <p className="muted">{form.name || 'Name pending'}</p>
                  <p className="muted">{form.propertyType || 'Property type pending'}</p>
                  <p className="muted">{form.address || 'Address pending'}</p>
                </div>
              ) : null}

              <div className="form-actions">
                <Button type="button" variant="secondary" disabled={step === 0} onClick={() => setStep((current) => Math.max(0, current - 1))}>
                  Back
                </Button>
                <Button type="submit">{step === 2 ? 'Submit property' : 'Next'}</Button>
              </div>
            </form>
            <aside className="detail-aside">
              <div className="panel stack">
                <SectionHeading eyebrow="Seller support" title="The process in plain language." />
                <ol className="list">
                  <li>Tell us a little about the property.</li>
                  <li>Share the basics, title context, and timing.</li>
                  <li>Review the information before you submit.</li>
                  <li>Receive a clear follow-up path after the form.</li>
                </ol>
                <div className="notice">The flow is multi-step so sellers do not face a long, intimidating form at once.</div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </Page>
  );
}

function FavoritesPage() {
  const favorites = useFavoriteProperties();
  const favoriteProperties = properties.filter((property) => favorites.ids.includes(property.id));

  return (
    <Page title={`Favourites | ${brand.name}`} description="Saved properties for returning visitors." canonicalPath="/favorites">
      <section className="page-hero">
        <Container wide>
          <p className="eyebrow">Favourites</p>
          <h1 className="page-title">Saved properties.</h1>
          <p className="lede">Users can return to previously saved listings without restarting their search.</p>
        </Container>
      </section>
      <section className="section-tight">
        <Container wide>
          {favoriteProperties.length ? (
            <div className="property-grid">
              {favoriteProperties.map((property) => (
                <PropertyMini key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No saved properties yet."
              description="Tap Save on a listing card or property page to keep it here for later."
              action="Browse properties"
              actionHref="/properties"
            />
          )}
        </Container>
      </section>
    </Page>
  );
}

function ComparePage() {
  const compare = useComparedProperties();
  const comparedProperties = properties.filter((property) => compare.ids.includes(property.id)).slice(0, 3);

  return (
    <Page title={`Compare | ${brand.name}`} description="Compare up to three properties side by side." canonicalPath="/compare">
      <section className="page-hero">
        <Container wide>
          <p className="eyebrow">Compare</p>
          <h1 className="page-title">Compare homes side by side.</h1>
          <p className="lede">The comparison view keeps the attribute list focused on what users usually need to decide.</p>
        </Container>
      </section>
      <section className="section-tight">
        <Container wide>
          {comparedProperties.length ? (
            <div className="panel stack">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    {comparedProperties.map((property) => (
                      <th key={property.id}>{property.title}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Price', ...comparedProperties.map((property) => formatCurrency(property.price, property.currency))],
                    ['Location', ...comparedProperties.map((property) => property.location.area)],
                    ['Type', ...comparedProperties.map((property) => property.propertyType)],
                    ['Bedrooms', ...comparedProperties.map((property) => String(property.bedrooms ?? '—'))],
                    ['Bathrooms', ...comparedProperties.map((property) => String(property.bathrooms ?? '—'))],
                    ['Verification', ...comparedProperties.map((property) => property.verificationStatus)],
                  ].map(([label, ...values]) => (
                    <tr key={label}>
                      <th>{label}</th>
                      {values.map((value) => (
                        <td key={value}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState
              title="No comparison items yet."
              description="Add properties from search results or detail pages to compare them here."
              action="Browse properties"
              actionHref="/properties"
            />
          )}
        </Container>
      </section>
    </Page>
  );
}

function PrivacyPage() {
  return (
    <Page title={`Privacy | ${brand.name}`} description="Privacy policy placeholder for the front-end release." canonicalPath="/privacy">
      <section className="page-hero">
        <Container wide>
          <p className="eyebrow">Privacy</p>
          <h1 className="page-title">Privacy policy.</h1>
          <p className="lede">This placeholder explains that the release is front-end only and can be replaced with a formal policy later.</p>
        </Container>
      </section>
      <section className="section-tight">
        <Container wide>
          <div className="panel stack">
            <p>We collect only the information users choose to enter into the visible forms on this sample release.</p>
            <p>Forms do not submit to a live backend yet, and the browser may store favourites, compare items, and recently viewed properties locally.</p>
            <p>Replace this placeholder with a formal privacy policy before production use.</p>
          </div>
        </Container>
      </section>
    </Page>
  );
}

function TermsPage() {
  return (
    <Page title={`Terms | ${brand.name}`} description="Terms placeholder for the front-end release." canonicalPath="/terms">
      <section className="page-hero">
        <Container wide>
          <p className="eyebrow">Terms</p>
          <h1 className="page-title">Terms of use.</h1>
          <p className="lede">This page is a clearly labeled placeholder until the legal copy is supplied.</p>
        </Container>
      </section>
      <section className="section-tight">
        <Container wide>
          <div className="panel stack">
            <p>Sample listings are for interface demonstration and should be replaced with live inventory before public launch.</p>
            <p>Any future submission or booking system should include clear confirmation, privacy, and consent language.</p>
            <p>Users should not treat this front-end build as a legal contract or a live brokerage system.</p>
          </div>
        </Container>
      </section>
    </Page>
  );
}

function NotFoundPage() {
  return (
    <Page title={`Page not found | ${brand.name}`} description="Custom 404 page for missing routes." canonicalPath="/404">
      <section className="page-hero">
        <Container wide>
          <p className="eyebrow">404</p>
          <h1 className="page-title">We could not find that page.</h1>
          <p className="lede">Use the navigation to return to the search, locations, or contact paths.</p>
          <div className="button-row">
            <ButtonLink href="/">Go home</ButtonLink>
            <ButtonLink href="/properties" variant="secondary">
              Browse properties
            </ButtonLink>
          </div>
        </Container>
      </section>
    </Page>
  );
}

export function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy" element={<PropertyDirectoryPage purpose="buy" title="Buy" description="Browse sample homes for purchase with clear filters and low-friction contact paths." />} />
        <Route path="/rent" element={<PropertyDirectoryPage purpose="rent" title="Rent" description="Browse sample rental homes and serviced apartments with practical discovery filters." />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/properties" element={<PropertyDirectoryPage title="Properties" description="Search the complete sample catalogue with filters for location, type, price, and trust signals." />} />
        <Route path="/properties/:slug" element={<PropertyDetailPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/:slug" element={<LocationDetailPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-inspection" element={<BookInspectionPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
