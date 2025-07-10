
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => 
{
        header.classList.toggle('scrolled', window.scrollY > 50);
});

const skillCards = document.querySelectorAll('.skill-card');
const observer = new IntersectionObserver(entries => 
{
    entries.forEach(entry => 
    {
      if (entry.isIntersecting) 
      {
        entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
        entry.target.classList.add('show');
      }
    });
},
{
    threshold: 0.2
});
skillCards.forEach(card =>
{
    observer.observe(card);
});