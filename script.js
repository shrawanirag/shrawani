document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll(
      '.fade-in, .slide-in-left, .slide-in-right, .slide-up, .zoom-in, .bounce-in'
    );
  
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          el.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
  });
  