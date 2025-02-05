// Star Field
function createStarField() {
  const starField = document.querySelector('.star-field');
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 3 + 1;
    star.className = 'absolute animate-twinkle';
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.background = 'radial-gradient(circle, rgba(255,223,186,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)';
    star.style.boxShadow = '0 0 4px rgba(255, 223, 186, 0.8)';
    star.style.borderRadius = '50%';
    starField.appendChild(star);
  }
}

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const button = item.querySelector('button');
  const content = item.querySelector('.faq-content');
  
  button.addEventListener('click', () => {
    const isOpen = content.classList.contains('show');
    content.classList.toggle('show');
    button.querySelector('.icon').textContent = isOpen ? '+' : '−';
  });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  createStarField();
});