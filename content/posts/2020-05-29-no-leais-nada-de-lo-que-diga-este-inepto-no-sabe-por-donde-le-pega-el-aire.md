---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-05-29 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:02:16.654375'
related:
- 2017-12-05-como-se-mide-el-numero-medio-de-dias-para-pagar-una-factura.md
- 2022-05-12-principio-mediocridad.md
- 2016-11-28-analisis-de-la-supervivencia-cuando-ningun-sujeto-ha-muerto.md
- 2020-03-11-analisis-de-la-supervivencia-cuando-todas-las-observaciones-estan-censuradas.md
- 2020-05-28-sobre-la-funcion-de-riesgo-en-el-analisis-de-la-supervivencia.md
tags:
- semivida
- supervivencia
title: 'No leáis nada de lo que diga este inepto: no sabe por dónde le pega el aire'
url: /2020/05/29/no-leais-nada-de-lo-que-diga-este-inepto-no-sabe-por-donde-le-pega-el-aire/
---

Hay gente que va dándoselas de nosequé y luego resulta que no sabe por dónde le pega el aire. Veámoslo hablando de análisis de la supervivencia:

>En cualquier caso, con datos de esa naturaleza (isótopos radioactivos, enfermos de cáncer, etc.) no se informa la vida media sino, generalmente, la semivida. Es decir, cuánto tiempo pasa hasta que se liquida la mitad de una cohorte. En este caso, lo suyo sería estimar la semivida ponderada por importe.

A ver, con isótopos radioactivos, ya que los citas, la vida media es $latex 1 / \lambda$ (de estar sujetos a un decaimiento exponencial de la forma $latex \exp(-\lambda t)$ y la semivida es $latex \log 2 / \lambda$. ¿Qué demonios cambia tan sustancialmente de usar la una o la otra?

Casi se me olvida citar la fuente en la que abreva el inepto. Es [esta](https://www.datanalytics.com/2017/12/05/como-se-mide-el-numero-medio-de-dias-para-pagar-una-factura/).