class Jugador:
    """Clase que representa a un participante del juego."""
    
    def __init__(self, nombre, carta1, carta2, carta3):
        self._nombre = nombre
        self._carta1 = carta1
        self._carta2 = carta2
        self._carta3 = carta3

    @property
    def nombre(self):
        return self._nombre

    @property
    def carta1(self):
        return self._carta1
        
    @property
    def carta2(self):
        return self._carta2
        
    @property
    def carta3(self):
        return self._carta3

    def sumar_valores(self):
        return self._carta1 + self._carta2 + self._carta3

class Juego:
    """Clase que procesa la información de todos los participantes."""
    
    def __init__(self):
        self._cont_jugadores = 0
        self._cont_jugadores_10 = 0
        self._puntuacion_maxima = 0
        self._nombre_ganador = ""

    def procesar_jugador(self, jugador):
        self._cont_jugadores += 1
        
        puntuacion = jugador.sumar_valores()
        
        if puntuacion < 10:
            self._cont_jugadores_10 += 1
        
        if puntuacion > self._puntuacion_maxima:
            self._puntuacion_maxima = puntuacion
            self._nombre_ganador = jugador.nombre

    def porcentaje_con_menos_10(self):
        if self._cont_jugadores == 0:
            return 0
        return (self._cont_jugadores_10 / self._cont_jugadores) * 100

    def jugador_ganador(self):
        return self._nombre_ganador

if __name__ == "__main__":
    juego = Juego()

    # Datos de ejemplo del ejercicio
    jugador1 = Jugador("Juan", 1, 5, 2)
    jugador2 = Jugador("José", 12, 1, 1)
    jugador3 = Jugador("Rosa", 10, 9, 8)

    # Procesamos a cada jugador
    juego.procesar_jugador(jugador1)
    juego.procesar_jugador(jugador2)
    juego.procesar_jugador(jugador3)

    print("--- Reporte del Juego de Cartas ---")
    
    # Reporte individual
    print(f"El participante {jugador1.nombre} tiene una puntuación de {jugador1.sumar_valores()}")
    print(f"El participante {jugador2.nombre} tiene una puntuación de {jugador2.sumar_valores()}")
    print(f"El participante {jugador3.nombre} tiene una puntuación de {jugador3.sumar_valores()}")
    
    print("-" * 35)

    # Reporte final
    porcentaje = juego.porcentaje_con_menos_10()
    ganador = juego.jugador_ganador()
    
    print(f"Nombre del ganador: {ganador}")
    print(f"Porcentaje de jugadores con menos de 10 puntos: {porcentaje:.2f}%")