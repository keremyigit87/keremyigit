var scene = document.getElementsByClassName("js-scene")[0];
var parallax = new Parallax(scene);

var goToHome = document.getElementsByClassName("sign-logo-wrapper")[0];
var headerToHome = document.getElementById("headerToHome");
var headerToWorks = document.getElementById("headerToWorks");
var headerToAbout = document.getElementById("headerToAbout");

var body = document.getElementsByTagName("body")[0];
var HamburgerTrigger = document.getElementById("nav-container");
var workCard = document.querySelectorAll(".work-card");

openWorkStudies();

function openWorkStudies() {
  body.classList.add("show");
}
goToHome.addEventListener("click", function() {
  TweenMax.to(".page-transition", 1, {
    transform: "translateX(0)",
    ease: Power2.easeInOut
  });
  setTimeout(function() {
    window.location.pathname = "/";
  }, 1200);
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

headerToHome.addEventListener("click", function() {
  body.classList.remove("open-menu");
  setTimeout(function() {
    TweenMax.to(".page-transition-black", 1, {
      transform: "translateX(0)",
      ease: Power2.easeInOut
    });
    setTimeout(function() {
      window.location.pathname = "/";
    }, 1200);
  }, 500);
});
headerToAbout.addEventListener("click", function() {
  body.classList.remove("open-menu");
  setTimeout(function() {
    TweenMax.to(".page-transition-black", 1, {
      transform: "translateX(100%)",
      ease: Power2.easeInOut
    });
    TweenMax.to(".page-transition-white", 1, {
      transform: "translateX(0)",
      ease: Power2.easeInOut
    });
    setTimeout(function() {
      window.location.pathname = "/about";
    }, 1200);
  }, 500);
});
headerToWorks.addEventListener("click", function() {
  body.classList.remove("open-menu");
  HamburgerTrigger.classList.remove("pushed");
});

for (var i = 0; i < workCard.length; i++) {
  workCard[i].addEventListener("click", function(e) {
    e.preventDefault();
    var t = this,
      href = t.href;
    TweenMax.to(".page-transition-black", 1, {
      transform: "translateX(100%)",
      ease: Power2.easeInOut
    });
    TweenMax.to(".page-transition-white", 1, {
      transform: "translateX(0%)",
      ease: Power2.easeInOut
    });
    setTimeout(function() {
      setTimeout(function() {
        window.location = href;
      }, 350);
    }, 1200);
  });
}
