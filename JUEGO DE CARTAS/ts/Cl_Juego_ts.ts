import Cl_Jugador_ts  from "./Cl_jugador_ts";

export default class Cl_juego_ts {
    private contJugadores: number = 0;
    private contJugadores_10: number = 0;
    private jugadores: Cl_Jugador_ts[] = []; // CORRECCIÓN: Arreglo de Cl_Jugador_ts
    private puntuacionMaxima: number = 0;
    private nombreGanador: string = '';

    constructor() {
        // No es necesario inicializar aquí, ya se hizo en las declaraciones
    }

    procesarJugador(jugador: Cl_Jugador_ts): void { // CORRECCIÓN: Nombramos el parámetro en singular y le damos su tipo
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

    porcentajeConMenos10(): number {
        if (this.contJugadores === 0) return 0;
        return (this.contJugadores_10 / this.contJugadores) * 100;
    }

    jugadorGanador(): string {
        return this.nombreGanador;
    }
}