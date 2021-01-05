
( function($) {
    // 'use strict';
      /*-------------------------------------------------------------------------------
        Ajax Forms
      -------------------------------------------------------------------------------*/

      if ($('.js-form').length) {
          $('.js-form').each(function(){
              $(this).validate({
                  errorClass: 'error wobble-error',
                  submitHandler: function(form){
                      $.ajax({
                          type: "POST",
                          url:"mail.php",
                          data: $(form).serialize(),
                          success: function() {
                              $('.success-message').show();
                          },
  
                          error: function(){
                              $('.error-message').show();
                          }
                      });
                  }
              });
          });
      }
  
  })(jQuery);