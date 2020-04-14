

var body = document.getElementsByTagName("body")[0];
var homeToAbout = document.getElementById("homeToAbout");
var homeToWorks = document.getElementById("homeToWorks");
var homeToService = document.getElementById("homeToService");
var HamburgerTrigger = document.getElementById("nav-container");
var headerToHome = document.getElementById("headerToHome");
var goToHome = document.getElementsByClassName("sign-logo-wrapper")[0];


openHome();

function openHome() {
  body.classList.add("show");
  TweenMax.staggerFrom('ul.blog-nav li', 1, {
    y: 200,
    opacity: 0,
    ease: Power2.easeInOut,
    delay: .3
  }, 0.3)
}

headerToWork.addEventListener("click", function() {
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
         window.location.pathname = '/works';
       }, 1000);
      }, 500);
  });


HamburgerTrigger.addEventListener("click", function() {
  body.classList.toggle("open-menu");
  HamburgerTrigger.classList.toggle("pushed");
});


headerToBlog.addEventListener("click", function() {
	body.classList.remove("open-menu");
	HamburgerTrigger.classList.remove("pushed");
  });

goToHome.addEventListener("click", function() {
	body.classList.remove("open-menu");
	HamburgerTrigger.classList.remove("pushed");
	toHome(0);
  });

headerToHome.addEventListener("click", function() {
  body.classList.remove("open-menu");
  HamburgerTrigger.classList.remove("pushed");
  toHome(500);
});

function toHome(x){
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
	}, x);
}

headerToAbout.addEventListener("click", function() {
	body.classList.remove("open-menu");
	HamburgerTrigger.classList.remove("pushed");
	transitionToWhite('/about');
  });

  headerToService.addEventListener("click", function() {
	body.classList.remove("open-menu");
	HamburgerTrigger.classList.remove("pushed");
	transitionToWhite('/service');
  });
  function transitionToWhite(link){
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
		   window.location.pathname = link;
		 }, 1000);
		}, 400);
  }




  function pageTransition(url){
	  setTimeout(function(){
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
	  }, 500);
  }




