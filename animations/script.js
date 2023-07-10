var isScrolling = false;

function smoothScroll() {
    var element = document.getElementById('myDIV');
    var texts = document.getElementsByClassName('text');
    var scrollTop = window.scrollY;

    var rotation = Math.round(scrollTop / window.innerHeight) * 120; // Adjust the rotation speed as needed
    element.style.transform = 'rotate(' + rotation + 'deg)';

    for (var i = 0; i < texts.length; i++) {
        texts[i].style.transform = 'rotate(' + -rotation + 'deg)';
    }

    isScrolling = false;
}

function scrollHandler() {
    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(smoothScroll);
    }
}

window.addEventListener('scroll', scrollHandler); 