import React, { useState } from 'react';

export default function FloorPlans({ onOpenLightbox, onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('master');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '' });
      alert("Thank you for your interest! The floor plan has been unlocked and our luxury consultant will share detailed floor drawings on WhatsApp.");
    }, 1000);
  };

  return (
    <section id="floor-plans" className="plans-section">
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
        <div className="section-header text-center has_line">
          <h2 className="main_heading">Plans</h2>
          <p style={{ maxWidth: '650px', margin: '15px auto 0', color: '#666666', fontSize: '15px' }}>
            Thoughtfully planned Master Layout and expansive floor plates engineered for uncompromised privacy and panoramic 360&deg; city views.
          </p>
        </div>

        <div className="plans-layout">
          {/* Vertical Tabs Nav */}
          <div className="plans-nav-pills">
            <button 
              className={`plans-tab-btn ${activeTab === 'master' ? 'active' : ''}`}
              onClick={() => setActiveTab('master')}
            >
              <i className="bi bi-diagram-3 me-2"></i> Master Plan
            </button>
            <button 
              className={`plans-tab-btn ${activeTab === 'clubhouse' ? 'active' : ''}`}
              onClick={() => setActiveTab('clubhouse')}
            >
              <i className="bi bi-building me-2"></i> Clubhouse Floor Plan
            </button>
            <button 
              className={`plans-tab-btn ${activeTab === 'typical' ? 'active' : ''}`}
              onClick={() => setActiveTab('typical')}
            >
              <i className="bi bi-layout-text-window-reverse me-2"></i> Typical Floor Plan
            </button>
          </div>

          {/* Tab Content */}
          <div className="plans-tab-content">
            {activeTab === 'master' && (
              <div className="plan-preview-box">
                <img 
                  src="/assets/dsr-img/skymarq-img/floor-plan/master-Plan.png" 
                  alt="DSR Skymarq Master Layout Plan" 
                  onClick={() => onOpenLightbox("/assets/dsr-img/skymarq-img/floor-plan/master-Plan.png", "DSR Skymarq Master Layout Plan")}
                  loading="lazy" 
                />
                <div className="plan-zoom-hint">
                  <i className="bi bi-zoom-in"></i> Click to Zoom Full Screen
                </div>
              </div>
            )}

            {(activeTab === 'clubhouse' || activeTab === 'typical') && (
              <div className="skymarq-form-card mx-auto" style={{ maxWidth: '560px' }}>
                <div className="skymarq-form-header">
                  <h4>{activeTab === 'clubhouse' ? 'Clubhouse Floor Plan' : 'Typical Floor Plan'}</h4>
                  <p>
                    To access high-resolution architectural layout drawings, kindly provide your details below.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="skymarq-input-group">
                    <i className="bi bi-person-fill skymarq-field-icon"></i>
                    <input 
                      type="text" 
                      className="skymarq-form-control" 
                      placeholder="Full Name *" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="skymarq-input-group">
                    <i className="bi bi-telephone-fill skymarq-field-icon"></i>
                    <input 
                      type="tel" 
                      className="skymarq-form-control" 
                      placeholder="Phone Number *" 
                      required 
                      pattern="[0-9]{10}"
                      title="Enter 10-digit phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="skymarq-input-group">
                    <i className="bi bi-envelope-fill skymarq-field-icon"></i>
                    <input 
                      type="email" 
                      className="skymarq-form-control" 
                      placeholder="Email Address *" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="skymarq-btn-gold">
                    {submitted ? 'Submitting...' : 'Unlock Floor Plan'} <i className="bi bi-arrow-right-short"></i>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
