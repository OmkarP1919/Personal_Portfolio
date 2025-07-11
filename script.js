
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


 


  const MIN_LOAD_TIME = 4000; // 4 seconds
  const preloader = document.getElementById('preloader');
  const startTime = Date.now();

  let pageLoaded = false;
  let timeElapsed = false;

  // Function to hide preloader when both conditions are met
  function tryHidePreloader() {
    if (pageLoaded && timeElapsed) {
      preloader.classList.add('fade-out');
    }
  }

  // Mark page load complete
  window.addEventListener('load', function() {
    pageLoaded = true;
    tryHidePreloader();
  });

  // Set timer for minimum loading time
  setTimeout(() => {
    timeElapsed = true;
    tryHidePreloader();
  }, MIN_LOAD_TIME);





