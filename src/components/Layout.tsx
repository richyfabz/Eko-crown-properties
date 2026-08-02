import { useLayoutEffect, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { brand, navigation, secondaryNavigation } from '../data/siteData';
import { Container } from './Container';
import { Button, ButtonLink } from './Button';
import { Drawer } from './Drawer';

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    setMobileMenuOpen(false);
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch {
      window.scrollTo(0, 0);
    }
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
            <span>Copyright 2026 {brand.name}. Sample content for release-ready front-end build.</span>
            <span>Built with React, TypeScript, Vite, and Framer Motion.</span>
          </div>
        </Container>
      </footer>

      <a
        className="whatsapp-fab"
        href={`https://wa.me/${brand.whatsapp.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with customer care on WhatsApp"
      >
        <span className="whatsapp-fab__icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" role="presentation" focusable="false">
            <path
              d="M19.96 17.57c-.28-.14-1.64-.81-1.9-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.91 1.1-.17.19-.33.21-.61.07-.28-.14-1.19-.44-2.27-1.41-.84-.75-1.41-1.67-1.58-1.95-.17-.28-.02-.44.12-.58.12-.12.28-.33.42-.49.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.49h-.55c-.19 0-.49.07-.75.35-.26.28-1 1-1 2.46s1.03 2.86 1.17 3.06c.14.19 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.54-.33Z"
              fill="currentColor"
            />
            <path
              d="M16 3C8.82 3 3 8.58 3 15.45c0 2.4.72 4.78 2.08 6.83L4 29l6.95-1.83a13.3 13.3 0 0 0 5.05.98C23.18 28.15 29 22.58 29 15.7 29 8.83 23.18 3 16 3Zm0 22.72c-1.68 0-3.33-.4-4.78-1.16l-.34-.18-4.12 1.08 1.1-3.97-.22-.36A10.83 10.83 0 0 1 5.9 15.45C5.9 10.18 10.43 5.9 16 5.9s10.1 4.28 10.1 9.55c0 5.28-4.53 10.27-10.1 10.27Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="sr-only">WhatsApp</span>
      </a>

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
