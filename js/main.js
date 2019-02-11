var scene = document.getElementsByClassName('js-scene')[0];
var parallax = new Parallax(scene);

var scene2 = document.getElementsByClassName('js-scene2')[0];
var parallax2 = new Parallax(scene2);

var body = document.getElementsByTagName('body')[0];
var homeToAbout = document.getElementById('homeToAbout');

openHome();

function openHome() {
    body.classList.add('show');
    TweenMax.to('.my-hello', 1, {
        y: -100,
    });
    setTimeout(function() {
        body.classList.add('openHome');
        clearTimeout();
        setTimeout(function() {
            TweenMax.from('#home .my-brand-wrapper h1', 1, {
                y: 100,
            });
            TweenMax.to('#home .my-brand-wrapper h1', 1, {
                opacity: 1
            });
            TweenMax.to(".vline1", 1, {
                height: "100vh",
                delay: 1.9,
            });
            TweenMax.from(".dribbble-icon", 1, {
                y: 100,
                delay: 1.9,
            });
            TweenMax.to(".dribbble-icon", 1, {
                opacity: 1,
                delay: 1.9,
            });
            TweenMax.to(".vline2", 1, {
                height: "100vh",
                delay: 2.2,
            });

            TweenMax.from(".behance-icon", 1, {
                y: 100,
                delay: 2.2,
            });
            TweenMax.to(".behance-icon", 1, {
                opacity: 1,
                delay: 2.2,
            });
            TweenMax.to(".vline3", 1, {
                height: "100vh",
                delay: 2.5,
            });

            TweenMax.from(".linkedin-icon", 1, {
                y: 100,
                delay: 2.5,
            });
            TweenMax.to(".linkedin-icon", 1, {
                opacity: 1,
                delay: 2.5,
            });
            TweenMax.to(".vline4", 1, {
                height: "100vh",
                delay: 2.8,
            });
            TweenMax.from(".twitter-icon", 1, {
                y: 100,
                delay: 2.8,
            });
            TweenMax.to(".twitter-icon", 1, {
                opacity: 1,
                delay: 2.8,
            });
            TweenMax.to(".vline5", 1, {
                height: "100vh",
                delay: 3.1,
            });
            TweenMax.from(".facebook-icon", 1, {
                y: 100,
                delay: 3.1,
            });
            TweenMax.to(".facebook-icon", 1, {
                opacity: 1,
                delay: 3.1,
            });


        }, 500);
    }, 500);
}


homeToAbout.addEventListener('click', function() {
    TweenMax.to('#about', .5, {
        left: "0px",
        ease: Power2.easeInOut
    }, 0);
    TweenMax.to('.my-main-nav', .5, {
        x: 800,
        opacity: 0,
        transformOrigin: "right",
        ease: Power2.easeInOut
    }, 0)
    TweenMax.to('#home .my-brand-wrapper', .5, {
        color: "#000",
        ease: Power2.easeInOut
    }, 0);
    TweenMax.to('.my-hello', 1, {
        opacity: 0,
        ease: Power2.easeInOut
    }, 0);
    TweenMax.to('.my-brand-wrapper h1', .5, {
        scale: .6,
        y: -40,
        transformOrigin: "left",
        ease: Power2.easeInOut
    }, 0);
    TweenMax.to('.hamburger-menu .menu', 1, {
        opacity: 1,
        visibility: 'visible',
    })
    TweenMax.to('.page-transition', 1, {
        transform: 'translateX(0)',
        ease: Power2.easeInOut
    })
    setTimeout(function() {
        window.location.pathname = '/about';
    }, 1200)
});
// homeToAbout.addEventListener('click', function() {
//     if (t2.reversed()) {
//         t2.play();
//     } else {
//         t2.reverse();
//     }
//     // window.location.pathname = '/about';
// });