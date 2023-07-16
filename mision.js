let isScrolling = false;

function shrink(element) {
    for (let i = 0; i < element.children.length; i++) {
        element.children[i].style.color = '#D9D9D9';
        element.children[i].style.transition = 'color 0.5s ease-in-out';
    }
    element.style.height = '0px';
    element.style.transform = 'scaleY(0.1)';
    element.style.transition = 'transform 0.5s ease-in-out';
}

function grow(element) {
    for (let i = 0; i < element.children.length; i++) {
        element.children[i].style.color = 'black';
        element.children[i].style.transition = 'color 0.5s ease-in-out';
    }
    element.style.transform = 'scale(1)';
    element.style.transition = 'transform 0.5s ease-in-out';
}

function position() {
    let scrollTop = window.scrollY;
    let Mision = document.getElementById('Mision');
    let Vision = document.getElementById('Vision');
    let Valores = document.getElementById('Valores');

    let rotation = Math.round(scrollTop / window.innerHeight) * 120;

    if (rotation % 360 == 0) {
        grow(Mision);
        shrink(Vision);
        shrink(Valores);
    } 
    else if (rotation % 360 == 120) {
        shrink(Mision);
        grow(Vision);
        shrink(Valores);
    } 
    else if (rotation % 360 == 240) {
        shrink(Mision);
        shrink(Vision);
        grow(Valores);
    }

    return rotation;
}

function smoothScroll() {
    let element = document.getElementById('myDIV');
    let texts = document.getElementsByClassName('text');

    let rotation = position();
    element.style.transform = 'rotate(' + rotation + 'deg)';

    for (let i = 0; i < texts.length; i++) {
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

position();