---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2023-06-06
lastmod: '2025-04-06T18:45:13.612291'
related:
- 2022-10-25-muchos-julios-hidraulica.md
- 2022-05-19-algunos-numeros-cambio-climatico.md
- 2022-09-08-regresion-perdida-asimetrica.md
- 2022-07-26-hueco-termico.md
- 2012-03-01-como-poner-una-lavadora.md
tags:
- energía
- coches
- españa
- david mackay
title: 'Vehículos particulares: estimación del número de kWh/día por conductor en
  España'
url: /2023/06/06/consumo-vehculos-particulares-per-capita/
---

En
[una entrada anterior](/2022/10/25/potencial-hidraulico-total-espana/)
ya me ocupé de asuntos relacionados con el libro
[_Sustainable Energy — without the hot air_](http://www.withouthotair.com/).
Hoy vuelvo sobre su tercer capítulo,
[_Cars_](https://www.withouthotair.com/c3/page_29.shtml),
donde el autor ensaya el cálculo del (atención: cada palabra de lo que sigue está muy bien medida) número de kWh al día que el conductor típico consume en el RU (o consumía en la fecha en la que se escribió el libro, alrededor del 2015).

Le sale una estimación redonda de 40 kWh/día.

Nótese que no se trata de la estimación media por persona ---hay muchas personas que no conducen--- sino de la de un _conductor típico_. Para ello usa dos fuentes: la estimación del número de kilómetros recorridos anualmente en el RU y la estimación del número de personas que usan habitualmente el coche.

Me he tomado el esfuerzo de recalcular esos números para la España de hoy. He utilizado como fuente de datos la Encuesta de Presupuestos Familiares de 2021 (última publicada). En ella tengo directamente estimaciones del consumo de combustibles para locomoción sin tener que calcularlos indirectamente como función del número de kilómetros recorridos. Usado el código

{{< highlight R >}}
library(data.table)
library(ggplot2)

epf <- fread("EPFgastos_2021.csv")
epf$ANOENC <- NULL

# note that 07223 refers to "otros comuustibles" (which?)
# but they are relatively small
combustible <- epf[epf$CODIGO %in% c("07221", "07222"),]
combustible$CANTIDAD <- combustible$CANTIDAD / combustible$FACTOR

# l to kWh
gasolina <- combustible[combustible$CODIGO == "07222",]
gasolina$kwhd_equiv <- gasolina$CANTIDAD * 9.7 / 365

gasoil <- combustible[combustible$CODIGO == "07221",]
gasoil$kwhd_equiv <- gasoil$CANTIDAD * 10.7 / 365

equiv <- rbind(gasolina, gasoil)
equiv <- equiv[,
    .(kwhd_equiv = sum(kwhd_equiv),
    FACTOR = max(FACTOR)), by = "NUMERO"]

equiv$kwhd_equiv[equiv$kwhd_equiv > 200] <- 200

ggplot(equiv, aes(x = kwhd_equiv)) +
  geom_histogram(aes(weight = FACTOR), bins = 100) +
  ggtitle('kWh/day for "driving homes" (topped at 200 kWh/day)') +
  xlab("kWh/day") +
  theme_bw() +
  scale_y_continuous(
    labels = function(x) format(x/1000,
    nsmall = 0,
    big.mark = " "),
    name = "driving homes, thousands")
{{< / highlight >}}

he obtenido finalmente

![](/img/2023/cars_kwhd_equivalent.png#center)

Y, ahora, los comentarios:

* La mediana de la distribución de esa gráfica es, sorprendentemente, ~41. En el libro en el que esto se inspira, la estimación final del autor es 40.
* Una vez se tienen los datos delante, es más difícil definir qué cosa es un _conductor típico_, ¿verdad?
* Hay una gran variación en el consumo de combustibles en los últimos años: covid, etc. No está claro si 2021 es o no un _año típico_. Desde luego, está fuera de la tendencia de los años precovid.
* Como en el libro en cuestión, estos valores se refieren a "hogares en que se conduce", que vienen a ser, según la EPF, aproximadamente la mitad (como en el libro, de nuevo).
* Se han ignorado los _otros combustibles_ para automoción que recoge la EPF pero que, por un lado, son pocos en cantidad y, por el otro, no sé cómo traducir sus equivalentes en kWh/día.
* Finalmente, en un mundo electrificado es posible que se consumiesen menos kWh/día para la el mismo kilometraje, por lo que la cantidad de kWh/día que generar sería algo inferior.