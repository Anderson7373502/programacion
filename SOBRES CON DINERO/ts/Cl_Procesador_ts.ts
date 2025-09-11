import Cl_Sobre_ts from "./Cl_Sobre_ts"

export default class Cl_Procesador_ts {
    private _acumDineroTotal: number = 0;
    
    constructor() {}

    procesarSobre(sobre: Cl_Sobre_ts): void {
        this._acumDineroTotal += sobre.plataXSobre();
    }

    obtenerDineroTotal(): number {
        return this._acumDineroTotal;
    }
}