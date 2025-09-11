export default class Cl_Procesador{
    constructor(){
       this.acumDineroSobre = 0;
    }
    procesarSobre(sobre){
        this.acumDineroSobre += sobre.plataPorSobre();
    }
}