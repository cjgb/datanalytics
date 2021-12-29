---
author: Carlos J. Gil Bellosta
date: 2010-11-17 22:53:32+00:00
draft: false
title: Siete consejos para expertos en análisis de datos

url: /2010/11/17/siete-consejos-para-expertos-en-analisis-de-datos/
categories:
- consultoría
- estadística
tags:
- consultoría
- estadística
- ciencia de datos
---

En mis deambulaciones por internet topé con una [página interesante](http://dataspora.com/blog/the-seven-secrets-of-successful-data-scientists/) que bien merece ser comentada en este blog. Enumera siete técnicas (o secretos en su formulación primigenia) que habrían de hacer suyas los expertos en análisis de datos. Son:

**Usa una herramienta del tamaño adecuado**

SAS u Oracle no deberían considerarse las herramientas por defecto. Para procesar y depurar ficheros de texto de menos de mil líneas bastan herramientas como R, [Google Refine](http://www.datanalytics.com/2010/11/12/google-refine-2-0-una-herramienta-con-muy-buen-aspecto/), vi, Excel/OpenCalc,...

Python (o Perl) y la misma línea de comado de Linux/UNIX pueden resultar de una ayuda inestimable.

Incluso cuando el tamaño de los datos crece por encima de lo que puede procesar un portátil corriente, puede plantearse el uso de Hadoop, [CouchDB](http://en.wikipedia.org/wiki/CouchDB), [Hibari](http://www.geminimobile.com/products/Hibari.html) u otros similares antes que recurrir por inercia o falta de imaginación a soluciones onerosas.

Sea como sea, a la hora de elegir herramientas, hay que poner el énfasis en los resultados, en el fin, antes que en la herramienta (o medio) misma.

**Comprímelo todo**

Recuerda que el principal cuello de botella es el IO. Por eso, los datos, cuanto más pequeños, mejor: así se ahorra tiempo y dinero.

**Divide tus datos**

Hay dos motivos para segmentar tus datos. El primero tiene que ver con el almacenamiento distribuido: es conveniente guardarlos en nodos distintos. El segundo, relacionado con el anterior, es el del procesamiento distribuido. El paquete de moda de R en estos momentos (y del que [hablaré muy pronto](http://www.datanalytics.com/2010/10/29/ii-jornadas-de-usuarios-de-r/)) es plyr, que está basado en una filosofía de tres tiempos: divide, procesa, recombina. El mismo principio sigue [MapReduce](http://es.wikipedia.org/wiki/MapReduce) de Google (y otros antes que él). Quien acuda a [Mieres en diciembre](http://www.lne.es/cuencas/2010/10/06/campus-acogera-i-congreso-usuarios-espana-lenguajeinformatico-r/976653.html) me oirá proponer un enfoque de solución de problemas que se reduce a:


1. Elige un subconjunto pequeño de tus datos.
2. Soluciona el problema sobre él a mano.
3. Encapsula la solución en una función.
4. Usa las herramientas del [paquete plyr](http://had.co.nz/plyr/) para aplicar dicha función sobre el conjunto de datos completo.

**Muestrea**

A la hora de examinar la estructura de los datos, de generar gráficas, etc. es conveniente muestrear para lograr resultados rápidos. Hay que tener en cuenta que siempre se cometen errores, siempre hay que repetir los procesos un número imprevisible (y testarudamente mayor que uno) de veces. Cuanto más rápidamente puedas rehacer tu análisis, más tiempo y dinero ahorrarás. En ese sentido, el muestreo es tu amigo.

Pero, ¡cuidado!: el muestreo puede resultar peligroso cuando la distribución de los datos tiene sesgos importantes.

**Usa herramientas abiertas**

Antes de hacer algo desde cero, piensa que alguien puede haberse encontrado con tu problema antes, haberlo resuelto y haber liberado el código utilizado. Aúpate en los hombros de quienes te precedieron y llegarás más arriba.

**Piensa en la nube**

Por un precio misérrimo [se puede alquilar por horas una máquina](http://analisisydecision.es/probando-r-sobre-el-ec2-de-amazon/) mucho más potente de la que ponen a tu disposición en cualquier empresa. Y con mayor capacidad de proceso. Y con mayor velocidad de transmisión de datos. Y sin tener que tratar con un _root_ perdonavidas.

**No te pases de listo**

Las ideas ingeniosas no escalan. La simplicidad sí. Atente a los estándares, normaliza tus datos, apóyate en herramientas de terceros. Un ejemplo: cuando desarrolaba [puente entre R y Python](http://cran.r-project.org/web/packages/rJython/), para transmitir objetos entre ambos sistemas tenía dos alternativas:

* Crear módulos en C que accediesen a las estructuras de datos primitivas de R y Python y las tradujesen.
* Usar[ JSON](http://es.wikipedia.org/wiki/JSON): muchos de los objetos de R pueden codificarse decodificarse como objetos JSON; lo mismo pasa con Python. Por lo tanto, es fácil trasferir objetos entre uno y otro. Más aún, la biblioteca de manipulación de objetos JSON de R era tremendamente ineficiente. Y eso generaba un cuello de botella importante en mi código. Sin embargo, el autor de la biblioteca decidió reescribirla para mejorar su eficiencia. Como consecuencia, yo, sin hacer nada en absoluto, me beneficié de su esfuerzo: ¡la ineficiencia se arregló sola!

