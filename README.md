# Particulas-random
Simple código en js vanilla que crea y mueve elementos de forma aleatoria. Usando js orientado a objetos, perfecto para fondos.

Ejemplo:

var parti = new Parti(
idElement,
numberParticles,
'nameCssParticle',
'speedParticle',
 movementInterval
);


const idPartic = document.getElementById('partiContainer');

var parti = new Parti(idPartic,50,'partiCss','2s',2000);

parti.startParti()



El código css de las particulas se ponen a gusto, ejemplo:

.partiCss{
    --size:10px;
    width: var(--size);
    height: var(--size);
    background:rgba(255, 255, 255, 1);
}





