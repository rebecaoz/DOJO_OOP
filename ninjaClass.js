class Ninja{
    constructor (nombre, salud, velocidad){
        this.nombre= nombre;
        this.salud= salud;
        this.velocidad= velocidad;
        this.fuerza= 3;
    }

    
    sayName(){
        console.log(this.nombre);
    }
    
    showStats(){
        console.log('Nombre: '+this.nombre+'\nFuerza: '+this.fuerza+'\nVelocidad: '+this.velocidad+'\nSalud: '+this.salud);
    }
    drinkSake(){
        this.salud+=10;
    }
}

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.salud=200;
        this.velocidad=10;
        this.fuerza= 10;
        this.sabiduria=10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses");
    }
}
/*
const ninja1= new Ninja('Rebeca',10,25);
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
*/
const superSensei= new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();