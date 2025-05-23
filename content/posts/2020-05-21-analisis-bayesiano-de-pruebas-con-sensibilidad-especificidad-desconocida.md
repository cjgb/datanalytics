---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-05-21 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:54:40.193812'
related:
- 2020-06-16-coronavirus-prevalencia-sensibilidad-y-especificidad.md
- 2020-04-27-muestreo-sensibilidad-y-especificidad.md
- 2020-06-09-53-o-cual-es-la-prior.md
- 2020-07-09-sobre-la-curva-roc-como-medida-de-bondad-de-clasificadores.md
- 2013-05-16-el-error-en-las-encuestas-cuentas-en-una-servilleta.md
tags:
- coronavirus
- enecovid19
- especificidad
- estadística bayesiana
- ine
- isciii
- sensibilidad
title: Análisis (bayesiano) de pruebas con sensibilidad/especificidad desconocida
url: /2020/05/21/analisis-bayesiano-de-pruebas-con-sensibilidad-especificidad-desconocida/
---

Esto tiene que ver con lo del [estudio ENECOVID](https://datanalytics.com/2020/05/15/un-marco-sobre-el-que-reflexionar-sobre-el-estudio-de-seroprevalencia-enecovid19/), por supuesto.

Esto tiene que ver con los ajustes que hay que realizar en los resultados por la menos que perfecta sensibilidad y especificidad.

Porque no basta con lo que diga el prospecto de los _kits_ chinos.

Por eso es recomendable leer [_Bayesian analysis of tests with unknown specificity and sensitivity_](https://bob-carpenter.github.io/diagnostic-testing/reports/specificity.pdf).

**Coda:** Cuando era matemático y comencé a estudiar estadística, me llamaba mucho la atención (por no decir que me escandalizaba) la alegría con la que estimadores sujetos a error de un modelo se insertaban como verdad divina en otro. Que es lo que aparentemente se hace cuando el estimador puntual de sensibilidad y especificidad _copipega_ tal cual en las fórmulas del ajuste.