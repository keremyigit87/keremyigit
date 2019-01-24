var topDark = document.getElementsByClassName('top-dark')[0],
    bottomDark = document.getElementsByClassName('bottom-dark')[0],
    mySign = document.getElementById('mysign'),
    body = document.getElementsByTagName('body')[0],
    navAboutTrigger = document.getElementById('nav-about'),
    navAboutMobileTrigger = document.getElementById('nav-about-mobile'),
    navProcessTrigger = document.getElementById('nav-process'),
    navProcessMobileTrigger = document.getElementById('nav-process-mobile'),
    navigationHome = document.getElementsByTagName('nav')[0],
    mytitle = document.querySelector('.flyin'),
    main = document.getElementsByClassName('main')[0],
    pageTransition = document.getElementsByClassName('page-transition-wrapper-white')[0],
    socialIcons = document.getElementsByClassName('social-icons')[0],
    navCaseTrigger = document.getElementById('nav-case-studies'),
    navTrigger = document.getElementsByClassName('ky-menu')[0],
    body = document.getElementsByTagName('body')[0];

$(window).load(function() {
    $('.ky-loading').fadeOut(1000);
    $('.main-section').fadeIn(1000);
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }
});


/* ========================
          Open Home
   ======================== */

document.getElementById('nav-to-home').addEventListener('click', function() {
    pageTransition.classList.add('page-transition');
    setTimeout(function() {
        window.location.pathname = '/';
    }, 1700);
});


/* ========================
          Open Case Studies
   ======================== */

// navCaseTrigger.addEventListener('click', function() {
//     pageTransition.classList.add('page-transition');
//     setTimeout(function() {
//         window.location.pathname = '/case-studies';
//     }, 1700);
// });


/* ========================
          Open About
   ======================== */

navAboutTrigger.addEventListener('click', function() {
    pageTransition.classList.add('page-transition');
    setTimeout(function() {
        window.location.pathname = '/about';
    }, 1700);
});
navAboutMobileTrigger.addEventListener('click', function() {
    pageTransition.classList.add('page-transition');
    setTimeout(function() {
        window.location.pathname = '/about';
    }, 1700);
});


navProcessTrigger.addEventListener('click', function() {
    pageTransition.classList.add('page-transition');
    setTimeout(function() {
        window.location.pathname = '/process';
    }, 1700);
});
navProcessMobileTrigger.addEventListener('click', function() {
    pageTransition.classList.add('page-transition');
    setTimeout(function() {
        window.location.pathname = '/process';
    }, 1700);
});




navTrigger.addEventListener('click', function(e) {
    e.preventDefault();
    body.classList.toggle('openMenu');
})