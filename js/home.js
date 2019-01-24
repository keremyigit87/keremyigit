var topDark = document.getElementsByClassName('top-dark')[0],
    bottomDark = document.getElementsByClassName('bottom-dark')[0],
    mySign = document.getElementById('mysign'),
    body = document.getElementsByTagName('body')[0],
    navAboutTrigger = document.getElementById('nav-about'),
    navCaseTrigger = document.getElementById('nav-case-studies'),
    navigationHome = document.getElementsByTagName('nav')[0],
    mytitle = document.querySelector('.flyin'),
    main = document.getElementsByClassName('main')[0],
    pageTransition = document.getElementsByClassName('page-transition-wrapper')[0],
    socialIcons = document.getElementsByClassName('social-icons')[0];
/* ========================
        Lottie Animation
   ======================== */
var kyPreloader = document.getElementById('preloader');
var preload = {
    container: kyPreloader,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './js/loader.json',
};
var anim;

anim = bodymovin.loadAnimation(preload);

var mysign = document.getElementById('mysign');
var mySignAnimation = lottie.loadAnimation({
    container: mysign,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './js/data.json'
});

mySignAnimation.setSpeed(4);

$(window).load(function() {
    $('.ky-loading').fadeOut(1000);
    $('.main-section').fadeIn(1000);
    setTimeout(function() {
        $(function() {
            $('.flyin').removeClass('hidden');
        });
        setTimeout(function() {
            body.classList.add('startAnim');
            topDark.classList.add('animationY');
            bottomDark.classList.add('animationY');
            setTimeout(function() {
                navigationHome.classList.add('animationNav');
                setTimeout(function() {
                    socialIcons.classList.add('animationX');
                    setTimeout(function() {
                        mySignAnimation.play();
                        setTimeout(function() {
                            mySign.classList.add('animationSign');
                        }, 1500);
                    }, 500);
                }, 1200);
            }, 800);
        }, 1600);
    }, 1000);
});




/* ========================
          Open About
   ======================== */

navAboutTrigger.addEventListener('click', function() {
    navigationHome.classList.remove('animationNav');
    socialIcons.classList.remove('animationX');
    setTimeout(function() {
        topDark.classList.remove('animationY');
        bottomDark.classList.remove('animationY');
        $(function() {
            $('.flyin').addClass('hidden');
        });
        setTimeout(function() {
            pageTransition.classList.add('page-transition');
            setTimeout(function() {
                window.location.pathname = '/about';
            }, 1800);
        }, 500);
    }, 200);

});



/* ========================
       Open Case Studies
   ======================== */

navCaseTrigger.addEventListener('click', function() {
    navigationHome.classList.remove('animationNav');
    socialIcons.classList.remove('animationX');
    setTimeout(function() {
        topDark.classList.remove('animationY');
        bottomDark.classList.remove('animationY');
        $(function() {
            $('.flyin').addClass('hidden');
        });
        setTimeout(function() {
            pageTransition.classList.add('page-transition');
            setTimeout(function() {
                window.location.pathname = '/case-studies';
            }, 1800);
        }, 500);
    }, 200);

});