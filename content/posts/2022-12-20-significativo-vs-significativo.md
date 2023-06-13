---
author: Carlos J. Gil Bellosta
date: 2022-12-20
title: "Significativo vs significativo"

url: /2022/12/20/significativo-vs-significativo/
categories:
- estadística
tags:
- prueba de hipótesis
- significancia
- salarios
- salud pública
- política
---

Con esta entrada voy a abundar en una literatura ya muy extensa y que muchos encontrarán ya, con razón, aburrida, sobre las diferencias entre significativo y significativo.

Véase:

> En 2006, el ingreso anual bruto medio de los médicos era de 70.717 USD [...] para los países con el sistema Bismark y 119.911 USD [...] para los del sistema Beveridge. Las diferencias no son significativas (p=0.178).

Olé.

El párrafo está extraído de [_PNS89 International comparison of the remuneration of physicians among countries with bismarck and beveridge health care system_](https://doi.org/10.1016/j.jval.2019.04.1448) y traducido por un servidor.

En plata, que no hay diferencias _significativas_ entre un salario (medio) de 77k y otro de 120k.

Comentarios:

- No, no creo que haya un error en el cálculo de esos valores. No he tratado de replicar exactamente el estudio, pero he visto los datos base de otros años y 1) el número de valores que promediar es pequeño y 2) tienen una variabilidad enorme dentro de cada grupo.
- De todos modos, no se dan siquiera las condiciones mínimas para aplicar el método que hayan querido aplicar los autores (¿t-test?). Están usando para la prueba cosas que son, a su vez, medias de muchas otras cosas.
- Si tienes 7-8 valores relativamente homogéneos, tiene sentido aplicar el t-test: al fin y al cabo, Gosset lo creó precisamente para eso. Pero Gosset estaba pensando en cosas como medidas repetidas de la concentración alcohólica de una partida de barriles de cerveza.
- Pero si tienes 7-8 valores totalmente heterogéneos ---¡salarios medios de médicos en países con sistemas sanitarios distintos, niveles salariales diferentes, tasas de paro desiguales, etc.---, ¡no hagas "estadística"!
- No sé si tiene mucho o poco que ver con lo anterior, pero escribiéndolo no he podido dejar de acordarme de una entrada de hace siete años, [_Pocos de los encuestados..._](/2015/05/11/pocos-de-los-encuestados/). El motivo de la relación, débil en cualquier caso, es cómo se intenta hacer estadística sobre un hecho en el que no ha lugar.
