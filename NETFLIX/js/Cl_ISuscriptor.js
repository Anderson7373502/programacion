export default class Cl_ISuscriptor{
    leerCedula(){
        return prompt("Ingrese la cedula del suscriptor: ");
    }
    leerTipoPLan(){
        return parseInt(prompt("Ingrese el tipo de plan: (1 = a, 2 = b, 3 = c)"))
    }
    leerOpcion(){
        return parseInt(prompt("Ingrese la opcion: (1 = seguir registrando, 0 = salir)"))
    }
    reporteSuscriptor(cedula, tipoPLan,constoPorPLan,totalDeCobro){
        return `
        Cedula del suscriptor: ${cedula}
        <br>
        Tipo de plan: ${tipoPLan}
        <br>
        Costo por plan: ${constoPorPLan}
        <br>
        Costo total por servicio de conexion: ${totalDeCobro}
        `
    }
}