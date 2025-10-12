---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-03-02 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:04:25.992129'
related:
- 2020-02-24-to-irls-or-not-to-irls.md
- 2019-04-16-sobre-el-error-de-generalizacion-porque-a-veces-se-nos-olvida.md
- 2022-11-04-umap-tsne-etc.md
- 2022-07-14-proximidad-distribuciones.md
- 2022-03-03-error-sesgo-modelos-lineales.md
tags:
- errores
- estadística
- estadística robusta
- tukey
title: Sobre los peligros del "Tukey biweight"
url: /2020/03/02/sobre-los-peligros-del-tukey-biweight/
---

Sigo con ajustes robustos. Y cosas que como matemático, me ponen muy nervioso.

Una de las maneras de hacer ajustes robustos es la de sustituir la función cuadrática por la _biweight_. Es decir, utilizar la función que aparece la derecha en

![](/wp-uploads/2020/03/biweight.png#center)

en lugar de la de la izquierda. O, dicho de otra manera, en lugar de tratar de minimizar

$$ \sum_i \rho(y_i - f_\alpha(x_i))$$

usando $\rho(x) = x^2$, que es la función que se representa a la izquierda y a la que estamos acostumbrados, usar la de la derecha. Que es la función _biweight_ de Tukey.

Pero esa función es plana a una determinada distancia de cero. Es decir, utilizar esa función es utilizar una función que tiene _mínimos locales _por doquier (y que son iguales a su máximo absoluto, dicho sea de paso). Que es lo más parecido de dispararse en el pie antes en la línea de salida de la maratón.

Obviamente, una implementación satisfactoria del problema de minimización necesita valores iniciales razonables. Que ojalá estuviesen siempre a mano.

En fin.

**Nota final:** No hay secta más hermética que la de la gente que se dedica a los ajustes robustos. Creo que lo hacen a propósito para darse importancia.