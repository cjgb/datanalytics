---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-11-08
lastmod: '2025-04-06T18:50:08.166973'
related:
- 2023-05-23-48-horas-consumo-domestico-electricidad-real.md
- 2014-10-14-amanece-me-cuenta-que-no-es-poco.md
- 2022-09-08-regresion-perdida-asimetrica.md
- 2012-03-01-como-poner-una-lavadora.md
- 2022-07-26-hueco-termico.md
tags:
- renovables
- hora
title: ¿Qué hora debería ser?
url: /2022/11/08/umap-tsne/
---

En esta entrada propongo y no resuelvo un problema que puede considerarse o estadístico o, más ampliamente, de ajuste de funciones ---sujeto a innumerables ruidos---: determinar qué hora debería ser.

Eso de la hora ---y me refiero a los horarios de invierno, verano, etc. y más en general, la desviación de la hora nominal con respecto a la solar--- se parece un poco a la economía. En economía tienes cantidades nominales y reales. Pareciere que las nominales son irrelevantes: tanto da llamar a una moneda 1 euro o 166.386 pesetas. Las cifras que asociamos a los objetos son, en principio, arbitrarias. Pero es bien sabido que existe una sutil interrelación entre cantidades nominales y reales sobre la que se ha escrito mucho pero yo sé poco.

Igualmente, la hora es una magnitud nominal. Nos levantamos, p.e., a las 8:00. Pero bien podíamos llamar a esa hora las 6:00 o las 9:00. Es cuestión de ponernos todos de acuerdo, supongo. Sin embargo, existe una sutil relación entre la magnitud nominal y la real: seguimos levantándonos a las 8:00 aunque esa cifra arbitraria se refiera a una hora solar distinta.

Y en principio, tanto da. O dio, durante un tiempo. En la época de nuestros abuelos, cuando casi toda la energía era renovable, había que seguir el sol. La gente no se levantaba a las 8:00 sino a la del alba. Mi abuelo nunca entendió eso de vivir con dos horas de diferencia con respecto a la hora solar y sabía cuándo tenía que volver a casa por la posición de unas estrellas al fondo del valle.

Ahora que queremos volver a ser como hasta no hace tanto, hasta que llegó _el progreso_, deberíamos volver a replantearnos qué hora queremos que sea. Para determinarlo con precisión, hay que ajustar las siguientes curvas:

### Curva de demanda de electricidad

La curva de demanda de electricidad está determinada por la hora nominal: la gente consume poco cuando duerme y conforme pone en marcha los AVEs y las cafeteras, la curva de consumo eléctrico hace cosas tales como:

![](/img/2022/11/demanda_electricidad_mananas.png#center)

Esa archiconocida curva muestra cómo crece el consumo eléctrico un día _de hacer_ entre las cinco y las nueve de la mañana.

Los conocedores de la cosa saben que es un pequeño milagro técnico poner en marcha una cantidad tan grande de potencia en un plazo de tiempo tan corto. Y la dificultad crecerá conforme nos volvamos más como fuimos cuando éramos muy pobres (es decir, dependientes de las energías renovables).

### La otra curva

La otra curva relevante es esta:

![](/img/2022/11/produccion_solar.png#center)

Es la curva de producción fotovoltaica en España ---más propiamente, la península--- durante el mismo día.

Si me hubiese molestado en superponerlas adecuadamente, se notaría aún más que la fotovoltaica llega cuando realmente ya no se la necesita (tanto).

### La formulación del problema

No sé para qué me molesto en formular el problema: se desprende necesariamente de la discusión anterior. Se trata de averiguar cómo habría de manipularse la hora nominal para que el incremento matinal de la producción fotovoltaica ocurra más oportunamente que en la actualidad.

Yo, la verdad, no tengo mucho tiempo que dedicarle al asunto. Pero si alguien manda una solución razonablemente justificada y la publica por ahí, se la enlazo en una revisión de esta entrada.