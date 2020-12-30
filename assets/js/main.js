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
});