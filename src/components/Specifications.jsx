import React, { useState } from 'react';
import { specificationsData } from '../data/siteData';

export default function Specifications() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="specifications" className="about-section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
        <div className="section-header text-center has_line">
          <h2 className="main_heading">SPECIFICATIONS</h2>
          <p style={{ maxWidth: '650px', margin: '15px auto 0', color: '#666666', fontSize: '15px' }}>
            Engineered with uncompromising precision using world-class materials and cutting-edge structural architecture.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginTop: '40px'
        }}>
          {specificationsData.map((spec, idx) => (
            <div 
              key={idx}
              style={{
                background: '#faf8f5',
                border: '1px solid #ebe5d8',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'var(--gold-gradient)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px'
                }}>
                  <i className="bi bi-shield-check"></i>
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#111111', margin: 0 }}>
                  {spec.category}
                </h4>
              </div>
              <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#555555', margin: 0 }}>
                {spec.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
