var body = document.getElementsByTagName("body")[0];
var hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
var goToHome2 = document.getElementById("goToHome2");
openProcess();

function openProcess() {
  body.classList.add("show");
}

hamburgerMenu.addEventListener("click", function() {
  body.classList.toggle("openMenu");
});
var section = document.querySelectorAll("section");
for (i = 0; i < section.length; i++) {
  section[i].addEventListener("click", function() {
    body.classList.remove("openMenu");
  });
}

goToHome2.addEventListener("click", function() {
  body.classList.remove("openMenu");
  TweenMax.to(".page-transition", 1, {
    transform: "translateX(0)",
    ease: Power2.easeInOut
  });
  setTimeout(function() {
    window.location.pathname = "/";
  }, 1200);
});
