var scene = document.getElementsByClassName("js-scene")[0];
var parallax = new Parallax(scene);

var scene2 = document.getElementsByClassName("js-scene2")[0];
var parallax2 = new Parallax(scene2);

var body = document.getElementsByTagName("body")[0];
var homeToAbout = document.getElementById("homeToAbout");
var homeToCase = document.getElementById("homeToCase");

// if (localStorage.getItem('first')) {
//     console.log('ikinci kez');
//     openHome();
// } else {
//     console.log('ilk kez');
//     localStorage.setItem('first', 'welcome');
//     openWelcome();
// }

openHome();

function openHome() {
  body.classList.add("show");
  TweenMax.from(".my-hello", 1, {
    y: -500,
    opacity: 0,
    ease: Power2.easeInOut
  });
  TweenMax.from("#home .my-brand-wrapper h1", 1, {
    y: 100,
    opacity: 0,
    ease: Power2.easeInOut,
    delay: 0.8
  });
  TweenMax.staggerFrom(
    ".my-main-lines .vline",
    1,
    {
      height: "0vh",
      ease: Power2.easeInOut,
      delay: 1.3
    },
    0.3
  );
  TweenMax.staggerFrom(
    "#home .my-main-nav ul li",
    1,
    {
      y: 200,
      opacity: 0,
      ease: Power2.easeInOut,
      delay: 2.8
    },
    0.3
  );
  TweenMax.staggerFrom(
    ".my-main-social li",
    1,
    {
      y: 100,
      opacity: 0,
      ease: Power2.easeInOut,
      delay: 5
    },
    -0.3
  );
  setTimeout(function() {
    body.classList.add("openHome");
    clearTimeout();
  }, 3300);
}

function openWelcome() {}

homeToAbout.addEventListener("click", function() {
  TweenMax.to(".page-transition-white", 1, {
    transform: "translateX(0)",
    ease: Power2.easeInOut
  });
  setTimeout(function() {
    window.location.pathname = "/about";
  }, 1200);
});

// Case study sayfasına geçiş stransition'ı js
/*homeToCase.addEventListener("click", function() {
  TweenMax.to(".page-transition-white", 1, {
    transform: "translateX(0)",
    ease: Power2.easeInOut
  });
  setTimeout(function() {
    window.location.pathname = "/case-studies";
  }, 1200);
});*/
