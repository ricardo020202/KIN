function myFunction() {
    let scrollTop = window.scrollY;
    let SPos = document.getElementById('titulo').getBoundingClientRect();
    let NPos = document.getElementById('Nosotros').getBoundingClientRect();
    let APos = document.getElementById('App').getBoundingClientRect();
    let servicios = document.getElementById('Servicios');
    let titles = document.getElementsByClassName('timeTitle');
    let contents = document.getElementsByClassName('timeContent');
    let scrolled;

    if(SPos.top < 10 && APos.top > 900) {
        servicios.style.position = 'fixed';
        servicios.style.top = SPos.top + 'px';
        servicios.style.left = SPos.left + 'px';

        scrolled = scrollTop;
    } 
    else if(SPos.top <= NPos.bottom || scrolled + 100 > scrollTop) {
        servicios.style.position = '';

        for (let i = 1; i < titles.length; i++) {
            titles[i].style.display = 'none';
            contents[i].style.display = 'none';
        }
    }


}

window.addEventListener('scroll', myFunction);