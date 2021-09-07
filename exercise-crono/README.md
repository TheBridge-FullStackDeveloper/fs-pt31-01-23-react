## Ejercicio

### Reloj/Cronómetro ⌚

Haz una aplicación reloj/cronómetro siguiente los siguientes puntos:

- Botón cronómetro: Pasa el formato 'hh:mm:ss' a 'hh:mm:ss:zzz' y aparecen los botones: 'start', 'stop' y 'split'
- Botón reloj: Pasa el formato 'hh:mm:ss:zzz' a 'hh:mm:ss' y desaparecen los botones: 'start', 'stop' y 'split'

- Botón start: Comienza el crono, darle una segunda vez pausa (cambia texto o icono también) el cronómetro. Darle cuando el cronómetro está pausado es hacer que continúe (cambia texto o icono también).
- Botón stop: Para el crono y desactiva los botones play y split, darle una segunda vez a este botóno hace que el crono se ponga a 0 y activa el botón play
- Botón split: Registra el momento en el que se ha pulsado el botón

* Pulsar el botón reloj cuando el crono está corriendo no para el cronómetro y debe aparecer un mensaje avisando de que el cronómetro no ha parado. Cuando volvamos a la ventana de cronómetro, el mensaje debe desaparecer.

* BONUS: Cada vez que en el reloj o el cronómetro, los números sean menores que diez (o el número que corresponda en caso de los milisegundos), rellenad vosotros con 0 para poder cumplir el formato correspondiente; ejemplo:
  - Reloj: 02:03:08
  - Crono: 00:00:08:0012

* BONUS 2 (Solo si se han explicado las rutas): Crea dos rutas (`/watch` y `/crono`) para pasar entre un modo y otro y crea un header con los enlaces a cada ruta.
