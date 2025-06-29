// // Floating Particles
// function createParticles() {
//   const particlesContainer = document.getElementById('particles');
//   const particleCount = 50;

//   for (let i = 0; i < particleCount; i++) {
//     const particle = document.createElement('div');
//     particle.className = 'particle';
//     particle.style.left = Math.random() * 100 + '%';
//     particle.style.animationDelay = Math.random() * 20 + 's';
//     particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
//     particlesContainer.appendChild(particle);
//   }
// }

// // Scroll Indicator
// function updateScrollIndicator() {
//   const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   const scrolled = (winScroll / height) * 100;
//   document.getElementById('scrollIndicator').style.transform = `scaleX(${scrolled / 100})`;
// }

// // Mobile Menu
// const hamburger = document.getElementById('hamburger');
// const mobileMenu = document.getElementById('mobile-menu');
// const closeMenu = document.getElementById('close-menu');

// hamburger.addEventListener('click', () => {
//   mobileMenu.classList.remove('mobile-menu-closed');
//   mobileMenu.classList.add('mobile-menu-open');
// });

// closeMenu.addEventListener('click', () => {
//   mobileMenu.classList.remove('mobile-menu-open');
//   mobileMenu.classList.add('mobile-menu-closed');
// });

// const mobileLinks = mobileMenu.querySelectorAll('a');
// mobileLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     mobileMenu.classList.remove('mobile-menu-open');
//     mobileMenu.classList.add('mobile-menu-closed');
//   });
// });

// // Initialize
// window.addEventListener('load', () => {
//   createParticles();
// });

// window.addEventListener('scroll', updateScrollIndicator);