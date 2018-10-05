class Parti {
    constructor(objtParti) {
        this.idContainer = document.getElementById(objtParti.idContainer);
        this.partisNumber = objtParti.partisNumber;
        this.partiCss = objtParti.partiCss;
        this.transitionCss = objtParti.transitionCss;
        this.IntervalMove = objtParti.IntervalMove;
        this.transform = objtParti.transform;
        this.customFnc = objtParti.customFnc;

        // este metodo pone en defecto algunas opciones opcionales
        this.dft();
    }
    // este metodo pone en accion
    startParti() {
        this.createPartis()
        this.placePartis()
        this.initPartis()
        this.intervalPartis()
    }
    // este metodo crea las particulas
    createPartis() {
        for (let i = 0; i < this.partisNumber; i++) {

            let partiElement = `<div class=${this.partiCss}></div>`;
            this.idContainer.innerHTML += partiElement;
        }
    }

    // este metodo posiciona las particulas aleatoriamente
    placePartis() {


        let partis = document.getElementsByClassName(this.partiCss);
        for (let i = 0; i < partis.length; i++) {
            let parti = partis[i].style;

            setTimeout(() => {
                this.setStyleParti(parti);
            }, 1)
            if (this.transform !== undefined) {
                this.removeTransform(parti);
            }
            if (this.customFnc !== undefined) {
                this.customFnc(partis[i])
            }


        }


    }
    // aca ponemos los estilos
    setStyleParti(parti) {
        parti.position = "absolute";
        parti.transition = this.transitionCss;
        parti.top = `${Math.round(Math.random() * 100)}%`;
        parti.left = `${Math.round(Math.random() * 100)}%`;
        if (this.transform !== undefined) {
            parti.transform = this.transform;
        }


    }
    // remueve el transform 
    removeTransform(parti) {
        setTimeout(() => {
            parti.transform = "inherit";
        }, this.IntervalMove / 2)

    }

    // este metodo pone en movimento al inicio
    intervalPartis() {

        let partis = document.getElementsByClassName(this.partiCss);
        setInterval(() => {
            this.placePartis()
        }, this.IntervalMove)

    }
    // hace que las particulas se muevan al inicio
    initPartis() {

        let partis = document.getElementsByClassName(this.partiCss);
        setTimeout(() => {
            this.placePartis()
        }, 1)

    }


    // este metodo pone en defecto algunas opciones opcionales
    dft() {

        if (this.transitionCss == undefined) {
            this.transitionCss = "all linear 1s";
        };

        if (this.IntervalMove == undefined) {
            this.IntervalMove = 2000;
        };
    }



}

