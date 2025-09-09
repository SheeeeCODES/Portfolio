document.addEventListener('DOMContentLoaded', function() {
   
    // MODIFIED: Replaced custom typing effect with typed.js for typewriter animation with cursor
    const multipleTextElement = document.querySelector('.multiple-text');
    if (multipleTextElement) {
        new Typed('.multiple-text', {
            strings: [
                'Diploma Gold Medalist',
                'Computer Science Undergrad',
                'IEEE Researcher',
                'Data Analyst',
                'Deep Learning Enthusiast',
                'Frontend Developer',
                'UI-UX Designer',
                'Gaming Assets Design Freelancer'
            ],
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 1000,
            loop: true,
            showCursor: true, // Enables the blinking cursor
            cursorChar: '|', // Custom cursor character
            autoInsertCss: true // Automatically inserts cursor CSS
        });
    }

   // Mobile menu toggle
   const menuIcon = document.getElementById('menu-icon');
   const navbar = document.querySelector('.navbar');

   // Close menu when clicking outside of it
   document.addEventListener('click', (e) => {
       const isClickInsideNavbar = navbar.contains(e.target);
       const isClickOnMenuIcon = menuIcon.contains(e.target);

       if (!isClickInsideNavbar && !isClickOnMenuIcon) {
           navbar.classList.remove('active');
       }
   });

   if (menuIcon && navbar) {
       menuIcon.addEventListener('click', () => {
           navbar.classList.toggle('active');
       });
   }

   // MODIFIED: Enhanced smooth scrolling for navigation links with header offset
   const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
   navLinks.forEach(link => {
       link.addEventListener('click', (e) => {
           e.preventDefault();
           const targetId = link.getAttribute('href');
           const targetSection = document.querySelector(targetId);
           if (targetSection) {
               // Calculate offset for fixed header
               const header = document.querySelector('.header');
               const headerHeight = header.offsetHeight;
               const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20; // Extra 20px for padding
               
               window.scrollTo({
                   top: targetPosition,
                   behavior: 'smooth'
               });
               // Close mobile menu if open
               navbar.classList.remove('active');
           }
       });
   });

   // Initialize EmailJS
   emailjs.init("lss7-MS9NT2DkEUvX");

   const contactForm = document.getElementById('contact-form');
   if (contactForm) {
       contactForm.addEventListener('submit', function (e) {
           e.preventDefault();

           emailjs.sendForm('service_zzfows5', 'template_pds0fra', this)
               .then(() => {
                   document.getElementById('contact-message').textContent = 'Message sent successfully!';
                   document.getElementById('contact-message').style.color = 'var(--main-color)';
                   contactForm.reset();

                   setTimeout(() => {
                       document.getElementById('contact-message').textContent = '';
                   }, 4000);
               }, (error) => {
                   document.getElementById('contact-message').textContent = 'Message failed. Please try again!';
                   document.getElementById('contact-message').style.color = 'red';
               });
       });
   }

   // Active navigation highlight
   const sections = document.querySelectorAll('section');
   const navLinksList = document.querySelectorAll('.navbar a');

   window.addEventListener('scroll', () => {
       let current = '';
       sections.forEach(section => {
           const sectionTop = section.offsetTop;
           const sectionHeight = section.clientHeight;
           if (pageYOffset >= sectionTop - 150) {
               current = section.getAttribute('id');
           }
       });

       navLinksList.forEach(link => {
           link.classList.remove('active');
           if (link.getAttribute('href').includes(current)) {
               link.classList.add('active');
           }
       });
   });

   // Header background on scroll
   const header = document.querySelector('.header');
   window.addEventListener('scroll', () => {
       if (window.scrollY > 100) {
           header.style.background = 'rgba(0, 0, 0, 0.9)';
       } else {
           header.style.background = 'transparent';
       }
   });

   // Image hover effects
   const images = document.querySelectorAll('.image-grid img, .certification-card img');
   images.forEach(img => {
       img.addEventListener('mouseenter', () => {
           img.style.filter = 'brightness(1.1)';
       });
       
       img.addEventListener('mouseleave', () => {
           img.style.filter = 'brightness(1)';
       });
   });

   // MODIFIED: Enhanced ScrollReveal animations for all sections
   ScrollReveal({
       distance: '80px',
       duration: 2000,
       delay: 200
   });

   // Enhanced animations for all sections
   ScrollReveal().reveal('.home-content, .heading', { origin: 'top', interval: 100 });
   ScrollReveal().reveal('.section-title', { origin: 'left', interval: 400 });
   ScrollReveal().reveal('.home-img', { origin: 'bottom', interval: 100 });
   ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left', interval: 100 });
   ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right', interval: 100 });

   // My Journey section animations
   ScrollReveal().reveal('.education-section', { origin: 'bottom', delay: 200 });
   ScrollReveal().reveal('.education-card', { origin: 'bottom', interval: 100 });
   ScrollReveal().reveal('.skills-section', { origin: 'bottom', delay: 200 });
   ScrollReveal().reveal('.skill-card', { origin: 'bottom', interval: 100 });
   ScrollReveal().reveal('.achievements-section', { origin: 'bottom', delay: 200 });
   ScrollReveal().reveal('.achievements-container', { origin: 'bottom', interval: 100 });
   ScrollReveal().reveal('.certifications-section', { origin: 'bottom', delay: 200 });
   ScrollReveal().reveal('.certification-card', { origin: 'bottom', interval: 100 });
   ScrollReveal().reveal('.research-section', { origin: 'bottom', delay: 200 });
   ScrollReveal().reveal('.research-paper', { origin: 'bottom', interval: 100 });
   ScrollReveal().reveal('.projects-section', { origin: 'bottom', delay: 200 }); // Added for projects
   ScrollReveal().reveal('.project-card', { origin: 'bottom', interval: 100 }); // Added for projects

   // My Interests section animations
   ScrollReveal().reveal('.interest-description', { origin: 'bottom', delay: 200 });
   ScrollReveal().reveal('.interest-columns', { origin: 'bottom', interval: 100 });

   // Contact section animations
   ScrollReveal().reveal('.contact-container', { origin: 'bottom', delay: 200 });

   // Add loading animation
   window.addEventListener('load', () => {
       document.body.style.opacity = '1';
   });

   // Utility function for smooth animations
   function animateOnScroll() {
       const elements = document.querySelectorAll('[data-animate]');
       elements.forEach(element => {
           const elementTop = element.getBoundingClientRect().top;
           const windowHeight = window.innerHeight;
           
           if (elementTop < windowHeight - 100) {
               element.classList.add('animate');
           }
       });
   }

   // Debounce function for performance
   function debounce(func, wait) {
       let timeout;
       return function executedFunction(...args) {
           const later = () => {
               clearTimeout(timeout);
               func(...args);
           };
           clearTimeout(timeout);
           timeout = setTimeout(later, wait);
       };
   }

   // Apply debounced scroll listener
   window.addEventListener('scroll', debounce(animateOnScroll, 10));

   // Initialize preloading
   preloadImages();

   // Add CSS for initial body opacity
   document.body.style.opacity = '0';
   document.body.style.transition = 'opacity 0.3s ease-in-out';

});

