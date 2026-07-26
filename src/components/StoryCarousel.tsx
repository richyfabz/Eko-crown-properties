import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ButtonLink } from './Button';
import { Container } from './Container';
import type { StorySlide } from '../types';

interface StoryCarouselProps {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage: string;
  slides: StorySlide[];
}

export function StoryCarousel({ eyebrow, title, description, backgroundImage, slides }: StoryCarouselProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '12%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);

  const trackSlides = [...slides, ...slides];

  return (
    <section className="story-section section" ref={sectionRef}>
      <Container wide>
        <div className="story-layout">
          <div className="story-sticky">
            <div className="story-sticky__frame">
              <motion.img
                src={backgroundImage}
                alt="Families relaxing at home, used as the hero background for testimonials"
                className="story-sticky__image"
                style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
              />
              <div className="story-sticky__overlay" />
              <div className="story-sticky__content">
                <p className="eyebrow">{eyebrow}</p>
                <h2 className="section-title">{title}</h2>
                <p className="lede">{description}</p>
                <div className="button-row">
                  <ButtonLink href="/book-inspection">Book Inspection</ButtonLink>
                  <ButtonLink href="/properties" variant="secondary">
                    Browse Properties
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>

          <div className="story-stack">
            {slides.map((slide, index) => (
              <motion.article
                key={slide.id}
                className="story-card"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, delay: index * 0.06 }}
              >
                <div className="story-card__media">
                  <img src={slide.image} alt={slide.label} />
                  <div className="story-card__veil" />
                  <div className="story-card__chip">{slide.state}</div>
                </div>
                <div className="story-card__body">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="story-carousel" aria-label="Customer stories carousel">
          <div className="story-carousel__track">
            {trackSlides.map((slide, index) => (
              <article key={`${slide.id}-${index}`} className="story-mini">
                <div className="story-mini__media">
                  <img src={slide.image} alt={slide.label} />
                  <div className="story-mini__veil" />
                  <span className="story-mini__state">{slide.state}</span>
                </div>
                <div className="story-mini__body">
                  <strong>{slide.title}</strong>
                  <span>{slide.description}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
