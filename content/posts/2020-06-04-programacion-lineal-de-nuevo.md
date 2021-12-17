---
author: Carlos J. Gil Bellosta
date: 2020-06-04 12:14:46+00:00
draft: false
title: Programación lineal, de nuevo

url: /2020/06/04/programacion-lineal-de-nuevo/
categories:
- python
- varios
tags:
- cbc
- coin-or
- glop
- or-tools
- programación lineal
- pulp
- python
---




Hoy me he retrasado en escribir por haber estado probando (y _estresando_, como hay quien dice), _software_ para resolver problemas de programación lineal. En total, nada, unos diez millones de variables unos treinta  millones de restricciones.







Nota: es un problema LP puro, nada de enteros, nada de pérdidas no lineales, etc.





  * Primera opción: Python + PuLP + CBC (de [COIN-OR](https://en.wikipedia.org/wiki/COIN-OR)), que es el optimizador por defecto de PuLP. Rendimiento aceptable para el tipo de uso que se le acabaría dando. Se ha convertido en el _benchmark_.  * Segunda opción: Python + OR-Tools (de Google), y en particular, [Glop](https://developers.google.com/optimization/lp/glop). Un tanto decepcionante: aunque ne términos de velocidad no es apreciablemente inferior a CBC, en muchos casos desistía y no encontraba ninguna solución.





Este tipo de problemas y yo nos reencontramos indefectiblemente cada cinco años. Así que, de una vez a otra, se me ha olvidado casi todo. De modo que si alguien tiene el asunto más fresco y le da rabia que algún diletante como opte por soluciones subóptimas y/o viejunas y esté entre asombrado e indignado de que ignore el último grito de la cosa, tiene la posibilidad de enmendarme a mí y enseñarnos, de paso, a todos, en los comentarios.



