---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2019-02-18 08:13:43+00:00
draft: false
lastmod: '2025-04-06T19:03:01.076059'
related:
- 2017-01-10-repensando-la-codificacion-por-impacto.md
- 2014-09-12-bajo-el-capo-del-particionamiento-recursivo-basado-en-modelos.md
- 2020-03-16-interacciones-y-seleccion-de-modelos.md
- 2019-05-21-que-puede-colgar-de-un-arbol.md
- 2022-06-07-generalized-random-forests.md
tags:
- paquetes
- party
- r
- vcrpart
title: 'vecpart: modelización de moderadores con árboles'
url: /2019/02/18/vecpart-modelizacion-moderadores-arboles/
---

En un GLM (aún más generalizado que la G de las siglas) puede haber coeficientes _moderados_. Usando una terminología muy _ad hoc_, en el modelo  pueden entrar _predictores_ y _moderadores_. Lo cual quiere decir que la parte _lineal_ puede ser de la forma

$$\sum_i X_i \beta_i(Z_i),$$

donde las $X_i$ son los predictores propiamente dichos y las variables $Z_i$ son moderadoras, es decir, que modifican el efecto de los predictores a través de una función arbitraria $\beta_i$.

Un ejemplo: el efecto del colesterol puede depender de la edad del paciente.

Este tipo de efectos se pueden modelar vía interacciones. O con _splines_. O con _kernels_. (Más abajo hay una referencia con referencias).

Pero también, ¿por qué no?, con árboles. Eso hace el paquete [`vcrpart`](https://CRAN.R-project.org/package=vcrpart) de R. Con él, uno puede decirle al modelo: tal variable depende de estas otras y créame el típico árbol (al estilo de `ctree` o `mob` en [`party`](https://CRAN.R-project.org/package=party)) que aproxime la relación funcional. Lo que permite estudiar muy concretamente el efecto de los moderadores en el impacto de una variable, etc.

Como abrebocas,

![](/img/2019/02/vrcpart.png#center)

que describe la manera en que el departamento _modera_ el coeficiente del sexo en el famoso [conjunto de datos de las admisiones de Berkeley](https://stat.ethz.ch/R-manual/R-devel/library/datasets/html/UCBAdmissions.html). (Sí, ya sé que lo mismo se puede hacer con interacciones de toda la vida pero... ¿no es cómodo que el algoritmo ya encuentre no significativamente distintos los coeficientes relativos a los departamentos B, C, D y F?).

Y la cosa completa, junto con las referencias arriba prometidas, en [_Coefficient-Wise Tree-Based Varying Coefficient Regression with vcrpart_](https://www.jstatsoft.org/article/view/v080i06).

**Nota:** ¿no es todo esto tremendamente parecido a los modelos jerárquicos?