import React, { useState } from 'react';
import { constructionUpdatesData } from '../data/siteData';

export default function ConstructionUpdates({ onOpenLightbox }) {
  const months = Object.keys(constructionUpdatesData);
  const [selectedMonth, setSelectedMonth] = useState(months[0]);

  const towers = constructionUpdatesData[selectedMonth] || [];

  return (
    <section id="construction-updates" className="construction-section">
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
        <div className="section-header text-center has_line">
          <h2 className="main_heading">CONSTRUCTION UPDATES</h2>
          <p style={{ maxWidth: '650px', margin: '15px auto 0', color: '#555555', fontSize: '15px' }}>
            Transparent real-time engineering milestones across Towers C, D, E, and F as we build Hyderabad’s finest skyline landmark.
          </p>
        </div>

        {/* Month Selector Bar */}
        <div className="month-selector-bar">
          {months.map((month) => (
            <button
              key={month}
              className={`month-btn ${selectedMonth === month ? 'active' : ''}`}
              onClick={() => setSelectedMonth(month)}
            >
              {month}
            </button>
          ))}
        </div>

        {/* 4 Towers Grid */}
        <div className="tower-grid">
          {towers.map((item, idx) => (
            <div 
              key={idx} 
              className="tower-card"
              onClick={() => onOpenLightbox(item.img, `${item.tower} - ${selectedMonth}: ${item.status}`)}
            >
              <div className="tower-img-wrap">
                <img 
                  src={item.img} 
                  alt={`${item.tower} Progress`} 
                  loading="lazy" 
                />
                <div className="tower-badge">{item.tower}</div>
              </div>
              <div className="tower-info">
                <h5>{item.tower}</h5>
                <p>{item.status}</p>
                <span style={{ fontSize: '12px', color: '#be9600', fontWeight: '600', marginTop: '8px', display: 'inline-block' }}>
                  <i className="bi bi-zoom-in me-1"></i> View Photo
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
