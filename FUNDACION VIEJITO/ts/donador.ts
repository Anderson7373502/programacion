export default class Donador {
    nombre: string;
    dolares: number;
    bolivares: number;

    constructor(nombre: string, dolares: number, bolivares: number) {
        this.nombre = nombre;
        this.dolares = dolares;
        this.bolivares = bolivares;
    }

    getTotalDolares(tasaCambio: number): number {
        return this.dolares + this.bolivares / tasaCambio;
    }

    getTotalBolivares(tasaCambio: number): number {
        return this.dolares * tasaCambio + this.bolivares;
    }
}
