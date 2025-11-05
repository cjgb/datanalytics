---
tags:
- R
- paquetes
- pxr
- pxmake
- estadística pública
author: Carlos J. Gil Bellosta
categories:
- R
- estadística
date: 2025-05-22
description: Un anuncio de la existencia del paquete de R pxmake, que reemplaza a pxR en R
lastmod: '2025-07-01T21:51:02.922582'
related:
- 2023-04-20-dejar-morir-pxr.md
- 2011-07-28-el-paquete-pxr-en-cran.md
- 2024-01-18-microdatoses-ultima-version.md
- 2018-04-09-la-intrahistoria-de-mi-libro-de-r.md
- 2011-08-04-desarrollo-de-paquetes-con-r-iv-funciones-genericas.md
title: ¿Reemplaza pxmake a pxR? Espero que sí (y, además, que ninguno de los dos haga
  falta pronto)
url: /2025/05/29/pxr-pxmake/
---

De `pxR` ya he hablado alguna vez. Pueden verse las entradas que le he dedicado [aquí](/tags/pxr/).

[`pxR`](https://cran.r-project.org/web/packages/pxR/index.html) es un paquete coral de R que promoví, en el que escribí la mayor parte del código y que aún mantengo muy renuentemente. Permite leer y crear ficheros con el formato `px`, que utilizan todavía algunos servicios de estadística pública por el mundo. Eso no quita que "antediluviano" sea el adjetivo que mejor lo describe: fue creado antes de la popularización de los formatos modernos y, no en vano, la última de las entradas que le dediqué allá por 2023 se titulaba [¿Dejar morir pxR?](/2023/04/20/dejar-morir-pxR/)

La intrahistoria de la historia púbica (que se ha publicado `pxmake`, un paquete relacionado en muchos aspectos con `pxR`) es más o menos así. Allá por 2014 me contactó alguien del _INE de Groenlandia_ por un problema de internacionalización en unos ficheros: la presencia de unos caracteres inhabituales impedía procesarlos adecuadamente. Los sistemas y formatos modernos, por diseño, no presentan ese tipo de problemas; los antediluvianos, depende. Le ayudé lo mejor que pude y no sé en qué quedó la cosa. Se ve que han seguido teniendo más problemas a lo largo de estos años y han decidido cortar por lo sano y crear una alternativa a `pxR`, [`pxmake`](https://cran.r-project.org/web/packages/pxmake/index.html). En parte, sospecho, por mi falta de diligencia.

Estoy casi seguro de que `pxmake` funciona mejor que `pxR` y que le gana en _funcionalidad_. Invito a todos los usuarios de `px` a migrar a un formato moderno de intercambio de datos y, de no ser eso posible, hacerlo a `pxmake`. En algún momento, me gustaría poder reducir la entropía del universo retirando `pxR` de CRAN aunque no tengo claro cómo se hace.

### Coda

Después de escrito lo anterior, recibí un mensaje del autor de `pxmake` acerca de una documentación que han publicado en [_PX-files and R_](https://thranholm.quarto.pub/rwanda-px-files-and-r/) y que sin duda será del interés de quienes tengan que usar todavía datos en ese formato.