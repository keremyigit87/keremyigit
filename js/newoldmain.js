var firstOpeningWrapper = document.getElementsByClassName('first-opening')[0],
    textS = document.querySelectorAll('.textS'),
    textAll = document.querySelectorAll('.opening-text tr td'),
    pageTransition = document.getElementsByClassName('page-transition-wrapper')[0],
    main = document.getElementsByTagName('main')[0],
    introBtn = document.getElementsByClassName('intro-btn')[0],
    openingText = document.getElementsByClassName('opening-text')[0];




































if (localStorage.getItem('intro')) {
    opening();
} else {
    firstOpening();
}
















function firstOpening() {
    localStorage.setItem('intro', 'first');
    firstOpeningWrapper.classList.add('visible');
    setTimeout(function() {
        for (var i = 0; i < textAll.length; i++) {
            textAll[i].classList.add('hidden');
        };
        for (var i = 0; i < textS.length; i++) {
            textS[i].classList.add('visible');
        };
        setTimeout(function() {
            introBtn.classList.add('intro-btn-ani');
            introBtn.addEventListener('click', function() {
                pageTransition.classList.add('page-transition');
                setTimeout(function() {
                    firstOpeningWrapper.classList.add('firstOpentranslate');
                    setTimeout(function() {
                        firstOpeningWrapper.classList.remove('visible');
                        pageTransition.classList.add('hidden');
                    }, 1400);
                }, 1600);
            });
        }, 7600);
    }, 1000);
}

function opening() {
    console.log('ikinci kez');
}