---
author: Carlos J. Gil Bellosta
date: 2014-01-09 08:56:29+00:00
draft: false
title: Cómo apostar si tienes que

url: /2014/01/09/como-apostar-si-tienes-que/
categories:
- estadística
- finanzas
tags:
- bolsa
- estadística
- finanzas
- kelly
- mercados financieros
- savage
- utilidad
- varianza
---

Hace unos días recibí esto,

[![](/wp-uploads/2014/01/rentabilidad_carteras_unience.jpg)
](/wp-uploads/2014/01/rentabilidad_carteras_unience.jpg)

que es la rentabilidad de carteras de inversión (sospecho que no necesariamente reales) de usuarios de cierto portal que compiten por ver quién tiene más ojo en bolsa.

¿No os llama la atención esa rentabilidad >600%? ¿Cómo se puede alcanzar? ¿Es ese señor —a quien no conozco— un hacha de las inversiones?

Dos ideas me vienen a la cabeza. Una es [esta](http://www.datanalytics.com/2011/05/12/%C2%BFque-nos-jugamos/) que, pienso, no aplica. Y no lo hace porque, en particular, y como ya escribí, _la apuesta de Kelly maximiza la mediana de las ganancias_, pero ignora su varianza. Que, por lo que veremos luego, es el quid de la cuestión.

La otra cosa que me viene a la mente es un pequeño librito que guardo por casa: _Inequalities for Stochastic Processes_, de Dubin y Savage. Sabréis que la gente opina de los libros que no lee por el título y con este hago yo algo parecido: opinar por el subtítulo, _How to Gamble If You Must_.

Su quinto capítulo, _Red-and-Black_, discute y prueba que bajo funciones de utilidad razonables y con juegos del tipo doble o nada (y con una esperanza de beneficios inferior a la apuesta) la estrategia óptima es la del todo-a-una. La única manera de que la ley de los grandes números no te condene inexorablemente a la ruina es mantenerse al margen de sus hipótesis de partida. Si aquella exige $latex n \rightarrow \infty$, mantén $latex n=1$. Olvídate de la centralidad (mídase en medias o medianas) y juégale a la varianza.

El problema de la cartera de inversión ficticia no es exactamente un _red-and-black_. De hecho, no es ni parecido:

* No es un juego discreto
* La probabilidad de ganar es mayor que 0.5: la bolsa tiende a subir, ¿no?
* Etc.

Pero sobre todo, la función de utilidad es muy particular —y distinta tanto de quien apuesta en la ruleta o la implícita en el criterio de Kelly—. Es algo así como: si me va muy bien, me lo llevo todo; si obtengo un resullado de decente para abajo no ocurre nada. Como diría Taleb, _all upside with no downside_. Y como seguiría diciendo —y no sería particularmente difícil probar, supongo—, en tales casos la estrategia óptima es la más arriesgada.

En resumen:

* Si quieres aparecer en los puestos de arriba de alguno de esos concursos de inversión bursátil, juégatelo todo a Bankia o la Seda.
* Participa en muchos de ellos. Cuantos más, mejor: más probable será que suene la flauta.

Y, finalmente, desconfía de la presunta habilidad de quienes lideran esas listas (salvo que te conste que hayan leído a Dubins y Savage).