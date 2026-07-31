import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import { AppRoutes } from '../pages';
import { cleanup } from '@testing-library/react';

const publicRoutes = [
  '/',
  '/buy',
  '/rent',
  '/sell',
  '/properties',
  '/properties/ikoyi-courtyard-duplex',
  '/locations',
  '/locations/ikoyi',
  '/agents',
  '/about',
  '/blog',
  '/contact',
  '/book-inspection',
  '/favorites',
  '/compare',
  '/privacy',
  '/terms',
  '/404',
];

afterEach(() => {
  cleanup();
});

describe('route smoke checks', () => {
  it.each(publicRoutes)('renders %s without a page crash', (route) => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 }).length).toBeGreaterThan(0);
  }, 15000);

  it('opens and closes the mobile navigation drawer', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    await user.click(screen.getByRole('button', { name: /open navigation menu/i }));
    expect(screen.getByRole('dialog', { name: /navigation/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /close drawer/i }));
    expect(screen.queryByRole('dialog', { name: /navigation/i })).not.toBeInTheDocument();
  }, 15000);
});
