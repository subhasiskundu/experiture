$(function () {        
  
      /* =========================================
          COUNTDOWN
       ========================================= */
      $('#clock-b').countdown('2021/1/1').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<div class="holder m-2"><span class="h4 font-weight-normal mb-0">%D</span> day%!d</div>'
          + '<div class="holder m-2"><span class="h4 font-weight-normal mb-0">%H</span> hour</div>'
          + '<div class="holder m-2"><span class="h4 font-weight-normal mb-0">%M</span> min</div>'
          + '<div class="holder m-2"><span class="h4 font-weight-normal mb-0">%S</span> sec</div>'));
      }); 
      
  });