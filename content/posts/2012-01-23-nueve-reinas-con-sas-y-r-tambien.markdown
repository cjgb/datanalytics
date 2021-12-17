---
author: Carlos J. Gil Bellosta
date: 2012-01-23 07:15:44+00:00
draft: false
title: Nueve reinas con SAS (y R también)

url: /2012/01/23/nueve-reinas-con-sas-y-r-tambien/
categories:
- r
tags:
- r
- sas
---

No sé si habéis visto la película argentina [Nueve reinas](http://es.wikipedia.org/wiki/Nueve_reinas). Trata de unos timadores que engatusan a incautos para sacarles la platica.

Pero no voy a hablar de esas nueve reinas sino de las ocho de [_Solve Eight Queens Puzzle With SAS Macro_](http://www.clinovo.com/userfiles/WUSS-Solve-Eight-Queens-Puzzle-With-SAS-Macro.pdf). De su introducción extraigo y traduzco:



<blockquote>_The Little SAS Book_ contiene un excelente ejemplo para ilustrar las diferencias entre SAS como lenguaje de programación y C++ mostrando lo complicado que puede resultar procesar conjuntos de datos con un lenguaje de propósito general. Son 28 líneas de código C++ y 5 de SAS para leer un fichero delimitado e imprimirlo por pantalla. Es un ejemplo perfecto de cómo SAS es un lenguaje de cuarta generación con un alto nivel de abstracción y expresividad.

Queremos revisar esta comparación bajo otra perspectiva mostrando cómo SAS es el lenguaje perfecto para manejar estructuras de datos complejas y lo fácil que resulta implementar con él algoritmos complejos. </blockquote>



(Nota: con R basta una línea para leer e imprimir un conjunto de datos delimitado: `print( read.table( "fichero.txt", sep = ";" ))`.)

En particular, muestra un pedazo de código para resolver el [problema de las ocho reinas](http://es.wikipedia.org/wiki/Problema_de_las_ocho_reinas). El problema se reduce a encontrar una permutación $latex \sigma$ de los números `1:n` tales que

$$\forall i \ne j, \left| i - j \right| \ne \left| \sigma(i) - \sigma(j) \right| $$

El código de SAS con el que resuelven este problema es así de estético, expresivo y comprensible:

`


    %Macro FirstOf(List);%Scan(&List;,1)%Mend;
    %Macro RestOf(List);
      %Local lth;
      %Let lth=%Length(%FirstOf(&List;));
      %If %Length(&List;)>&lth; %Then %Left(%Substr(&List;,%Eval(1+&lth;)));
    %Mend;

    %Macro OkToAdd(Element,At=,To=,StartAt=);
      %If &To; eq %str() or &Element; eq %str() %Then 1;
      %Else %If %Sysfunc(Abs(%Eval(%FirstOf(&To;)-&Element;)))=
        %Sysfunc(Abs(%Eval(&At-;&StartAt;))) %Then %Do; 0 %Return;%End;
      %Else
        %OkToAdd(&Element;,At=&At;,To=%RestOf(&To;),StartAt=%eval(1+&StartAt;));
    %Mend;

    %Macro qIter(PartialSolution=,List=,Level=,CounterName=);
      %Local item preFix sufFix;
      %If &List; eq %str() %Then %Do;%Let &CounterName;=%eval(1+&&&CounterName;);
        %Put &&&CounterName; [&PartialSolution;];
      %End;
      %Else %Do;
        %let preFix=;%let item=%FirstOf(&List;);%let sufFix=%RestOf(&List;);
        %Do %Until (&preFix; eq &List;);
          %If %OkToAdd(&item;,At=&Level;,To=&PartialSolution;,StartAt=1) %Then
            %qIter(PartialSolution=&PartialSolution; &item;,
              List=&preFix; &sufFix;,
              Level=%eval(&Level;+1),
              CounterName=&CounterName;
            );
            %let preFix=&preFix; &item;%let item=%FirstOf(&sufFix;);
            %let sufFix=%RestOf(&sufFix;);
        %End;
      %End;
    %Mend;

    %let c=0;
    %qIter(PartialSolution=,List=1 2 3 4 5 6 7 8,Level=1,CounterName=c)


`

Pero me he entretenido en implementar el mismo algoritmo con R y he aquí el resultado:



    <a href="http://inside-r.org/packages/cran/perm">perm <- function( p, l ){
      foo <- function( x )
        ( a <- length( p ) ) == 0 || all( abs( a:1 ) != abs( l[x] - p ) )

      if ( length(l) == 0 )
        cat( p, "\n" )
      else
        invisible( sapply( Filter( foo, 1:length(l) ),
          function( i ) <a href="http://inside-r.org/packages/cran/perm">perm( c( p, l[i]), l[-i] ) ) )
    }

    <a href="http://inside-r.org/packages/cran/perm">perm(c(),1:8 )



No hay más color que el del resaltador de sintaxis, creo. Y en cuanto a la introducción del artículo, serán mis lectores los que habrán de decidir si tiene más que ver con las nueve que con las ocho reinas.
