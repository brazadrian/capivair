jQuery(function($) {
        var pop = $('.map-popup');
        pop.click(function(e) {
          e.stopPropagation();
        });
        
        $('a.marker').click(function(e) {
          e.preventDefault();
          e.stopPropagation();
          $(this).next('.map-popup').toggleClass('open');
          $(this).parent().siblings().children('.map-popup').removeClass('open');
        });
        
        $(document).click(function() {
          pop.removeClass('open');
        });
        
        pop.each(function() {
          var w = $(window).outerWidth(),
              edge = Math.round( ($(this).offset().left) + ($(this).outerWidth()) );
          if( w < edge ) {
            $(this).addClass('edge');
          }
        });
      });