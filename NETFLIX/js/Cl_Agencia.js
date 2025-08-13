export default class Cl_Agencia {
    constructor(){
        this.contSuscriptores = 0;
        this.contSuscriptoresC = 0;
        this.suscriptor = [];
        this.conteoPlanes = {}; // Objeto para contar cada tipo de plan
    }
    
    procesarSuscriptor(suscriptor){
        this.suscriptor.push(suscriptor);
        this.contSuscriptores++;
        
        if(suscriptor.tipoPLan === 3){
            this.contSuscriptoresC++;
        }
        
        // Lógica para contar la frecuencia de cada plan
        const tipoPlan = suscriptor.tipoPLan;
        this.conteoPlanes[tipoPlan] = (this.conteoPlanes[tipoPlan] || 0) + 1;
    }
    
    porcentajeSuscriptoresC(){
        if(this.contSuscriptores === 0) return 0;
        return (this.contSuscriptoresC * 100) / this.contSuscriptores;
    }

    getOpcionFavorita(){
        let opcionFavorita = "";
        let maximoConteo = 0;

        for (const tipoPlan in this.conteoPlanes) {
            if (this.conteoPlanes[tipoPlan] > maximoConteo) {
                maximoConteo = this.conteoPlanes[tipoPlan];
                opcionFavorita = tipoPlan;
            }
        }
        return opcionFavorita;
    }
}