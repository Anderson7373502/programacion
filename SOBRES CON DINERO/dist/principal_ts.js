import Cl_Procesador_ts from "./Cl_Procesador_ts.js";
import Cl_Sobre_ts from "./Cl_Sobre_ts.js";
const procesador = new Cl_Procesador_ts();
// Creamos los objetos para cada sobre con los datos del ejercicio
const sobre1 = new Cl_Sobre_ts(10, 5);
const sobre2 = new Cl_Sobre_ts(20, 2);
const sobre3 = new Cl_Sobre_ts(100, 4);
const sobre4 = new Cl_Sobre_ts(50, 3);
// Procesamos cada sobre para acumular el total general
procesador.procesarSobre(sobre1);
procesador.procesarSobre(sobre2);
procesador.procesarSobre(sobre3);
procesador.procesarSobre(sobre4);
// Obtenemos los resultados finales
const obtenerDineroTotal = procesador.obtenerDineroTotal();
// Obtenemos el elemento de salida en el HTML
const salida = document.getElementById("salida");
if (salida) {
    // Reporte de cada sobre
    salida.innerHTML = `
        <p>El sobre Nº1 tiene $${sobre1.plataXSobre()}</p>
        <p>El sobre Nº2 tiene $${sobre2.plataXSobre()}</p>
        <p>El sobre Nº3 tiene $${sobre3.plataXSobre()}</p>
        <p>El sobre Nº4 tiene $${sobre4.plataXSobre()}</p>
        <br>
        <p><strong>El total entre todos los sobres es de $${obtenerDineroTotal.toFixed(2)}</strong></p>
    `;
}
