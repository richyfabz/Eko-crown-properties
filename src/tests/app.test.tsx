import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AppRoutes } from '../pages';

describe('application routes', () => {
  it('renders the homepage hero', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /trusted homes for buyers, renters, and sellers/i })).toBeInTheDocument();
  });

  it('renders a property detail page from the route slug', () => {
    render(
      <MemoryRouter initialEntries={['/properties/ikoyi-courtyard-duplex']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /ikoyi courtyard duplex/i })).toBeInTheDocument();
    expect(screen.getByText(/inspection window/i)).toBeInTheDocument();
  });
});
