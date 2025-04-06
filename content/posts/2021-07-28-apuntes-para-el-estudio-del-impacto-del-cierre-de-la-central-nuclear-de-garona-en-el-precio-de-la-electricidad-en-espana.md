---
author: Carlos J. Gil Bellosta
categories:
- números
- varios
date: 2021-07-28 09:17:09+00:00
draft: false
lastmod: '2025-04-06T18:44:48.956446'
related:
- 2022-09-08-regresion-perdida-asimetrica.md
- 2022-07-26-hueco-termico.md
- 2024-03-14-precio-medio-diario-electricidad.md
- 2023-07-18-energia-nuclear-salvara-mundo.md
- 2022-01-25-universo-muestra-big-data.md
tags:
- energía nuclear
- garoña
- mercado eléctrico
- números
title: Apuntes para el estudio del impacto del cierre de la central nuclear de Garoña
  en el precio de la electricidad en España
url: /2021/07/28/apuntes-para-el-estudio-del-impacto-del-cierre-de-la-central-nuclear-de-garona-en-el-precio-de-la-electricidad-en-espana/
---

Nada más ni nada menos.

Vaya por delante, en mi descargo y como aviso para los que se cansan más de leer textos largos y complejos que de opinar, que no es un estudio completo. Realmente, solo voy a proporcionar herramientas para que otros con más tiempo e interés sobre el asunto las tomen si les parecen adecuadas, las limpien de errores y omisiones, se pongan a la faena y, con suerte, puedan llegar a resultados que tengan a bien publicar para iluminarnos a todos. El asunto, a todo esto, es un contrafactual: qué podría estar sucediendo con los beneméritos precios del mercado eléctrico español de seguir la central nuclear de Garoña (recuérdese: 460 MW de potencia) en funcionamiento.

