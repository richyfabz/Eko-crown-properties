import { describe, expect, it } from 'vitest';
import { familyAssets } from '../data/assets';
import { storySlides, testimonials } from '../data/siteData';

describe('site media', () => {
  it('keeps testimonial and story images defined and unique on the home page', () => {
    const testimonialSources = testimonials.map((testimonial) => testimonial.image).filter((value): value is string => Boolean(value));
    const storySources = storySlides.map((slide) => slide.image).filter((value): value is string => Boolean(value));
    const sources = [...testimonialSources, ...storySources, familyAssets.storyBackground];

    expect(testimonialSources).toHaveLength(3);
    expect(storySources).toHaveLength(4);
    expect(new Set(sources).size).toBe(sources.length);
    expect(sources.every((source) => !source.includes('/raw-assets/'))).toBe(true);
    expect(sources.every((source) => !source.includes('/images/'))).toBe(true);
  });
});
