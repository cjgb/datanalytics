---
author: Carlos J. Gil Bellosta
date: 2014-05-27 07:27:54+00:00
draft: false
title: Inserción eficiente (?) de datos vía RJDBC

url: /2014/05/27/insercion-eficiente-de-datos-via-rjdbc/
categories:
- r
tags:
- r
- rjava
- rjdbc
- sql
---

Las bases de datos son instrumentos magníficos con dos defectos fundamentales: es difícil meter datos en ellas y es difícil sacar datos de ellas. Pero guardarlos... los guardan estupendamente.

Estos días me ha tocado subir a una base de datos tablas bastante grandes y las herramientas proporcionadas por `RJDBC` para ello, esencialmente `dbWriteTable` han fallado. Internet no se pone de acuerdo sobre si es un _bug_ de `RJDBC` o si la culpa la tiene el _driver_ de la base de datos que estoy obligado a utilizar. Como fuere, me ha tocado descender un escalón de abstracción y jugar directamente con la API del _driver_ para ejecutar [_prepared statements_](http://en.wikipedia.org/wiki/Prepared_statement).

(Nota: parece que es usando _prepared statements_ que se consigue el mejor rendimiento a la hora de, al menos, insertar registros en una tabla).

El código que he preparado es (se parece a) el siguiente:








    library(<a href="http://inside-r.org/packages/cran/RJDBC">RJDBC)
     
    conn <- dbConnect(drv, connection.string, user, password)
     
    # autocommit <- false
    .jcall(conn@jc,"V","setAutoCommit",FALSE)
    # prepared statement
    ps = .jcall(conn@jc,"Ljava/sql/PreparedStatement;",
                "prepareStatement",
                "insert into miesquema.mi_iris values(?,?,?,?,?)")
     
    # insert function
    myinsert <- function(arg1, arg2, arg3, arg4, arg5){
      .jcall(ps, "V", "setDouble",    as.integer(1), arg1)
      .jcall(ps, "V", "setDouble",    as.integer(2), arg2)
      .jcall(ps, "V", "setDouble",    as.integer(3), arg3)
      .jcall(ps, "V", "setDouble",    as.integer(4), arg4)
      .jcall(ps, "V", "setString",    as.integer(5), arg5)
      .jcall(ps, "V", "addBatch")
    }
     
    # data to insert
    tmp <- iris
    tmp$Species <- as.character(iris$Species)
     
    # loop, sorry!
    for(i in 1:nrow(iris)){
      myinsert(tmp[i,1], tmp[i,2], tmp[i,3], tmp[i,4], tmp[i,5])
    }
     
    # commits
    .jcall(ps,"[I","executeBatch")
    dbCommit(conn)








Ahora, los comentarios.



	  * Efectivamente, toca hacer algo que se parece a programar en Java (es decir, utilizar `[rJava](http://cran.r-project.org/web/packages/rJava/index.html)`).
	  * El _prepared statement_ es `insert into miesquema.mi_iris values(?,?,?,?,?)`. Los interrogantes son los valores que hay que rellenar en el resto del código.
	  * Dentro de `myinsert` hay líneas de la forma `.jcall(ps, "V", "setDouble", as.integer(3), arg3)`. Lo que hacen es llamar a métodos de [la interfaz `PreparedStatement`](http://docs.oracle.com/javase/7/docs/api/java/sql/PreparedStatement.html) de Java. Transforman los argumentos convenientemente (véase en el enlace anterior la documentación tanto de `setDouble `como de sus colegas) y los _colocan_, por así decirlo, sobre el interrogante correspondiente.
	  * En el enlace anterior también puede consultarse lo que hace `.jcall(ps, "V", "addBatch")`: esencialmente, encolar un grupo de inserciones a la espera del _commit_.
	  * Finalmente, `.jcall(ps,"[I","executeBatch")` y `dbCommit(conn)` suben los datos definitivamente a la tabla.

En el ejemplo anterior solo he insertado 150 filas. Para inserciones más grandes, habría que entreverar las líneas








    .jcall(ps,"[I","executeBatch")
    dbCommit(conn)








en el bucle para forzar un _commit_ cada, p.e., 10000 líneas. Siéntete libre de probar con otros valores.
