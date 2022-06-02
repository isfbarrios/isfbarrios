$( document ).ready(function() {
    
    setInterval(loopLogo, 3000);
    //setInterval(loopArrow, 3000);

    function loopLogo() {
        $(".job-website-link").animate({right:'-140px'}).fadeOut().animate({right:'0'}).fadeIn();
    }

    function loopArrow() {
        $(".website-link").animate({right:'0'}).animate({right:'25px'});
    }

});