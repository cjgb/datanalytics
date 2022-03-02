---
author: Carlos J. Gil Bellosta
date: 2010-09-02 23:07:22+00:00
draft: false
title: Muestreando bases de datos

url: /2010/09/02/muestreando-bases-de-datos/
categories:
- ciencia de datos
tags:
- ciencia de datos
- sql
---

Aunque el concepto de minería de datos esté casi indisolublemente asociado al de bases de datos _enormes_, en la práctica, el análisis y desarrollo de los modelos se realizan sobre muestras _pequeñas_.

Esencialmente, para lo que nos ocupa, es _pequeño_ un conjunto de datos que cabe en la RAM de un PC. Actualmente son habituales las máquinas con 1 GB. A modo de comparación, la base de datos de clientes de una de las mayores compañías españolas y en la que trabajé hace un tiempo venía a ocupar 5 GB.

De acuerdo con la [ley de Moore](http://es.wikipedia.org/wiki/Ley_de_Moore), dentro de [18 * log( 5 / 1 ) =] 41,8 meses ya podrá considerarse _pequeña_.

Pero durante 41,8 meses todavía tendremos que seguir muestreando datos.
Por eso, en este artículo se discuten procedimientos para realizar extracciones aleatorias mediante el muestreo aleatorio simple --la más básica de tales técnicas-- de algunos de los gestores de bases de datos con los que es más probable encontrarse:



* DB2: `select * from t tablesample bernuilly (p);`
* Mysql: `select * from t order by rand() limit n;`
* Oracle: `select * from t sample(p);`
* PostgreSQL: `select * from t order by random() limit n;`
* SQL Server: `select top n * from t order by newid();`


En las _queries_ anteriores, p representa un porcentaje --un valor entre 0 y 100-- y n, un determinado número de filas.
El interesado en realizar muestreos de dicha manera, deberían considerar la información anterior como punto de partida para investigar, según proceda:


* las opciones adicionales de las que disponen [DB2](http://www.almaden.ibm.com/cs/people/peterh/idugjbig.pdf) u [Oracle](http://www.idevelopment.info/data/Oracle/DBA_tips/SQL/SQL_9.shtml)
* la validez estadística de los muestreos realizados con newid(), rand() o random()
* tener en cuenta que, a partir de la versión 2005, SQL Server soporta el comando tablesample.

De todos modos, los que no podemos salir de casa sin [Python](http://www.python.org/) en el _pendrive_ siempre tenemos la opción de volcar las tablas a un fichero de texto y recurrir a una versión del siguiente _script_:

{{< highlight python >}}
  import random
  from sys import argv, exit
  import os
  if len(argv) == 1:
    print("Argumentos: path fichero umbral")
    exit(1)
  random.seed()
  path = argv[1]
  nom_f_entrada = argv[2]
  umbral = float(argv[3])
  nom_f_salida = "muest_" + nom_f_entrada
  f_entrada = open(os.path.join(path, nom_f_entrada), "r")
  f_salida  = open(os.path.join(path, nom_f_salida), "w")
  f_salida.write(f_entrada.readline())
  l = f_entrada.readline()
  while l:
    if (random.random() < umbral):
    f_salida.write(l)
    l = f_entrada.readline()
    f_entrada.close()
  f_salida.close()
{{< / highlight >}}

Nota: esta entrada forma parte de las que aparecían en un antiguo blog mío ya extinto cuyo contenido trato ahora de recuperar. Algo de cuanto en ella se lee, por lo tanto, puede que huela a rancio (como la que se refiere al tamaño de la memoria _habitual_ en los ordenadores). Pero lo más debería todavía poder sostenerse en pie varios años después.
