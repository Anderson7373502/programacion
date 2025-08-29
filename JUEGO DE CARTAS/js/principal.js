/**
 * En el juego a cada participante se le entregan 3 cartas numeradas del 1 al 12, gana quien 
sume mayor puntuación. Se desea conocer a) la puntuación de cada participante, b) el nombre 
del ganador, c) el porcentaje de jugadores con menos de 10 puntos. 
Se tiene que el formato para la salida de los requerimientos solicitados es: 
El participante Juan tiene una puntuación de 8 
El participante José tiene una puntuación de 14 
El participante Rosa tiene una puntuación de 27 
Nombre del ganador: Rosa 
Porcentaje de jugadores con menos de 10 puntos:33.33% 
La salida corresponde a los siguientes datos del participante (nombre, carta1, carta2, carta3): 
(Juan,1,5,2) (José, 12,1,1) (Rosa, 10,9,8).
 */

import Cl_IJuego from "./Cl_IJuego.js";
import Cl_Juego from "./Cl_Juego.js";
import Cl_IJugador from "./Cl_IJugador.js";
import Cl_Jugador from "./Cl_Jugador.js";

const juego = new Cl_Juego();
const ijuego = new Cl_IJuego();
const ijugador = new Cl_IJugador();

const salida = document.getElementById("salida");

let opcion = 1;

do {
    // Leemos los datos del jugador a través de la interfaz
    const nombre = ijugador.leerNombre();
    const carta1 = ijugador.leerCarta1();
    const carta2 = ijugador.leerCarta2();
    const carta3 = ijugador.leerCarta3();

    // Creamos el objeto jugador y lo procesamos
    const jugador = new Cl_Jugador(nombre, carta1, carta2, carta3);
    juego.procesarJugadores(jugador);

    // Mostramos el reporte del jugador usando += para no sobrescribir
    if (salida) {
        salida.innerHTML += ijugador.reporteJugador(jugador.nombre, jugador.sumarValores());
    }
    
    // Leemos la opción para continuar o salir
    opcion = ijugador.leerOpcion();

} while (opcion === 1); // Usamos === para una comparación estricta

// Después del bucle, mostramos el reporte final
const jugadorGanador = juego.jugadorGanador();
const porcentajeConMenos10 = juego.porcentajeConMenos10();

if (salida) {
    // Usamos += para añadir el reporte final
    salida.innerHTML += ijuego.reporteJuego(jugadorGanador, porcentajeConMenos10.toFixed(2));
}