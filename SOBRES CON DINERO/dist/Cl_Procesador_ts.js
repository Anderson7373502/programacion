export default class Cl_Procesador_ts {
    constructor() {
        this._acumDineroTotal = 0;
    }
    procesarSobre(sobre) {
        this._acumDineroTotal += sobre.plataXSobre();
    }
    obtenerDineroTotal() {
        return this._acumDineroTotal;
    }
}
