/**
 * NETFLIX 
Una agencia vende planes Netflix (A: para 1 TV, B: para 2 TVs, C: para 5 TVs), así: A= 
suscripción $3, B= suscripción $5, C= suscripción $10; además el suscriptor debe pagar un 10% 
adicional del valor de la suscripción por servicio de conexión (menos el plan C, que ya lo incluye). 
En este sentido, se desea conocer: a) precio a pagar por cada suscriptor, b) porcentaje de 
suscriptores que no pagaron servicio de conexión, c) cuál es el plan favorito. 
La agencia manifiesta que el formato para la salida de los requerimientos solicitados es: 
El suscriptor con cedula 15457858 paga 3.3$ 
El suscriptor con cedula 15457859 paga 5.5$ 
El suscriptor con cedula 15457667 paga 10$ 
Porcentaje de suscriptores que no pagaron servicio de conexión: 33.33% 
Cuál es el plan favorito: Iguales de favorito: Plan A, Plan B y Plan C. 
La salida corresponde a los siguientes datos del suscriptor (cedula, tipo plan): 
(15457858, A) (15457859, B) (15457667, C)  
 */

import Cl_Agencia from "./Cl_Agencia.js";
import Cl_IAgencia from "./Cl_IAgencia.js";
import Cl_Suscriptor from "./Cl_Suscriptor.js";
import Cl_ISuscriptor from "./Cl_ISuscriptor.js";

const agencia = new Cl_Agencia();
const iagencia = new Cl_IAgencia();
const isuscriptor = new Cl_ISuscriptor();

const salida = document.getElementById("salida");
let opcion = 1; // Usar 'let' para que la variable pueda cambiar

do {
    const cedula = isuscriptor.leerCedula();
    const tipoPlan = isuscriptor.leerTipoPLan();
    
    // Creamos el objeto suscriptor con los datos
    const suscriptor = new Cl_Suscriptor(cedula, tipoPlan);
    agencia.procesarSuscriptor(suscriptor);

    // Llamamos a los métodos en el objeto 'suscriptor'
    const costoPlan = suscriptor.constoPorPLan();
    const totalCobro = suscriptor.totalDeCobro();

    salida.innerHTML += isuscriptor.reporteSuscriptor(cedula, tipoPlan, costoPlan, totalCobro);

    opcion = isuscriptor.leerOpcion();
} while(opcion === 1);

// Reporte final de la agencia (después del bucle)
salida.innerHTML += iagencia.reporteAgencia(agencia.porcentajeSuscriptoresC(), agencia.getOpcionFavorita());