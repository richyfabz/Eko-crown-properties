import type { Property, SearchFilters } from '../../types';

function parseNumber(value: string | null | undefined): number | undefined {
  if (!value) {
    return undefined;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

export function searchParamsToFilters(params: URLSearchParams, purpose?: SearchFilters['purpose']): SearchFilters {
  return {
    purpose,
    query: params.get('query') ?? undefined,
    state: params.get('state') ?? undefined,
    city: params.get('city') ?? undefined,
    area: params.get('area') ?? undefined,
    propertyType: params.get('propertyType') ?? undefined,
    bedrooms: parseNumber(params.get('bedrooms')),
    minPrice: parseNumber(params.get('minPrice')),
    maxPrice: parseNumber(params.get('maxPrice')),
    verifiedOnly: params.get('verifiedOnly') === 'true' ? true : undefined,
    featuredOnly: params.get('featuredOnly') === 'true' ? true : undefined,
    luxuryOnly: params.get('luxuryOnly') === 'true' ? true : undefined,
    sortBy: (params.get('sortBy') as SearchFilters['sortBy']) ?? 'featured',
  };
}

export function filtersToSearchParams(filters: SearchFilters): URLSearchParams {
  const params = new URLSearchParams();
  if (filters.query) params.set('query', filters.query);
  if (filters.state) params.set('state', filters.state);
  if (filters.city) params.set('city', filters.city);
  if (filters.area) params.set('area', filters.area);
  if (filters.propertyType) params.set('propertyType', filters.propertyType);
  if (typeof filters.bedrooms === 'number') params.set('bedrooms', String(filters.bedrooms));
  if (typeof filters.minPrice === 'number') params.set('minPrice', String(filters.minPrice));
  if (typeof filters.maxPrice === 'number') params.set('maxPrice', String(filters.maxPrice));
  if (filters.verifiedOnly) params.set('verifiedOnly', 'true');
  if (filters.featuredOnly) params.set('featuredOnly', 'true');
  if (filters.luxuryOnly) params.set('luxuryOnly', 'true');
  if (filters.sortBy && filters.sortBy !== 'featured') params.set('sortBy', filters.sortBy);
  return params;
}

export function filterProperties(properties: Property[], filters: SearchFilters): Property[] {
  const query = filters.query?.trim().toLowerCase() ?? '';

  let next = properties.filter((property) => {
    const matchesPurpose = filters.purpose ? property.purpose === filters.purpose : true;
    const matchesQuery =
      !query ||
      [property.title, property.summary, property.description, property.location.area, property.location.city, property.propertyType]
        .join(' ')
        .toLowerCase()
        .includes(query);
    const matchesState = filters.state ? property.location.state === filters.state : true;
    const matchesCity = filters.city ? property.location.city === filters.city : true;
    const matchesArea = filters.area ? property.location.area === filters.area : true;
    const matchesType = filters.propertyType ? property.propertyType === filters.propertyType : true;
    const matchesBedrooms = typeof filters.bedrooms === 'number' ? property.bedrooms === filters.bedrooms : true;
    const matchesMinPrice = typeof filters.minPrice === 'number' ? property.price >= filters.minPrice : true;
    const matchesMaxPrice = typeof filters.maxPrice === 'number' ? property.price <= filters.maxPrice : true;
    const matchesVerified = filters.verifiedOnly ? property.verificationStatus === 'verified' : true;
    const matchesFeatured = filters.featuredOnly ? Boolean(property.featured) : true;
    const matchesLuxury = filters.luxuryOnly ? Boolean(property.luxury) : true;

    return (
      matchesPurpose &&
      matchesQuery &&
      matchesState &&
      matchesCity &&
      matchesArea &&
      matchesType &&
      matchesBedrooms &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesVerified &&
      matchesFeatured &&
      matchesLuxury
    );
  });

  switch (filters.sortBy) {
    case 'price-asc':
      next = next.slice().sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      next = next.slice().sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      next = next.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;
    case 'featured':
    default:
      next = next.slice().sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
      break;
  }

  return next;
}