He utilizado los [datos](https://www.omie.es/es/file-access-list?parents%5B0%5D=/&parents%5B1%5D=Mercado%20Diario&parents%5B2%5D=3.%20Curvas&dir=Curvas%20agregadas%20de%20oferta%20y%20demanda%20del%20mercado%20diario&realdir=curva_pbc) correspondientes al día en que escribo, el de Santiago de 2021, que son los que subyacen a estas horribles curvas de demanda ([enlace](https://www.omie.es/es/market-results/daily/daily-market/aggragate-suply-curves?scope=daily&date=2021-07-25&hour=12)) con las que OMIE trata de ---y sin duda, lo logra--- confundirnos:

![](/wp-uploads/2021/07/curvas_demanda_sector_electrico-1024x558.png#center)

_[¿En serio colocan el precio en las ordenadas y la energía en las abscisas? ¿En serio tienen que representar datos alejadísimos de los precios de casación? Quienquiera que haya tomado esas decisiones, necesita un consultor urgentemente.]_

En concreto, he bajado el fichero del día y lo he preprocesado así (porque, pobrecito, lo tiene todo: _encoding_ de Windows, dos líneas de encabezado con metadatos prescindibles, cifras en formato RAE, una fila de más, una columna de más, etc.):

{{< highlight R >}}
raw <- read.table("curva_pbc_20210725.1", sep = ";",
                    dec = ",", skip = 2, header = T,
                    fileEncoding = "latin1")

dat <- raw
dat$Fecha <- NULL
dat$Pais <- NULL
dat$Unidad <- NULL
dat$X <- NULL

dat <- dat[-nrow(dat),]

colnames(dat) <- c("hora", "cv", "amount", "price", "oc")

dat$amount <- gsub("\\.", "", dat$amount)
dat$amount <- as.numeric(gsub(",", ".", dat$amount))
dat$price <- gsub("\\.", "", dat$price)
dat$price  <- as.numeric(gsub(",", ".", dat$price))

dat12 <- dat[dat$hora == 12,]
dat12$hora <- NULL
{{< / highlight >}}

Las siguientes líneas ordenan las órdenes de compra y venta, calculan la cantidad acumulada convenientemente y crean la gráfica de oferta y demanda sobre los ejes _que son_ y marcan el precio del mercado:

{{< highlight R >}}
venta <- dat12[dat12$cv == 'V' & dat12$oc == "O",]
venta <- venta[order(venta$price),]
venta$acum <- cumsum(venta$amount)

compra <- dat12[dat12$cv == 'C' & dat12$oc == "O",]
compra <- compra[order(-compra$price),]
compra$acum <- cumsum(compra$amount)

plot(venta$price, venta$acum, type = "l", xlim = c(0, 100),
        xlab = "precio", ylab = "MWh",
        main = "Oferta y demanda del mercado eléctrico\nespañol (2021-07-25, 12h)")
lines(compra$price, compra$acum, col = "red")
abline(v = max(venta$price[venta$acum < approx(compra$price, compra$acum, venta$price)$y]))
{{< / highlight >}}

Es decir, generan esto:

![](/wp-uploads/2021/07/curva_oferta_demanda_00.png#center)

_[¿A que no se parecen a las de los libros que se enseñan en esas facultades donde los profes enseñan una cosa por la mañana y escriben un artículo en El País por la tarde sosteniendo exactamente lo contrario?]_

Luego, puedo construir el contrafactual, donde a la oferta le sumo los 460 MW de la extinta central de Garoña (en azul). Para ello, uso

{{< highlight R >}}
plot(venta$price, venta$acum, type = "l", xlim = c(0, 100),
        xlab = "precio", ylab = "MWh",
        main = "Oferta y demanda contrafactuales del\nmercado eléctrico español (2021-07-25, 12h)")
lines(compra$price, compra$acum, col = "red")
lines(venta$price, venta$acum + 460, col = "blue")
abline(v = max(venta$price[venta$acum < approx(compra$price, compra$acum, venta$price)$y]))
abline(v = max(venta$price[venta$acum + 460 < approx(compra$price, compra$acum, venta$price)$y]), col = "blue")
{{< / highlight >}}

y obtengo

![](/wp-uploads/2021/07/curva_oferta_demanda_01.png#center)

En términos de oferta, Garoña es casi inapreciable (¡un saludo desde aquí a los cuarentones que estén estrenando problemas de visión!) pero la curva de demanda es tan plana, que el impacto sobre el precio mayorista es muy significativo: tres euros.

Sé que los hipertacañones expertos en el funcionamiento del mercado eléctrico estarán ahora hiperventilando (los saludo también: durante un breve periodo, hace muchos años, fuimos también colegas y la consultoría en el mercado eléctrico, recién estrenado en aquellas fechas, ha pagado, como poco, un palmo cuadrado de mi otra hipoteca). De hecho, el precio que obtengo arriba, 52€/MWh, no es el real del mercado en la hora en cuestión, que es de unos 86€/MWh .

Sucede así porque el operador del mercado excluye algunas ofertas baratas e introduce otras más caras por motivos técnicos de todo tipo. Por ejemplo, porque hay centrales que no se pueden enchufar y desenchufar a voluntad (y si las necesitas en una hora concreta, les tienes que comprar también energía en las horas colindantes), por razones de distribución geográfica, etc. Así que las ofertas efectivamente casadas no son las que aparecen en el gráfico anterior sino otras (que OMIE tiene la gentileza de identificar convenientemente con una C).

Por lo que si hago

{{< highlight R >}}
vendida <-  dat12[dat12$cv == "V" & dat12$oc == "C",]
vendida <- vendida[order(-vendida$price),]
vendida$acum <- cumsum(vendida$amount)
{{< / highlight >}}

puedo ver las ofertas efectivamente casadas de la más cara a la más barata. Un extracto de las primeras, por centrar ideas, es:

{{< highlight R >}}
head(vendida)
#       cv amount price oc acum
# 40124  V   44.2 86.47  C 44.2
# 40123  V   22.0 86.40  C 66.2
# 40122  V   11.5 86.23  C 77.7
# 40114  V    0.4 85.20  C 78.1
# 40115  V    1.3 85.20  C 79.4
# 40116  V    8.1 85.20  C 87.5
{{< / highlight >}}

Y si excluyo los primeros 460 MW más caros, llego a un precio de 77.36€/MWh (vs 86.47€/MWh excluyendo Garoña). Vamos, en números redondos, un 11% más caro en esa hora concreta.

Obviamente, he dado por buenas una serie de hipótesis muy convenientes para las tesis de algunos. Se podría argumentar que Garoña no tendría que desplazar necesariamente toda esa energía tan cara y que alguna de ella podría seguir siendo necesaria, etc. Y sí, casi seguro que todas estas objeciones son verdaderas en algún grado.

Pero como no he visto el análisis del impacto del cierre de las centrales nucleares sobre el precio del _pool_ por ningún lado, he tirado de mis diletancias por ver si, provocando, alguno recoge el guante y como digo arriba, aprendemos todos.

**Coda:** Escribí el texto anterior hace unos días y me ha dado tiempo de repensarlo antes de publicarlo. La primera neo-conclusión es que el mercado eléctrico no es, como se dice, marginalista. O que su marginalismo está muy condicionado por las restricciones técnicas del sistema y que las órdenes no se casan como en la bolsa sino, intuyo, resolviendo un problema de optimización del bien conocido tipo minimiza el coste sujeto a tales condiciones. Y los que tenemos experiencia con ellos sabemos que es prácticamente imposible formularlo y resolverlo exactamente y que las heurísticas las carga el diablo. Es de esperar, en todo caso, que quienquiera que sea el encargado de supervisarlo no esté empachado de cenas finas a cuenta de otro a estas alturas de su carrera profesional.

La segunda es que un mercado no se conoce hasta que no se le encuentran las trampas. Estoy seguro de que en este, como en otros que conozco, existen _trucos_ por los que un operador puede extraer un beneficio ateniéndose a la norma de la cosa aunque no a su espíritu. Sería muy ilustrativo que alguien que lo conozca a fondo compartiese con todos algunos ejemplos.