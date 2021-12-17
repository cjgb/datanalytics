---
author: Carlos J. Gil Bellosta
date: 2012-01-09 06:44:41+00:00
draft: false
title: ¿Cuánto gana el banco con tu hipoteca?

url: /2012/01/09/%c2%bfcuanto-gana-el-banco-con-tu-hipoteca/
categories:
- finanzas
- r
tags:
- finanzas
- hipotecas
- r
---

Parece mentira, pero hay gente que lo calcula fatal. Hace tiempo, un antiguo colega mío, matemático él, había propuesto el ejercicio a sus alumnos y estimó, me contó, que el banco recibía, aproximadamente, _el doble_ de lo que prestaba. La operación que había realizado era muy sencilla: calcular el saldo vivo inicial con la suma de todas las cuotas mensuales. Pero la operación es incorrecta. Veamos por qué. Y obtengamos, de paso, alguna estimación más ajustada.

Imaginemos una hipoteca de 100k euros a 25 años referenciada al euribor (2%) y con un diferencial del 1%. Según una [calculadora de hipotecas](http://www.euribor.com.es/calcular-hipoteca/), la cuota es de 474.21 euros mensuales. Y, efectivamente, `25 * 12 * 474.21 = 142263` excede con mucho la cuantía inicial.

Pero —cosa que nunca nos enseñaron a los matemáticos— dinero de hoy no puede sumarse con dinero de mañana. Son peras y manzanas. Cinco euros _mañana_ no son cinco euros en la _mano_. Los cinco euros de mañana —por muchos motivos: por la inflación, porque quien me los tiene que entregar a lo peor se olvida, porque los necesito _ya_, etc.— valen menos que los cinco que tengo. Digamos que el valor de cinco euros mañana son, por ejemplo, 4.98 euros hoy porque me veo obligado a aplicarles un _descuento_.

Los contables, cuando tienen que sumar cantidades en fechas distintas, utilizan el descuento de todas ellas a día de hoy —conocido como [valor presente neto](http://es.wikipedia.org/wiki/Valor_actual_neto)— para agregarlas. El descuento que aplican viene determinado por los tipos de interés: 5 euros en 3 meses valen $latex 5/(1+r)^3$ hoy, donde $latex r$ es el tipo de interés mensual.

Para calcular el valor de la hipoteca, se descuentan los pagos por la tasa mensual, que en nuestro caso es de `3 / 12 = 0.25 %` y se agregan de la siguiente forma:


$$ \sum_{t=1}^{12 \times 25} \frac{474.21}{(1 + 0.3/12)^t} = 474.21 \sum_{t=1}^{12 \times 25} \frac{1}{(1.0025)^t} $$


Aunque la expresión anterior admite una forma cerrada, nos es más cómodo a los perezosos calcularla en R así


    <code>> sum( ( 1 + 0.03 / 12) ^(-(1:(25 * 12)) ) ) * 474.21
    [1] 99999.72</code>


Y, efectivamente, se obtienen los 100k euros de partida.

Pero, entonces, ¿dónde y cómo gana dinero el banco?

Pues resulta que no todos los agentes económicos descuentan con los mismos tipos de interés. El Estado Español tiene unos tipos de descuento distintos que los del Alemán o que la Comunidad Valenciana. Y mi banco otros distintos que los míos: le cuesta menos endeudarse que a mí.

Supongamos que el banco que concede la anterior hipoteca es capaz de financiarla pagando el euribor, es decir, el 2%. ¿Cuál sería el valor presente neto de los flujos de dinero que supone el pago de las cuotas? Es


$$ 474.21 \sum_{t=1}^{12 \times 25} \frac{1}{(1 + 0.2/12)^t}, $$


que en R queda


    <code>> sum( ( 1 + 0.02 / 12) ^(-(1:(25 * 12)) ) ) * 474.21
    [1] 111880.4</code>


Et voilá, el banco hace casi 12k euros con conceder dicha la hipoteca.
