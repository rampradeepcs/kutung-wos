$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    if ($(".menu").hasClass("slideIn") == false) {
      $(".menu").addClass("slideIn");
      setTimeout(function () {
        $(".menu-icon").addClass("open");
      }, 300);
    } else {
      $(".menu").removeClass("slideIn");
      setTimeout(function () {
        $(".menu-icon").removeClass("open");
      }, 300);
    }
  });

  // var validateForm = function() {
  //     let inputs = $("#contact-form").find(".form-control");

  //     inputs.each((key, obj) => {
  //         let input = document.getElementById($(obj).attr("id"));

  //         if($(obj).attr("required") == 'required' && $(obj).val() == '' && !input.checkValidity()) {
  //             $(obj).parent(".form-group").addClass("has-error");
  //         } else {
  //             $(obj).parent(".form-group").removeClass("has-error");
  //         }

  //         if($(obj).attr("id") == 'email') {
  //             let ptrn = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  //             if(ptrn.test(input.value)) {
  //                 $(obj).parent(".form-group").removeClass("has-error");
  //             } else {
  //                 $(obj).parent(".form-group").addClass("has-error");
  //             }
  //         }
  //         if($(obj).attr("id") == 'contact') {
  //             let num = /^\d{10}$/;
  //             if(num.test(input.value)) {
  //                 $(obj).parent(".form-group").removeClass("has-error");
  //             } else {
  //                 $(obj).parent(".form-group").addClass("has-error");
  //             }
  //         }
  //     });
  // };

  // $(".contact-submit-btn").on("click", function(e) {
  //     e.preventDefault();
  //     validateForm();
  // });

  // $(".contact-submit-btn:last-child").on("click", function() {
  //     e.preventDefault();
  //     let inputs = $("#contact-form").find(".form-control");

  //     inputs.each((key, obj) => {
  //         $(obj).val('');
  //     });
  // });

  $("#contact").on("keydown", function (e) {
    if (
      $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
      // Allow: Ctrl+A, Command+A
      (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right, down, up
      (e.keyCode >= 35 && e.keyCode <= 40)
    ) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  });

  $(".cus-select input").on("click", function () {
    if ($(this).siblings("ul").hasClass("enable") == false)
      $(this).siblings("ul").addClass("enable");
    else $(this).siblings("ul").removeClass("enable");
  });

  $(document).on("click", function () {
    let a = $(this)[0].activeElement;
    if ($(a).hasClass("custom-select-value") == false)
      $(".custom-select-options").removeClass("enable");
  });
  $(".custom-select-options li").on("click", function () {
    $(this).parent("ul").siblings("input").val($(this).text());
    $(this).parent("ul").removeClass("enable");
  });

  $(".checkbox-wrapper")
    .find("input")
    .on("change", function () {
      $(".form-tab").hide();
      $("#" + $(this).val()).addClass("active");
      $(".form-group").removeClass("has-error");
      $(".has-error").remove();
      $(".validation-error").remove();
      $("#name-error").remove();
      $("#email-error").remove();
      $("#phone-error").remove();

      $("#" + $(this).val()).show();
    });
});

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 50) {
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("scrolled");
  }
});
