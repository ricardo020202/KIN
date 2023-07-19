let isScrolling = false;

function shrink(element) {
    element.style.height = '0px';
    element.style.transition = 'height 1s ease-in-out';
    element.style.color = 'transparent';
    element.style.transition = 'color 1s ease-in-out';
    element.style.transform = 'scaleY(0.1)';
    element.style.transition = 'transform 1s ease-in-out';
}

function grow(element) {
    element.style.height = 'auto';
    element.style.transition = 'height 1s ease-in-out';
    element.style.color = 'black';
    element.style.transition = 'color 1s ease-in-out';
    element.style.transform = 'scale(1)';
    element.style.transition = 'transform 1s ease-in-out';
}

function position() {
    let scrollTop = window.scrollY;
    let titulo1 = document.getElementById('titulo1');
    let cont1 = document.getElementById('cont1');
    let titulo2 = document.getElementById('titulo2');
    let cont2 = document.getElementById('cont2');
    let titulo3 = document.getElementById('titulo3');
    let cont3 = document.getElementById('cont3');
    let titulo4 = document.getElementById('titulo4');
    let cont4 = document.getElementById('cont4');
    let lines = document.getElementsByClassName('timeline-middle');

    let rotation = Math.round(scrollTop / window.innerHeight) * 90;

    if (rotation % 360 == 0) {
        grow(titulo1);
        grow(cont1);
        grow(lines[0]);
        shrink(titulo2);
        shrink(cont2);
        shrink(titulo3);
        shrink(cont3);
        shrink(titulo4);
        shrink(cont4);
    } 
    else if (rotation % 360 == 90) {
        shrink(titulo1);
        shrink(cont1);
        grow(titulo2);
        grow(cont2);
        grow(lines[1]);
        shrink(titulo3);
        shrink(cont3);
        shrink(titulo4);
        shrink(cont4);
    } 
    else if (rotation % 360 == 180) {
        shrink(titulo1);
        shrink(cont1);
        shrink(titulo2);
        shrink(cont2);
        grow(titulo3);
        grow(cont3);
        grow(lines[2]);
        shrink(titulo4);
        shrink(cont4);
    }
    else if (rotation % 360 == 270) {
        shrink(titulo1);
        shrink(cont1);
        shrink(titulo2);
        shrink(cont2);
        shrink(titulo3);
        shrink(cont3);
        grow(titulo4);
        grow(cont4);
        grow(lines[3]);
    }

    return rotation;
}

function smoothScroll() {
    position();
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