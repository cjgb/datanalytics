---
author: Carlos J. Gil Bellosta
date: 2011-06-08 07:36:35+00:00
draft: false
title: Gestión de proyectos en R

url: /2011/06/08/gestion-de-proyectos-en-r/
categories:
- consultoría
- r
tags:
- consultoría
- r
- programación
---

Muchos de mis lectores tienen, seguro, maneras distintas —y probablemente mejores— de organizar sus proyectos en R que yo. Pero me consta que a algunos les cuesta no convertir sus carpetas en un caos en los que sólo ellos se manejan —hasta que pasa el tiempo, se olvidan y tienen que volver sobre ello—. Para ellos, para sugerirles un procedimiento eficiente de trabajo, va esta entrada. En ella describo cómo organizo mis propios proyectos con R.

En primer lugar, creo un directorio exclusivo para el proyecto con un nombre específico que me permite identificar el quién, el cuándo y el qué. Dentro de él, creo otros cuatro:



* `doc`, a donde va a parar toda la documentación pertinente
* `dat`, que contiene los datos iniciales y, posiblemente, algunos obtenidos manualmente a partir de los primeros (me gusta convertir los ficheros de Excel en ceeseuves, por ejemplo)
* `src`, que contiene mi código en R
* `res`, donde almaceno los resultados finales o parciales (gráficos, informes, etc.)

Resulta fundamental que el proyecto esté **autocontenido**, que no se dependa de datos u objetos que residan en otra parte. Incluso si es necesario acceder a una base de datos, es conveniente guardar una copia de los ficheros con los que se cargó originalmente para poder volver a realizar la carga desde cero.

Cuando ejecuto R, siempre cambio el directorio de trabajo a `src` y cualquier llamada a código, datos o resultados la hago usando caminos relativos: siempre leo de `../dat/` y mando las salidas a `../dat/`. ¿Os hacéis idea lo irritante que resulta recibir código de terceros con llamadas a ficheros en rutas tales como `C:\\Mis Documentos\\Pepita\\Tesis de Pepi\\R nuevo\\New Folder\\...`?

Dentro de `src` creo varios ficheros. Los suelo ordenar alfabéticamente usando números como prefijo. El primero siempre es `00_load.R`, que lee los datos originales y sin ningún tipo de proceso los vuelca en un objeto de R que suelo llamar `raw`. Típicamente acabo con cuatro o cinco ficheros:



* 00_load.R
* `01_clean.R`, para limpiar los datos; típicamente, este fichero suele crecer a lo largo del análisis
* `02_eda.R`, para en análisis exploratorio y gráfico
* `03_analysis_cca.R`, por ejemplo
* `04_analysis_reg.R`, ...

Todos los ficheros, menos obviamente `00_load.R` dependen únicamente o del objeto `raw` o del que se genera en `01_clean.R`. Y típicamente, en la primera línea de cada fichero copio `raw` en `dat`, el conjunto de datos con el que trabajo, para asegurarme de que nunca nadie modifica `raw`.

Es fundamental trabajar de tal manera que cambios en un fichero no tengan efectos secundarios en un análisis que se efectúa aguas abajo y de manera que si se ejecutan todos los ficheros de código en sucesión obtengo los mismos resultados que cuando lo hago por separado.

Cuando mi proyecto acaba, comprimo el directorio raíz y lo archivo.

Con un mínimo de orden, buenos comentarios, encabezamientos en los ficheros (¡de inestimable ayuda!) es posible volver a generar resultados o a correr el código sobre nuevos ficheros de datos con un esfuerzo mínimo.
