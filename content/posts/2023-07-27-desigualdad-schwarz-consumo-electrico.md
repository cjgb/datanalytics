---
author: Carlos J. Gil Bellosta
categories:
- varios
date: 2023-07-27
lastmod: '2025-04-06T19:12:28.051962'
related:
- 2023-05-23-48-horas-consumo-domestico-electricidad-real.md
- 2023-03-07-contador-electricidad.md
- 2012-03-01-como-poner-una-lavadora.md
- 2022-09-08-regresion-perdida-asimetrica.md
- 2024-03-14-precio-medio-diario-electricidad.md
tags:
- electricidad
- desigualdades
- física
title: Desigualdad de Schwarz y su aplicación al consumo eléctrico doméstico
url: /2023/07/27/desigualdad-schwarz-consumo-electrico/
---

Como saben los viejos del sitio, instalé un dispositivo en el cuadro que mide mi consumo eléctrico en tiempo real. Lo que hace el dispositivo es muy simple. Por un lado, mide las funciones $i(t)$ y $v(t)$ (intensidad y voltaje); por el otro lado, calcula las integrales

$$\int_0^T i(t) v(t) dt,$$

$$\int_0^T i^2(t) dt$$

y

$$\int_0^T v^2(t) dt.$$

Con un $T$ _pequeño_ (unos segundos), muestra en una _app_ los valores

$$\frac{1}{T}\int_0^T i(t) v(t) dt,$$

$$\sqrt{\frac{1}{T} \int_0^T i^2(t) dt}$$

y

$$\sqrt{\frac{1}{T} \int_0^T v^2(t) dt}.$$

Por ejemplo, ahora mismo,

![](/img/2023/consumo_electricidad_00.png#center)

El _Power(W)_ es la primera integral, la _potencia real_ consumida en mi hogar. Las otras dos, son las conocidas como $I_{rms}$ y $V_{rms}$ ---_Current(mA)_ y _Voltage(V)_ en la _app_--- donde _rms_ significa lo mismo que siempre: _root mean square_.

De la física mal aprendida de bachillerato sabemos que $P = IV$, pero en este caso, $I_{rms} \times V_{rms} = 305.44 W > 241.7 W$. La explicación, la desigualdad de Schwarz:

$$\int_0^T i(t) v(t) dt \le \sqrt{\int_0^T i^2(t) dt} \sqrt{\int_0^T v^2(t) dt}.$$

La igualdad, además, sólo se alcanza si $i(t) = \lambda v(t)$ para algún $\lambda$ real, algo que sucede a menudo en muchos libros.

Que $i(t)$ y $v(t)$ no sean proporcionales puede tener muchas causas de las que los libros tienden a mencionar las viejunas (y omitir otras más modernas, como las que tienen que ver con fuentes conmutadas, etc., relacionadas con la profusión de cachivaches electrónicos).

En ningún sitio he mencionado que $v(t)$ es ---aproximadamente--- una sinusoide porque, realmente, no hace falta saberlo: podría ser cualquier función.

La expresión de la derecha se llama _energía aparente_ que, por la desigualdad de Schwarz, es siempre superior a la _real_, la de la izquierda. Para el que quiera saber más sobre el asunto, he preparado
[esto](https://github.com/cjgb/datanalytics_code/blob/main/reactive-energy/reactive_energy_00.ipynb)
donde se analiza un circuito con una resistencia y un condensador y se extraen conclusiones muy jugosas.