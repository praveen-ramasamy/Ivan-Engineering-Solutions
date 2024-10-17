// Show or hide the scroll button
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('#scrollTopBtn').fadeIn();
    } else {
      $('#scrollTopBtn').fadeOut();
    }
  });
  
  // Scroll smoothly to top when the button is clicked
  $('#scrollTopBtn').click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 800);
  });
  