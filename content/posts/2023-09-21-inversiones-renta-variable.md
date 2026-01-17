---
author: Carlos J. Gil Bellosta
categories:
- varios
date: 2023-09-21
lastmod: '2025-04-06T18:49:46.692455'
related:
- 2023-09-14-gestion-liquidez.md
- 2024-02-29-letf.md
- 2011-12-28-es-rentable-invertir-en-bolsa-en-el-largo-plazo.md
- 2012-10-18-algunos-graficos-de-informacion-bursatil.md
- 2023-06-20-goals-based-investment.md
tags:
- finanzas
- inversiones
title: Cómo gestiono mis inversiones a largo plazo en renta variable
url: /2023/09/21/inversiones-renta-variable/
---

### I.

Esta entrada es una especie de continuación de otra que escribí recientemente sobre la
[gestión de la liquidez en tiempos de inflación](/2023/09/14/gestion-liquidez/).
Describe a alto nivel y sin detalles concretos cómo gestiono mis inversiones a largo plazo en renta variable ---la renta fija merece un apartado aparte--- y cabe en mi blog por su relación (o no) con la teoría básica de las inversiones financieras, fuertemente fundamentada en la estadística.

Por supuesto ---y las palabras del título están muy medidas--- no quiere dar a entender que deba entenderse que la renta variable es la única opción de inversión a largo plazo. De hecho, estoy planeando una entrada próxima sobre la inversión en renta fija; pero eso queda, de suceder, para otro día.

### II.

He dividido el capital que invierto en renta variable de esta manera:

* 75% en una _cartera geográfica_; dentro de ella:
    - 50% en EEUU
    - 15% en la vieja Europa
    - 15% en Asia
    - 10% en Suiza
    - 10% en economías emergentes
* Y el 25% restante, en una _cartera temática_:
    - 33.3% en salud
    - 33.3% en medio ambiente
    - 33.3% en tecnología

Comentarios:
- Obviamente, busco cierto grado de diversificación. Pero sobre eso hay mucho escrito.
- Soy consciente de que existen métodos _científicos_ que permiten realizar asignaciones _óptimas_ que tienen en cuenta las rentabilidades _medias_ de los activos, sus _varianzas_, las correlaciones entre ellas, etc. pero, ¿qué sabré yo de todo eso?
- ¿Y Suiza? Son cosas mías.
- Obviamente, hay cierto solape entre la cartera geográfica y la temática: muchas de esas inversiones temáticas van a estar concentradas principalmente en EEUU.
- Si algún día tengo más dinero, no descarto añadir nuevas ramas a la lista anterior.


### III.

Para cada ítem de segundo nivel de la lista anterior he seleccionado un instrumento que invierte en algún índice relevante asociado a él (p.e., el S&P 500 para las inversiones en EEUU). Por motivos que me resultaría muy difícil de justificar racionalmente, me he decantado por ETFs, aunque no habría habido nada malo en usar fondos de inversión.

La manera en que los he seleccionado es:

1. Usar el buscador de ETFs de [JustETF](https://www.justetf.com/es/) para seleccionar los fondos que invierten en la región o en el sector de interés.
1. Elaborar una lista corta de ellos, primando por encima de casi cualquier otra consideración que tengan gastos de gestión bajos. Por ejemplo, el ETF que contraté para el S&P 500 tiene gastos de gestión del 0.07% anual (como referencia, el ETF del IBEX 35 que gestiona el BBVA los tiene del 0.38%). Hay categorías más baratas que otras: replicar el S&P 500 o el Euro Stoxx 50 es necesariamente mucho más barato que hacerlo con un índice global o de países en vías de desarrollo y eso se refleja en los gastos de gestión.
1. Ver cuáles de todos ellos son comercializados por la entidad desde la que invierto.
1. Por lo que quedará claro más abajo, un criterio de desempate entre ETFs similares es que su información esté disponible en Google Finance.

### IV.

No obstante, antes de lanzarse a comprar ETFs es imprescindible dedicar un poco de tiempo a decidir desde qué entidad operar. Habida cuenta de que, para lo que busco, el nivel de servicio es prácticamente similar, el criterio de comparación es:

* Que tengan comisiones bajas de administración y custodia (idealmente, el 0% con una _condicionalidad razonable_).
* Que tengan precios aceptables para operaciones con ETFs (que, por motivos fácilmente adivinables, cotizan prácticamente todos fuera de España).

Realmente, el primer criterio es mucho más importante que el segundo dado que la el objetivo de la inversión es perdurar en el tiempo. Hay entidades que cobran hasta el 0.2% anual por custodiar las inversiones. Que dicho de esa manera puede parecer poco, pero que son 200€ anuales por cada 100k€.

_[A veces uno no entiende la política de precios de estos negocios; afortunadamente, definirlas no es problema mío sino de otros.]_

### V.

Para gestionar el tinglado uso una hoja de cálculo de Google. Tiene las columnas obvias:
* Activo
* Porcentaje deseado (de acuerdo con los criterios de la sección II)
* Número de acciones
* Precio (gentileza de la API de Google Finance, que es el motivo por el que usar Google Docs; en un mundo en el que los datos financieros fueran de más fácil acceso, tendría una herramienta de línea de comandos hecha en Python)
* El porcentaje real de la inversión sobre el total
* La cantidad que tengo que comprar o vender para reequilibrar la cartera

Lo cual es, prácticamente, autoexplicativo: de vez en cuando se le echa un ojo a cómo va la cosa y, si procede, se realizan las operaciones pertinentes para alinear los porcentajes reales y esperados.

### VI. Consideraciones finales

Todo lo anterior es, esencialmente, lo que empresas como
[Indexa Capital](https://indexacapital.com/es/esp/)
hacen por uno por un módico precio. Que, aun siendo módico (en Indexa, según su página en la fecha de publicación es del 0.52% anual), uno puede ahorrarse. Es cierto que estas empresas realizan la selección de activos de forma más científica, cuentan con profesionales que se dedican solo a eso y que dizque tienen acceso a vehículos de inversión _institucionales_ más económicos que están vetados para los inversores de a pie.

Una última consideración es que esto de las inversiones tiene una dimensión lúdica (como bien sabrán quienes se hagan a sí mismos el favor de seguir el boletín de Matt Levine en Bloomberg). Habría gente que pagaría ese 0.52% anual de comisiones precisamente para poder autogestionar su cartera y no delegarlo todo en Indexa o similares. Entiendo también que a muchos les pudiera parecer una servidumbre insoportable.

En todo lo anterior se ha descrito una aproximación pasiva e indexada a la inversión. Habrá quien prefiera gestionar su dinero de forma más dinámica, sea indirectamente a través de fondos de gestión activa, o directamente ---cosa harto desaconsejable---. Obviamente, esta entrada no es para ellos (¿o sí?), pero se les agradece que contribuyan al proceso de descubrimiento de precios sin el cual la gestión pasiva no sería posible.