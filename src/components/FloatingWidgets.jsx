import React from 'react';

export default function FloatingWidgets({ onOpenVisitModal, onOpenBrochureModal }) {
  return (
    <>
      {/* Book Site Visit Left Floating Button */}
      <button 
        className="fixed-button" 
        onClick={() => onOpenVisitModal("Book Site Visit")}
      >
        <i className="bi bi-calendar2-check me-2"></i> Book Site Visit
      </button>

      {/* Floating Call Button */}
      <button className="call-btn" onClick={() => window.location.href = 'tel:9057957990'}>
        <i className="bi bi-telephone-fill"></i>
        <span className="mobile-number">+91 90579 57990</span>
      </button>

      {/* Download Brochure Floating Circular CTA */}
      <button 
        className="brochure_cta" 
        onClick={() => onOpenBrochureModal("Brochure CTA Button")}
        title="Download SkyMarq Brochure"
        aria-label="Download SkyMarq Brochure"
      >
        <i className="bi bi-download"></i>
      </button>

      {/* Virtual Tour Vertical Flap with Blinking Glow */}
      <a 
        href="https://www.protrudevisualization.com/skymarqbydsr" 
        target="_blank" 
        rel="noreferrer" 
        className="virtualtour"
        id="blinking-button"
      >
        <i className="bi bi-play-circle" style={{ transform: 'rotate(90deg)', fontSize: '18px' }}></i>
        Virtual Tour
      </a>
    </>
  );
}
