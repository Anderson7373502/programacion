export default class Cl_Juego {
    constructor(){
        this.contJugadores = 0;
        this.contJugadores_10 = 0;
        this.jugadores = [];
        this.puntuacionMaxima = 0; // Para llevar el registro de la puntuación más alta
        this.nombreGanador = "";   // Para guardar el nombre del ganador
    }
    
    procesarJugadores(jugador){
        this.jugadores.push(jugador);
        this.contJugadores++;
        
        const puntuacion = jugador.sumarValores();
        
        // Verificamos si la puntuación es menor a 10
        if(puntuacion < 10){
            this.contJugadores_10++;
        }
        
        // Verificamos si este jugador es el nuevo ganador
        if(puntuacion > this.puntuacionMaxima){
            this.puntuacionMaxima = puntuacion;
            this.nombreGanador = jugador.nombre;
        }
    }

    porcentajeConMenos10(){
        if(this.contJugadores === 0) return 0;
        return (this.contJugadores_10 / this.contJugadores) * 100;
    }

    jugadorGanador(){
        return this.nombreGanador;
    }
}
