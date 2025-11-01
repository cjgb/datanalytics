---
-categories:
- estadística
author: Carlos J. Gil Bellosta
date: 2025-10-28
description: 'Análisis del riesgo en la supervivencia y la curva de bañera: cómo ha
  cambiado el patrón de fallos en discos duros modernos frente al modelo clásico de
  la bañera.'
lastmod: '2025-11-01T17:39:34.501627'
related:
- 2013-08-21-mis-copias-de-seguridad.md
- 2020-03-11-analisis-de-la-supervivencia-cuando-todas-las-observaciones-estan-censuradas.md
- 2016-11-28-analisis-de-la-supervivencia-cuando-ningun-sujeto-ha-muerto.md
- 2020-07-08-que-queda-de-la-estadistica-robusta-clasica.md
- 2024-12-05-beta-binomial-deriva.md
tags:
- análisis de la supervivencia
- discos duros
title: Discos duros, análisis de la supervivencia y bañeras evanescentes
url: /2025/10/28/analisis-supervivencia-hdd/
---

En el análisis de la supervivencia, el concepto de riesgo está alineado con el general: a más riesgo, mayor probabilidad de evento (o deceso). El riesgo se entiende como función del tiempo, $r(t)$. Su gráfica permite comparar el riesgo en distintos periodos.

Si el riesgo es plano, la distribución temporal de los eventos es exponencial. Creo que solo sucede en los libros, sobre todo los que hablan de la radiactividad.

Se dice que los aparatejos mecánicos, bichos incluidos, tienen un riesgo con forma de bañera:
- Es alto al principio, debido a posibles defectos de construcción.
- Luego es plano durante un periodo más o menos largo.
- Finalmente, crece de nuevo conforme aparecen los achaques de la edad.

He aquí la bañera arquetípica:

![Análisis supervivencia - Bañera](/wp-uploads/2025/survival-bathtub.ppm#center)

Siempre se ha pensado que los discos duros seguían el patrón apriorístico. De hecho, el _aposteriorístico_ (i.e., el que manifestaban los datos) cuadraba. Pero ahora parece que no. De ello se habla [aquí](https://blog.dshr.org/2025/10/the-bathtub-curve.html) y [aquí](https://www.backblaze.com/blog/drive-failure-over-time-the-bathtub-curve-is-leaking/).

Al parecer:
- Hay menos defectos iniciales. Los discos nuevos fallan menos, producto de la mejora de los procesos de fabricación.
- Los discos duran más y la pendiente a la derecha de la bañera está tan lejos que ni se aprecia en los datos.

En lo que me atañe:
- Tengo un disco duro comprado en 2007 conectado 24/7 en mi NAS DIY funcionando como un campeón. Es diminuto y estoy esperando que falle para reemplazarlo por otro más grande. Pero sigue y sigue como el conejito de Duracell.
- Es un misterio que el que vino con mi ordenador de sobremesa, con más de 10 años de edad, pueda seguir funcionando. Le pasé los resultados del diagnóstico SMART a Claude y me contestó que no sabía cómo “eso” podía estar todavía funcionando. Con mayúsculas y entre signos de exclamación. Así que lo he degradado y ahora se ocupa de la tarea más indigna de todas: gestionar cachés y directorios volátiles. Lleva meses y ahí sigue. Se le oye gruñir y rechistar, pero cumple.
- Tengo dos discos duros de 500 GB de segunda mano (desahuciados de portátiles: ahora la gente solo quiere SSDs) calentando en banda, pero no sé cuándo podré comenzar a utilizarlos.