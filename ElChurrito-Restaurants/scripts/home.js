window.onload = pageReady;
//Create page load function


function pageReady() {


    // Variables

    //Image Change Variables                                                            
    var feast = document.getElementById("foodBowl");
    var bottleCheers = document.getElementById("cheers");
    var chickenMeal = document.getElementById("chicken");
    var serveBread = document.getElementById("serve");

    //Timer Variables
    var days = document.getElementById("daysOut");
    var hours = document.getElementById("hoursOut");
    var minutes = document.getElementById("minsOut");
    var seconds = document.getElementById("secsOut");
    var timeVar = new Date("August 10, 2021 00:00:00").getTime();


    // Listeners
    //Images .onmouseover Listeners
    feast.onmouseover = switchPic1
    bottleCheers.onmouseover = switchPic2
    feast.onmouseout = resetPic1
    bottleCheers.onmouseout = resetPic2

    //Timer Start .onoad Listener
    window.onload = timer

    // Functions
    //Image Change Functions  
    function switchPic1() {
        feast.src = chickenMeal.src;
    }

    function switchPic2() {
        bottleCheers.src = serveBread.src;
    }
    function resetPic1() {
        feast.src = "./images/pexels-carlos-damian-4724380.jpg";
    }
    function resetPic2() {
        bottleCheers.src = "./images/pexels-rodnae-productions-5738198.jpg";
    }

    //Timer function
    var timer = setInterval(function () {
        var now = new Date();
        var nowTime = new Date().getTime();
        var untilPromo = timeVar - nowTime;
        var dayDiff = untilPromo / 86400000
        var hourDiff = now.getHours();
        var minsDiff = now.getMinutes();
        var secDiff = now.getSeconds();
        var fullDays = Math.floor(dayDiff);
        var fullHours = Math.floor((hourDiff - 24) * -1);
        var fullMin = Math.floor((minsDiff - 60) * -1);
        var fullsec = Math.floor((secDiff - 60) * -1);
        days.innerHTML = fullDays + ":";
        hours.innerHTML = fullHours + ":";
        minutes.innerHTML = fullMin + ":";
        seconds.innerHTML = fullsec
    }, 1000);

    // JQuery
    //Jquery for Sliding Links
    jQuery(document).ready(function () {
        $("#section2 .orangeLinks").hide();
        $(".clickMe").click(
            function () {
                $("#section2 .orangeLinks").hide();
                $(this).next("#section2 .orangeLinks").slideToggle('300');
            });
        $("#section3 .orangeLinks").hide();
        $(".clickMe").click(
            function () {
                $("#section3 .orangeLinks").hide();
                $(this).next("#section3 .orangeLinks").slideToggle('300');
            });
    });
};