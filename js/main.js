
// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('hidden')) {
      navMenu.classList.remove('hidden');
      navMenu.classList.add('flex', 'flex-col', 'mt-3');
    } else {
      navMenu.classList.add('hidden');
      navMenu.classList.remove('flex', 'flex-col', 'mt-3');
    }
  });
}
