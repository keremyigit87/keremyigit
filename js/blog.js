

var body = document.getElementsByTagName("body")[0];

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
