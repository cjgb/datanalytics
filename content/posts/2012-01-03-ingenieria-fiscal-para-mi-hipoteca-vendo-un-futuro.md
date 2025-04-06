---
author: Carlos J. Gil Bellosta
categories:
- finanzas
- números
date: 2012-01-03 06:23:30+00:00
draft: false
lastmod: '2025-04-06T18:54:16.995401'
related:
- 2012-01-09-c2bfcuanto-gana-el-banco-con-tu-hipoteca.md
- 2023-09-14-gestion-liquidez.md
- 2024-02-29-letf.md
- 2012-07-04-libor-libor-fundeu-y-barclays-claro.md
- 2023-09-21-inversiones-renta-variable.md
tags:
- euribor
- finanzas
- futuros
- números
- hipotecas
title: 'Ingeniería fiscal para mi hipoteca: ¿vendo un futuro?'
url: /2012/01/03/ingenieria-fiscal-para-mi-hipoteca-fvendo-un-futuro/
---

Tengo una hipoteca. El tipo de interés que pago es el Euribor a 12 meses más un diferencial. He usado una calculadora de hipotecas y he descubierto que si el Euribor sube un 1%, mi cuota (anual, es decir, sumando los incrementos de los 12 meses) se incrementaría en 660 euros.

Y me he preguntado: ¿existe algún producto financiero que me dé dinero si sube el Euribor? ¿Existe alguna manera de protegerme de una subida del índice?

Y sí, existen los [futuros sobre el Euribor](http://www.euronext.com/trader/contractspecifications/derivative/wide/contractspecifications-3657-EN.html?euronextCode=I-LON-FUT). El contrato tiene un nominal, la muy solemne cifra de un millón de euros, un precio y una fecha de expiración.

Si compro un futuro hoy con fecha de expiración, digamos, el 1 de enero de 2014, y un precio de, por ejemplo, 99.10, entonces:

* Hoy no pago nada, salvo una comisión de 10 euros.
* El día 1 de enero de 2014

	* pagaría el interés que me daría un hipotético depósito de un millón de euros a tres meses con un tipo igual al Euribor en esa fecha y
	* recibiría el interés que me daría un hipotético depósito de un millón de euros a tres meses con un tipo igual a (100 - 99.10 =) 0.9%.


Por ejemplo, si el 1 de enero de 2014 el Euribor es del 1%, pagaría 1000000 * 0.01 / 4 = 2.500 euros. Y recibiría 1000000 * 0.009 / 4 = 2.250 euros. En total, perdería 250 euros. Pero si el euribor baja y se queda en el 0.8%, ganaría 250 euros.

Obviamente, para _protegerme_ de subidas del Euribor, no compraría sino que vendería un futuro. Yo recibiría el interés correspondiente al Euribor en la fecha de expiración y pagaría la tasa deducida del precio de venta del futuro. Si el Euribor subiese un 1% desde la fecha de compra, ganaría 2.500 euros que compensarían el coste añadido de mi hipoteca.

El _hedge _no es perfecto: la hipoteca tiene un nominal y unos vencimientos que no puedo replicar usando los contratos habituales. Además, los productos son distintos: mi hipoteca está referenciada al Euribor a 12 meses y los futuros, al Euribor a 3 meses. Pero su evolución es, históricamente, paralela, como se puede apreciar en la siguiente figura (gentileza de la Wikipedia),

[![](/wp-uploads/2012/01/euribor1999_2011.png#center)
](/wp-uploads/2012/01/euribor1999_2011.png#center)

que muestra la evolución del Euribor a una semana (verde), tres meses (azul) y un año (rojo) durante los últimos años.

La última salvedad es que no me interesa demasiado cerrar mi futuro en una fecha de vencimiento concreta. Pero existen unos futuros _continuos_ —que no tengo muy claro cómo funcionan: creo que son una media ponderada de futuros con distintas fechas de vencimiento— que me permitirían salir del contrato no en una fecha concreta sino cuando me conviniese. Pero me gustaría saber primero cómo funcionan exactamente.

Y bueno, si finalmente me pongo torero y vendo el futuro, os contaré qué tal me fue y cómo me afectó la letra pequeña de este tipo de cosas.

Coda: quien quiera saber más sobre este tipo de técnicas, puede leer este [artículo](http://www2.stetson.edu/fsr/abstracts2/V8-2%20A4.pdf).