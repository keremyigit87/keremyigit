var topDark = document.getElementsByClassName('top-dark')[0],
    bottomDark = document.getElementsByClassName('bottom-dark')[0],
    mySign = document.getElementById('mysign'),
    body = document.getElementsByTagName('body')[0],
    navAboutTrigger = document.getElementById('nav-about'),
    navigationHome = document.getElementsByTagName('nav')[0],
    mytitle = document.querySelector('.flyin'),
    main = document.getElementsByClassName('main')[0],
    pageTransition = document.getElementsByClassName('page-transition-wrapper')[0],
    socialIcons = document.getElementsByClassName('social-icons')[0];

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