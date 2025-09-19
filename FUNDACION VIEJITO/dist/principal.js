import Donador from "./donador.js";
const salida = document.getElementById("salida");
const tasaCambio = 40;
// Lista de donadores
const donadores = [
    new Donador("Sofía", 10, 80),
    new Donador("Mateo", 0, 600),
    new Donador("Elena", 50, 0),
    new Donador("David", 20, 100)
];
let totalDolares = 0;
let totalBolivares = 0;
let mejorDonador = "";
let mayorAporte = 0;
salida.innerHTML += `<h2>🏛️ Fundación Viejitos - Detalle de Donaciones</h2>`;
donadores.forEach(d => {
    const aporteD = d.getTotalDolares(tasaCambio);
    const aporteB = d.getTotalBolivares(tasaCambio);
    salida.innerHTML += `<p>${d.nombre} aporta $${aporteD.toFixed(2)} (Bs.${aporteB.toFixed(0)})</p>`;
    totalDolares += aporteD;
    totalBolivares += aporteB;
    if (aporteD > mayorAporte) {
        mayorAporte = aporteD;
        mejorDonador = d.nombre;
    }
});
salida.innerHTML += `<br><p><strong>💰 Total recaudado: $${totalDolares.toFixed(2)} (Bs.${totalBolivares.toFixed(0)})</strong></p>`;
salida.innerHTML += `<p><strong>🏅 El mejor donador fue: ${mejorDonador}</strong></p>`;
