$(document).ready(function() {
    const cajaCosas = `<div id="caja-cosas"></div>`;
    const cosaItem = `<div class="caja-cosa-item"></div>`;
    getCosas(20);

    function getCosas(nCosas) {
        for (let i = 0; i < nCosas; i++) {
            $('#caja-cosas').append(cosaItem)
        }
    }
    positionCosas()

    function positionCosas() {
        let classItems = $('.caja-cosa-item');
        for (let i = 0; i < classItems.length; i++) {
            let pX = Math.round(Math.random() * 100);
            let pY = Math.round(Math.random() * 100);
            classItems[i].style.top = `${pY}%`;
            classItems[i].style.left = `${pX}%`
        }
    }
    setTimeout(function() {
        changeInicio()
    }, 0)

    function changeInicio() {
        let classItems = $('.caja-cosa-item');
        for (let i = 0; i < classItems.length; i++) {
            classItems[i].style.transition = 'all 10s';
            let pX = Math.round(Math.random() * 100);
            let pY = Math.round(Math.random() * 100);
            let size = Math.round(Math.random() * 400);
            classItems[i].style.top = `${pY}%`;
            classItems[i].style.left = `${pX}%`;
            classItems[i].style.width = `${size}px`;
            classItems[i].style.height = `${size}px`
        }
    }
    setInterval(function() {
        changePosition()
    }, 10000);

    function changePosition() {
        let classItems = $('.caja-cosa-item');
        for (let i = 0; i < classItems.length; i++) {
            let pX = Math.round(Math.random() * 100);
            let pY = Math.round(Math.random() * 100);
            let size = Math.round(Math.random() * 400);
            classItems[i].style.transition = 'all 10s';
            classItems[i].style.top = `${pY}%`;
            classItems[i].style.left = `${pX}%`;
            classItems[i].style.width = `${size}px`;
            classItems[i].style.height = `${size}px`
        }
    }
})