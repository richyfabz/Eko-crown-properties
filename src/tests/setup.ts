import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import React from 'react';

class MockIntersectionObserver {
  observe() {}

  unobserve() {}

  disconnect() {}

  takeRecords() {
    return [];
  }
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

const motionProps = new Set([
  'animate',
  'exit',
  'initial',
  'transition',
  'variants',
  'whileHover',
  'whileTap',
  'whileFocus',
  'whileInView',
  'viewport',
  'layout',
  'layoutId',
  'drag',
  'dragConstraints',
  'dragElastic',
  'dragMomentum',
]);

vi.mock('framer-motion', () => {
  const createMotionElement = (tag: keyof React.JSX.IntrinsicElements) =>
    React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(({ children, ...props }, ref) => {
      const filteredProps = Object.fromEntries(Object.entries(props).filter(([key]) => !motionProps.has(key)));
      return React.createElement(tag, { ref, ...filteredProps }, children);
    });

  const motion = new Proxy(
    {},
    {
      get: (_, tag: string) => createMotionElement(tag as keyof React.JSX.IntrinsicElements),
    }
  );

  return {
    AnimatePresence: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children),
    motion,
    useScroll: () => ({ scrollYProgress: 0 }),
    useTransform: (_value: unknown, _input: unknown, output: unknown) => (Array.isArray(output) ? output[0] : output),
    useReducedMotion: () => false,
  };
});
