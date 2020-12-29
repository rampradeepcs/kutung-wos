function makeTimer() {

//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date("1 January 2021 10:00:00 GMT+01:00");			
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
        $("#minutes").html("<h4 class='m-0 mb-3 common-head'>"+minutes+"</h4><span>Minutes</span>");
        $("#seconds").html("<h4 class='m-0 mb-3 common-head'>"+seconds+"</h4><span>Seconds</span>");		

}

setInterval(function() { makeTimer(); }, 1000);