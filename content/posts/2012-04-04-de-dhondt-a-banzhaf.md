---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
- r
date: 2012-04-04 07:15:23+00:00
draft: false
lastmod: '2025-04-06T19:09:53.662645'
related:
- 2015-12-23-un-poco-mas-sobre-el-indice-de-poder-de-banzhaf.md
- 2015-12-22-coaliciones-de-banzhaf-en-el-20d.md
- 2015-05-20-banzhaf-y-las-elecciones-que-se-nos-vienen.md
- 2019-05-07-elecciones-e-indice-supernaif-de-shapley.md
- 2013-02-11-voy-a-partir-una-lanza-a-favor-de-rosell-a-cuenta-de-la-epa.md
tags:
- estadística
- números
- r
- dhondt
- banzhaf
title: De D'Hondt a Banzhaf
url: /2012/04/04/de-dhondt-a-banzhaf/
---

Hablé el otro día con Emilio Torres y comentamos de pasada la situación política en Asturias, donde vive, después de las últimas elecciones. El escaño obtenido por UPyD otorgaba a tal partido un poder en exceso del tamaño de su representación porque era clave para formar el futuro gobierno del principado. Pero, ¿cuánto poder realmente supone ese escaño en esas condiciones? ¿Puede cuantificarse?

Porque se habla mucho en periodo electoral de la [ley D'Hondt](http://www.grserrano.es/wp/2011/05/jugando-con-el-sistema-de-dhondt/) pero, una vez asignados los escaños, cambia el juego.

Existe un método, el [índice de poder de Banzhaf](http://www.esi2.us.es/~mbilbao/pdffiles/eupower.pdf). El índice de Banzhaf para un determinado partido político mide su poder en términos del porcentaje de las posibles alianzas mínimas ganadoras en las que participa dentro de su universo total. Una alianza es ganadora cuando reúne más de la mitad de los votos. Y es mínima cuando todos sus integrantes son necesarios para que sea ganadora; excluye, por ejemplo, la alianza trivial formada por todos los partidos.

Veamos cómo calcular este índice con R y lo utilizaremos para cuantificar el valor de ese escaño:

{{< highlight R >}}
escannos <- c(17,12,10,5,1)
names(escannos) <- c( "psoe", "fac", "pp", "iu", "upyd")

banzhaf <- function(x){
  x <- -sort(-x)
  x <- x/sum(x)

  foo <- function(a,b,p){
    if(p>1/2)
      return(list(a))

    if (length(b)==0)
      return(NULL)

    b.prima <- b[-1]
    delta <- b[1]
    p.delta <- x[delta]

    return(c( foo(c(a,delta), b.prima, p+p.delta), foo(a,b.prima,p)) )
  }

  res <- foo( NULL, names(x), 0)

  sort( table(unlist(res)) / length(res) )

}

banzhaf(escannos)
{{< / highlight >}}

El resultado es:

{{< highlight R >}}
# iu upyd  fac   pp psoe
#  0.4  0.4  0.6  0.6  0.6
{{< / highlight >}}

Es decir, el escaño de UPyD le concede el mismo poder (según Banzhaf) que los cinco de IU. Y la diferencia de siete escaños entre el PP y el PSOE no le concede a este último cuota de poder adicional alguna.

Existen limitaciones obvias a este indicador que resultarán evidentes a quien piense mínimamente en él o lo aplique a casos conocidos y concretos. Así que no abundaré en ellos.

Pero sí que dejaré, por referencia, otra aplicación de este índice al resultado de las últimas elecciones generales:

{{< highlight R >}}
generales <- c(186,110,16,11,7,5,5,3,2,2,1,1,1)
names(generales) <- c("pp", "psoe", "ciu", "iu", "amaiur", "upyd",
    "pnv", "esquerra", "bng", "cc", "compromis", "fac", "gbai")

banzhaf( generales )
# pp
#  1
{{< / highlight >}}