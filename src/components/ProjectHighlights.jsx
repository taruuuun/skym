import React from 'react';
import { projectHighlights } from '../data/siteData';

export default function ProjectHighlights() {
  return (
    <section id="project-highlight" className="highlights-section bg_3">
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
        <div className="section-header text-center has_line">
          <h2 className="main_heading" style={{ color: '#ffffff' }}>PROJECT HIGHLIGHTS</h2>
        </div>

        <div className="highlights-grid">
          {projectHighlights.map((item, idx) => (
            <div 
              key={idx} 
              className="highlight-card"
              style={idx === projectHighlights.length - 1 ? { gridColumn: 'span 2' } : {}}
            >
              <div className="highlight-icon-wrap">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  style={{ width: '38px', height: '38px', objectFit: 'contain' }} 
                  loading="lazy" 
                />
              </div>
              <h6>{item.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
