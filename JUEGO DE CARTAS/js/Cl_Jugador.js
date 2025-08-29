export default class Cl_Jugador{
    constructor(nombre, carta1, carta2, carta3){
        this.nombre = nombre;
        this.carta1 = +carta1;
        this.carta2 = +carta2;
        this.carta3 = +carta3;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }

     set carta1(carta1){
        this._carta1 = carta1;
    }
    get carta1(){
        return this._carta1;
    }

     set carta2(carta2){
        this._carta2 = carta2;
    }
    get carta2(){
        return this._carta2;
    }

     set carta3(carta3){
        this._carta3 = carta3;
    }
    get carta3(){
        return this._carta3;
    }

    /**
     * METODOS
     */

    sumarValores(){
        return this.carta1 + this.carta2 + this.carta3
    }

}