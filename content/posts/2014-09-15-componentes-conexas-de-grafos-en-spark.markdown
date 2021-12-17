---
author: Carlos J. Gil Bellosta
date: 2014-09-15 07:13:46+00:00
draft: false
title: Componentes conexas (de grafos) en Spark

url: /2014/09/15/componentes-conexas-de-grafos-en-spark/
categories:
- computación
tags:
- grafos
- spark
---

Uno de mis últimos _pet projects_ tiene que ver con el análisis de las componentes conexas de unos grafos muy grandes. Como [aquí](http://www.datanalytics.com/2014/06/13/agrupacion-de-grafos-por-topologia/) pero con datos de un tamaño muchos órdenes de magnitud mayores. Usando Spark, claro. Y ya que lo cito, aprovecho la ocasión para regalar un consejo a mis lectores más jóvenes: no esperéis a los cuarenta para aprender Scala y Spark.

Voy a limitarme a copiar el código para referencia mía y de otros. Creo que se autoexplica:



    <code>import org.apache.spark.graphx._
    import org.apache.spark.graphx.util.GraphGenerators

    // vertices: 1:5
    val vertices = sc.parallelize(Array((1L, ("a")), (2L, ("b")),
    		(3L, ("c")), (4L, ("d")),(5L, ("d")) ))

    // aristas: 1 -> 2; 3 -> 4; 3 -> 5
    val aristas = sc.parallelize(Array(Edge(1L, 2L, "a"),
    		Edge(3L, 4L, "a"), Edge(3L, 5L, "a")))

    // grafo
    val grafo = Graph(vertices, aristas)

    // componentes conexas
    // la siguiente funcion construye un grafo en el que las aristas son del tipo
    //   (vertice original) -> (vertice con el id minimo en la componente conexa)
    // es decir, para cada vertice del grafo original, se crea una arista, un par,
    // en el que la segunda componente indica la componente a la que pertenece;
    // esa componente esta indicada por el minimo id de los vertices que la componen
    val res = grafo.connectedComponents().vertices

    // componentes conexas
    res.collect()
    // Salida: Array((1,1), (2,1), (3,3), (4,3), (5,3))

    // numero de vertices por componente conexa
    res.map(v2cc => (v2cc._2, v2cc._1)).countByKey

    // Salida: Map(1 -> 2, 3 -> 3)</code>



Como cabía esperar.
