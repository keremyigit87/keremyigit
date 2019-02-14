var scene = document.getElementsByClassName('js-scene')[0];
var parallax = new Parallax(scene);

var goToHome = document.getElementsByClassName('sign-logo-wrapper')[0];
var goToHome2 = document.getElementById('goToHome2');
var goToProcess = document.getElementById('goToProcess');

var body = document.getElementsByTagName('body')[0];
openAbout();

function openAbout() {
    body.classList.add('show');
    TweenMax.from('.sign-logo-wrapper', 1, {
        width: '0px',
        ease: Power2.easeInOut
    })
    TweenMax.from('.ky-my', 1, {
        opacity: 0,
        y: 100,
        delay: .5,
        ease: Power2.easeInOut
    });

    TweenMax.from('.skill-h2', 1, {
        x: 100,
        delay: .8,
        opacity: 0,
        ease: Power2.easeInOut
    });

    TweenMax.staggerFrom('#about .about-container ul li', 1, {
        opacity: 0,
        y: 200,
        delay: 1.1,
        ease: Power2.easeInOut
    }, 0.2)
    TweenMax.from('.hamburger-menu', 1, {
        opacity: 0,
        delay: 1.2,
        ease: Power2.easeInOut
    })
    TweenMax.staggerFrom('.hamburger-menu span', 1, {
        opacity: 0,
        x: 100,
        delay: 1.2,
        ease: Power2.easeInOut
    }, 0.2)
}

goToHome.addEventListener('click', function() {
    TweenMax.to('.page-transition', 1, {
        transform: 'translateX(0)',
        ease: Power2.easeInOut
    })
    setTimeout(function() {
        window.location.pathname = '/';
    }, 1200)
})





// hamburgerMenu.addEventListener('click', function() {

//     body.classList.toggle('openMenu');
// });


// document.getElementsByTagName('section')[0].addEventListener('click', function() {

//     body.classList.remove('openMenu');
// });


// goToHome2.addEventListener('click', function() {
//     body.classList.remove('openMenu');
//     TweenMax.to('.page-transition', 1, {
//         transform: 'translateX(0)',
//         ease: Power2.easeInOut
//     })
//     setTimeout(function() {
//         window.location.pathname = '/';
//     }, 1200)
// })
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
    if (body.classList.contains('open-menu')) {
        document.getElementsByTagName('span')[0].innerHTML = 'close';
    } else {
        document.getElementsByTagName('span')[0].innerHTML = 'menu';
    }
})