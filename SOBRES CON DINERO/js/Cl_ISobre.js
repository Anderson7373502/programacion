export default class Cl_ISobre{
    leerValorBilletes(){
        return parseInt(prompt("Ingrese el valor del billete"));
    }
    leerCantidadBilletes(){
        return parseInt(prompt("Ingrese la cantidad de billetes"));
    }
    leerOpcion(){
        return parseInt(prompt("Ingrese la opcion (1. si desea continuar, 0. si desea salir)"));
    }
    reporteSobre(valorBillete,cantidadBilletes,plataPorSobre){
        return `
        Valor del billete: ${valorBillete};
        <br>
        Cantidad de billetes: ${cantidadBilletes};
        <br>
        plata por sobre: ${plataPorSobre};
        <br>
        `
    }
}