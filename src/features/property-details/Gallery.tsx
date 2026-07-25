import { useMemo, useState } from 'react';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import type { PropertyImage } from '../../types';

interface GalleryProps {
  title: string;
  images: PropertyImage[];
}

export function Gallery({ title, images }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const activeImage = images[activeIndex] ?? images[0];

  const thumbnails = useMemo(() => images.slice(0, 3), [images]);

  return (
    <div className="gallery">
      <button type="button" className="gallery__main" onClick={() => setLightboxOpen(true)} aria-label={`Open photo of ${title}`}>
        {activeImage ? <img src={activeImage.src} alt={activeImage.alt} /> : null}
      </button>
      <div className="gallery__thumbs">
        {thumbnails.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="gallery__thumb"
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
            aria-label={`View image ${index + 1} of ${title}`}
          >
            <img src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>

      <Modal open={lightboxOpen} title={title} onClose={() => setLightboxOpen(false)} className="lightbox">
        {activeImage ? (
          <div className="stack">
            <img src={activeImage.src} alt={activeImage.alt} />
            <div className="button-row">
              <Button type="button" variant="secondary" onClick={() => setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1))}>
                Previous
              </Button>
              <Button type="button" variant="secondary" onClick={() => setActiveIndex((current) => (current + 1) % images.length)}>
                Next
              </Button>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}

