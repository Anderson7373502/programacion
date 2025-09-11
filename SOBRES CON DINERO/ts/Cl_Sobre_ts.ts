export default class Cl_Sobre_ts{
    private _valorBillete: number
    private _cantidadBilletes: number

    constructor(valorBillete: number, cantidadBilletes: number){
        this._valorBillete = +valorBillete;
        this._cantidadBilletes = +cantidadBilletes;
    }
    
    set valorBillete(valorBillete: number){
        this._valorBillete = +valorBillete;
    }
    get valorBillete(): number{
        return this._valorBillete;
    }

    set cantidadBilletes(cantidadBilletes: number){
        this._cantidadBilletes = +cantidadBilletes;
    }
    get cantidadBilletes(): number{
        return this._cantidadBilletes;
    }

    plataXSobre(): number{
        return this._cantidadBilletes * this._valorBillete
    }
}