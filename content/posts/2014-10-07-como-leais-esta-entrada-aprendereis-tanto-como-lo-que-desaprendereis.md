---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2014-10-07 07:13:01+00:00
draft: false
lastmod: '2025-04-06T18:59:42.609608'
related:
- 2018-01-08-recodificacion-de-variables-categoricas-de-muchos-niveles-ayuda.md
- 2014-03-17-sobre-el-articulo-de-domingos.md
- 2012-02-01-la-frontera-bayesiana-en-problemas-de-clasificacion-simples.md
- 2011-07-19-clustering-ii-c2bfes-replicable.md
- 2014-03-07-victoria-o-diferencia-de-puntos-ahora-con-random-forests.md
tags:
- ciencia de datos
title: Como leáis esta entrada aprenderéis tanto como lo que desaprenderéis
url: /2014/10/07/como-leais-esta-entrada-aprendereis-tanto-como-lo-que-desaprendereis/
---

En serio, aviso: aprenderéis tanto como desaprenderéis si leéis [esto](http://home.comcast.net/~tom.fawcett/public_html/ML-gallery/pages/).

Por si no os habéis atrevido, os lo resumo. El autor de la cosa ha construido configuraciones de puntos tales como

[![target_00](/img/2014/10/target_00.png#center)
](/img/2014/10/target_00.png#center)

y ha creado conjuntos de datos de distinto número de registros con esa _distribución_ de colores. Luego ha puesto varios modelos de clasificación habituales a tratar _aprenderla_. Y ha obtenido patrones tales como

[![SVMRBF-10_hyp](/img/2014/10/SVMRBF-10_hyp.png#center)
](/img/2014/10/SVMRBF-10_hyp.png#center)

Uno puede entretenerse mirando qué modelos ajustan mejor y peor en función del tipo original de configuración, del modelo, del tamaño de la muestra, etc., y, de esa manera, ir construyendo subrepticiamente unas preferencias subconscientes sobre el conjunto de técnicas existentes para solucionar problemas de clasificación binaria.

Preferencias que podrían no ser las adecuadas en situaciones no artificiales donde:

* el número de variables es mucho mayor que dos (`x` e `y`),
* existen correlaciones importantes entre las variables y, fundamentalmente,
* la distribución de colores no está perfectamente delimitada por ningún tipo de poligonal artificiosa sino en cada región del espacio uno encuentra puntos de cada color (de otra manera, de las distribuciones de colores no tienen soporte disjunto).

No obstante, hojear ese enlace es entretenido.