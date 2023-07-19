let isScrolling = false;

function shrink(element) {
    for (let i = 0; i < element.children.length; i++) {
        element.children[i].style.color = '#D9D9D9';
        element.children[i].style.transition = 'color 1s ease-in-out';
    }
    element.style.height = '0px';
    element.style.transform = 'scaleY(0.1)';
    element.style.transition = 'transform 1s ease-in-out';
}

function grow(element) {
    for (let i = 0; i < element.children.length; i++) {
        element.children[i].style.color = 'black';
        element.children[i].style.transition = 'color 1s ease-in-out';
    }
    element.style.transform = 'scale(1)';
    element.style.transition = 'transform 1s ease-in-out';
}

function position() {
    let scrollTop = window.scrollY;
    let Mision = document.getElementById('Mision');
    let Vision = document.getElementById('Vision');
    let Valores = document.getElementById('Valores');

    let rotation = (Math.round(scrollTop / window.innerHeight) * 120) - 120;

    console.log(scrollTop);

    if (rotation % 360 === 0) {
        grow(Mision);
        shrink(Vision);
        shrink(Valores);
    } 
    else if (rotation % 360 === 120) {
        shrink(Mision);
        grow(Vision);
        shrink(Valores);
    } 
    else if (rotation % 360 === 240) {
        shrink(Mision);
        shrink(Vision);
        grow(Valores);
    }
    else {
        shrink(Mision);
        shrink(Vision);
        shrink(Valores);
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
    let tituloN = document.getElementById('tituloN');
    let tituloNRect = tituloN.getBoundingClientRect();
    let Nosotros = document.getElementById('Nosotros');
    let Inicio = document.getElementById('Inicio');
    let InicioRect = Inicio.getBoundingClientRect();
    let Servicios = document.getElementById('Servicios');
    let ServiciosRect = Servicios.getBoundingClientRect();
    let rotation = position();

    if (!isScrolling && tituloNRect.top < 50 && ServiciosRect.top > window.innerHeight - 50) {
        isScrolling = true;
        Nosotros.style.position = 'fixed';
        Nosotros.style.top = '5%';
        Nosotros.style.left = '15%';
        requestAnimationFrame(smoothScroll);
    } 

    if (tituloNRect.top < InicioRect.bottom && ServiciosRect.top > window.innerHeight - 50) {
        Nosotros.style.position = '';
        Nosotros.style.top = '0%';
        Nosotros.style.left = '0%';
    }

    if (rotation >= 360) {
        Nosotros.style.position = '';
    } 
}

position();

window.addEventListener('scroll', scrollHandler); 