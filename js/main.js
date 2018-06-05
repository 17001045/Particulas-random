

const idPartic = document.getElementById('partiContainer');

class Parti{
    constructor(idContainer,partisNumber,partiCss,speedPartiMove,timerMove){
        this.idContainer = idContainer;
        this.partisNumber = partisNumber;
        this.partiCss = partiCss;
        this.speedPartiMove = speedPartiMove;
        this.timerMove = timerMove;
    }
    // este metodo pone en accion
    startParti(){
        this.createPartis()
        this.placePartis()
        this.movePartis()
    }
    // este metodo crea las particulas
    createPartis(){
        for(let i = 0; i < this.partisNumber; i++ ){
          
            let partiElement = `<div class=${this.partiCss}></div>`;
            this.idContainer.innerHTML += partiElement;
        }
    }

    // este metodo posiciona las particulas aleatoriamente
    placePartis(){
       
       
        let partis = document.getElementsByClassName(this.partiCss);
            for(let i = 0; i < partis.length; i++ ){
                let styles = `
                    position:absolute;
                    transition:all linear ${this.speedPartiMove};
                    top:${Math.round(Math.random()*100)}%;
                    left:${Math.round(Math.random()*100)}%;
                `;
                partis[i].setAttribute('style',styles)
               
            }
       
        
    }


    // este metodo pone en movimento las particulas
    movePartis(){
        
        let partis = document.getElementsByClassName(this.partiCss);
            setInterval(()=>{
                for(let i = 0; i < partis.length; i++ ){
                    let styles = `
                        position:absolute;
                        transition:all linear ${this.speedPartiMove};
                        top:${Math.round(Math.random()*100)}%;
                        left:${Math.round(Math.random()*100)}%;
                    `;
                    partis[i].setAttribute('style',styles)
                   
                }
            },this.timerMove)
            
    }

    



}

var parti = new Parti(idPartic,50,'partiCss','2s',2000);

 parti.startParti()
