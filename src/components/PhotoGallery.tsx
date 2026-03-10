'use client';

import { useState, useEffect } from 'react';

interface Props {
  photos: string[];
}

export default function PhotoGallery({ photos }: Props) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxSrc(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxSrc ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxSrc]);

  return (
    <>
      <div className="gallery-grid">
        {photos.map((src, i) => (
          <div
            key={src}
            className="gallery-item"
            data-reveal
            data-delay={String((i % 3) + 1)}
            onClick={() => setLightboxSrc(src)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Photography ${i + 1}`} loading="lazy" />
            <div className="gallery-item-overlay">
              <span className="gallery-expand">View</span>
            </div>
          </div>
        ))}
      </div>

      {lightboxSrc && (
        <div
          className="lightbox open"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            className="lightbox-close"
            onClick={() => setLightboxSrc(null)}
            aria-label="Close"
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightboxSrc}
            alt="Full size view"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
