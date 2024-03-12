---
author: Carlos J. Gil Bellosta
date: 2024-03-12
title: 'Cartogramas "de Dorling"'
url: /2024/3/12/cartogramas-dorling
categories:
- r
tags:
- r
- mapas
- cartogramas
---

Motivado por [esta entrada](https://statmodeling.stat.columbia.edu/2024/03/03/hey-heres-some-r-code-to-make-colored-maps-using-circle-sizes-proportional-to-county-population/)
construí
![](/wp-uploads/2024/cartograma-dorling-peninsula.png#center)

usando

{{< highlight r >}}

muns <- st_read("data/CifraPob2023.shp")
peninsula <- muns[muns$ccaa != 'Canarias',]
plot(peninsula["pob_23"])
peninsula <- st_transform(peninsula, 25830)


peninsula_dorling <- cartogram_dorling(
  x = peninsula,
  weight = "pob_23",
  k = 0.2,
  itermax = 100)

plot(peninsula_dorling["pob_23"])
{{< / highlight >}}

sobre unos datos que ya no recuerdo de dónde bajé. La única línea no autoexplicativa del código es

{{< highlight r >}}
peninsula <- st_transform(peninsula, 25830)
{{< / highlight >}}

que transforma las coordenadas originales de los datos en coordenadas _proyectadas_ (o, más bien, las coordenadas proyectadas que rigen en la zona peninsular). El `25830` en cuestión me lo chivó un LLM.

Antes de usar `cartogram_dorling` pensé cómo podría programar algo parecido a mano. La primera idea que a uno se le ocurre es la programación lineal ---que, en este caso no sería lineal sino.... ¿cuadrática?---; pero, casi seguro, el tamaño del problema con todas las restricciones potenciales lo hace computacionalmente inviable. Casi seguro, hay que recurrir a heurísticas para obtener una solución razonable.

Mirando el resultado para la península, parece adivinarse la que usa la función: en caso de intersección de dos bolas, estas se empujan radialmente hacia el exterior hasta que se vuelven tangentes. Y se itera. Eso explicaría, por ejemplo, cómo Barcelona (y también Valencia) parece expulsada al Mediterráneo por su periferia. Tiene sentido hacerlo así, pero no me he entretenido ni en probarlo ni en refutarlo. Con dar a conocer la existencia de estos _cartogramas de Dorling_ ---otro de los grandes fabricantes de problemas sociales---, me basta por hoy.


