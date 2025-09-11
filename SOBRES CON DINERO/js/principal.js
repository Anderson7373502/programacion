
/**
 * SOBRES CON DINERO 
Se tienen N sobres con dinero, cada uno con billetes del mismo valor. De cada sobre se 
conoce el valor del billete y la cantidad. Se requiere determinar el total de dinero: a. en cada 
sobre, b. entre todos los sobres. 
El cliente entrega el siguiente formato para la presentación de la salida: 
El sobre Nº1 tiene $50 
El sobre Nº2 tiene $40 
El sobre Nº3 tiene $400 
El sobre Nº4 tiene $150 
El total entre todos los sobres es de $640 
Se procesaron para este ejemplo 4 sobres: a) 5 billetes de $10, b) 2 de $20, c) 4 de $100 y 
d) 3 de $50
 */

import Cl_IProcesador from "./Cl_IProcesador.js";
import Cl_Procesador from "./Cl_Procesardor.js";
import Cl_ISobre from "./Cl_ISobre.js";
import Cl_Sobre from "./Cl_Sobre.js";

const procesador = new Cl_Procesador();
const iprocesador = new Cl_IProcesador();
const isobre = new Cl_ISobre();

const salida = document.getElementById("salida");

let opcion = 1;
do{
    const valorBillete = isobre.leerValorBilletes();
    const cantidadBilletes = isobre.leerCantidadBilletes();

    const sobre = new Cl_Sobre(valorBillete, cantidadBilletes);
    procesador.procesarSobre(sobre);

    opcion = isobre.leerOpcion();

    salida.innerHTML += isobre.reporteSobre(sobre.valorBillete, sobre.cantidadBilletes, sobre.plataPorSobre());
}while(opcion == 1 );

salida.innerHTML += iprocesador.reporteProcesador(procesador.acumDineroSobre);