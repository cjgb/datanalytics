---
author: Carlos J. Gil Bellosta
categories:
- varios
date: 2023-11-09
lastmod: '2025-04-06T19:01:49.712278'
related:
- 2012-01-02-iva-irpf-y-cosas-que-no-entiendo.md
- 2021-05-12-causalidad-y-paraisos-fiscales.md
- 2018-09-18-los-datos-estan-histogramizados-quien-los-deshisotogramizara.md
- 2011-02-25-1605.md
- 2018-04-17-de-espana-a-dinamarca-en-dos-pasos.md
tags:
- r
- impuestos
title: 'La progresividad fiscal: una perspectiva temporal'
url: /2023/11/09/progresividad-fiscal-temporal/
---

En
[una entrada anterior](/2023/11/07/dibujar-modelar/)
hablé de la curva de Laffer y de la predisposición a trabajar en los últimos meses del año. En esta quiero abundar sobre el asunto ilustrando cómo evolucionan los tipos marginales del IRPF por mes.

Porque la idea de los _impuestos progresivos_ es que pague más no solo en términos absolutos sino también relativos, quien más gane. Pero la gente no tiene todos sus ingresos el día 31 de diciembre sino que los va acumulando a lo largo del año. Al final de enero está todavía en los tramos más bajos del IRPF, así que su IRPF marginal es minúsculo. Pero conforme avanza el año, su IRPF marginal va aumentando.

Voy a proporcionar código para que cada uno pueda calcular aproximadamente cuál es su IRPF marginal por mes. Es así:

{{< highlight R >}}
tramos_madrid_x <- c(0, 13362.22, 19004.63, 35425.68, 57320.40)
tramos_madrid_y <- c(0,      8.5,    10.70,    12.80,    17.40, 20.50)

tramos_estado_x <- c(0, 12450, 20200, 35000, 60000, 300000)
tramos_estado_y <- c(0,   9.5,    12,    15, 18.50,  22.50, 24.50)

f_madrid <- function(x) stepfun(tramos_madrid_x, tramos_madrid_y)(x)
f_estado <- function(x) stepfun(tramos_estado_x, tramos_estado_y)(x)
f_irpf <- function(x) f_madrid(x) + f_estado(x)

cuota_irpf <- function(x) integrate(f_irpf, 0, x)$value / 100

tipo_mes <- function(mes, ingresos_mensuales) {
  integrate(f_irpf,
            ingresos_mensuales * (mes - 1),
            ingresos_mensuales * mes)$value / ingresos_mensuales
}
{{< / highlight >}}

Con las funciones anteriores uno puede ver cómo quedan los tramos hasta los 70k euros,

{{< highlight R >}}
curve(f_irpf,
    -1, 70000,
    main = "Tipos IRPF Madrid",
    xlab = "base imponible anual",
    ylab = "tipo IRPF")
{{< / highlight >}}

![](/img/2023/tipos_irpf_madrid_00.png#center)

o ver cómo le quedarían los correspondientes tramos marginales mensuales:

{{< highlight R >}}
tipos_mes <- sapply(1:12, tipo_mes, 70000 / 12)
plot(1:12, tipos_mes,
    xlab = "mes",
    ylab = "tipo marginal mensual",
    main = "Tipos marginales mensuales del IRPF")
lines(1:12, tipos_mes)
{{< / highlight >}}

![](/img/2023/tipos_irpf_madrid_01.png#center)

Nótese que en todo lo anterior hay una omisión que habrán advertido los más puestos en materia fiscal: que los ingresos anuales no son la base imponible. De los primeros hay que sustraer cierta cantidad, que depende de casas y casos, para obtener la segunda. Matemáticamente, es equivalente a añadir un tramo adicional asociado a un tipo del 0% y mover el resto hacia la derecha (¿cómo se dice _shift_ en español?) adecuadamente. Queda como ejercicio para el lector interesado.