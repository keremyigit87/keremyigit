var scene = document.getElementsByClassName("js-scene")[0];
// var parallax = new Parallax(scene);

var goToHome = document.getElementsByClassName("sign-logo-wrapper")[0];
var headerToHome = document.getElementById("headerToHome");
var headerToWorks = document.getElementById("headerToWorks");
var headerToService = document.getElementById("headerToService");
var headerToAbout = document.getElementById("headerToAbout");
var HamburgerTrigger = document.getElementById("nav-container");
var trlTrigger = document.getElementsByClassName("trl")[0];

var goToSectionTwo = document.getElementById('goSectionTwo');
var goToSectionThree = document.getElementById('goSectionThree');
var goToSectionFour = document.getElementById('goSectionFour');

var sectionOne = document.getElementsByClassName('how-section-1')[0];
var sectionTwo = document.getElementsByClassName('how-section-2')[0];
var sectionThree = document.getElementsByClassName('how-section-3')[0];
var sectionFour = document.getElementsByClassName('how-section-4')[0];
var goToDaas = document.getElementById('goToDaas');

var body = document.getElementsByTagName("body")[0];
openAbout();

function openAbout() {
  body.classList.add("show");
  TweenMax.from(".sign-logo-wrapper", 1, {
    width: "0px",
    ease: Power2.easeInOut
  });
  TweenMax.from(".ky-my", 1, {
    opacity: 0,
    y: 100,
    delay: 0.5,
    ease: Power2.easeInOut
  });

  TweenMax.from(".skill-h2", 1, {
    x: 100,
    delay: 0.8,
    opacity: 0,
    ease: Power2.easeInOut
  });

  TweenMax.staggerFrom(
    "#about .about-container ul.firstList li",
    1,
    {
      opacity: 0,
      y: 200,
      delay: 0.7,
      ease: Power2.easeInOut
    },
    0.1
  );
  TweenMax.from(".hamburger-menu", 1, {
    opacity: 0,
    delay: 1.2,
    ease: Power2.easeInOut
  });
  TweenMax.staggerFrom(
    ".hamburger-menu span",
    1,
    {
      opacity: 0,
      x: 100,
      delay: 1.2,
      ease: Power2.easeInOut
    },
    0.2
  );
}

goToHome.addEventListener("click", function() {
  body.classList.remove("open-menu");
  setTimeout(function() {
    TweenMax.to(".page-transition-black", 1, {
      transform: "translateX(100%)",
      ease: Power2.easeInOut
    });
    TweenMax.to(".page-transition-white", 0.8, {
      transform: "translateX(0)",
      ease: Power2.easeInOut,
      delay:0.1
    });
    TweenMax.to(".page-transition-black-2", 1, {
      transform: "translateX(0)",
      ease: Power2.easeInOut,
      delay:0.2
    });
     setTimeout(function() {
       window.location.pathname = '/';
     }, 1200);
  }, 500);
});
headerToHome.addEventListener("click", function() {
  body.classList.remove("open-menu");
  setTimeout(function() {
    TweenMax.to(".page-transition-black", 1, {
      transform: "translateX(100%)",
      ease: Power2.easeInOut
    });
    TweenMax.to(".page-transition-white", 0.8, {
      transform: "translateX(0)",
      ease: Power2.easeInOut,
      delay:0.1
    });
    TweenMax.to(".page-transition-black-2", 1, {
      transform: "translateX(0)",
      ease: Power2.easeInOut,
      delay:0.2
    });
     setTimeout(function() {
       window.location.pathname = '/';
     }, 1200);
  }, 500);
});
headerToAbout.addEventListener("click", function() {
  body.classList.remove("open-menu");
  HamburgerTrigger.classList.remove("pushed");
  setTimeout(function(){
    TweenMax.to(".page-transition-black", 1, {
      transform: "translateX(100%)",
      ease: Power2.easeInOut
    });
    TweenMax.to(".page-transition-white", 0.8, {
      transform: "translateX(0)",
      ease: Power2.easeInOut,
      delay:0.1
    });
     setTimeout(function() {
       window.location.pathname = '/about';
     }, 1200);
  },400);
});

headerToBlog.addEventListener("click", function() {
  body.classList.remove("open-menu");
  HamburgerTrigger.classList.remove("pushed");
  setTimeout(function() {
    TweenMax.to(".page-transition-black", 1, {
      transform: "translateX(100%)",
      ease: Power2.easeInOut
    });
    TweenMax.to(".page-transition-white", 0.8, {
      transform: "translateX(0)",
      ease: Power2.easeInOut,
      delay:0.1
    });
    TweenMax.to(".page-transition-black-2", 1, {
      transform: "translateX(0)",
      ease: Power2.easeInOut,
      delay:0.2
    });
     setTimeout(function() {
       window.location.pathname = '/';
     }, 1200);
  }, 500);
});

goToHome.addEventListener("mouseenter", function() {
  TweenMax.to(goToHome, 1, {
    scale: 1.3
  });
});
goToHome.addEventListener("mouseleave", function() {
  TweenMax.to(goToHome, 1, {
    scale: 1
  });
});

HamburgerTrigger.addEventListener("click", function() {
  body.classList.toggle("open-menu");
  HamburgerTrigger.classList.toggle("pushed");
});

headerToService.addEventListener('click', function(){
  HamburgerTrigger.classList.remove('pushed');
  body.classList.remove('open-menu');
});

headerToWork.addEventListener("click", function() {
  body.classList.remove("open-menu");
  setTimeout(function() {
    TweenMax.to(".page-transition-black", 1, {
      transform: "translateX(100%)",
      ease: Power2.easeInOut
    });
    TweenMax.to(".page-transition-white", 1, {
      transform: "translateX(0)",
      ease: Power2.easeInOut,
      delay:0.1
    });
     setTimeout(function() {
       window.location.pathname = "/works";
     }, 1200);
  }, 500);
});


