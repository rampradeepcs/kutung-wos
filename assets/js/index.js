function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
        var endTime = new Date("10 January 2021 10:00:00 GMT+01:00");			
            endTime = (Date.parse(endTime) / 1000);
    
            var now = new Date();
            now = (Date.parse(now) / 1000);
    
            var timeLeft = endTime - now;
    
            var days = Math.floor(timeLeft / 86400); 
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
    
            $("#days").html("<h4 class='m-0 mb-3 common-head'>"+days+"</h4><span>Days</span>");
            $("#hours").html("<h4 class='m-0 mb-3 common-head'>"+hours+"</h4><span>Hours</span>");
            $("#minutes").html("<h4 class='m-0 mb-3 common-head'>"+minutes+"</h4><span>Mins</span>");
            $("#seconds").html("<h4 class='m-0 mb-3 common-head'>"+seconds+"</h4><span>Secs</span>");		
    
    }
    
    $(document).ready(function() {
    
        makeTimer();

        // $(".carousel").carousel({
        //     interval: false
        // });
    
        $('#bannerCarousel').on('slide.bs.carousel', function (e) {
            console.log(e.from, e.to);
            if(e.from == 0) {
                $(".banner").removeClass("has-bg");
            } else if (e.to == 0) {
                setTimeout(function() {
                    $(".banner").addClass("has-bg");
                }, 500);
            }
        });
    
        /*Media Centre Carousel*/
        var mcOwl = $('.media-centre .owl-carousel').owlCarousel({
            loop: false,
            margin: 20,
            nav: false,
            dots: false,
            autoHeight: true,
            thumbs: false,
            responsive:{
                0: {
                    items:1
                },
                767: {
                    items:2
                },
                991: {
                    items:2
                },
                1100: {
                    items:3
                },
                1400: {
                    items: 4
                }
            }
        });
    
        mcOwl.on('changed.owl.carousel', function(event) {
            var items = event.item.count;
            var item = event.item.index;
            var pages = event.page.count;
            var size = event.page.size; 
            console.log(items, item, pages, size);
            if(item < 1) {
                $(".customPrevBtn").addClass('disabled');
            } else if (item > 0) {
                $(".customPrevBtn").removeClass('disabled');
                $(".customNextBtn").removeClass('disabled');
            }
            if(items == item + size) {
                $(".customNextBtn").addClass('disabled');
            }
        });    
    
        $('.customNextBtn').click(function() {
            mcOwl.trigger('next.owl.carousel');
        });
    
        $('.customPrevBtn').click(function() {
            mcOwl.trigger('prev.owl.carousel', [300]);
        });
        /*Media Centre Carousel*/
    
        /*Recent Launch Carousel*/
        var rcoOwl = $('.recent-launch .owl-carousel');
        rcoOwl.owlCarousel({
            loop: false,
            items: 1,
            nav: true,
            dots: false,
            thumbs: true,
            thumbImage: true,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'owl-thumb-item',
            navText: ['<div class="arrow-icon"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none"><path d="M20 24L12 16L20 8" stroke="#347AF4" stroke-width="1.5"/></svg></div>', '<div class="arrow-icon"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none"><path d="M12 24L20 16L12 8" stroke="#347AF4" stroke-width="1.5"/></svg></div>']
        });
        /*Recent Launch Carousel*/

        let a = new Date();
        let b = a.getFullYear();
        $(".cpYear").text(b);
    });