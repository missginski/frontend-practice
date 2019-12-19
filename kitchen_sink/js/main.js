const button = $('.toggle-nav');
const nav = $('nav');

function toggleNav() {
  button.toggleClass('close-nav');
  nav.toggleClass('active');
};

button.on('click', toggleNav);
