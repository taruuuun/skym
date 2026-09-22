import React from 'react';
import { whySkymarqList } from '../data/siteData';

export default function WhySkymarq() {
  return (
    <section id="why-dsr" className="why_skymarqs_dsr_bg">
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
        <div className="section-header text-center has_line text-white">
          <h2 className="main_heading" style={{ color: '#ffffff' }}>Why SKYMARQ BY DSR</h2>
          <p style={{ maxWidth: '820px', margin: '15px auto 0', color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: '1.8' }}>
            Elegance welcomes you home to Sky Marq. You can revitalize yourself in comfort and luxury. These clearly are some of the most coveted living spaces that lift you high over the concrete jungle of the city. Sophistication got a whole new name, in Sky Marq.
          </p>
        </div>

        <div className="why-grid">
          {whySkymarqList.map((item, idx) => (
            <div key={idx} className="why-card">
              <img 
                src={item.icon} 
                alt={item.title} 
                loading="lazy" 
              />
              <h4>{item.title}</h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
