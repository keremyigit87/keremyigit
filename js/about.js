var scene = document.getElementsByClassName("js-scene")[0];
var parallax = new Parallax(scene);

var goToHome = document.getElementsByClassName("sign-logo-wrapper")[0];
var headerToHome = document.getElementById("headerToHome");
var headerToCase = document.getElementById("headerToCase");
var headerToAbout = document.getElementById("headerToAbout");
var hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];

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
    "#about .about-container ul li",
    1,
    {
      opacity: 0,
      y: 200,
      delay: 1.1,
      ease: Power2.easeInOut
    },
    0.2
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
  TweenMax.to(".page-transition-black", 1, {
    transform: "translateX(0)",
    ease: Power2.easeInOut
  });
  setTimeout(function() {
    window.location.pathname = "/";
  }, 1200);
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
// Case study sayfasına geçiş stransition'ı js
/*headerToCase.addEventListener("click", function() {
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
      window.location.pathname = "/case-studies";
    }, 1200);
  }, 500);
});*/
headerToAbout.addEventListener("click", function() {
  body.classList.remove("open-menu");
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

var menuTrigger = document.getElementsByClassName("h-menu")[0];

menuTrigger.addEventListener("click", function() {
  body.classList.toggle("open-menu");
  if (body.classList.contains("open-menu")) {
    document.getElementsByTagName("span")[0].innerHTML = "close";
  } else {
    document.getElementsByTagName("span")[0].innerHTML = "menu";
  }
});
