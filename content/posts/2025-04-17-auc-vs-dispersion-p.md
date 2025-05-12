---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2025-04-17
description: 'Se estudia la relación entre la dispersión de las probabilidades y el
  AUC en modelos bien calibrados: para obtener AUC alto, hace falta que no haya scorings
  cerca de 0.5.'
lastmod: '2025-05-10T18:01:48.688140'
related:
- 2016-03-29-el-auc-es-la-probabilidad-de-que.md
- 2015-04-27-intervalos-de-credibilidad-para-la-distribucion-beta.md
- 2022-02-17-examenes-probabilisticos.md
- 2012-04-09-3564.md
- 2023-07-20-coeficientes-no-identificables.md
tags:
- estadística
- auc
- calibración
title: Sobre la relación entre la dispersión de las probabilidades y el AUC en modelos
  bien calibrados
url: /2025/04/17/auc-dispersion-calibracion
---

Supongamos que estamos construyendo un modelo de clasificación binaria. Supongamos que está _bien calibrado_, es decir, que cuando predice una probabilidad $p$ de éxito para un sujeto $i$, entonces es cierto que $Y_i \sim \text{Bernoulli(p)}$.

Por otro lado, pensemos en el AUC, que es muchas cosas, pero entre ellas,

$$ AUC=Pr(p_i >p_j | Y_i =1,Y_j =0),$$

es decir la probabilidad de que, tomando dos sujetos al azar, uno positivo, el $i$ y otro negativo, el $j$, $p_i > p_j$.

Con esa definición en mano y bajo calibración, debería ser imposible que sucediese simultáneamente que:
- el AUC fuese alto
- muchos sujetos tuviesen _scorings_ cerca de 0.5.

Es decir, solo se puede lograr un AUC alto si hay muchos _scorings_ cerca de 0 y de 1, pero pocos en la zona de incertidumbre.

Vamos a ver si las matemáticas acompañan esta intuición.

Por un lado, se sabe que

$$AUC = \int_0^1 F_0(t) dF_1(t),$$

donde $F_k(t) = P(p < t |  Y = k)$. Bajo calibración, además,

$$Pr(Y=1∣p=t)=t$$

por lo que, usando el teorema de Bayes (y abusando un poco del lenguaje),

$$f_1(t) = dF_1(t) = P(p = t |  Y = 1) = \frac{P(Y = 1 | p = t) f(t)}{P(Y = 1)} = \frac{t f(t)}{\pi_1}.$$

donde $f(t)$ es la función de densidad de las predicciones sobre [0, 1].

Análogamente, se concluye que

$$F_0(t) = \int_0^t \frac{(1-u) f(u)}{1 - \pi_1} du$$

y, por lo tanto, el AUC queda de la forma

$$AUC = \int_0^1 \int_0^t \frac{(1-u) f(u)}{1 - \pi_1} du \frac{t f(t)}{\pi_1} dt = $$
$$ = \frac{1}{\pi_1 (1 - \pi_1)} \int_0^1 \int_0^t (1-u) f(u) t f(t) du dt$$

Como la intuición no (me) da de sí para entender esta expresión, podemos reemplazar $f$ por la densidad de una beta simétrica (y hacer $\pi_1 = .5$) para obtener

![](/wp-uploads/2025/auc_on_alpha.png#center)

Con $\alpha = 10000$, que da una distribución de $f$ concentrada alrededor de 0.5, se obtiene un AUC de 0.504, como cabría esperar.

Se deja como ejercicio al lector probar con otras betas asimétricas para obtener los resultados correspondientes. En tal caso, habría que reemplazar $\pi_1$ por la correspondiente media de la beta $f$.

Etc.
