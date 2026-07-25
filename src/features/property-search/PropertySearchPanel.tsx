import type { ChangeEvent } from 'react';
import type { Property, SearchFilters } from '../../types';
import { Button } from '../../components/Button';

interface PropertySearchPanelProps {
  properties: Property[];
  value: SearchFilters;
  onChange: (next: SearchFilters) => void;
  onReset: () => void;
}

function getUniqueValues(properties: Property[], pick: (property: Property) => string) {
  return Array.from(new Set(properties.map(pick).filter(Boolean))).sort((left, right) => left.localeCompare(right));
}

export function PropertySearchPanel({ properties, value, onChange, onReset }: PropertySearchPanelProps) {
  const states = getUniqueValues(properties, (property) => property.location.state);
  const cities = getUniqueValues(properties, (property) => property.location.city);
  const areas = getUniqueValues(properties, (property) => property.location.area);
  const types = getUniqueValues(properties, (property) => property.propertyType);

  const update = (field: keyof SearchFilters, fieldValue: string | number | boolean | undefined) => {
    onChange({ ...value, [field]: fieldValue || fieldValue === 0 ? fieldValue : undefined });
  };

  const handleCheckbox = (field: keyof Pick<SearchFilters, 'verifiedOnly' | 'featuredOnly' | 'luxuryOnly'>) => {
    onChange({ ...value, [field]: !value[field] });
  };

  const handleTextChange =
    (field: keyof Pick<SearchFilters, 'query' | 'state' | 'city' | 'area' | 'propertyType' | 'sortBy'>) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      update(field, event.target.value || undefined);
    };

  return (
    <div className="panel stack">
      <div className="filters-grid">
        <label className="field">
          <span>Search</span>
          <input
            value={value.query ?? ''}
            onChange={handleTextChange('query')}
            placeholder="Search title, location, or type"
            type="search"
          />
        </label>
        <label className="field">
          <span>State</span>
          <select value={value.state ?? ''} onChange={handleTextChange('state')}>
            <option value="">All states</option>
            {states.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>City</span>
          <select value={value.city ?? ''} onChange={handleTextChange('city')}>
            <option value="">All cities</option>
            {cities.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Area</span>
          <select value={value.area ?? ''} onChange={handleTextChange('area')}>
            <option value="">All areas</option>
            {areas.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Property type</span>
          <select value={value.propertyType ?? ''} onChange={handleTextChange('propertyType')}>
            <option value="">All types</option>
            {types.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Bedrooms</span>
          <select
            value={typeof value.bedrooms === 'number' ? String(value.bedrooms) : ''}
            onChange={(event) => update('bedrooms', event.target.value ? Number(event.target.value) : undefined)}
          >
            <option value="">Any</option>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Min price</span>
          <input
            value={value.minPrice ?? ''}
            onChange={(event) => update('minPrice', event.target.value ? Number(event.target.value) : undefined)}
            inputMode="numeric"
            placeholder="0"
          />
        </label>
        <label className="field">
          <span>Max price</span>
          <input
            value={value.maxPrice ?? ''}
            onChange={(event) => update('maxPrice', event.target.value ? Number(event.target.value) : undefined)}
            inputMode="numeric"
            placeholder="Any"
          />
        </label>
        <label className="field">
          <span>Sort by</span>
          <select value={value.sortBy ?? 'featured'} onChange={handleTextChange('sortBy')}>
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </label>
        <label className="field">
          <span>Trust filters</span>
          <div className="chips" style={{ minHeight: 48, alignItems: 'center' }}>
            <button
              className={`chip${value.verifiedOnly ? ' active' : ''}`}
              type="button"
              onClick={() => handleCheckbox('verifiedOnly')}
            >
              Verified only
            </button>
            <button
              className={`chip${value.featuredOnly ? ' active' : ''}`}
              type="button"
              onClick={() => handleCheckbox('featuredOnly')}
            >
              Featured only
            </button>
            <button
              className={`chip${value.luxuryOnly ? ' active' : ''}`}
              type="button"
              onClick={() => handleCheckbox('luxuryOnly')}
            >
              Luxury only
            </button>
          </div>
        </label>
      </div>

      <div className="form-actions">
        <div className="fine-print">
          Search state is synced to the URL so users can copy and return to the same filtered list.
        </div>
        <div className="button-row">
          <Button type="button" variant="secondary" onClick={onReset}>
            Reset filters
          </Button>
          <Button type="submit">Apply filters</Button>
        </div>
      </div>
    </div>
  );
}
