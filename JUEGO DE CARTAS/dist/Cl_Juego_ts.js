export default class Cl_juego_ts {
    constructor() {
        this.contJugadores = 0;
        this.contJugadores_10 = 0;
        this.jugadores = []; // CORRECCIÓN: Arreglo de Cl_Jugador_ts
        this.puntuacionMaxima = 0;
        this.nombreGanador = '';
        // No es necesario inicializar aquí, ya se hizo en las declaraciones
    }
    procesarJugador(jugador) {
        this.jugadores.push(jugador);
        this.contJugadores++;
        const puntuacion = jugador.sumarValores();
        if (puntuacion < 10) {
            this.contJugadores_10++;
        }
        if (puntuacion > this.puntuacionMaxima) {
            this.puntuacionMaxima = puntuacion;
            this.nombreGanador = jugador.nombre;
        }
    }
    porcentajeConMenos10() {
        if (this.contJugadores === 0)
            return 0;
        return (this.contJugadores_10 / this.contJugadores) * 100;
    }
    jugadorGanador() {
        return this.nombreGanador;
    }
}
