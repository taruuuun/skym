import React, { useState } from 'react';

export default function Modals({ 
  modalType, // null, 'enquiry', 'visit', 'brochure', 'video', 'lightbox'
  modalData, // extra data like { title, videoId, imgSrc, caption }
  onClose 
}) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!modalType) return null;

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // If brochure modal, auto trigger download of SkyMarq-e-Brochure.pdf
    if (modalType === 'brochure') {
      const link = document.createElement('a');
      link.href = '/SkyMarq-e-Brochure.pdf';
      link.download = 'SkyMarq-e-Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    setTimeout(() => {
      setSubmitted(false);
      alert(
        modalType === 'brochure' 
          ? "Thank you! Your brochure download has started. Our team will also send the digital lookbook to your phone."
          : modalType === 'visit'
          ? "Thank you! Your private site visit request has been logged. Our concierge will confirm your schedule."
          : "Thank you for contacting DSR Skymarq. Our luxury property advisor will connect with you shortly."
      );
      onClose();
    }, 1200);
  };

  return (
    <div className="custom-modal-backdrop" onClick={onClose}>
      {/* 1. Lightbox Image Viewer */}
      {modalType === 'lightbox' && (
        <div 
          className="custom-modal-wrapper lightbox-modal-wrapper"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="custom-modal-close" onClick={onClose}>&times;</button>
          <div style={{ background: '#000000', borderRadius: '12px', overflow: 'hidden', padding: '10px', textAlign: 'center' }}>
            <img 
              src={modalData?.imgSrc} 
              alt={modalData?.caption || "Full Size View"} 
              style={{ maxHeight: '80vh', maxWidth: '100%', margin: '0 auto', objectFit: 'contain', borderRadius: '8px' }} 
            />
            {modalData?.caption && (
              <p style={{ color: '#e5be47', marginTop: '12px', fontSize: '15px', fontWeight: '600' }}>
                {modalData.caption}
              </p>
            )}
          </div>
        </div>
      )}

      {/* 2. YouTube Video Modal */}
      {modalType === 'video' && (
        <div 
          className="custom-modal-wrapper video-modal-wrapper"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="custom-modal-close" onClick={onClose}>&times;</button>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', background: '#000000' }}>
            <iframe 
              src={`https://www.youtube.com/embed/${modalData?.videoId}?autoplay=1`}
              title={modalData?.title || "Video Walkthrough"}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* 3. Lead Capture Modals (Enquiry, Site Visit, Brochure) */}
      {(modalType === 'enquiry' || modalType === 'visit' || modalType === 'brochure') && (
        <div 
          className="custom-modal-wrapper"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content skymarq-modal-content">
            <div className="modal-header skymarq-modal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 className="modal-title">
                <i className="bi bi-info-circle-fill me-2" style={{ color: '#be9600' }}></i>
                {modalType === 'brochure' 
                  ? 'Download e-Brochure' 
                  : modalType === 'visit' 
                  ? 'Schedule Private Site Visit' 
                  : 'Enquire Now'}
              </h2>
              <button 
                type="button" 
                className="btn-close" 
                onClick={onClose} 
                style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}
              >
                &times;
              </button>
            </div>

            <div className="modal-body skymarq-modal-body">
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', marginBottom: '20px' }}>
                {modalType === 'brochure'
                  ? 'Enter your details below to receive the complete 18MB architectural brochure with layouts & pricing.'
                  : 'Experience luxury living firsthand. Our sales advisors will coordinate an exclusive site tour.'}
              </p>

              <form onSubmit={handleLeadSubmit}>
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

                {modalType === 'visit' && (
                  <div className="skymarq-input-group">
                    <i className="bi bi-calendar-event-fill skymarq-field-icon"></i>
                    <input 
                      type="date" 
                      className="skymarq-form-control" 
                      required 
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                )}

                <button type="submit" className="skymarq-btn-gold">
                  {submitted 
                    ? 'Processing...' 
                    : modalType === 'brochure' 
                    ? 'Download Now' 
                    : modalType === 'visit'
                    ? 'Confirm Site Visit'
                    : 'Submit Request'} 
                  <i className="bi bi-arrow-right-short"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
