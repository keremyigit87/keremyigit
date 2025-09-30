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
