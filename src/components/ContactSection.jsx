import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
      alert("Thank you! Your inquiry has been received. Our luxury property specialist will contact you shortly.");
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
        <div className="section-header text-center has_line">
          <h2 className="main_heading" style={{ color: '#ffffff' }}>GET IN TOUCH WITH US</h2>
          <p style={{ maxWidth: '650px', margin: '15px auto 0', color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>
            Fill out the form below to connect with our luxury real estate advisors and arrange a personalized private viewing.
          </p>
        </div>

        <div className="contact-grid">
          {/* Form Card Left */}
          <div className="skymarq-form-card">
            <div className="skymarq-form-header" style={{ textAlign: 'left' }}>
              <h3>SCHEDULE A SITE VISIT</h3>
              <p>Connect directly with our senior sales advisors.</p>
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
                  title="Enter valid 10-digit mobile number"
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

              <div className="skymarq-input-group textarea-group">
                <i className="bi bi-chat-left-text-fill skymarq-field-icon"></i>
                <textarea 
                  className="skymarq-form-control" 
                  placeholder="Your Message" 
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="skymarq-btn-gold">
                {submitted ? 'Submitting...' : 'Send Message'} <i className="bi bi-arrow-right-short"></i>
              </button>
            </form>
          </div>

          {/* Map Embed Right */}
          <div style={{
            height: '100%',
            minHeight: '480px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(190, 150, 0, 0.35)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}>
            <iframe 
              title="DSR Skymarq Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121828.5197203041!2d78.19920301437377!3d17.40500814911699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb950008ff6b0f%3A0x153a89bfa4ee7fd4!2sDSR%20Skymarq!5e0!3m2!1sen!2sin!4v1771395776215!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '480px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
