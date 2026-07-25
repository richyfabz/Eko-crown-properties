import { describe, expect, it } from 'vitest';
import { properties } from '../data/siteData';
import { filterProperties, filtersToSearchParams, searchParamsToFilters } from '../features/property-search/filterProperties';

describe('property search filters', () => {
  it('filters by query and purpose', () => {
    const filtered = filterProperties(properties, { query: 'ikoyi', purpose: 'buy' });

    expect(filtered.some((property) => property.slug === 'ikoyi-courtyard-duplex')).toBe(true);
    expect(filtered.every((property) => property.purpose === 'buy')).toBe(true);
  });

  it('round-trips filter state through search params', () => {
    const filters = {
      query: 'lagos',
      state: 'Lagos',
      bedrooms: 4,
      verifiedOnly: true,
      sortBy: 'price-desc' as const,
    };

    const params = filtersToSearchParams(filters);
    const result = searchParamsToFilters(params);

    expect(result.query).toBe('lagos');
    expect(result.state).toBe('Lagos');
    expect(result.bedrooms).toBe(4);
    expect(result.verifiedOnly).toBe(true);
    expect(result.sortBy).toBe('price-desc');
  });
});

