---
author: Carlos J. Gil Bellosta
date: 2023-09-26
title: 'Sobre la etiqueta medioambiental de los monitores'

url: /2023/09/26/etiqueta-medioambiental-monitores/
categories:
- varios
tags:
- monitores
- etiqueta medioambiental
- cambio climático
---

### I.

La semana pasada, tras 18 años de buen servicio ---ha estado encendido ininiterrumpidamente desde, por lo menos, el confinamiento---, falleció que el degradé a segundo monitor: un
[LG Flatron L1910S](https://www.lg.com/es/posventa/producto/lg-L1910S.*******)
de 19 pulgadas y una resolución hoy mísera que compré en Carrefor y me costó 500 euros del ala. Podría haberlo reparado porque su único problema, casi seguro, es un fallo superficial en la alimentación pero me he dejado llevar por el consumismo. De paso, he jubilado uno de los últimos cables VGA que deben de quedar operativos al norte del Manzanares.

El reemplazo ha sido un
[LG 27UL550](https://www.lg.com/us/monitors/lg-27ul550-w-4k-uhd-led-monitor),
que ha pasado a ser el monitor primario y que instalé el sábado.

Pero cuál no sería mi sorpresa al descubrir esto:

![](/wp-uploads/2023/monitor_certificacion.png#center)

¡Tiene la peor de las posibles etiquetas de eficiencia energética, la G, nada menos! Lo que me condujo a realizar una serie de preguntas como: es G, ¿comparado con qué? ¿Con un monitor pequeñajo? ¿Con otros similares a él? ¿Con no usar un monitor? ¿Cómo, en definitiva, se asignan certificaciones de eficiencia energética?

Lo que sigue resume las respuestas que he encontrado.

### II.

La benérita UE mantiene una base de datos de aparatos electrónicos con sus correspondientes etiquetas de eficiencia energética. La correspondiente a monitores puede consultarse [aquí](https://eprel.ec.europa.eu/screen/product/electronicdisplays). Desgraciadamente, no parece ser sencillo obtener los datos subyacentes para poder modelar en términos de tecnologías, tamaños, etc. Con lo cual, toda la estadística descriptiva que sigue ha sido realizada a golpe de ratón.

La UE se ha tomado la molestia de categorizar 19394 televisores y monitores. De ellos, hay 34 _similares_ (en términos de tamaño y resolución) al mío y la distribución de las etiquetas es la siguiente:

- E: 1.
- F: 12.
- G: 21.

De hecho, no parece existir ningún monitor de más de 27 pulgadas con una etiqueta mejor que la E. Los pocos casos que la tienen mejor, como el
[AVEL AVS270SM](https://eprel.ec.europa.eu/screen/product/electronicdisplays/1302346),
que dizque merece una A, parecen erratas; más adelante se explica por qué.

### III.

Esa manera de evaluar las cosas en la que todos suspenden sorprendería a más de un pedagogo, supongo. Quienes presten atención a la etiqueta de eficiencia energética antes y no, como yo, después de adquirir los cachivaches andarán muy frustrados. Habrá que ver si se han resignado a usar micromonitores y gafas.

Lo que queda claro es que a la hora de asignar etiquetas no se hace evalúa, como tantas veces con los exámenes, _por la normal_ sino que se usan otros criterios.

¿Cuáles son?

### IV.

Se dictan, más que se explican, en un documento que parece titularse así:
[_Consolidated text: Commission Delegated Regulation (EU) 2019/2013 of 11 March 2019 supplementing Regulation (EU) 2017/1369 of the European Parliament and of the Council with regard to energy labelling of electronic displays and repealing Commission Delegated Regulation (EU) No 1062/2010 (Text with EEA relevance)Text with EEA relevance_](https://eur-lex.europa.eu/eli/reg_del/2019/2013/2021-05-01).

La chicha está en el anexo II, donde se determina la etiqueta en función del _índice de eficiencia energético_, EEI:

![](/wp-uploads/2023/monitor_certificacion_anexo_ii_00.png#center)

El EEI se calcula, a su vez, usando la fórmula

![](/wp-uploads/2023/monitor_certificacion_anexo_ii_01.png#center)

que tiene como parámetros:

* La potencia P (en W) en funcionamiento (aunque se distinguen dos modos distintos de ellos, que dan lugar, potencialmente, a dos etiquetas distintas; de hecho, en la ficha, aparecen dos etiquetas, la _normal_ asociada el modo SDR de funcionamiento y otra más sutilmente indicada correspondiente al modo HDR).
* El área de la pantalla en dm².
* Un coeficiente corrector, que es ignorable porque se define como $0$ para monitores y televisores.

La fórmula es de lo más curiosa e intrigante. Ni idea de dónde puede haber salido. Pero tiene toda la pinta de un _sujétame el cubata_ de un ingeniero guasón a los burócratas de la UE: el denominador es sin duda intimidante, pero se parece muy sospechosamente a lo que se conoce popularmente como _recta_; en efecto, si uno hace

{{< highlight python >}}
den <- function(x)
  (3 * (90 * tanh(.025 + 0.0035 * (x - 11)) + 4) + 3)
x <- runif(100, 10, 100)
y <- den(x)
plot(x, den(x))
abline(lm(y ~ x), col = "red")
{{< / highlight >}}

obtiene

![](/wp-uploads/2023/monitor_certificacion_recta_regulatoria.png#center)

La gráfica anterior cubre (¡con creces!) el rango típico de tamaños en dm² de los monitores: el que se me murió tenía 10 dm²; el actual, 20 dm².

La recta que _mejor_ aproxima la curva regulatoria del denominador es $12.3 + 0.91 A$, por lo que la ecuación de la regulación es, aproximadamente,

$$\text{IEE} = \frac{P + 1}{12.3 + 0.91 A},$$

de donde se deduce que para conseguir una certificación de A, la cota de la potencia es

$$P < 0.3 \times (12.3 + 0.91 A) - 1 = 2.69 + 0.273 A \sim 2.5 + A / 4.$$

Mi nuevo monitor sería A si consumiese unos 7.5 W en lugar de 35.

La fórmula tiene una _interpretación_ obvia: para tener la máxima calificación, se permite un consumo de:

- 0.25 W por dm² y
- 2.5 W para _asuntos propios_: pérdidas del transformador y el resto de la electrónica.


### V.

- Hay que celebrar que, a pesar de todo, los fundamentos físicos de la cosa parecen firmes: antes de ver nada, antes de mirar datos o fórmulas, parece evidente que la eficiencia energética tiene que ver con algún cociente entre potencia y área para que el modelo, al menos, sea _dimensionalmente correcto_.
- Cualquier dispositivo electrónico que consuma menos de 2.5 W puede venderse en la UE como monitor con la máxima nota en términos de eficiencia energética siempre que su superficie de visión sea nula. Bueno, no, no sería posible, pero es entretenido ---¡e instructivo!--- jugar a ver qué pasa en los extremos de los rangos de las regresiones.
- Se me escapan enteramente los criterios de la clasificación para monitores. Si alguien les ve justificación alguna y quiere aclararnos el asunto a todos, tiene a su disposición los comentarios.
- No obstante, he estado especulando con que para obtener la etiqueta A hace falta gastar poco más o menos la cantidad de energía que contienen en el límite teórico los fotones necesarios para poder leer lo que se escribe. A saber.
- Por lo demás, no tengo claro a dónde conduce todo este análisis. Lo de que el mundo es un gran circo ya lo sabíamos al principio.
