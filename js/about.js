var scene = document.getElementsByClassName('js-scene')[0];
var parallax = new Parallax(scene);

var goToHome = document.getElementsByClassName('my-brand-wrapper')[0];
var goToHome2 = document.getElementById('goToHome2');
var goToProcess = document.getElementById('goToProcess');

var body = document.getElementsByTagName('body')[0];
var hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
openAbout();

function openAbout() {
    body.classList.add('show');
    TweenMax.from('#about .my-brand-wrapper h1', 1, {
        y: 100,
        ease: Power2.easeInOut
    });
    TweenMax.to('#about .my-brand-wrapper h1', 1, {
        opacity: 1,
        ease: Power2.easeInOut
    });
    TweenMax.from('#about .my-brand-wrapper h5', 1, {
        opacity: 0,
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

    TweenMax.staggerFrom('#about ul li', 1, {
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




hamburgerMenu.addEventListener('click', function() {

    body.classList.toggle('openMenu');
});


document.getElementsByTagName('section')[0].addEventListener('click', function() {

    body.classList.remove('openMenu');
});


goToHome2.addEventListener('click', function() {
    body.classList.remove('openMenu');
    TweenMax.to('.page-transition', 1, {
        transform: 'translateX(0)',
        ease: Power2.easeInOut
    })
    setTimeout(function() {
        window.location.pathname = '/';
    }, 1200)
})

goToProcess.addEventListener('click', function() {
    body.classList.remove('openMenu');
    TweenMax.to('.page-transition', 1, {
        transform: 'translateX(0)',
        ease: Power2.easeInOut
    })
    setTimeout(function() {
        window.location.pathname = '/process';
    }, 1200)
})