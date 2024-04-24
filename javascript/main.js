const toggleButton = document.getElementById('darkModeToggle');
  toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  });
  
const menuMobileToggle = document.querySelector('#menu-mobile-toggle');
const menuMobile = document.querySelector('menu-mobile');

menuMobileToggle.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
});