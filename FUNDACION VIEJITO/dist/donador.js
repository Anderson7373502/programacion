export default class Donador {
    constructor(nombre, dolares, bolivares) {
        this.nombre = nombre;
        this.dolares = dolares;
        this.bolivares = bolivares;
    }
    getTotalDolares(tasaCambio) {
        return this.dolares + this.bolivares / tasaCambio;
    }
    getTotalBolivares(tasaCambio) {
        return this.dolares * tasaCambio + this.bolivares;
    }
}
