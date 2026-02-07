---
author: Carlos J. Gil Bellosta
categories:
- programación
- nlp
date: 2012-11-07 14:41:14+00:00
draft: false
lastmod: '2025-04-06T19:05:02.990171'
related:
- 2024-02-06-llm-obsidian.md
- 2010-11-17-siete-consejos-para-expertos-en-analisis-de-datos.md
- 2011-02-28-programacion-funcional-en-r-reduce.md
- 2012-09-25-predicciones-de-series-temporales-a-gran-escala-y-en-paralelo-con-r.md
- 2022-06-02-orgamizacion-proyectos-datos.md
tags:
- programación
- mapreduce
- nlp
- python
title: MapReduce con mincedmeat
url: /2012/11/07/mapreduce-con-mincedmeat/
---

Hace unos días implementé un proceso MapReduce usando [`mincedmeat`](https://github.com/michaelfairley/mincemeatpy), un pequeño entorno en Python para desarrollar este tipo de procesos distribuidos. El código y los datos pueden descargarse de [este enlace](http://datanalytics.com/uploads/mapreduce.zip).

Los datos de partida están en 249 ficheros de unos 25kb que contienen filas del tipo

`journals/algorithmica/HarelS98:::David Harel::Meir Sardas:::An Algorithm for Straight-Line of Planar Graphs`

es decir, publicación, autor (o autores) separados por `::` y título de la publicación. Los tres campos están separados por `:::`.

El objetivo es contar, para cada autor, las palabras que aparecen en el título de sus publicaciones eliminando, si procede, signos de puntuación, palabras excesivamente corrientes (como _the_), etc.

Si uno ejecuta en su _servidor central_

{{< highlight bash >}}
carlos@tiramisu:~/curso_dm/prog_03/src$ python wrdcount_mincemeat.py
{{< / highlight >}}

este quedará esperando a que otras máquinas se ofrezcan a trabajar en el proyecto. En mi caso, que trabajo solo en una, puedo lanzar en varias sesiones

{{< highlight bash >}}
carlos@tiramisu:~/curso_dm/prog_03/src$ python mincemeat.py -p changeme localhost
{{< / highlight >}}

También podría lanzarlas en servidores distintos (en cuyo caso tendría que cambiar `localhost` por la IP del servidor central). Además, casi seguro, habría utilizado una contraseña, `changeme` en este caso, menos obvia.

En cualquier caso, las otras sesiones que lanzo (en la misma u otra máquina) reciben instrucciones (código y datos) del servidor central y ejecutan las tareas de la parte `map`. Una vez que terminan, se les asignan las tareas `reduce` y el resultado final se agrega en un único fichero (predefinido en el programa `wrdcount_mincemeat.py` del servidor).

En `wrdcount_mincemeat.py` se definen dos funciones, `mapfn` y `reducefn` que son las que ejecutan los _mapeadores_ y los _reductores_, es decir, las sesiones a las que el servidor central asignan tareas, y que son en este caso

{{< highlight python >}}
def mapfn( key, value ):

import re, string

#Truncated because of lack of space
#The original dict contained a few docen terms
allStopWords={'about':1, 'above':1, 'after':1, 'again':1}

for line in value.splitlines():
        trozos = line.split(":::")
        autores = trozos[1].split("::")
        palabras = trozos[2].split(" ")
        palabras = [ re.sub('[\W_]', '', x).lower() for x in palabras]
        palabras = list( set(palabras) - set( allStopWords.keys() ) )
        for autor in autores:
                for palabra in palabras:
                        yield autor + "|" + palabra, 1
{{< / highlight >}}

y

{{< highlight python >}}
def reducefn(key, value):
        return key, len(value)
{{< / highlight >}}

respectivamente. El resto del código en `wrdcount_mincemeat.py` se reduce a leer los ficheros de entrada,


{{< highlight python >}}
text_files = glob.glob( "../hw3data/*")

def file_contents(file_name):
        f = open(file_name)
        try:
                return f.read()
        finally:
                f.close()

source = dict((file_name, file_contents(file_name)) for file_name in text_files)
{{< / highlight >}}

en un _diccionario_ (algo tal vez poco eficiente en términos de uso de la memoria) y a declarar un objeto de la clase `Server` y sus métodos `mapfn` y `reducefn` (así como recibir instrucciones sobre qué hacer con la salida del proceso) en

{{< highlight python >}}
s = mincemeat.Server()

# The data source can be any dictionary-like object
s.datasource = source
s.mapfn = mapfn
s.reducefn = reducefn

results = s.run_server(password="changeme")

f = open("outfile_mincemeat.txt", "w")

print results

for clave, contador in results.values():
#f.write( key + " " + str(value) + "\n" )
f.write( clave + " " + str(contador) + "\n" )

f.close()
{{< / highlight >}}

Nótese también cómo en ese pedazo de código se define la contraseña que deberán utilizar los _mapeadores_ y los _reductores_.