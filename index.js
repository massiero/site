document.addEventListener('DOMContentLoaded', () => {
  const sections = {
    home: document.getElementById('section-home'),
    sobre: document.getElementById('section-sobre'),
    empresa: document.getElementById('section-empresa'),
    contato: document.getElementById('section-contato')
  };

  const navLinks = document.querySelectorAll('.nav-link, .btn-section, .footer-btn');

  function showSection(sectionId) {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

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

  // Handle initial hash in URL
  const initialHash = window.location.hash.substring(1);
  if (sections[initialHash]) {
    showSection(initialHash);
  } else {
    showSection('home');
  }

  // Contact Form Handling (Mock)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const successMsg = document.getElementById('contact-success');
      const errorMsg = document.getElementById('contact-error');
      
      // Simulate loading
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      submitBtn.innerText = 'Enviando...';
      submitBtn.disabled = true;

      // In a real scenario, we'd fetch the API. 
      // For GitHub Pages, we might want to redirect to a form handler service 
      // or just show a message.
      setTimeout(() => {
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        successMsg.style.display = 'block';
        contactForm.reset();
        
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 5000);
      }, 1500);
    });
  }
});
