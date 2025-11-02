---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- programación
- r
date: 2016-11-15 08:13:18+00:00
draft: false
lastmod: '2025-04-06T19:07:00.516852'
related:
- 2017-05-16-soy-un-dinosaurio-sobre-las-novedades-de-r.md
- 2010-11-17-siete-consejos-para-expertos-en-analisis-de-datos.md
- 2022-09-20-tools-etl-memory.md
- 2013-01-23-mapa-mental-de-mi-primera-clase-del-semestre.md
- 2018-04-09-la-intrahistoria-de-mi-libro-de-r.md
tags:
- ciencia de datos
- programación
- r
title: Una fina, tenue, somera capa de sintaxis
url: /2016/11/15/una-fina-tenue-somera-capa-de-sintaxis/
---

Estuve el otro día en una [charla de José Luis Cañadas en el grupo de usuarios de R de Madrid](http://madrid.r-es.org/39-jueves-10-de-noviembre-2016/) sobre `sparklyr`. Hoy en otra de [Juan Luis Rivero](https://www.linkedin.com/in/juanluisrivero) sobre, esencialmente, lo mismo, pero esta vez con Python. Y podría escribir "etc.".

![evolucion_convergente](/img/2016/11/evolucion_convergente.jpg)

Me centraré en la de José Luis, aunque podría decir lo mismo de cualquiera de las otras. No había trabajado con `sparklyr`. No soy siquiera fan de `dplyr` (aunque no es que no se lo recomiende a otros; es simplemente, como tantas cosas, que soluciona problemas que no tengo). Pero la seguí sin mayores problemas. Lo que tenía de nuevo era una fina, somera capa de sintaxis que enlazaba fundamentos con fundamentos.

Los primeros, de todo lo relacionado con el paralelismo subyacente. Los segundos, de los métodos estadísticos con los que remató sus ejemplos.

La ciencia de datos, gracias a `dplyr` y similares, se está convirtiendo en eso: una tenue capa de sintaxis enlaza conceptos fundamentales. Y eso quiere decir que el valor (que uno quiera aportar a su bagaje de científico de datos) reside precisamente en su comprensión de esos principios básicos y, si se quiere abstractos: cómo funciona el paralelismo, qué se le puede pedir y qué no, cómo optimizar procesos; por qué usar una regresión logística y no otra cosa (y a la inversa), cómo interpretar el modelo resultante, cómo preprocesar las variables, etc.

Luego, enlazarlos, será, si me dejáis repetirme, aplicar una fina capa de pegamento sintáctico.

**Coda:** La imagen que acompaña a la entrada sirve para ilustrar según Google Images el concepto de evolución convergente. ¿No se diría, abundando en el tema de esta entrada, que los lenguajes típicos de la ciencia de datos están sujetos a un proceso análogo?