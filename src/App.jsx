import React, { useEffect } from 'react';
import { pageHtml } from './data/pageHtml';

export default function App() {
  useEffect(() => {
    // 1. Initialize Hero Swiper
    let heroSwiper = null;
    let teamSwiper = null;
    let gallerySwiper = null;

    if (window.Swiper) {
      try {
        heroSwiper = new window.Swiper('.swiper_theme_slider_3', {
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      } catch (e) {
        console.warn('Hero Swiper init error:', e);
      }

      // 2. Initialize Testimonial / Video Swiper
      try {
        teamSwiper = new window.Swiper('.swiper_team', {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          preventClicks: false,
          preventClicksPropagation: false,
          touchStartPreventDefault: false,
          autoplay: {
            delay: 4500,
            disableOnInteraction: false,
          },
          breakpoints: {
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 2, spaceBetween: 24 },
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on: {
            click: function (swiper, e) {
              const target = e.target;
              const facade = target.closest('.yt-facade') || target.closest('[data-yt]') || target.closest('.team-block');
              if (facade) {
                const ytId = facade.getAttribute('data-yt') || facade.querySelector('[data-yt]')?.getAttribute('data-yt');
                if (ytId) {
                  // Replace facade element with active playing YouTube iframe inline
                  const targetFacade = facade.classList.contains('yt-facade') ? facade : facade.querySelector('.yt-facade') || facade;
                  targetFacade.innerHTML = `<iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1" style="width:100%; height:100%; min-height:280px; border:none; border-radius:8px;" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
                  
                  // Also trigger popup modal
                  const modalEl = document.getElementById('videoPopup');
                  const iframeEl = document.getElementById('ytvideo');
                  if (modalEl && iframeEl) {
                    iframeEl.src = `https://www.youtube.com/embed/${ytId}?autoplay=1`;
                    modalEl.style.display = 'flex';
                  }
                }
              }
            }
          }
        });
      } catch (e) {
        console.warn('Team Swiper init error:', e);
      }

      // Initialize Gallery Swiper
      try {
        gallerySwiper = new window.Swiper('.swiper_gallery_2', {
          slidesPerView: 1,
          centeredSlides: false,
          speed: 800,
          spaceBetween: 20,
          loop: true,
          keyboard: { enabled: true },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 24 },
            1200: { slidesPerView: 3, spaceBetween: 30 }
          }
        });
      } catch (e) {
        console.warn('Gallery Swiper init error:', e);
      }
    }

    // 3. Initialize Fancybox for Lightbox images
    if (window.jQuery && window.jQuery.fn.fancybox) {
      try {
        window.jQuery('[data-fancybox]').fancybox({
          animationEffect: 'zoom',
          transitionEffect: 'fade',
          loop: true,
        });
      } catch (e) {
        console.warn('Fancybox init error:', e);
      }
    }

    // 4. Initialize AOS Animations
    if (window.AOS) {
      try {
        window.AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
        });
      } catch (e) {
        console.warn('AOS init error:', e);
      }
    }

    // 5. Dynamic Video Popup Handler
    const handleVideoClick = (e) => {
      const playIcon = e.target.closest('.bi-play-fill') || e.target.closest('.bi-play');
      const facade = e.target.closest('.yt-facade') || e.target.closest('[data-yt]') || e.target.closest('.team-block') || (playIcon ? playIcon.closest('.swiper-slide, .team-block, .yt-facade') : null);
      const openPopupBtn = e.target.closest('#openPopup') || e.target.closest('.play_btn') || e.target.closest('.play_btns') || (playIcon ? playIcon.closest('#openPopup, .play_btn') : null);

      const modalEl = document.getElementById('videoPopup');
      const iframeEl = document.getElementById('ytvideo');

      if (facade) {
        const ytId = facade.getAttribute('data-yt') || facade.querySelector('[data-yt]')?.getAttribute('data-yt');
        if (ytId) {
          e.preventDefault();
          e.stopPropagation();

          // Inline iframe embed for instant playback in testimonial card
          const targetFacade = facade.classList.contains('yt-facade') ? facade : facade.querySelector('.yt-facade') || facade;
          if (targetFacade && !targetFacade.querySelector('iframe')) {
            targetFacade.innerHTML = `<iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1" style="width:100%; height:100%; min-height:280px; border:none; border-radius:8px;" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
          }

          // Open popup modal
          if (iframeEl && modalEl) {
            iframeEl.src = `https://www.youtube.com/embed/${ytId}?autoplay=1`;
            modalEl.style.display = 'flex';
          }
        } else if (openPopupBtn || playIcon) {
          e.preventDefault();
          e.stopPropagation();
          if (iframeEl && modalEl) {
            iframeEl.src = `https://www.youtube.com/embed/EA8l3ULSQIM?autoplay=1`;
            modalEl.style.display = 'flex';
          }
        }
      } else if (openPopupBtn || playIcon) {
        e.preventDefault();
        e.stopPropagation();
        if (iframeEl && modalEl) {
          iframeEl.src = `https://www.youtube.com/embed/EA8l3ULSQIM?autoplay=1`;
          modalEl.style.display = 'flex';
        }
      }
    };

    const handleCloseVideo = (e) => {
      const modalEl = document.getElementById('videoPopup');
      const iframeEl = document.getElementById('ytvideo');

      if (
        modalEl && (
          e.target === modalEl || 
          e.target.closest('.close') || 
          e.target.classList.contains('close') ||
          e.target.closest('.close-btn') || 
          e.target.classList.contains('close-btn')
        )
      ) {
        if (iframeEl) iframeEl.src = '';
        if (modalEl) modalEl.style.display = 'none';
      }
    };

    document.addEventListener('click', handleVideoClick);
    document.addEventListener('click', handleCloseVideo);

    // 6. Brochure Download Handler
    const handleBrochureDownload = (e) => {
      const form = e.target.closest('form');
      if (form && (form.id === 'download_brochre' || form.getAttribute('action')?.includes('crm-skymarq'))) {
        const modalParent = form.closest('#cta_download_brochure');
        if (modalParent) {
          // Trigger file download
          const link = document.createElement('a');
          link.href = '/SkyMarq-e-Brochure.pdf';
          link.download = 'SkyMarq-e-Brochure.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    };

    document.addEventListener('submit', handleBrochureDownload);

    // 7. Scroll to top button and Sticky Header
    const totopBtn = document.querySelector('.totop a');
    let lastScroll = 800;
    
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      // To top button
      const totop = document.querySelector('.totop');
      if (totop) {
        if (currentScroll > 300) {
          totop.style.display = 'block';
        } else {
          totop.style.display = 'none';
        }
      }
      
      // Sticky Header Background
      const header = document.querySelector('header');
      if (header) {
        if (currentScroll >= 50) {
          header.classList.add('bg-dark', 'sticky');
        } else {
          header.classList.remove('bg-dark', 'sticky');
        }
      }
      
      // Secondary header (header-lower-style1)
      const headerLower = document.querySelector('.header-lower-style1');
      if (headerLower) {
        if (currentScroll > 60) {
          headerLower.style.display = 'block';
        } else {
          headerLower.style.display = 'none';
        }
      }
      
      lastScroll = currentScroll;
    };

    if (totopBtn) {
      totopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    window.addEventListener('scroll', handleScroll);

    // 8. Auto-open Lead Form Popup after 3 seconds on website load
    const popupTimer = setTimeout(() => {
      const modalEl = document.getElementById('cta_onload_popup') || document.getElementById('cta_enquire');
      if (modalEl) {
        if (window.bootstrap && window.bootstrap.Modal) {
          try {
            const modalInstance = window.bootstrap.Modal.getOrCreateInstance(modalEl);
            modalInstance.show();
          } catch (e) {
            if (window.jQuery && window.jQuery.fn.modal) {
              window.jQuery(modalEl).modal('show');
            }
          }
        } else if (window.jQuery && window.jQuery.fn.modal) {
          try {
            window.jQuery(modalEl).modal('show');
          } catch (e) {
            console.warn('Modal trigger fallback:', e);
          }
        }
      }
    }, 3000);

    // Cleanup
    return () => {
      clearTimeout(popupTimer);
      try {
        if (heroSwiper && heroSwiper.destroy) heroSwiper.destroy(false, false);
        if (teamSwiper && teamSwiper.destroy) teamSwiper.destroy(false, false);
        if (gallerySwiper && gallerySwiper.destroy) gallerySwiper.destroy(false, false);
      } catch (e) {
        console.warn('Error destroying swipers:', e);
      }
      document.removeEventListener('click', handleVideoClick);
      document.removeEventListener('click', handleCloseVideo);
      document.removeEventListener('submit', handleBrochureDownload);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      id="dsr-app-wrapper"
      dangerouslySetInnerHTML={{ __html: pageHtml }}
    />
  );
}
