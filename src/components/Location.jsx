import React, { useState } from 'react';
import { locationAccordionData } from '../data/siteData';

export default function Location() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="location-highlight" className="location-section">
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
        <div className="section-header text-center has_line">
          <h2 className="main_heading">Location Highlights</h2>
          <p style={{ maxWidth: '850px', margin: '15px auto 0', color: '#444444', fontSize: '15px', lineHeight: '1.8' }}>
            Nestled in the heart of Hyderabad, Skymarq is strategically located on the Hyderabad Growth Corridor. Beside the outer ring road tollbooth and situated just 2 Km away from the IT hub, breezing into work could never be easier. The fact that the International airport is accessible with a convenient 25-30 minute drive, makes it a location of choice. Additionally, the project site faces O.R.R and has 2 approach roads in the North & East.
          </p>
        </div>

        <div className="location-grid">
          {/* Accordion Left */}
          <div>
            {locationAccordionData.map((item, idx) => (
              <div key={idx} className="accordion-item-custom">
                <button 
                  className={`accordion-header-btn ${openIndex === idx ? 'open' : ''}`}
                  onClick={() => toggleAccordion(idx)}
                >
                  <span>{item.title}</span>
                  <i className="bi bi-chevron-down"></i>
                </button>
                {openIndex === idx && (
                  <div className="accordion-content">
                    <ul>
                      {item.items.map((sub, sIdx) => (
                        <li key={sIdx} style={{ marginBottom: '6px' }}>{sub}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Animated Location Graphic Right */}
          <div style={{ textAlign: 'center' }}>
            <img 
              src="/assets/dsr-img/skymarq-img/body/location.gif" 
              alt="DSR Skymarq Strategic Location Connectivity" 
              style={{ maxWidth: '100%', borderRadius: '16px', boxShadow: '0 12px 35px rgba(0,0,0,0.1)' }}
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
