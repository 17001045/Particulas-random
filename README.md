# Particulas-random
 Código en js vanilla que crea y mueve elementos de forma aleatoria. Usando js orientado a objetos, perfecto para fondos.

## [Demo](https://17001045.github.io/Particulas-random/index.html)

### Ejemplo:
```
 // objeto que sera la configuracion para el objeto
        let objtParti = {
            idContainer: "partiContainer", // id de contenedor
            partisNumber: 70, // numero de particulas
            partiCss: "partiCss", // clase css que tendran las particulas
            transitionCss: "all linear 3s", // optional
            IntervalMove: 3000, // tiempop de inervalo para la animacion, optional
            //transform: "scale(3,3)", // css transform, optional
            customFnc: (element)=>{ // custom funcion, optional
                let random1 = Math.round(Math.random() * 255);
                let random2 = Math.round(Math.random() * 255);
                let random3 = Math.round(Math.random() * 255);
                element.style.background = `rgb(${random1},${random2}, ${random3} )`;
               
            }
        }

        let parti = new Parti(objtParti);

        parti.startParti() // iniciamos con este metodo

```


### El código css de las particulas se ponen a gusto, ejemplo:
```
.partiCss{ 
  --size:10px; 
  width: var(--size); 
  height: var(--size); 
  background:rgba(255, 255, 255, 1); 
 } 
```



