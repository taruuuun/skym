import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
        <div className="footer-content">
          {/* Logos */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <img 
              src="/assets/dsr-img/skymarq-img/logo.png" 
              alt="DSR Skymarq" 
              style={{ height: '45px', objectFit: 'contain' }} 
            />
            <div style={{ height: '30px', width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
            <img 
              src="/assets/dsr-img/logo.png" 
              alt="DSR Builders & Developers" 
              style={{ height: '38px', objectFit: 'contain' }} 
            />
          </div>

          {/* Social Icons */}
          <ul className="footer-social-list">
            <li>
              <a href="https://www.facebook.com/DSR-Builders-And-Developers-101957342431733" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/dsr-builders-and-developers/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/dsrbuilders_and_developers" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="mailto:sales@dsrbuilders.in" aria-label="Email">
                <i className="bi bi-envelope"></i>
              </a>
            </li>
          </ul>

          {/* Sales & Contact Badges */}
          <div style={{
            display: 'flex',
            gap: '30px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            fontSize: '14px',
            color: '#dddddd',
            margin: '10px 0'
          }}>
            <div>
              <span style={{ color: '#be9600', fontWeight: '600' }}>Sales Hotline:</span>{' '}
              <a href="tel:9057957990" style={{ color: '#fff', textDecoration: 'underline' }}>+91 90579 57990</a>
            </div>
            <div>
              <span style={{ color: '#be9600', fontWeight: '600' }}>Site Office:</span>{' '}
              <a href="tel:9054954990" style={{ color: '#fff', textDecoration: 'underline' }}>+91 90549 54990</a>
            </div>
            <div>
              <span style={{ color: '#be9600', fontWeight: '600' }}>Email:</span>{' '}
              <a href="mailto:sales@dsrbuilders.in" style={{ color: '#fff' }}>sales@dsrbuilders.in</a>
            </div>
          </div>

          {/* Legal RERA Disclaimer */}
          <div className="footer-legal">
            <p>
              <strong>TS RERA REGISTRATION NO: P02400005887</strong> | Approved by Government of Telangana (www.rera.telangana.gov.in).
            </p>
            <p style={{ marginTop: '6px' }}>
              Disclaimer: The contents, images, layout plans, and specifications shown on this website are indicative and artistic impressions for representational purposes only and should not be construed as a legal offering.
            </p>
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} DSR Builders & Developers. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
