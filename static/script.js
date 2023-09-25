$(document).ready(function() {
   
          $(window).scroll(function() {
            if($(this).scrollTop() > 75 ) {
              $('header').addClass('sticky');
              
            } else {
              $('header').removeClass('sticky');
              
            }
          });


          $('.card .btn').on('click', function() {
            // Toggle paragraph
            $(this).siblings('p.more').fadeToggle(500);
          
            // Toggle both buttons
            $(this).parent().find('.btn').toggle();
          });
          

        
          
            if(localStorage.getItem('color') == 'dark') {
              
              document.getElementById('theme').setAttribute('href', 'static/darkmode.css');
              $('html').addClass('dark');
              $('contact-form-container').addClass('dark')
            } else {
              document.getElementById('theme').setAttribute('href', 'static/lightmode.css');
            }

            $('.logo').click(function() {
              $('html').toggleClass('dark');
              
              if($('html').hasClass('dark')) {
                document.getElementById('theme').setAttribute('href', "static/darkmode.css")
                localStorage.setItem('color', 'dark');
                      
              } else {
                document.getElementById('theme').setAttribute('href', "static/lightmode.css")
                localStorage.setItem('color', 'light');
                
              }
          });

          $('.open').click(function() {
            $('body').toggleClass('slide');
            if($('body').hasClass('slide')) {
              $('aside').addClass('show');
              
            } else {
              $('aside').removeClass('show');
              
            }
          });

         


      });


