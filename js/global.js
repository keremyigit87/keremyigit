document.addEventListener("DOMContentLoaded", function() {
    var body = document.getElementsByTagName("body")[0];
    var homeToAbout = document.getElementById("homeToAbout");
    var homeToBlog = document.getElementById("homeToBlog");
    var goToHome = document.getElementsByClassName("sign-logo-wrapper")[0];
    var headerToHome = document.getElementById("headerToHome");
    var headerToAbout = document.getElementById("headerToAbout");
    var HamburgerTrigger = document.getElementById("nav-container");
    var headerToBlog = document.getElementById("headerToBlog");

    if (homeToAbout) {
        homeToAbout.addEventListener("click", function() {
            pageTransition('/about/', 1200, 'black');
        });
    }

    if (homeToBlog) {
        homeToBlog.addEventListener("click", function() {
            pageTransition('/blog/', 1200, 'black');
        });
    }

    if (goToHome) {
        goToHome.addEventListener("click", function() {
            pageTransition('/', 1200, 'white');
        });
        goToHome.addEventListener("mouseenter", function() {
            TweenMax.to(goToHome, 1, { scale: 1.3 });
        });
        goToHome.addEventListener("mouseleave", function() {
            TweenMax.to(goToHome, 1, { scale: 1 });
        });
    }

    if (headerToHome) {
        headerToHome.addEventListener("click", function() {
            body.classList.remove("open-menu");
            setTimeout(function() {
                pageTransition('/', 1200, 'white');
            }, 500);
        });
    }

    if (headerToAbout) {
        headerToAbout.addEventListener("click", function() {
            body.classList.remove("open-menu");
            if(HamburgerTrigger) HamburgerTrigger.classList.remove("pushed");
            pageTransition('/about/', 1200, 'white');
        });
    }

    if(headerToBlog){
        headerToBlog.addEventListener("click", function() {
            body.classList.remove("open-menu");
            if(HamburgerTrigger) HamburgerTrigger.classList.remove("pushed");
            pageTransition('/blog/', 1200, 'white');
        });
    }

    if (HamburgerTrigger) {
        HamburgerTrigger.addEventListener("click", function() {
            body.classList.toggle("open-menu");
            HamburgerTrigger.classList.toggle("pushed");
        });
    }

    // Sticky header logic
    var mobileScreenSize = window.matchMedia("(max-width: 1200px)");
    
    function stickyFunction() {
        if (!HamburgerTrigger) return;
        var y = window.pageYOffset;
        
        var isSticky = HamburgerTrigger.classList.contains('sticky');

        if (y > 50) {
            if (!isSticky) {
                HamburgerTrigger.classList.add('sticky');
                if (mobileScreenSize.matches) {
                    TweenMax.to(".sign-logo-wrapper", 1, { x: "-20px", y: "-40px", ease: Power2.easeInOut });
                    TweenMax.to('.work-back', 1, { x: "-29px", y: "-40px", ease: Power2.easeInOut });
                    TweenMax.to("#nav-container", 1, { x: "20px", y: "-40px", ease: Power2.easeInOut, backgroundColor: '#000' });
                    TweenMax.to('.language-switch', 1, { x: "50px", y: "-40px", ease: Power2.easeInOut });
                } else {
                    TweenMax.to(".sign-logo-wrapper", 1, { x: "-100px", y: "-70px", ease: Power2.easeInOut });
                    TweenMax.to('.work-back', 1, { x: "-109px", y: "-70px", ease: Power2.easeInOut });
                    TweenMax.to("#nav-container", 1, { x: "100px", y: "-70px", ease: Power2.easeInOut, backgroundColor: '#000' });
                    TweenMax.to('.language-switch', 1, { x: "170px", y: "-70px", ease: Power2.easeInOut });
                }
            }
        } else {
            if (isSticky) {
                HamburgerTrigger.classList.remove('sticky');
                TweenMax.to(".sign-logo-wrapper", 1, { y: "0px", x: "0px", ease: Power2.easeInOut });
                TweenMax.to('.work-back', 1, { y: "0px", x: "0px", ease: Power2.easeInOut });
                TweenMax.to("#nav-container", 1, { y: "0px", x: "0px", ease: Power2.easeInOut, backgroundColor: 'transparent' });
                TweenMax.to('.language-switch', 1, { y: "0px", x: "0px", ease: Power2.easeInOut });
            }
        }
    }

    window.onscroll = stickyFunction;
});

function pageTransition(url, timeout, transitionType){
    var timeout = timeout || 1200;
    if(transitionType === 'white'){
        TweenMax.to(".page-transition-black", 1, { transform: "translateX(100%)", ease: Power2.easeInOut });
        TweenMax.to(".page-transition-white", 0.8, { transform: "translateX(0)", ease: Power2.easeInOut, delay:0.1 });
        TweenMax.to(".page-transition-black-2", 1, { transform: "translateX(0)", ease: Power2.easeInOut, delay:0.2 });
    } else {
        TweenMax.to(".page-transition-white", 1, { transform: "translateX(100%)", ease: Power2.easeInOut });
        TweenMax.to(".page-transition-black", 0.8, { transform: "translateX(0)", ease: Power2.easeInOut, delay:0.1 });
        TweenMax.to(".page-transition-white-2", 1, { transform: "translateX(0)", ease: Power2.easeInOut, delay:0.2 });
    }
    setTimeout(function() {
        window.location.href = url;
    }, timeout);
}
