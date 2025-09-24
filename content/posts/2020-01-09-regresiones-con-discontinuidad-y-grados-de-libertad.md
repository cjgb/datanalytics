---
author: Carlos J. Gil Bellosta
categories:
- estadística
- mala ciencia
date: 2020-01-09 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:54:19.739564'
related:
- 2019-05-29-y-si-quitamos-el-puntico-de-arriba-a-la-izquierda.md
- 2019-05-14-analisis-de-la-discontinuidad-polinomios-de-grado-alto.md
- 2024-06-12-cortos.md
- 2020-01-10-son-todos-igualitos.md
- 2024-07-03-cortos-stats.md
tags:
- discontinuidad
- econometría
- regresión
- mala ciencia
- nadaesgratis
title: Regresiones con discontinuidad y grados de libertad
url: /2020/01/09/regresiones-con-discontinuidad-y-grados-de-libertad/
---

Muy falto de ideas para el blog tendría que estar para traer a la consideración de sus lectores

![](/wp-uploads/2020/01/Imagen-2-32-768x558-1.png#center)

que _ilustra_ el _resultado principal_ del artículo discutido [aquí](https://nadaesgratis.es/admin/la-estabilidad-del-gobierno-en-la-era-de-la-fragmentacion-hacia-donde-vamos-y-que-podemos-hacer).

Mario, un lector del artículo nos quita la palabra de la boca a todos:

>No he leido [sic] el paper no soy experto en el tema, pero creo que la figura presentada tiene una validez algo cuestionable. Creo que la regresión de discontinuidad es una herramienta muy poco fiable estadísticamente y que introduce un sesgo en la interpretación de los datos. [...]

Y prosigue citando referencias, etc. A lo que el autor responde (con un par de pares de huevos):

>El punto de Gelman es que usar polinomios globales y/o de grado elevados puede llevar a 'descubrir' discontinuidades donde no las haya. Por esta razón, en nuestro paper usamos sólo regresiones lineales y sólo usando observaciones cerca de la discontinuidad. Este método arregla muchos de los posibles problemas que mencionabas.
>
> Hay que mencionar además que, en nuestra figura, las lineas no están calculadas ajustando polinomios globales sino usando local linear regressions. Si bien implementado, el RDD es uno de los métodos más fiables para identificar efectos causales cuando no hay un experimento.


**Colofón:** El artículo que enlazo artículo resume otro, académico, que parece no existir pese a tal vez haber existido: el enlace está roto y la referencia al _paper_ no figura ni en el CV del autor ni en Google Académico. Confiemos en que se lo haya comido el gato para que no contribuya a torcer a los chavales.

**P.D.:** ¿Conocéis el algoritmo del chino? Funciona así:

* Se toma el gráfico anterior y se borran las regresiones locales, la línea vertical de corte y las etiquetas del eje horizontal.
* Se le pasa el gráfico a un chino y se le pide que encuentre el punto de discontinuidad.