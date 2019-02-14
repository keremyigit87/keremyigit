var scene = document.getElementsByClassName('js-scene')[0];
var parallax = new Parallax(scene);

var goToHome = document.getElementsByClassName('sign-logo-wrapper')[0];
var goToHome2 = document.getElementById('goToHome2');
var goToProcess = document.getElementById('goToProcess');

var body = document.getElementsByTagName('body')[0];
var hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];

openCaseStudies();

function openCaseStudies() {
    body.classList.add('show');
}



goToHome.addEventListener('mouseenter', function() {
    TweenMax.to(goToHome, 1, {
        scale: 1.3
    })
})
goToHome.addEventListener('mouseleave', function() {
    TweenMax.to(goToHome, 1, {
        scale: 1
    })
})


var menuTrigger = document.getElementsByClassName('h-menu')[0];

menuTrigger.addEventListener('click', function() {
    body.classList.toggle('open-menu');
})