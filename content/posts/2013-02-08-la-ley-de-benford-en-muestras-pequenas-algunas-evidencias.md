---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2013-02-08 07:48:04+00:00
draft: false
lastmod: '2025-04-06T19:07:58.146402'
related:
- 2011-09-15-la-ley-de-benford.md
- 2020-11-16-que-numeros-admiten-la-distribucion-de-benford.md
- 2013-04-16-mas-sobre-la-ley-de-benford-i-una-condicion-suficiente.md
- 2013-04-02-las-leyes-de-benford.md
- 2013-05-10-mas-sobre-la-ley-de-benford-iii-la-magica-propiedad-de-los-logaritmos-decimales.md
tags:
- estadística
- ley de benford
title: 'La ley de Benford en muestras pequeñas: algunas evidencias'
url: /2013/02/08/la-ley-de-benford-en-muestras-pequenas-algunas-evidencias/
---

Hoy he cogido medio millón de números correspondientes a cuantías de dinero, en diversas monedas y he mirado a ver si cumplían la [Ley de Benford](http://en.wikipedia.org/wiki/Benford%27s_law) utilizando [código de Gregorio Serrano](http://www.grserrano.es/wp/2010/11/ejemplo-r-ley-de-benford-en-las-elecciones-catalanas-2/) (véase también [esto](https://datanalytics.com/2011/09/15/la-ley-de-benford/)). El resultado ha sido

[![](/wp-uploads/2013/02/todos.png#center)
](/wp-uploads/2013/02/todos.png#center)

donde se aprecia cómo, efectivamente, dichas cifras parecen adecuarse a la Ley de Benford. (Hay que hacer notar, sin embargo, que el test implementado por Gregorio, el de la chi-cuadrado, arroja un p-valor de 2.2e-16, que podría llevar a algunos a cuestionar si lo que ven sus ojos es cierto y a otros a divagar sobre la aplicabilidad de pruebas de este tipo a conjuntos de datos tan grandes).

Luego he hecho cuatro subselecciones de 100 de dichos valores para ver qué sucede con muestras más pequeñas. El resultado ha sido el siguiente:

[![](/wp-uploads/2013/02/cien.png#center)
](/wp-uploads/2013/02/cien.png#center)

Como vemos, con muestras de cien números diríase que, _aparentemente_, no se cumple la Ley de Benford. ¡Pero son muestras de una población mayor que sí que la _cumple_!

¿A qué viene esta entrada? A una breve charla con [David Cabo](https://twitter.com/dcabo) ayer en Twitter que me preguntaba sobre [esto](http://cafematematico.com/2013/02/04/los-papeles-de-barcenas/). Léanlo mis lectores y extraigan sus propias conclusiones.