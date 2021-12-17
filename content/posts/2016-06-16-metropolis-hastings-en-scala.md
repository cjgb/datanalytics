---
author: Carlos J. Gil Bellosta
date: 2016-06-16 08:13:08+00:00
draft: false
title: Metropolis-Hastings en Scala

url: /2016/06/16/metropolis-hastings-en-scala/
categories:
- computación
- estadística
tags:
- estadística bayesiana
- mcmc
- muestreo
- scala
---

Tengo la sensación de que un lenguaje funcional (como Scala) está particularmente bien adaptado al tipo de operaciones que exige MCMC.

Juzguen Vds.

Primero, genero datos en R:



    datos <- rnorm(500, 0.7, 1)
    writeLines(as.character(datos), "/tmp/datos.txt")



Son de una normal con media 0.7. En el modelo que vamos a crear, suponemos conocida (e igual a 1) la varianza de la normal y trataremos de estimar la media suponiéndole una distribución a priori normal estándar. Y con Scala, así:



    <span style="color: #008800; font-weight: bold">import <span style="color: #0e84b5; font-weight: bold">scala.io.Source
    <span style="color: #008800; font-weight: bold">import <span style="color: #0e84b5; font-weight: bold">java.io.PrintWriter

    <span style="color: #888888">/* read data */
    <span style="color: #008800; font-weight: bold">val source <span style="color: #008800; font-weight: bold">= <span style="color: #BB0066; font-weight: bold">Source<span style="color: #333333">.fromFile<span style="color: #333333">(<span style="background-color: #fff0f0">"/tmp/datos.txt"<span style="color: #333333">, <span style="background-color: #fff0f0">"UTF-8"<span style="color: #333333">)
    <span style="color: #008800; font-weight: bold">val data <span style="color: #008800; font-weight: bold">= source<span style="color: #333333">.mkString<span style="color: #333333">.split<span style="color: #333333">(<span style="background-color: #fff0f0">"\\s+"<span style="color: #333333">).map<span style="color: #333333">(<span style="color: #008800; font-weight: bold">_<span style="color: #333333">.toDouble<span style="color: #333333">).toList

    <span style="color: #888888">/* we need random numbers */
    <span style="color: #008800; font-weight: bold">var r <span style="color: #008800; font-weight: bold">= scala<span style="color: #333333">.util<span style="color: #333333">.<span style="color: #BB0066; font-weight: bold">Random

    <span style="color: #888888">/* almost (standard) dnorm */
    <span style="color: #008800; font-weight: bold">def dnorm<span style="color: #333333">(x<span style="color: #008800; font-weight: bold">:<span style="color: #333399; font-weight: bold">Double<span style="color: #333333">)<span style="color: #008800; font-weight: bold">: <span style="color: #333399; font-weight: bold">Double <span style="color: #333333">= math<span style="color: #333333">.exp<span style="color: #333333">(-x<span style="color: #333333">*x<span style="color: #333333">/<span style="color: #0000DD; font-weight: bold">2<span style="color: #333333">)

    <span style="color: #888888">/* chain transitions */
    <span style="color: #008800; font-weight: bold">def rg<span style="color: #333333">(y<span style="color: #008800; font-weight: bold">:<span style="color: #333399; font-weight: bold">Double<span style="color: #333333">)<span style="color: #008800; font-weight: bold">:<span style="color: #333399; font-weight: bold">Double <span style="color: #333333">= y <span style="color: #333333">+ r<span style="color: #333333">.nextGaussian

    <span style="color: #888888">/* prior (standard normal) times likelihood */
    <span style="color: #008800; font-weight: bold">def dpost<span style="color: #333333">(x<span style="color: #008800; font-weight: bold">:<span style="color: #333399; font-weight: bold">Double<span style="color: #333333">)<span style="color: #008800; font-weight: bold">: <span style="color: #333399; font-weight: bold">Double <span style="color: #333333">= dnorm<span style="color: #333333">(x<span style="color: #333333">) <span style="color: #333333">* data<span style="color: #333333">.map<span style="color: #333333">(y <span style="color: #008800; font-weight: bold">=> dnorm<span style="color: #333333">(x <span style="color: #333333">- y<span style="color: #333333">)).reduce<span style="color: #333333">(<span style="color: #008800; font-weight: bold">_<span style="color: #333333">*<span style="color: #008800; font-weight: bold">_<span style="color: #333333">)

    <span style="color: #888888">/* metropolis-hastings acceptance ratio */
    <span style="color: #008800; font-weight: bold">def acceptanceRatio<span style="color: #333333">(from<span style="color: #008800; font-weight: bold">:<span style="color: #333399; font-weight: bold">Double<span style="color: #333333">, to<span style="color: #008800; font-weight: bold">:<span style="color: #333399; font-weight: bold">Double<span style="color: #333333">)<span style="color: #008800; font-weight: bold">:<span style="color: #333399; font-weight: bold">Double <span style="color: #333333">= dpost<span style="color: #333333">(to<span style="color: #333333">) <span style="color: #333333">/ dpost<span style="color: #333333">(from<span style="color: #333333">)

    <span style="color: #008800; font-weight: bold">def posterior<span style="color: #333333">(a<span style="color: #008800; font-weight: bold">:<span style="color: #333399; font-weight: bold">Double<span style="color: #333333">)<span style="color: #008800; font-weight: bold">:<span style="color: #333399; font-weight: bold">Stream<span style="color: #333333">[<span style="color: #333399; font-weight: bold">Double<span style="color: #333333">] <span style="color: #008800; font-weight: bold">= <span style="color: #333333">{
      <span style="color: #008800; font-weight: bold">lazy <span style="color: #008800; font-weight: bold">val elegidos <span style="color: #008800; font-weight: bold">= <span style="color: #BB0066; font-weight: bold">Stream<span style="color: #333333">.continually<span style="color: #333333">(a<span style="color: #333333">) map rg filter <span style="color: #333333">(x <span style="color: #008800; font-weight: bold">=> r<span style="color: #333333">.nextDouble <span style="color: #333333">< acceptanceRatio<span style="color: #333333">(a<span style="color: #333333">, x<span style="color: #333333">))
      a <span style="color: #333333">#:: posterior<span style="color: #333333">(elegidos<span style="color: #333333">.head<span style="color: #333333">)
    <span style="color: #333333">}

    <span style="color: #888888">/* Get values and drop burning obs */
    <span style="color: #008800; font-weight: bold">val res <span style="color: #008800; font-weight: bold">= posterior<span style="color: #333333">(<span style="color: #6600EE; font-weight: bold">0.4<span style="color: #333333">).take<span style="color: #333333">(<span style="color: #0000DD; font-weight: bold">10000<span style="color: #333333">).toList<span style="color: #333333">.drop<span style="color: #333333">(<span style="color: #0000DD; font-weight: bold">2000<span style="color: #333333">)

    <span style="color: #888888">/* Thin */
    <span style="color: #008800; font-weight: bold">val res_thin <span style="color: #008800; font-weight: bold">= res zip <span style="color: #333333">(<span style="color: #BB0066; font-weight: bold">Stream from <span style="color: #0000DD; font-weight: bold">1<span style="color: #333333">) filter <span style="color: #333333">(<span style="color: #008800; font-weight: bold">_<span style="color: #333333">._2 <span style="color: #333333">% <span style="color: #0000DD; font-weight: bold">5 <span style="color: #333333">== <span style="color: #0000DD; font-weight: bold">0<span style="color: #333333">) map <span style="color: #333333">(<span style="color: #008800; font-weight: bold">_<span style="color: #333333">._1<span style="color: #333333">)

    <span style="color: #888888">/* Export */
    <span style="color: #008800; font-weight: bold">val out <span style="color: #008800; font-weight: bold">= <span style="color: #008800; font-weight: bold">new <span style="color: #BB0066; font-weight: bold">PrintWriter<span style="color: #333333">(<span style="background-color: #fff0f0">"/tmp/posterior.txt"<span style="color: #333333">)
    res map out<span style="color: #333333">.println
    out<span style="color: #333333">.close<span style="color: #333333">()




Leo los datos de la posteriori en R y los reprsento así:



    posterior <- <a href="http://inside-r.org/r-doc/base/as.double">as.double(readLines("/tmp/posterior.txt"))
    hist(posterior, breaks = 50)



![posteriori_scala](/wp-uploads/2016/06/posteriori_scala.png)

