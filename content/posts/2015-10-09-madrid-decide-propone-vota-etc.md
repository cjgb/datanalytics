---
author: Carlos J. Gil Bellosta
categories:
- números
- r
date: 2015-10-09 08:13:44+00:00
draft: false
lastmod: '2025-04-06T18:58:00.667171'
related:
- 2016-10-06-que-hagan-lo-que-quieran-en-plaza-de-espana-yo-la-verdad-no-tengo-tiempo-para-leer-350-mb-de-documentacion.md
- 2012-09-20-como-votan-los-diputados.md
- 2015-12-30-por-que-el-empate-de-la-cup-es-mas-raro-de-lo-que-parece-y-de-lo-que-yo-mismo-digo.md
- 2018-11-08-siguen-votando-igual-los-diputados.md
- 2015-09-16-asi-no-o-los-sesgos-de-las-encuestas-de-respuesta-voluntaria.md
tags:
- democracia directa
- madrid
- números
- r
- scraping
title: Madrid decide, propone, vota, etc.
url: /2015/10/09/madrid-decide-propone-vota-etc/
---

De siempre, no sé por qué motivo, me interesaron esas cosas relacionadas con la democracia directa. En la feria del libro del año nosecuántos compré un libro al respecto (que presté y no me han devuelto). He seguido de cerca el desarrollo de plataformas como [Agora](https://agoravoting.com/) y conozco a alguno de sus desarrolladores. Di guerrita en Suiza a los locales para que me explicasen pros, contras y funcionamientos de lo que allí tienen instalado. Estoy al tanto de los problemas que ha planteado la democracia directa en California (sobre lo que recomiendo [esto](http://www.economist.com/node/18548119)). Etc.

En Madrid se ha creado una [plataforma de democracia directa](https://decide.madrid.es/proposals). Para que una propuesta genere una respuesta de la administración tiene que recoger el apoyo de un 2% del censo, unas 53000 personas.

¿Mucho o poco? Examinemos la cifra comparativamente.

El _budget participatif_ de París, por ejemplo, [eligió en 2014 nueve proyectos](https://budgetparticipatif.paris.fr/bp/je-vote.html) con presupuestos entre uno y tres millones de euros. El número de votos de los ganadores (en una ciudad mucho más poblada que Madrid) rondó entre los 5k y los 9k.

Un sistema parecido al de Madrid que impulsa el gobierno estadounidense, [We the People](https://petitions.whitehouse.gov/), exige 100k votos para tener en cuenta una petición.

Con esos antecedentes, ¿habrá alguna petición que alcance alguna vez los 53k votos necesarios en Madrid?

Con el muy perfectible

{{< highlight R >}}
library(rvest)

ids <- 1:3000

#ids <- 319:321

res <- sapply(ids, function(i){
  print(i)
  url <- paste("https://decide.madrid.es/proposals/", i, sep = "")
  out <- try(kk <- html(url), silent = T)

  if (inherits(out, "try-error"))
    return(NA)

  apoyos <- html_node(kk,
    xpath = '//span[@class="total-supports"]')
  apoyos <- html_text(apoyos)
})

#save(res, file ="/home/carlos/visitas_madrid_decide_20150924.Rdat")

kk <- sapply(res, function(x) gsub("apoyo.*", "", x))
kk <- sapply(kk, function(x) as.numeric(gsub("\\.", "", x)))
names(kk) <- NULL
{{< / highlight >}}


extraje el número de apoyos de las propuestas el 24 de septiembre y hoy 8 de octubre. En la última fecha, la distribución de apoyos era

![propuestas_madrid_octubre](/wp-uploads/2015/10/propuestas_madrid_octubre.png#center)

teniendo [la que más](https://decide.madrid.es/proposals/199) 3633 apoyos. La variación en los últimos días del número de votos (no en la mejor visualización del mundo) es

![propuestas_madrid_delta](/wp-uploads/2015/10/propuestas_madrid_delta.png#center)

siendo el mayor incremento de 663 votos (con una mediana de 4).

Mal está y no seré yo quien extrapole una curva soportada por dos únicos puntos. Pero si damos por bueno un comportamiento de saturación de corte logístico, es probable que ninguna propuesta llegue jamás al corte.

Me atrevería a decir, si se me permite opinar, que el proyecto, aunque laudable, está mal dimensionado.