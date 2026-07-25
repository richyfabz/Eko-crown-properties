import { useEffect, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { modalVariants } from '../animations/variants';
import { Button } from './Button';

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  className?: string;
  children: ReactNode;
}

export function Modal({ open, title, onClose, children, className = '' }: ModalProps) {
  const reduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, open]);

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div className="modal-shell">
          <motion.div
            className="overlay"
            aria-hidden="true"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className={`modal-panel ${className}`.trim()}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            transition={{ duration: reduceMotion ? 0 : 0.24 }}
          >
            <div className="modal-header">
              <p className="eyebrow">{title}</p>
              <Button ref={closeButtonRef} type="button" variant="ghost" aria-label="Close modal" onClick={onClose}>
                Close
              </Button>
            </div>
            <div className="modal-body">{children}</div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
