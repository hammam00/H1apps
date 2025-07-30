
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains('active');
      
      // Close all other FAQs
      faqQuestions.forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('active');
      });
      
      // Open clicked FAQ if it wasn't active
      if (!isActive) {
        question.classList.add('active');
        answer.classList.add('active');
      }
    });
  });
  
  // Project Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectDetails = document.querySelectorAll('.project-detail');
  
  if (filterBtns.length && projectDetails.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        
        // Filter projects
        projectDetails.forEach(project => {
          if (filter === 'all' || project.querySelector('.category').textContent.toLowerCase().includes(filter)) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = new FormData(this);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', data);
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }
  
  // Scroll Animation
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.service-card, .value-card, .team-member, .project-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animated');
      }
    });
  };
  
  // Run once on page load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.padding = '10px 0';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.padding = '15px 0';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });
});
