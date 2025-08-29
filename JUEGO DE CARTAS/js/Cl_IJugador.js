export default class Cl_IJugador{
    leerNombre(){
        return prompt("Ingrese el nombre del jugador");
    }
    leerCarta1(){
        return parseInt(prompt("Ingrese el valor de la primera carta"));
    }
    leerCarta2(){
        return parseInt(prompt("Ingrese el valor de la segunda carta"));
    }
    leerCarta3(){
        // Mensaje corregido
        return parseInt(prompt("Ingrese el valor de la tercera carta"));
    }
    leerOpcion(){
        return parseInt(prompt("Ingrese la opcion que desea realizar 1.seguir 0.salir"));
    }
    
    // Formato de salida simplificado para que coincida con el enunciado
    reporteJugador(nombre, sumarValores){
        return `
            <p>El participante ${nombre} tiene una puntuación de ${sumarValores}</p>
        `;
    }
}
