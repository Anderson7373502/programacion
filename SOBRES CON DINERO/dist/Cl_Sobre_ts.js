export default class Cl_Sobre_ts {
    constructor(valorBillete, cantidadBilletes) {
        this._valorBillete = +valorBillete;
        this._cantidadBilletes = +cantidadBilletes;
    }
    set valorBillete(valorBillete) {
        this._valorBillete = +valorBillete;
    }
    get valorBillete() {
        return this._valorBillete;
    }
    set cantidadBilletes(cantidadBilletes) {
        this._cantidadBilletes = +cantidadBilletes;
    }
    get cantidadBilletes() {
        return this._cantidadBilletes;
    }
    plataXSobre() {
        return this._cantidadBilletes * this._valorBillete;
    }
}
