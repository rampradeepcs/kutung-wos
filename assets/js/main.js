$(document).ready(function() {
    
    $(".menu-icon").on("click", function() {
        if($(".menu").hasClass("slideIn") == false) {
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

    $(".contact-submit-btn").on("click", function(e) {
        e.preventDefault();
        let inputs = $("#contact-form").find(".form-control");
        
        inputs.each((key, obj) => {
            let input = document.getElementById($(obj).attr("id"));
            if($(obj).attr("required") == 'required' && $(obj).val() == '' && !input.checkValidity()) {
                $(obj).parent(".form-group").addClass("has-error");
            } else {
                $(obj).parent(".form-group").removeClass("has-error");
            }
            if($(obj).attr("id") == 'email') {
                let ptrn = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
                if(ptrn.test(input.value)) {
                    $(obj).parent(".form-group").removeClass("has-error");
                } else {
                    $(obj).parent(".form-group").addClass("has-error");
                }
            }
            if($(obj).attr("id") == 'contact') {
                let num = /^\d{10}$/;
                if(num.test(input.value)) {
                    $(obj).parent(".form-group").removeClass("has-error");
                } else {
                    $(obj).parent(".form-group").addClass("has-error");
                }
            }
        });
    });

    $("#contact").on("keydown", function(e) {
        let val = $(this).val();
        val.replace(/^\d{10}$/, "");
        if ((e.which < 48 || e.which > 57)) {
            e.preventDefault();
        }
    });

    $(".cus-select input").on("click", function() {
        
    });
});

$(window).on("scroll", function() {
    if($(this).scrollTop() > 100) {
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
    }
});