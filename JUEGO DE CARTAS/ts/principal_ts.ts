import Cl_juego_ts from "./Cl_Juego_ts.js";
import Cl_Jugador_ts from "./Cl_jugador_ts.js";

const juego = new Cl_juego_ts();
const salida = document.getElementById("salida");

// --- Datos de prueba del ejercicio ---
const jugador1 = new Cl_Jugador_ts("Juan", 1, 5, 2);
const jugador2 = new Cl_Jugador_ts("José", 12, 1, 1);
const jugador3 = new Cl_Jugador_ts("Rosa", 10, 9, 8);

// Procesamos a cada jugador
juego.procesarJugador(jugador1);
juego.procesarJugador(jugador2);
juego.procesarJugador(jugador3);

if (salida) {
    // Reporte individual de cada jugador
    salida.innerHTML += `
        <p>El participante ${jugador1.nombre} tiene una puntuación de ${jugador1.sumarValores()}</p>
        <p>El participante ${jugador2.nombre} tiene una puntuación de ${jugador2.sumarValores()}</p>
        <p>El participante ${jugador3.nombre} tiene una puntuación de ${jugador3.sumarValores()}</p>
    `;
    
    // Separador entre reportes
    salida.innerHTML += "<br><hr>";

    // Reporte final del juego
    const jugadorGanador = juego.jugadorGanador();
    const porcentajeConMenos10 = juego.porcentajeConMenos10();

    salida.innerHTML += `
        <p>Nombre del ganador: ${jugadorGanador}</p>
        <p>Porcentaje de jugadores con menos de 10 puntos: ${porcentajeConMenos10.toFixed(2)}%</p>
    `;
}