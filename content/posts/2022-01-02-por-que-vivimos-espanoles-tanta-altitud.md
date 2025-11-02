---
author: Carlos J. Gil Bellosta
categories:
- r
- gráficos
date: 2022-01-02
lastmod: '2025-04-06T19:05:21.371243'
related:
- 2016-06-20-6602-767-km-alrededor-de-espana-para-visitar-todas-sus-capitales-de-provincia.md
- 2017-05-12-me-too-me-too.md
- 2013-12-10-te-queda-lejos-el-aeropuerto.md
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2013-12-26-muestreos-aleatorios-sobre-la-peninsula-iberica-por-ejemplo.md
tags:
- r
- mapas
- paquetes
- terra
- sf
- españa
title: ¿Por qué vivimos tantos españoles a tanta altitud?
url: /2022/01/02/por-que-vivimos-espanoles-tanta-altitud/
---

Perdóneseme haber usado lenguaje causal en el título de esta entrada siendo así que no encontrará el lector indicios sólidos de respuesta en lo que sigue. Y, sobre todo, que no se confunda y me tome por un sociólogo a la violeta o un economista posmo: no, soy matemático.

Quiero simplemente hacer constar un pequeño ejercicio de análisis espacial usando los paquetes `sf` y `terra` de R motivado, eso sí, por una pregunta que se planteó en cierto foro a raíz de esta captura de la Wikipedia:

![](/img/2022/01/muncipios_altitud_espana.jpg#center)

Le llamaba la atención al preguntador por qué aparecían tantos municipios españoles en dicha lista.

Las razones que aventuro sin mayor prueba y sin el sostén del análisis de los datos que sigue son dos:

* Que España tiene grandes extensiones de terreno llano a _gran_ altura, las mesetas.De hecho, siempre había oído hablar ---_spoiler_: como se verá, es información o incierta o desfasada--- que España es el segundo país de Europa en altitud media.
* Que estamos lo suficientemente cerca del ecuador como para que el clima a esa altitud no sea particularmente extremoso. En eso no somos tampoco excepción: piénsese, p.e., en Ecuador o Colombia.

Quise ---sin éxito, como se verá; o muy parcial e inconclusivo, a lo sumo--- tratar de apoyar el primer punto en datos. En particular, estudiar la distribución de alturas del territorio nacional con el de los demás países de cierta entidad de Europa más allá de la consabida _media_.

[Ir más allá de la media ---o el efecto medio--- y estudiar la distribución completa ---o el efecto en subgrupos--- va a ser, me temo, el _leitmotiv_ de muchas entradas que tengo planeadas este año.]

Así que, por un lado, he bajado las fronteras administrativas de los países europeos (de [aquí](https://ec.europa.eu/eurostat/web/gisco/geodata/reference-data/administrative-units-statistical-units/countries)) en formato vectorial y, por el otro, datos de altitud media en celdas de, aproximadamente, 1 km de lado (de [aquí](https://topotools.cr.usgs.gov/gmted_viewer/viewer.htm)) para toda Europa.

[En realidad, lo de 1 km es simplemente indicativo y depende de la latitud. De hecho, el tamaño de las celdas está definido en fracciones de grado y, por eso, en particular, hay muchas más celdillas en Suecia que en España, a pesar de ser este último un país más extenso.]

El resultado, con los países ordenados por altitud mediana, es este:

![](/img/2022/01/distribucion_altitudes_europa.png#center)

[¡Diríase que Italia cumple la ley de Benford!]

Y el código, por referencia,

{{< highlight R >}}
library(terra)
library(giscoR)
library(sf)
library(ggplot2)

# source of data:
# https://topotools.cr.usgs.gov/gmted_viewer/viewer.htm
# https://ec.europa.eu/eurostat/web/gisco/geodata/reference-data/administrative-units-statistical-units/countries

alt <- rast("/tmp/elevation1x1_new.tif")

a1 <- rast("/tmp/gmted2010/30N000E_20101117_gmted_mea300.tif")
a2 <- rast("/tmp/gmted2010/30N030W_20101117_gmted_mea300.tif")
a3 <- rast("/tmp/gmted2010/50N000E_20101117_gmted_mea300.tif")
a4 <- rast("/tmp/gmted2010/50N030W_20101117_gmted_mea300.tif")

tmp <- gisco_countrycode[gisco_countrycode$continent == "Europe",]
tmp <- tmp[!is.na(tmp$ISO3_CODE),]

countries <- tmp$ISO3_CODE
countries <- countries[countries != "ALA"]
countries <- countries[countries != "RUS"]
countries <- countries[countries != "VAT"]
countries <- countries[countries != "UKR"]
countries <- countries[countries != "GIB"]
countries <- countries[countries != "MCO"]
countries <- countries[countries != "JEY"]
countries <- countries[countries != "GGY"]
countries <- countries[countries != "SMR"]
countries <- countries[countries != "LIE"]
countries <- countries[countries != "AND"]

foo <- function(altitudes, borders){
  tmp <- terra::extract(altitudes, borders)
  colnames(tmp) <- c("id", "altitude")
  tmp
}

res <- lapply(countries, function(country){
  print(country)
  borders <- gisco_get_countries(
      country = country)
  borders <- st_transform(borders,
    terra::crs(a1))
  borders <- vect(borders)
  alt1 <- foo(a1, borders)
  alt2 <- foo(a2, borders)
  alt3 <- foo(a3, borders)
  alt4 <- foo(a4, borders)
  alt <- do.call(rbind, list(alt1, alt2,
    alt3, alt3))
  alt$country <- country
  alt
})

kk <- do.call(rbind, res)
kk <- na.omit(kk)
kk$altitude[kk$altitude > 2000] <- 2000

kk$country <- factor(kk$country)
kk$country <- reorder(kk$country,
    -kk$altitude, median)

ggplot(kk, aes(x = altitude)) +
  geom_histogram(
      aes(y=..density..), bins = 20) +
  facet_wrap(~ country, ncol = 4,
    scales = "free_y") +
  xlab("") + ylab("") +
  theme_classic() +
  theme(axis.text.y = element_blank(),
        axis.ticks.y = element_blank())

ggsave("/tmp/distribucion_altitudes_europa.png",
       height = 21, width = 12, units = "cm")
{{< / highlight >}}