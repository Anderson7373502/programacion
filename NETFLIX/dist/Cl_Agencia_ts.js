export default class Cl_Agencia_ts {
    constructor() {
        this._contSuscriptores = 0;
        this._contSuscriptoresC = 0;
        this._suscriptores = [];
        this._conteoPlanes = {};
    }
    procesarSuscriptor(suscriptor) {
        this._suscriptores.push(suscriptor);
        this._contSuscriptores++;
        if (suscriptor.tipoPlan === 3) {
            this._contSuscriptoresC++;
        }
        // CORRECCIÓN: Lógica para contar la frecuencia de cada plan
        const tipoPlan = suscriptor.tipoPlan;
        this._conteoPlanes[tipoPlan] = (this._conteoPlanes[tipoPlan] || 0) + 1;
    }
    porcentajeSuscriptoresC() {
        if (this._contSuscriptores === 0)
            return 0;
        return (this._contSuscriptoresC * 100) / this._contSuscriptores;
    }
    getOpcionFavorita() {
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
