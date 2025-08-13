export default class Cl_Suscriptor_ts {
    private _cedula: string;
    private _tipoPlan: number;

    constructor(cedula: string, tipoPLan: number) {
        this._cedula = cedula;
        this._tipoPlan = +tipoPLan;
    }

    set cedula(cedula: string) {
        this._cedula = cedula;
    }
    get cedula(): string {
        return this._cedula;
    }

    set tipoPlan(tipoPLan: number) {
        this._tipoPlan = +tipoPLan;
    }
    get tipoPlan(): number {
        return this._tipoPlan;
    }

    costoPorPLan(): number {
        if (this._tipoPlan === 1) {
            return 3;
        } else if (this._tipoPlan === 2) {
            return 5;
        } else if (this._tipoPlan === 3) {
            return 10;
        } else {
            return 0;
        }
    }

    porcentaje_segun_tipo(): number {
        if (this._tipoPlan === 1 || this._tipoPlan === 2) {
            return (this.costoPorPLan() * 10) / 100;
        } else if (this._tipoPlan === 3) {
            return 0;
        } else {
            return 0;
        }
    }

    totalDeCobro(): number {
        return this.costoPorPLan() + this.porcentaje_segun_tipo();
    }
}