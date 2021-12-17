---
author: Carlos J. Gil Bellosta
date: 2011-06-13 07:41:42+00:00
draft: false
title: Minitutorial de subversion

url: /2011/06/13/minitutorial-de-subversion/
categories:
- consultoría
- r
tags:
- consultoría
- r
- programación
---

Por popular demanda, voy a ilustrar en esta entrada el uso de [subversion ](http://subversion.apache.org/)para el desarrollo colaborativo de _software_. Lo escribo teniendo en mente el desarrollo de paquetes alojados en [R-Forge](https://r-forge.r-project.org/) y para usuarios de sistemas operativos más o menos decentes. A quienes usan Windows les recomiendo [Tortoise](http://tortoisesvn.tigris.org/), cuyo uso queda fuera del alcance de lo que sigue.

En primer lugar, para los desavisados: subversion es un programa para gestionar versiones de ficheros. A usuarios particulares, les permite mantener fotos de tu trabajo (¿cómo estaba mi libro/tesis/código hace un mes?). Cuando varias personas trabajan en un mismo proyecto, les permite controlar quién ha hecho qué, cuándo y por qué; además, que cada uno de los integrantes del proyecto trabaje sobre su propia copia del código, aunque mandando su cambios a un repositorio central y recibiendo, claro está, los cambios del resto del equipo.

R-Forge proporciona a los desarrolladores un repositorio central de subversion. ¿Cómo se trabaja con él? En primer lugar, hay que hacer un _checkout_ (descarga inicial) del contenido del código. Por ejemplo,

{{< highlight bash "linenos=true" >}}
svn checkout svn+ssh://developername@scm.r-forge.r-project.org/svnroot/pxr
{{< / highlight >}}

donde la URL apunta al repositorio en cuestión. Una vez hecho eso, se crea un directorio, `pxr`, con una copia del código existente en ese momento en el servidor.

Una sesión típica de desarrollo usando subversion consiste en:



{{< highlight bash "linenos=true" >}}
    cd /my/svn/directory      # en este ejemplo, el directorio pxr
    svn update                # baja los cambios realizados por terceros
    ...                       # creas ficheros, editas, ¡trabajas!
    svn status                # muestra los ficheros que han cambiado,
                              # se han creado, etc.
    svn add /files/to/add     # si has creado ficheros nuevos
    svn ci -m "comentario"    # subes los cambios al servidor con un "commit" (ci)
                              # ¡importantísimo explicar en qué han
                              # consistido en el comentario!
{{< / highlight >}}


Con esos comandos se resume el 95% de la interacción de los desarrolladores con subversion. Existen dos más de uso relativamente frecuente,



{{< highlight bash "linenos=true" >}}
svn mv /objeto/a  /objeto/b
svn rm /objeto/obsoleto
{{< / highlight >}}


para mover y borrar ficheros de manera que subversion quede notificado de los cambios realizados.

Existen muchos aspectos de subversion que no trata este minitutorial: cómo resolver conflictos (cuando dos desarrolladores cambian un mismo fichero a la vez), cómo realizar despliegues, etc. Pero sí que permite a un usuario novel comenzar a trabajar _como Dios manda_ en menos de cinco minutos. Y el que quiera saber más, siempre puede acudir al [tutorial por excelencia de subversion](http://svnbook.red-bean.com/nightly/en/svn.tour.cycle.html).
