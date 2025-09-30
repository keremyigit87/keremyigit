var body = document.getElementsByTagName("body")[0];
openDetailPage();

function openDetailPage() {
  body.classList.add("show");
  TweenMax.from(".sign-logo-wrapper, .work-back", 0.3, {
    width: "0px",
    ease: Power2.easeInOut
  });
  TweenMax.staggerFrom('.anim-content',1,{
      opacity:0,
      y:200,
      delay:0.3,
      ease: Power2.easeInOut
  },0.1);

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
