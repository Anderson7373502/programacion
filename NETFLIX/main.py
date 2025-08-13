class Suscriptor:
    """Clase que representa a un suscriptor."""
    
    def __init__(self, cedula, tipo_plan):
        self._cedula = cedula
        self._tipo_plan = tipo_plan

    @property
    def cedula(self):
        return self._cedula

    @property
    def tipo_plan(self):
        return self._tipo_plan

    def costo_por_plan(self):
        if self._tipo_plan == 1:  # Plan A
            return 3
        elif self._tipo_plan == 2:  # Plan B
            return 5
        elif self._tipo_plan == 3:  # Plan C
            return 10
        else:
            return 0

    def porcentaje_segun_tipo(self):
        if self._tipo_plan == 1 or self._tipo_plan == 2:
            return (self.costo_por_plan() * 10) / 100
        elif self._tipo_plan == 3:
            return 0
        else:
            return 0

    def total_de_cobro(self):
        return self.costo_por_plan() + self.porcentaje_segun_tipo()

class Agencia:
    """Clase que procesa la información de los suscriptores."""
    
    def __init__(self):
        self._cont_suscriptores = 0
        self._cont_suscriptores_c = 0
        self._conteo_planes = {}

    def procesar_suscriptor(self, suscriptor):
        self._cont_suscriptores += 1
        
        if suscriptor.tipo_plan == 3:
            self._cont_suscriptores_c += 1
            
        tipo_plan = suscriptor.tipo_plan
        self._conteo_planes[tipo_plan] = self._conteo_planes.get(tipo_plan, 0) + 1

    def porcentaje_suscriptores_c(self):
        if self._cont_suscriptores == 0:
            return 0
        return (self._cont_suscriptores_c * 100) / self._cont_suscriptores

    def get_opcion_favorita(self):
        opcion_favorita = ""
        max_conteo = 0
        
        for tipo_plan, conteo in self._conteo_planes.items():
            if conteo > max_conteo:
                max_conteo = conteo
                opcion_favorita = tipo_plan
                
        return opcion_favorita

if __name__ == "__main__":
    agencia = Agencia()

    # Datos de ejemplo del ejercicio
    suscriptor1 = Suscriptor("15457858", 1)  # Plan A = 1
    suscriptor2 = Suscriptor("15457859", 2)  # Plan B = 2
    suscriptor3 = Suscriptor("15457667", 3)  # Plan C = 3

    # Procesamos a cada suscriptor
    agencia.procesar_suscriptor(suscriptor1)
    agencia.procesar_suscriptor(suscriptor2)
    agencia.procesar_suscriptor(suscriptor3)

    print("--- Reporte de la Agencia de Suscripciones ---")
    
    # Reporte individual
    print(f"El suscriptor con cedula {suscriptor1.cedula} paga ${suscriptor1.total_de_cobro():.2f}")
    print(f"El suscriptor con cedula {suscriptor2.cedula} paga ${suscriptor2.total_de_cobro():.2f}")
    print(f"El suscriptor con cedula {suscriptor3.cedula} paga ${suscriptor3.total_de_cobro():.2f}")
    
    print("-" * 30)

    # Reporte final
    porcentaje = agencia.porcentaje_suscriptores_c()
    plan_favorito = agencia.get_opcion_favorita()
    
    print(f"Porcentaje de suscriptores que no pagaron servicio de conexión: {porcentaje:.2f}%")
    print(f"Cuál es el plan favorito: Plan {plan_favorito}")