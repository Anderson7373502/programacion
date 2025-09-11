class Sobre:
    """Clase que representa un sobre con billetes."""
    def __init__(self, valorBillete, cantidadBilletes):
        self._valorBillete = valorBillete
        self._cantidadBilletes = cantidadBilletes

    @property
    def valorBillete(self):
        return self._valorBillete

    @property
    def cantidadBilletes(self):
        return self._cantidadBilletes

    def plataXSobre(self):
        return self._valorBillete * self._cantidadBilletes

    def __str__(self):
        return f"{self.plataXSobre()}$"

class ProcesadorSobres:
    """Clase dedicada a acumular la plata de los sobres."""
    def __init__(self):
        self._acum_plata = 0

    def procesar_sobre(self, sobre):
        self._acum_plata += sobre.plataXSobre()

    def get_acum_plata(self):
        return self._acum_plata

if __name__ == "__main__":
    procesador = ProcesadorSobres()

    # Creamos los objetos para cada sobre
    sobre1 = Sobre(10, 5)
    sobre2 = Sobre(20, 2)
    sobre3 = Sobre(100, 4)
    sobre4 = Sobre(50, 3)

    # Creamos una lista para procesar los sobres
    sobres_list = [sobre1, sobre2, sobre3, sobre4]

    # Procesamos cada sobre
    for sobre in sobres_list:
        procesador.procesar_sobre(sobre)

    # Imprimimos el reporte final
    print("Reporte SOBRES CON DINERO")
    print("-" * 30)

    # Reporte por cada sobre
    print(f"El sobre Nº1 tiene ${sobre1.plataXSobre()}")
    print(f"El sobre Nº2 tiene ${sobre2.plataXSobre()}")
    print(f"El sobre Nº3 tiene ${sobre3.plataXSobre()}")
    print(f"El sobre Nº4 tiene ${sobre4.plataXSobre()}")
    
    print("-" * 30)

    # Reporte del total
    print(f"El total entre todos los sobres es de ${procesador.get_acum_plata():.2f}")