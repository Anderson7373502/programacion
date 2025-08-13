export default class Cl_Suscriptor{
    constructor(cedula,tipoPLan){
        this.cedula = cedula;
        this.tipoPLan = +tipoPLan;
    }
    set cedula(cedula){
        this._cedula = cedula;
    }
    get cedula(){
        return this._cedula;
    }
    set tipoPLan(tipoPLan){
        this._tipoPLan = tipoPLan;
    }
    get tipoPLan(){
        return this._tipoPLan;
    }

    /*
    Metodos
    */

    constoPorPLan(){
        if(this.tipoPLan == 1){
            return 3;
        }
        else if(this.tipoPLan == 2){
            return 5;
        }
        else if(this.tipoPLan == 3){
            return 10;
        }
        else{
            return alert("EL tipo de plan no es valido");
        }
    }
     porcentaje_segun_tipo(){
        if(this.tipoPLan == 1){
            return (this.constoPorPLan() * 10)/100;
        }
        else if(this.tipoPLan == 2){
            return (this.constoPorPLan() * 10)/100;
        }
       else if(this.tipoPLan == 3){
            return 0;
       }
       else{
        return alert("El tipo de plan no es valido");
       }
    }

    totalDeCobro(){
        return this.constoPorPLan() + this.porcentaje_segun_tipo();
    }

}