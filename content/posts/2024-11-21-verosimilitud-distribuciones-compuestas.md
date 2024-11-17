---
author: Carlos J. Gil Bellosta
date: 2024-11-21
title: 'Sobre la verosimilitud de distribuciones "compuestas"'
url: /2024/11/21/verosimilitud-distribuciones-compuestas
categories:
- estadística
tags:
- verosimilitud
- distribuciones
- mixturas
- supervivencia
---

Si tenemos una distribución continua (que depende de un parámetro $\alpha$) $f_\alpha$ y una muestra blablablá $x_1, \dots, x_n$, _la_ verosimilitud asociada es

$$\prod_{i = 1}^n f_\alpha(x_i).$$

Si tenemos una distribución discreta (que depende de un parámetro $\beta$) $p_\beta$ y una muestra blablablá $y_1, \dots, y_m$, _la_ verosimilitud asociada es

$$\prod_{i = 1}^m p_\beta(y_i).$$

Pero si tenemos una mezcla de distribuciones, una continua $f_\alpha$ y una discreta $p_\beta$ y una muestra blablablá $x_1, \dots, x_n, y_1, \dots, y_m$, ¿_la_ verosimilitud asociada sigue siendo

$$\prod_{i = 1}^n f_\alpha(x_i) \prod_{i = 1}^m p_\beta(y_i)?$$

(Este cuestión surge, por ejemplo, en el análisis de la supervivencia cuando hay censura.)

Pues sí, sigue siendo cierto. Había visto aplicar esto en varias partes sin la mayor discusión al respecto pese a no ser enteramente evidente. Una demostración (o justificación razonada) puede encontrarse [aquí](https://stats.stackexchange.com/questions/248476/maximum-likelihood-function-for-mixed-type-distribution).