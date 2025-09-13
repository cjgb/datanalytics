---
author: Carlos J. Gil Bellosta
categories:
- consultoría
date: 2011-06-06 07:37:28+00:00
draft: false
lastmod: '2025-04-06T19:00:56.244159'
related:
- 2011-01-21-verdades-mentiras-estadisticas-y-autopistas-radiales.md
- 2018-09-21-una-anecdota-sobre-el-mercado-electrico-y-sus-mermas.md
- 2019-03-26-hay-algo-podrido-en-la-microeconomia-normativa.md
- 2012-07-06-el-precio-de-la-desigualdad-i-e-el-boson-de-higgs-y-fracciones.md
- 2024-10-03-ergodicidad.md
tags:
- consultoría
- economía
title: La tragedia del buen rollito
url: /2011/06/06/la-tragedia-del-buen-rollito/
---

No sé si mis lectores están al tanto del problema conocido como [tragedia de los comunes](http://es.wikipedia.org/wiki/Tragedia_de_los_comunes) (que, más bien, debería denominarse tragedia de las _dehesas_). Consiste en que una serie de agentes económicos (ganaderos) comparten un bien común, que no pertenece a nadie (una dehesa), en la que hacen pastar sus vacas. Todos ellos están interesados en hacer pastar el máximo número posible de ellas. Pero la capacidad de generar pasto de la dehesa es limitada y llega un momento en que ésta se sobreexplota y es incapaz de alimentar tanta vaca. Todos los ganaderos pierden, pero a ninguno le interesa reducir unilateralmente el tamaño de su cañada.

Imaginad una comunidad de vecinos en la que agua y electricidad fueran gratuitas. A ningún vecino le interesaría consumir menos agua o menos luz aunque, como hay limitaciones físicas en la distribución, si todos dilapidasen agua en un momento determinado, ésta saldría sin presión de los grifos; y si demasiados aparatos se conectasen a la red simultáneamente, saltarían los plomos.

Obviamente, esta versión cañí de la tragedia de los comunes no ocurre porque cada vecino tiene su propio contador de agua y electricidad y paga por su propio consumo. La decisión de ahorrar más o menos y de optimizar el consumo se descentraliza a los propios consumidores: son ellos los que mejor pueden evaluar su necesidad de consumo, su presupuesto y ajustar el primero al segundo.

Sin embargo, esta solución descentralizada y, seguramente, eficiente en el sentido que dan los economistas a la palabra, no imperaba en un proyecto en el que trabajé hace muchos, muchos años, en un país muy, muy lejano al que ya me referí en otra ocasión. La versión de la tragedia de los comunes que lo afectaba era la siguiente:



* Diversos equipos de trabajo desarrollaban código sobre un mismo servidor.
* Los equipos de trabajo necesitan espacio de disco y tiempo de CPU para que corrieran sus procesos.
* Espacio de disco y tiempo de CPU se cedían gratis a los equipos.

¿Os imagináis el resultado? Discos duros llenos, tiempos de ejecución interminables: ¡ninguno de los equipos tenía verdaderos incentivos en diseñar procesos más eficientes!

Curiosamente, en aquel proyecto, y a pesar de que lo fue en una institución sobrada de economistas que, seguro, han oído alguna vez hablar del [teorema de Coase](http://es.wikipedia.org/wiki/Teorema_de_Coase), optaron por un sistema de gestión estalinista: asignaron a un _komisario_ la tarea de liberar espacio en disco y construyeron un sofisticadísimo procedimiento para gestionar los tiempos de ejecución. Mi buen compañero de entonces, Jürgen Neffe, aplaudió encarecidamente su conveniencia y oportunidad.

Ignoro en qué acabó la iniciativa porque he perdido el contacto con aquella gente. Pero quiero aprovechar para responder a Jürgen desde mi bitácora: más les hubiera valido despedir al comisario, guardarse la complejidad para otras coyunturas y haber establecido un mercado en el que equipos de trabajo pudieran comprar y vender derechos de uso; elegir entre si optimizar o comprar y, finalmente, remunerar a sus miembros según su capacidad para desarrollar código eficiente.