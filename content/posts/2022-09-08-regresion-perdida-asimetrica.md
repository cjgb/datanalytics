---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-09-08
description: Regresión lineal con pérdidas asimétricas
lastmod: '2025-04-06T19:00:42.111955'
related:
- 2022-07-26-hueco-termico.md
- 2021-07-28-apuntes-para-el-estudio-del-impacto-del-cierre-de-la-central-nuclear-de-garona-en-el-precio-de-la-electricidad-en-espana.md
- 2012-03-01-como-poner-una-lavadora.md
- 2023-05-23-48-horas-consumo-domestico-electricidad-real.md
- 2022-10-25-muchos-julios-hidraulica.md
tags:
- regresión lineal
- rmse
- mercado eléctrico
- renovables
title: Un ejemplo de regresión con pérdidas asimétricas
url: /2022/09/08/regresion-perdidas-asimetricas/
---

En los libros de texto, imperan las funciones de pérdida simétricas, como el RMSE o el MAE. Pero hay casos ---muchos, de hecho, en la práctica--- en que las pérdidas son asimétricas: es más oneroso pasarse, p.e., que no llegar. En esta entrada voy a analizar un ejemplo motivado por el siguiente tuit:

![](/img/2022/09/tuit-energia-renovable.png#center)

El resumen de lo que sigue es el siguiente:

* Voy a bajar datos de producción y consumo eléctrico de REE.
* Voy a dejar en 0 el carbón, el gas y la nuclear.
* Voy a ver por cuánto hay que multiplicar eólica y solar (dejando tal cual el resto de las renovables y cogeneraciones) para alcanzar un _óptimo_.

Obviamente, en el óptimo:

* Se tira a la basura una cantidad inmensa de electricidad (¡pasarse tiene un coste!)
* Puede haber momentos en que falte producción (y haya apagones), incluso a pesar de contar con una _ingente_ ---si no descabellada--- capacidad de almacenamiento.

También, obviamente, se van a ignorar un millón de _detallitos_ en que la realidad diferirá del modelo, tales como:

* Se supone que la potencia de carga y descarga del almacenamiento es infinita.
* Se puede almacenar sin pérdidas.
* No hay reajuste de la demanda a las particularísimas características de la curva de producción (es decir, el análisis es estático, no dinámico).
* Al igual que el 99% de la gente sin criterio, se va a ignorar el CAPEX (aun sabiendo que ignorar el CAPEX es la causa de casi todas las cuñadeces que se leen sobre el problema).

### Datos

Para descargar datos, se usa la misma función que en [esta entrada](/2022/07/26/hueco-termico-kmeans/) anterior. Con ella he bajado datos de 564 días entre el 2021-01-01 y la mitad de julio de 2022.

Los datos son cincominutales, lo cual me ha inducido a emplear como unidad de energía el MW5m, la doceava parte del más habitual MWh.

Los datos están completos y son correctos para todos los días menos un par de breves periodos en dos días intermedios donde, por algún motivo, había problemas con la hora. No he tratado de corregirlos sino que, siendo tan pocos, 24 filas de 161917, he dejado que se incorporen al _ruido_ (y aún cabe la posibildad de que se hayan procesado adecuadamente como subproducto involuntario del particular tratamiento de datos).

### Pérdidas simétricas

Aunque no tenga sentido alguno, por referencia, voy a dejar aquí el código para estudiar cuál sería la solución _de libro_ usando la regresión clásica (nótese que ya he importado previamente `pandas` y `numpy`):

{{< highlight python >}}
from scipy.optimize import minimize

def generacion_estimada(x1, x2):
    out = x1 * dat.eol + x2 * dat.sol + dat.otra_renovable
    return out

def perdida_rmse(x):
    x1, x2 = x
    tmp = dat.dem - generacion_estimada(x1, x2)
    tmp = np.sqrt((tmp**2).mean())
    return tmp

res_rmse = minimize(perdida_rmse, (1,1))
{{< / highlight >}}

La solución es que basta con multiplicar la producción eólica por 2 y la solar por 1.6 para, _en promedio_, cubrir toda la demanda eléctrica con renovables. Aunque, claro, habría que tener capacidad de casi 3000 GWh (y no los 80 especificados en el tuit) para evitar apagones:

![](/img/2022/09/requisitos-almacenamiento-energia.png#center)

**Nota:** Por hacer una estimación de lo que representa eso: de haber 20 millones de hogares en España, tocaría tener en cada uno una batería de unos 150 kWh de capacidad. A precios de hoy, unos 50k euros por hogar).

**Nota:** En honor a la verdad, hay que advertir que el pico se produce al principio del periodo y puede haberse visto afectado por algún tipo de _efecto frontera_, es decir, que si hubiese habido capacidad almacenada previa al inicio del periodo, la necesidad de almacenamiento en primavera de 2021 hubiese sido menor. Los picos de almacenamiento de 2022 pueden ser una mejor guía de las necesidades reales en este ejercicio irreal.


### Pérdidas asimétricas

Aquí se va reemplazar la pérdida simétrica, el RMSE, de `perdida_rmse` por

{{< highlight python >}}
ALMACENAMIENTO_MAXIMO = 20000 * 4 * 12
ALMACENAMIENTO_INICIAL = ALMACENAMIENTO_MAXIMO / 2.0

def perdida_asimetrica(x, verbose = False):
    x1, x2 = x
    y  = dat.dem.to_numpy()
    yh = generacion_estimada(x1, x2).to_numpy()

    desaprovechada = np.zeros(y.shape)
    almacenada = np.zeros(y.shape)
    almacenada[0] = ALMACENAMIENTO_INICIAL
    apagones = np.zeros(y.shape)
    deficit = (y - yh).clip(min = 0)
    exceso  = (yh - y).clip(min = 0)

    for i in range(1, len(y)):
        if deficit[i] > 0:
            almacenada[i] = almacenada [i-1] - deficit[i]
            if almacenada[i] < 0:
                apagones[i] = -almacenada[i]
                almacenada[i] = 0
        if exceso[i] > 0:
            almacenada[i] = almacenada [i-1] + exceso[i]
            if almacenada[i] > ALMACENAMIENTO_MAXIMO:
                desaprovechada[i] = almacenada[i] - ALMACENAMIENTO_MAXIMO
                almacenada[i] = ALMACENAMIENTO_MAXIMO

    apagones_total = sum(apagones)
    desaprovechada_total = sum(desaprovechada)

    if verbose:
        return (apagones, desaprovechada, almacenada)

    return apagones_total + desaprovechada_total / 1000.0
{{< / highlight >}}

Nótese cómo, al limitar la capacidad de almacenamiento a 80 GWh (12 veces más GW5m), habrá necesariamente apagones (errores por defecto).

**Nota:** El CAPEX en baterías ---una de las tecnologías de almacenamiento más caras---, unos 1000 euros por hogar ---de nuevo, a precios de hoy--- es asumible, pero es, como se verá, la parte menor del CAPEX necesario para montar el tinglado renovable).

 Por otro lado, se va a desperdiciar mucha electricidad (errores por exceso). Como se aprecia en el `return`, se ha valorado en 1000 veces más un kWh no disponible (un déficit no cubierto por el almacenamiento que genera un apagón) que desperdiciar un kWh (por tener que desenchufar un panel solar de la red).

 Ahora, el _óptimo_ asimétrico, el obtenido al hacer

 {{< highlight python >}}
