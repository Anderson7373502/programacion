import Cl_Agencia_ts from "./Cl_Agencia_ts.js";
import Cl_Suscriptor_ts from "./Cl_Suscriptor_ts.js";
const agencia = new Cl_Agencia_ts();
const salida = document.getElementById("salida");
// --- Datos de ejemplo del ejercicio ---
const suscriptor1 = new Cl_Suscriptor_ts("15457858", 1); // Plan A = 1
const suscriptor2 = new Cl_Suscriptor_ts("15457859", 2); // Plan B = 2
const suscriptor3 = new Cl_Suscriptor_ts("15457667", 3); // Plan C = 3
// Procesamos a cada suscriptor con la agencia
agencia.procesarSuscriptor(suscriptor1);
agencia.procesarSuscriptor(suscriptor2);
agencia.procesarSuscriptor(suscriptor3);
if (salida) {
    // Generamos el reporte individual de cada suscriptor
    salida.innerHTML += `
        <p>El suscriptor con cedula ${suscriptor1.cedula} paga $${suscriptor1.totalDeCobro()}</p>
        <p>El suscriptor con cedula ${suscriptor2.cedula} paga $${suscriptor2.totalDeCobro()}</p>
        <p>El suscriptor con cedula ${suscriptor3.cedula} paga $${suscriptor3.totalDeCobro()}</p>
        <br>
    `;
    // Generamos y mostramos el reporte final de la agencia
    const porcentaje = agencia.porcentajeSuscriptoresC();
    const planFavorito = agencia.getOpcionFavorita();
    salida.innerHTML += `
        <p>Porcentaje de suscriptores que no pagaron servicio de conexión: ${porcentaje.toFixed(2)}%</p>
        <p>Cuál es el plan favorito: Plan ${planFavorito}</p>
    `;
}
