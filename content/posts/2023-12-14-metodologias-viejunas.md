---
author: Carlos J. Gil Bellosta
date: 2023-12-14
draft: false
title: Organización de proyectos... ¿viejuna?
url: /2023/12/14/orgamizacion-proyectos-viejuna/
categories:
- ciencia de datos
tags:
- ciencia de datos
- metodología
- proyectos
- git
- gcp
---

## I.

Este blog tiene muchos años. Cuando comencé a escribir en él, la gestión de proyectos de ciencia de datos era un carajal. Muchos de los que se dedicaban a esto organizaban los proyectos _en plan_ TFG: ficheros y tablas con nombres de andar por casa, desorden, código que viajaba en correos electrónicos,...

Muchos eran renuentes a utilizar herramientas de control de versiones. Por aquel entonces _reinaba_ ---cuando se utilizaba, que era la excepción más que la regla---
[subversion](https://en.wikipedia.org/wiki/Apache_Subversion).
Tanto `git` como Github eran todavía más promesas que otra cosa. Había _forjas_ ---¡se ve que todavía existe [R-forge](https://r-forge.r-project.org/)!---, que era lo mejorcito con lo que se podía contar para trabajar colaborativamente, pero solo con los cuatro _friquis_ que estaban dispuestos a adoptar métodos de trabajo _modernos_. A los más les incomodaba tener que abandonar sus mal adquiridos hábitos.

Eran los tiempos oscuros en los que te encontrabas _rutas_ del tipo `C:/Users/Jesusín` por todas partes. ¡Y había que cuidarse mucho de no decirle nada al tal Jesusín!

## II.

Hoy en día parece que nos hemos acabado por poner todos de acuerdo en gestionar nuestros proyectos de forma más o menos razonable. Se da por hecho que la gente desarrolla sobre Github o plataformas similares, etc. No somos conscientes de la cantidad de información que está sobreentendida al colaborar en un proyecto con terceros: a pesar de las diferencias y las excepciones, los más estamos alineados en la mayor parte de las cosas. No solo sabemos las mismas cosas sino que sabemos ---y damos por hecho--- que los otros también las saben. Es el pequeño paraíso que los estudiosos de la teoría de juegos llaman _colaboración sin comunicación_.

## III.

Pero, ¿estamos asistiendo a un nuevo cambio? ¿Nos estamos convirtiendo quienes nos hemos instalado cómodamente en II en sujetos tan viejunos como nos parecen los protagonistas de I? Podría estar sucediendo y lo que cuento a continuación podría ser un indicio.

Estamos arrancando la segunda fase de un proyecto. Una de las primeras tareas es poner al día a los nuevos consultores del estado y conclusiones de la primera fase. Que sigue el modelo II:

* El código en un repositorio privado de Github.
* Producción corriendo en una máquina virtual en Azure.
* Los datos, que no son muchos ni complejos, en ficheros CSV en la máquina virtual.

Cierto que no es el proyecto más y mejor documentado del mundo. Cierto también que se podían haber organizado mejor los datos (que es, además, el punto para el que II no acaba de ofrecer soluciones universales y convincentes). Pero en aquella reunión se destapó una especie de conflicto generacional en el que medio intuí que:

* Ahora, un proyecto _es_ un proyecto de Google Cloud (o similar), con sus usuarios, recursos, APIs, etc.
* El código ha de ser _notebooks_ que tienen que _vivir_ en Google Colab (o similar). Tengo que averiguar todavía cómo se se espera que se gestionen las librerías de funciones auxiliares, etc.
* El que los datos no vivan en S3 (o similares) es anatema.
* Nada, parece ser, corre en local.
* ¿Habrá algo más? Me va a tocar estar atento a las expectativas ajenas para ver qué otras cosas se estilan hoy en día.

Trataré de ir definiendo, caracterizando y compartiendo en estas páginas cuál y cómo es el nuevo modo de trabajar en proyectos de ciencia de datos en los alrededores de 2023. A ver qué nos depara la posmodernidad.