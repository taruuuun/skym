import React, { useState, useEffect } from 'react';
import { projectStats } from '../data/siteData';

export default function Hero({ onOpenEnquiry }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      desktop: '/assets/dsr-img/skymarq-img/body/sky-marq-ban-1.jpg',
      mobile: '/assets/dsr-img/skymarq-img/body/sky-marq-mobile-ban-1.jpg',
      alt: 'DSR Skymarq Tower Elevation 1'
    },
    {
      desktop: '/assets/dsr-img/skymarq-img/body/sky-marq-ban-2.jpg',
      mobile: '/assets/dsr-img/skymarq-img/body/sky-marq-mobile-ban-2.jpg',
      alt: 'DSR Skymarq Tower Elevation 2'
    }
  ];

  // Auto-advance banner every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id="home">
      {/* Slider Container */}
      <div className="hero-slider-container">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <picture>
              <source media="(min-width: 768px)" srcSet={slide.desktop} />
              <img 
                src={slide.mobile} 
                alt={slide.alt} 
                loading={index === 0 ? "eager" : "lazy"} 
              />
            </picture>
          </div>
        ))}

        {/* Controls */}
        <div className="hero-controls">
          <button 
            className="hero-ctrl-btn" 
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button 
            className="hero-ctrl-btn" 
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Marquee Banner */}
      <section className="marquee_section">
        <marquee>
          <h1 style={{ fontSize: '20px', paddingTop: '4px', textTransform: 'uppercase' }}>
            4bhk flats for sale in gachibowli | 4bhk flats in nanakramguda | DSR Skymarq &bull; Ultra Luxury High-Rise Residences &bull; Possession 2026
          </h1>
        </marquee>
      </section>

      {/* Quick Metrics Strip */}
      <div className="hero-quick-strip">
        <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
          <div className="quick-stats-grid">
            {projectStats.map((stat, idx) => (
              <div key={idx} className="quick-stat-item">
                <h4>{stat.value}</h4>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