res_asimetrico = minimize(perdida_asimetrica, (1,1))
{{< / highlight >}}

pasa por multiplicar la capacidad eólica por 8.2 y la solar por 4.

La evolución de las variables más importantes del problema tiene el siguiente aspecto:

![](/img/2022/09/asimetrico-energia-almacenada.png#center)

![](/img/2022/09/asimetrico-desaprovechada.png#center)

![](/img/2022/09/asimetrico-apagones.png#center)

Obviamente, en un ejercicio menos delirante y más realista habría que tener en cuenta todas las cuestiones apuntadas al inicio de la entrada, lo cual excede con mucho el alcance pretendido de esta entrada que consiste, recuérdese, en ilustrar y catalogar un ejemplo en el que un modelo estadístico ---¿sigue siéndolo realmente? ¿o debería decir tal vez _econométrico_ en tanto que no hay ni modelo probabilístico subyacente ni nada más que lo eleve a la categoría de propiamente estadístico?--- usa una función de error asimétrica.

**Nota:** Tengo que repetir este ejercicio dejando la nuclear enchufada para ver hasta qué punto puede servir, como parece ser opinión de algunos, como complemento a la generación renovable. Mis sospechas es que, planteado en estos términos, empeorará la situación. Pero habrá que dejar que los números hablen un poquito.