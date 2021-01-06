
( function($) {
    // 'use strict';
      /*-------------------------------------------------------------------------------
        Ajax Forms
      -------------------------------------------------------------------------------*/

    //   if ($('.js-form').length) {
    //       $('.js-form').each(function(){
    //           $(this).validate({
    //               errorClass: 'error',
    //               submitHandler: function(form){
    //                   $.ajax({
    //                       type: "POST",
    //                       url:"mail.php",
    //                       data: $(form).serialize(),
    //                       success: function() {
    //                           $('.success-message').show();
    //                       },
  
    //                       error: function(){
    //                           console.log("error");
    //                           $('.error-message').show();
    //                       }
    //                   });
    //               }
    //           });
    //       });
    //   }

    $("#contact-form").validate({
        errorClass: 'has-error',
        errorElement: 'span',
        highlight: function(element, errorClass, validClass) {
            $(element).parents("div.form-group").addClass(errorClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".has-error").removeClass(errorClass);
        },
        submitHandler: function(form){
            $.ajax({
                type: "POST",
                url:"mail.php",
                data: $(form).serialize(),
                success: function() {
                    $('.success-message').show();
                },

                error: function(){
                    console.log("error");
                    $('.error-message').show();
                }
            });
        }
    });
  
  })(jQuery);