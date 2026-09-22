import React from 'react';
import { galleryImages } from '../data/siteData';

export default function Gallery({ onOpenLightbox }) {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
        <div className="section-header text-center has_line">
          <h2 className="main_heading" style={{ color: '#ffffff' }}>Project Gallery</h2>
          <p style={{ maxWidth: '650px', margin: '15px auto 0', color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>
            Immerse yourself in the visual splendor of Sky Marq, from palatial double-height arrival lobbies to Olympic-sized pools and bespoke luxury interiors.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((item, idx) => (
            <div 
              key={idx} 
              className="gallery-item"
              onClick={() => onOpenLightbox(item.src, item.title)}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                loading="lazy" 
              />
              <div className="gallery-overlay">
                <div style={{ textAlign: 'center' }}>
                  <i className="bi bi-arrows-fullscreen"></i>
                  <p style={{ color: '#ffffff', fontSize: '14px', fontWeight: '600', marginTop: '8px' }}>
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
