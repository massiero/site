document.addEventListener('DOMContentLoaded', () => {
  const sections = {
    home: document.getElementById('section-home'),
    sobre: document.getElementById('section-sobre'),
    empresa: document.getElementById('section-empresa')
  };

  const navLinks = document.querySelectorAll('.nav-link, .btn-section, .footer-btn');

  // Scroll to Top helper
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  function showSection(sectionId) {
    scrollToTop();

    // Hide all sections
    Object.values(sections).forEach(section => {
      section.classList.remove('section-visible');
      section.classList.add('section-hidden');
    });

    // Show target section
    const targetSection = sections[sectionId];
    if (targetSection) {
      targetSection.classList.remove('section-hidden');
      targetSection.classList.add('section-visible');

      // Update browser history
      window.history.pushState({ section: sectionId }, '', `#${sectionId}`);

      // Re-trigger reveal animations for the new section
      triggerReveal();
    }
  }

  // Handle navigation clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const sectionId = link.getAttribute('data-section');
      if (sections[sectionId]) {
        e.preventDefault();
        showSection(sectionId);
      }
    });
  });

  // Handle browser back/forward
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.section) {
      showSection(e.state.section);
    } else {
      showSection('home');
    }
  });

  // Intersection Observer for Scroll Animations
  function triggerReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
      // Reset state if not already revealed in this section
      reveal.style.opacity = "0";
      reveal.style.transform = "translateY(20px)";
      observer.observe(reveal);
    });
  }

  // Handle initial hash in URL
  const initialHash = window.location.hash.substring(1);
  if (sections[initialHash]) {
    showSection(initialHash);
  } else {
    showSection('home');
  }

  // Initial trigger
  triggerReveal();
});
