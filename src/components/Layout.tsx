import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { brand, navigation, secondaryNavigation } from '../data/siteData';
import { Container } from './Container';
import { Button, ButtonLink } from './Button';
import { Drawer } from './Drawer';

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMobileMenuOpen(false);
    setWhatsappOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="header surface">
        <Container wide>
          <div className="header-inner">
            <Link className="brand-mark" to="/">
              <span className="brand-monogram">E</span>
              <span className="brand-copy">
                <span className="brand-name">{brand.name}</span>
                <span className="brand-tagline">{brand.tagline}</span>
              </span>
            </Link>

            <nav className="nav" aria-label="Primary">
              {navigation.slice(0, 5).map((item) => (
                <NavLink key={item.href} to={item.href} end={item.href === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="header-actions">
              <ButtonLink variant="secondary" href="/book-inspection">
                Book Inspection
              </ButtonLink>
              <Button variant="ghost" className="mobile-toggle" type="button" aria-label="Open navigation menu" onClick={() => setMobileMenuOpen(true)}>
                Menu
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          key={location.pathname}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="footer">
        <Container wide>
          <div className="footer-grid">
            <div>
              <p className="eyebrow">Premium Nigerian real estate</p>
              <h2 className="section-title">Calm guidance for buyers, renters, and sellers.</h2>
              <p className="lede muted">{brand.responseNote}</p>
            </div>
            <div>
              <h3>Explore</h3>
              <div className="footer-links">
                {secondaryNavigation.map((item) => (
                  <Link key={item.href} to={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3>Contact</h3>
              <div className="footer-links">
                <a href={`tel:${brand.phone}`}>{brand.phone}</a>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
                <span>{brand.address}</span>
              </div>
            </div>
            <div>
              <h3>Office</h3>
              <div className="footer-links">
                <span>{brand.hours}</span>
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 {brand.name}. Premium browsing, booking, and enquiry experience.</span>
            <span>Built with React, TypeScript, Vite, and Framer Motion.</span>
          </div>
        </Container>
      </footer>

      <div className="whatsapp-widget">
        <AnimatePresence initial={false}>
          {whatsappOpen ? (
            <motion.div
              key="whatsapp-panel"
              id="whatsapp-panel"
              className="whatsapp-widget__panel surface-panel"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12, scale: reduceMotion ? 1 : 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : 8, scale: reduceMotion ? 1 : 0.98 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
            >
              <div className="whatsapp-widget__header">
                <p className="eyebrow">WhatsApp</p>
                <Button variant="ghost" type="button" onClick={() => setWhatsappOpen(false)}>
                  Close
                </Button>
              </div>
              <p className="muted">Chat with customer care about homes, inspections, or listing questions.</p>
              <div className="button-row">
                <a
                  className="button button-primary"
                  href={`https://wa.me/${brand.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat now
                </a>
                <ButtonLink href="/contact" variant="secondary">
                  Contact us
                </ButtonLink>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <Button
          type="button"
          variant="primary"
          className="whatsapp-widget__toggle"
          aria-expanded={whatsappOpen}
          aria-controls="whatsapp-panel"
          onClick={() => setWhatsappOpen((current) => !current)}
        >
          <span className="whatsapp-widget__toggle-icon" aria-hidden="true">
            WA
          </span>
          <span className="whatsapp-widget__toggle-copy">
            <strong>WhatsApp</strong>
            <span>Quick help</span>
          </span>
        </Button>
      </div>

      <Drawer open={mobileMenuOpen} title="Navigation" onClose={() => setMobileMenuOpen(false)}>
        <div className="drawer-links">
          {navigation.map((item) => (
            <NavLink key={item.href} to={item.href} end={item.href === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {item.label}
            </NavLink>
          ))}
          {secondaryNavigation.map((item) => (
            <NavLink key={item.href} to={item.href} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </Drawer>
    </div>
  );
}

