export default class Cl_Suscriptor_ts {
    constructor(cedula, tipoPLan) {
        this._cedula = cedula;
        this._tipoPlan = +tipoPLan;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set tipoPlan(tipoPLan) {
        this._tipoPlan = +tipoPLan;
    }
    get tipoPlan() {
        return this._tipoPlan;
    }
    costoPorPLan() {
        if (this._tipoPlan === 1) {
            return 3;
        }
        else if (this._tipoPlan === 2) {
            return 5;
        }
        else if (this._tipoPlan === 3) {
            return 10;
        }
        else {
            return 0;
        }
    }
    porcentaje_segun_tipo() {
        if (this._tipoPlan === 1 || this._tipoPlan === 2) {
            return (this.costoPorPLan() * 10) / 100;
        }
        else if (this._tipoPlan === 3) {
            return 0;
        }
        else {
            return 0;
        }
    }
    totalDeCobro() {
        return this.costoPorPLan() + this.porcentaje_segun_tipo();
    }
}
