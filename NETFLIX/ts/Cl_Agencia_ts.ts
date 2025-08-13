import Cl_Suscriptor_ts from "./Cl_Suscriptor_ts";

export default class Cl_Agencia_ts {

    private _contSuscriptores: number = 0;
    private _contSuscriptoresC: number = 0;
    private _suscriptores: Cl_Suscriptor_ts[] = [];
    private _conteoPlanes: { [key: number]: number } = {};

    constructor() {}

    procesarSuscriptor(suscriptor: Cl_Suscriptor_ts): void {
        this._suscriptores.push(suscriptor);
        this._contSuscriptores++;

        if (suscriptor.tipoPlan === 3) {
            this._contSuscriptoresC++;
        }
        
        // CORRECCIÓN: Lógica para contar la frecuencia de cada plan
        const tipoPlan = suscriptor.tipoPlan;
        this._conteoPlanes[tipoPlan] = (this._conteoPlanes[tipoPlan] || 0) + 1;
    }

    porcentajeSuscriptoresC(): number {
        if (this._contSuscriptores === 0) return 0;
        return (this._contSuscriptoresC * 100) / this._contSuscriptores;
    }

    getOpcionFavorita(): string {
        let opcionFavorita = "";
        let maximoConteo = 0;

        for (const tipoPlan in this._conteoPlanes) {
            if (this._conteoPlanes[tipoPlan] > maximoConteo) {
                maximoConteo = this._conteoPlanes[tipoPlan];
                opcionFavorita = tipoPlan;
            }
        }
        return opcionFavorita;
    }
}