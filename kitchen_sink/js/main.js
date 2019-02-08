let button = $('.toggle-nav');

button.on('click', function() {
  $('nav').toggleClass('active');
  $('.toggle-nav').toggleClass('close-nav')
})
