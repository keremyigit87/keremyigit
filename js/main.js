var scene = document.getElementsByClassName("js-scene")[0];
var parallax = new Parallax(scene);

var scene2 = document.getElementsByClassName("js-scene2")[0];
var parallax2 = new Parallax(scene2);

var body = document.getElementsByTagName("body")[0];
var homeToAbout = document.getElementById("homeToAbout");
var homeToWorks = document.getElementById("homeToWorks");
var homeToServices = document.getElementById("homeToServices");
var homeToBlog = document.getElementById("homeToBlog");

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
    ease:  Power1.easeInOut
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
      delay: 1.8
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
      delay: 2.8
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
  pageTransition('/about');
});
homeToBlog.addEventListener("click", function() {
  pageTransition('/blog');
});

homeToServices.addEventListener("click", function() {
  pageTransition('/service');
});



homeToWorks.addEventListener("click", function(){
  pageTransition('/works');
});

function pageTransition(url){
  TweenMax.to(".page-transition-white", 1, {
    transform: "translateX(100%)",
    ease: Power2.easeInOut
  });
  TweenMax.to(".page-transition-black", 0.8, {
    transform: "translateX(0)",
    ease: Power2.easeInOut,
    delay:0.1
  });
  TweenMax.to(".page-transition-white-2", 1, {
    transform: "translateX(0)",
    ease: Power2.easeInOut,
    delay:0.2
  });
   setTimeout(function() {
     window.location.pathname = url;
   }, 1200);
}