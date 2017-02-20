$(document).ready(function() {
      // Show or hide the sticky footer button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('.scroll-top').fadeIn(200);
        } else {
          $('.scroll-top').fadeOut(200);
        }
      });
      
      // Animate the scroll to top
      $('.scroll-top').click(function(event) {
        event.preventDefault();        
        $('html, body').animate({scrollTop: 0}, 300);
      });

      //Initiate the quick go menu
      $('a.quick-go').click(function(){
        $(this).addClass('active');
        $('.quick-go-section').fadeIn();
      });

      $('.quick-go-section a').click(function(){
        $('.quick-go-section').hide();
        $('a.quick-go').removeClass('active')
      });

    });