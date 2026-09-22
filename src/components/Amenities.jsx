import React from 'react';
import { amenitiesList } from '../data/siteData';

export default function Amenities() {
  return (
    <section id="amenities" className="amenities-section">
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
        <div className="section-header text-center has_line">
          <h2 className="main_heading">Amenities</h2>
          <p style={{ maxWidth: '700px', margin: '15px auto 0', color: '#666666', fontSize: '15px' }}>
            Indulge in over 50,000 sq. ft. of hand-crafted recreational spaces designed to elevate wellness, entertainment, and social bonding.
          </p>
        </div>

        <div className="amenities-grid">
          {amenitiesList.map((amenity, idx) => (
            <div key={idx} className="amenity-card">
              <div className="amenity-icon-box">
                <img 
                  src={amenity.icon} 
                  alt={amenity.title} 
                  style={{ width: '36px', height: '36px', objectFit: 'contain' }}
                  loading="lazy" 
                />
              </div>
              <h5>{amenity.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
