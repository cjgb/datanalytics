---
author: Carlos J. Gil Bellosta
date: 2014-07-18 07:13:59+00:00
draft: false
title: 'En serio con Spark: instalación'

url: /2014/07/18/en-serio-con-spark-instalacion/
categories:
- computación
tags:
- big data
- instalación
- python
- spark
---

Me he puesto en modo _estoy serio_ con Spark. Lo instalé en mi ya manida máquina virtual (voy a subir una nueva versión de ella pronto), pero hoy la voy a instalar en mi portátil. Y con la idea de, en los próximos días, montar un _clúster_ en condiciones.

Los pasos son los siguientes:



	  1. Ir a la [página de descargas](http://spark.apache.org/downloads.html) y seleccionar una versión ya precompilada. Hay varias porque Spark se enlaza con librerías relacionadas con Hadoop (aunque uno puede utilizar Spark perfectamente sin él) y hay varias versiones mutuamente incompatibles de Hadoop. Como no tengo ninguna instalada en el portátil, cualquiera me vale.
	  2. Descomprimir, mover el directorio a `/opt` y, opcionalmente, cambiar propietarios y grupos (a `root`).
	  3. Crear un enlace blando para vagos: `sudo ln -s /opt/spark-1.0.1-bin-hadoop1/ /opt/spark`
	  4. Arrancarlo (usando la interfaz para Python): `/opt/spark/bin/pyspark`

En la consola, ahora, se puede ejecutar:
`

    from random import random

    def sample(p):
        x, y = random(), random()
        return 1 if x*x + y*y < 1 else 0

    NUM_SAMPLES = 10000000

    count = sc.parallelize(xrange(0, NUM_SAMPLES)).map(sample).reduce(lambda a, b: a + b)

    print "Pi is roughly %f" % (4.0 * count / NUM_SAMPLES)

`

Esta captura de `htop` lo dice todo:

[![htop_spark](/wp-uploads/2014/07/htop_spark.png)
](/wp-uploads/2014/07/htop_spark.png)
