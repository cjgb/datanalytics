---
author: Carlos J. Gil Bellosta
date: 2022-06-02
title: "Cómo organizar un proyecto de análisis de datos: primeros pasos"
description: 'Consejos para arrancar y estructurar un proyecto de datos: directorios, etc.'
url: /2022/06/02/organizacion-proyecto-datos/
categories:
- consultoría
tags:
- gestión de proyectos
- ciencia de datos
---

Esta es una entrada básica orientada a quienes comienzan en el mundo del análisis de datos y se enfrentan a uno de sus primeros retos en solitario. Contiene consejos que no son de aplicación universal, dependen del contexto y están sometidos a revisión y adecuación a las circunstancias concretas. Cada maestrillo tiene su librillo y esta es una versión simplificada del mío.

## Un proyecto vive un directorio

Un proyecto vive en un directorio. Proyecto nuevo, directorio nuevo. Con un nombre que lo identifique adecuadamente, etc. Importante: ¡sin espacios en el nombre! (Utilizar espacios en el nombre de directorios y ficheros es, aparte de enojoso en sí mismo, fuente de problemas; afortunadamente, es trivial evitarlos: nunca espacios en el nombre y ya.)

## Estructura de subdirectorios

Cada pieza del proyecto vive dentro de su subdirectorio específico. Algunos de los que uso (con los nombres que a mí me gusta utilizar, aunque eso es, hasta cierto punto, cuestión de gustos) son:

- `raw`. Aquí deposito ficheros de datos _brutos_ tal cual los he recibido. Estos ficheros no se modifican bajo ningún concepto y solo se _tocan_ para ser leídos.
- `staging`. Ahí suelo guardar ficheros de datos _preprocesados_ (por mí) a partir de los de `raw`, sobre todo cuando este preproceso es largo y tedioso.
- `doc`. La documentación que he recibido o recopilado sobre el proyecto (pero no la que realizo yo).
- `src`. El código del proyecto. Puede que dentro haya directorios como `R` o `python`. O a veces, en lugar de `src` hay directorios específicos para código en dichos lenguajes (¡u otros!). Dentro de ese directorio (o sus directorios) hay programas que se ejecutan secuencialmente y me gusta darles nombres usando prefijos `00`, `01`, etc. que denoten el orden de ejecución. Típicamente, el `00` lee datos de `raw`, los preprocesa y los guarda en `staging`. Nótese que todo el proceso de análisis de datos debería poder ejecutarse automáticamente y sin intervención manual ejecutando secuencialmente estos ficheros. Por eso suelo tener, además, un _script lanzador_ que automatiza la ejecución secuencial.
- `exploracion`, donde suelo guardar código más o menos sucio, pruebas, etc. que no han pasado a formar parte del tronco del proyecto. Muchos pensarán que esto es mejor borrarlo y, de hecho, creo que nunca me ha sucedido que haya tenido que volver a rescatar código o ideas sepultadas en este directorio. Pero a uno a veces le da nosequé descartar cosas definitivamente y sucumbe al antimariekondismo. Lo importante, en todo caso, es quitar esos ficheros de donde puedan estorbar y `exploracion` puede ser un buen sitio donde guardarlos.
- `informes`. Allí suelo depositar los `.Rmd` y otra documentación que genero.
- `shiny`, si procede: cuadros de mando desarrollados con `shiny` o sus extensiones. A veces estos cuadros de mandos utilizan datos generados por el código de `src` que guardo en dicho directorio o en un subdirectorio suyo.
- `entregables` o cosas que envío a quien quiera que me haya encargado el análisis de datos. Al final, suele acabar poblado de ficheros `.zip` con fechas como sufijos.

## Rutas

La experiencia vence en esto a la razón y me obliga a subrayar encarecidamente lo siguiente: todas las rutas que aparezcan dentro de un proyecto (en el código, etc.) tienen que ser **relativas** y no **absolutas**. Si no sabes de lo que estoy hablando, lee detenidamente algo como [esto](https://www.computerhope.com/issues/ch001708.htm). En definitiva, se trata de aislar el contenido del proyecto del lugar concreto donde está ubicado en un ordenador en particular. Ten en cuenta que de no hacer así, el código dejaría de funcionar de ejecutarse en otro ordenador.

## Colaboración y copias de seguridad

Lo ideal tanto para colaborar con terceros (o con uno mismo, si se quiere trabajar en más de un ordenador) es usar `git`: no solo gestiona versiones y cambios, sino que resuelve automáticamente el problema de las copias de seguridad.

Hace años, cuando a alguien le robaban el ordenador o se le moría el disco duro y perdía su trabajo, cabía _empatizar_ con él. Hoy, con todas las opciones disponibles y la matraca que hemos estado dando durante años, las cosas han cambiado: si pierdes tu trabajo y lo cuentas, vamos no solo a pensar sino a constatar indubitablemente ---si no lo hemos hecho antes ya: seguramente ya habrás dejado muchas pistas previas--- que eres gilipollas.

## Avanzado: ¡secretos!

Tal vez sea este un asunto más avanzado. Así que no lo voy a desarrollar: me voy a limitar a describir el problema sin aventurar una solución.

En un proyecto puede haber _información secreta_ que no hay que compartir con nadie, ni con los colaboradores. Esencialmente, se trata de contraseñas (a bases de datos, APIs, etc.). Hay mil maneras de gestionar este tipo de información y solo una pésima: guardarla dentro del código, en ficheros compartidos, etc.

Y eso es todo. Espero que los nuevos en la profesión lo encuentren de utilidad. A los viejos ni me molesto en saludarlos: no deberían haber llegado hasta este punto.