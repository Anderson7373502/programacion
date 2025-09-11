export default class Cl_Sobre{
    constructor(valorBillete, cantidadBilletes){
        this.valorBillete = +valorBillete;
        this.cantidadBilletes = +cantidadBilletes;
    }

    set valorBillete(valorBillete){
        this._valorBillete = +valorBillete
    }
    get valorBillete(){
        return this._valorBillete;
    }

    set cantidadBilletes(cantidadBilletes){
        this._cantidadBilletes = +cantidadBilletes;
    }
    get cantidadBilletes(){
        return this._cantidadBilletes;
    }

    /**
     * METODOS
     */

    plataPorSobre(){
        return this.cantidadBilletes * this.valorBillete;
    }

}