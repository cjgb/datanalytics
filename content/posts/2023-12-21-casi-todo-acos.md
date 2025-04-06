---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2023-12-21
draft: false
lastmod: '2025-04-06T18:51:49.831408'
related:
- 2023-11-21-sumas-lognormales.md
- 2014-10-23-la-aspiradora-acosadora.md
- 2024-02-15-margenes-distribucion.md
- 2022-11-17-igualdad-oportunidades.md
- 2018-10-05-licitaciones-por-insaculacion-ponderada.md
tags:
- amazon
- acos
- subastas
- internet
title: Casi todo sobre el ACOS
url: /2023/12/21/todo-sobre-acos/
---

Alguien vende cachivaches en internet por, p.e., Amazon. El cachivache se vende, digamos, por 10 y Amazon se queda, por ejemplo, con 1. Se ha dado en llamar ACOS a la fracción 1 / 10; de otra manera, al cacho que Amazon se queda de cada compra.

¿A través de qué mecanismo detrae Amazon el ACOS? La cosa es, en términos resumidos, así:

* El vendedor entra en una puja. Puede decir algo así como que si alguien busca "cachivaches" en Amazon, está dispuesto a pagar hasta 20 céntimos para que Amazon muestre su producto.
* Si un potencial cliente busca "cachivaches", Amazon le muestra los productos de los proveedores que más hayan pujado por ese término.
* Si el cliente _clica_ en el anuncio, Amazon se autoingresa el importe de la puja (nota: realmente, es un tipo de puja que, se ve, se llama [_de Vickrey_](https://es.wikipedia.org/wiki/Subasta_Vickrey) donde no se paga el precio de la puja sino el segundo mejor precio) haya o no venta posterior.
* El cliente puede terminar comprando el producto o, en el caso más habitual, no haciéndolo.

Una de las preocupaciones de los vendedores es mantener el ACOS bajo control. Porque algunos que dejarán de existir pronto soportan ACOS de más del 100%. Lo sé porque lo he visto.

Digamos que un vendedor se plantea mantener el ACOS por debajo del 15%. Abstractamente, el problema consiste en limitar la puja de manera que, en cierto sentido,

$$\text{ACOS} = \frac{X}{Y Z} < .15$$

Digo _en cierto sentido_ porque el término de la izquierda es una variable aleatoria. Que sea menor que .15 puede interpretarse como que cierto cuantil (¿el 95%?) suyo sea .15.

Arriba, $X$, $Y$ y $Z$ son las siguientes variables aleatorias:

* $X$ es el precio que se paga por _click_ (que no es fijo en tanto que la puja es _de Vickrey_).
* $Y$ es la probabilidad de compra condicionada al _click_.
* $Z$ es el precio de venta (que en algunos casos puede ser fijo, pero que en otros puede fluctuar por motivos diversos).

De esa manera, $Z$ es el ingreso por venta y $YZ$ el ingreso por _click_.

Modelar el ACOS consiste entonces en modelar ---y son cosas que, en general, pueden asumirse independientes--- por separado las variables aleatorias subyacentes.

El resto se sigue de lo anterior por vías fácilmente adivinables.