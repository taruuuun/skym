import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
        <div className="section-header text-center has_line">
          <h2 className="main_heading">ABOUT PROJECT</h2>
        </div>

        <div className="about-grid">
          {/* Column 1 */}
          <div className="about-text">
            <p>
              One of the tallest residential towers in Hyderabad, <strong>Sky Marq</strong> isn’t just a new construction, it is a style statement to portray the elegance of luxury. Living here is like extending the definitive top!
            </p>
            <p>
              With living spaces spread over 45 levels, both the panoramas and the emotions render the whisks unparalleled! With exquisite architecture and luxurious amenities, you can bank on Sky Marq to offer you an elevated lavish experience!
            </p>
          </div>

          {/* Column 2: Image & Pattern */}
          <div className="about-image-wrapper">
            <img 
              src="/assets/dsr-img/skymarq-img/body/about.jpg" 
              alt="DSR Skymarq Tower Overview" 
              className="main-about-img"
              loading="lazy"
            />
            <img 
              className="ptrn-img" 
              src="/assets/dsr-img/body/about-pattern.svg" 
              alt="Architectural Pattern" 
              loading="lazy"
            />
          </div>

          {/* Column 3 */}
          <div className="about-text">
            <p>
              Sky Marq offers you luxe residences in the city of Hyderabad like never before. With 664 premium flats entirely measuring an expansive 3999, 4999 and 5454 square feet aligned in 45 levels, living here is akin to experience sheer domination!
            </p>
            <p>
              Being an architectural landmark, Sky Marq is well-poised to create a strong statement along the horizons of Hyderabad. An elegant restricted community, it focuses on custom details while offering unencumbered views.
            </p>

            <div className="rera-badge-box">
              <p style={{ fontSize: '15px', color: '#111111', marginBottom: '6px' }}>
                <strong>RERA NO. — </strong> 
                <span style={{ color: '#be9600', fontWeight: '700' }}>P02400005887</span>
              </p>
              <a 
                href="https://rera.telangana.gov.in/" 
                target="_blank" 
                rel="noreferrer"
                style={{ fontSize: '14px', color: '#333333', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <strong>Approved By — </strong>
                <span style={{ color: '#be9600', textDecoration: 'underline' }}>www.rera.telangana.gov.in</span>
                <i className="bi bi-box-arrow-up-right" style={{ fontSize: '12px', color: '#be9600' }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
