export default class Cl_IAgencia{
    reporteAgencia(porcentajeSuscriptoresC,opcionFavorita){
        return`
        Porcentaje de suscriptores que no pagaron servicio de conexión: ${porcentajeSuscriptoresC}%
        <br>
        Cuál es el plan favorito: ${opcionFavorita}
        `
    }
}