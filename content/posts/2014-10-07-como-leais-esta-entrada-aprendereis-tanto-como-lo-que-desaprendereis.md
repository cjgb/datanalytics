---
author: Carlos J. Gil Bellosta
date: 2014-10-07 07:13:01+00:00
draft: false
title: Como leáis esta entrada aprenderéis tanto como lo que desaprenderéis

url: /2014/10/07/como-leais-esta-entrada-aprendereis-tanto-como-lo-que-desaprendereis/
categories:
- ciencia de datos
tags:
- ciencia de datos
---

En serio, aviso: aprenderéis tanto como desaprenderéis si leéis [esto](http://home.comcast.net/~tom.fawcett/public_html/ML-gallery/pages/).

Por si no os habéis atrevido, os lo resumo. El autor de la cosa ha construido configuraciones de puntos tales como

[![target_00](/wp-uploads/2014/10/target_00.png#center)
](/wp-uploads/2014/10/target_00.png#center)

y ha creado conjuntos de datos de distinto número de registros con esa _distribución_ de colores. Luego ha puesto varios modelos de clasificación habituales a tratar _aprenderla_. Y ha obtenido patrones tales como

[![SVMRBF-10_hyp](/wp-uploads/2014/10/SVMRBF-10_hyp.png#center)
](/wp-uploads/2014/10/SVMRBF-10_hyp.png#center)

Uno puede entretenerse mirando qué modelos ajustan mejor y peor en función del tipo original de configuración, del modelo, del tamaño de la muestra, etc. y, de esa manera, ir construyendo subrepticiamente unas preferencias subconscientes sobre el conjunto de técnicas existentes para solucionar problemas de clasificación binaria.

Preferencias que podrían no ser las adecuadas en situaciones no artificiales donde:

* el número de variables es mucho mayor que dos (`x` e `y`),
* existen correlaciones importantes entre las variables y, fundamentalmente,
* la distribución de colores no está perfectamente delimitada por ningún tipo de poligonal artificiosa sino en cada región del espacio uno encuentra puntos de cada color (de otra manera, de las distribuciones de colores no tienen soporte disjunto).

No obstante, hojear ese enlace es entretenido.
