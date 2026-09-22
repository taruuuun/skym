import React, { useState } from 'react';

export default function Header({ onOpenEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Highlights', href: '#project-highlight' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Why DSR', href: '#why-dsr' },
    { name: 'Plans', href: '#floor-plans' },
    { name: 'Location', href: '#location-highlight' },
    { name: 'Construction Updates', href: '#construction-updates' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="skymark_hdrs">
      {/* Upper Info Strip */}
      <div className="header-lower-style1">
        <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 15px' }}>
          <div className="topbar-container">
            <div className="topbar-item">
              <i className="fa fa-map-marker"></i>
              <a href="#location-highlight">Nanakramguda, Gachibowli</a>
            </div>
            <div className="topbar-item">
              <i className="fa fa-phone"></i>
              <a href="tel:9054954990">+91 90549 54990</a>
            </div>
            <div className="topbar-item">
              <i className="fa fa-envelope"></i>
              <a href="mailto:sales@dsrbuilders.in">sales@dsrbuilders.in</a>
            </div>
            <div className="topbar-item">
              <button 
                className="topbar-enquire-btn"
                onClick={() => onOpenEnquiry("Enquire Now - Header")}
                style={{ border: 'none', cursor: 'pointer' }}
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container-fluid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 20px' }}>
        <div className="header_inner">
          {/* Logo Left */}
          <div className="logo">
            <a href="#home">
              <img 
                src="/assets/dsr-img/skymarq-img/logo.png" 
                alt="DSR Skymarq Logo" 
                style={{ height: '48px', objectFit: 'contain' }} 
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="mainnav d-none d-lg-block">
            <ul className="header-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Logo & Mobile Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div className="logo d-none d-sm-block">
              <a href="#home">
                <img 
                  src="/assets/dsr-img/logo.png" 
                  alt="DSR Builders" 
                  style={{ height: '42px', objectFit: 'contain' }} 
                />
              </a>
            </div>

            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle navigation menu"
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <button 
          className="mobile-drawer-close" 
          onClick={() => setMobileMenuOpen(false)}
        >
          &times;
        </button>

        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <img 
            src="/assets/dsr-img/skymarq-img/logo.png" 
            alt="DSR Skymarq Logo" 
            style={{ maxHeight: '42px', margin: '0 auto' }} 
          />
        </div>

        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a 
            href="tel:9054954990" 
            className="skymarq-btn-gold" 
            style={{ textDecoration: 'none', textAlign: 'center', fontSize: '13px' }}
          >
            <i className="bi bi-telephone-fill"></i> Call +91 90549 54990
          </a>
          <button 
            className="skymarq-btn-gold"
            style={{ fontSize: '13px', background: '#333' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquiry("Mobile Menu Enquiry");
            }}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </header>
  );
}
