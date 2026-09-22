import React from 'react';
import { videosList } from '../data/siteData';

export default function VideoSection({ onPlayVideo }) {
  return (
    <section id="testimonial" className="testimonial-section">
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 20px' }}>
        <div className="section-header text-center has_line">
          <h2 className="main_heading">TESTIMONIAL & VIDEO TOURS</h2>
          <p style={{ maxWidth: '780px', margin: '15px auto 0', color: '#444444', fontSize: '15px', lineHeight: '1.8' }}>
            With dedication and creative development in our roots, we build trustworthy relationships through unmatched living experiences. Photos might tell a story, but walkthroughs manifest the real grandeur. Fasten your seat belts to begin the journey you have been admiring for ages.
          </p>
        </div>

        <div className="video-grid">
          {videosList.map((video) => (
            <div 
              key={video.id} 
              className="video-card"
              onClick={() => onPlayVideo(video.id, video.title)}
            >
              <img 
                src={`/assets/youtube/${video.id}.jpg`} 
                alt={video.title} 
                loading="lazy" 
              />
              <div className="video-play-btn">
                <i className="bi bi-play-fill" style={{ marginLeft: '4px' }}></i>
              </div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                padding: '12px 14px',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: '600'
              }}>
                {video.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
