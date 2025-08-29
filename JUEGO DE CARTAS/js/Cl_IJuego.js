export default class Cl_IJuego{
    reporteJuego(jugadorGanador, porcentajeConMenos10){
        return `
        El jugador ganador es: ${jugadorGanador}
        <br>
        Porcentaje de jugadores con menos de 10 puntos: ${porcentajeConMenos10}%
        
        `
    }
}