---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2016-12-12 08:13:00+00:00
draft: false
lastmod: '2025-04-06T18:47:07.044194'
related:
- 2014-04-23-demasiado-simple.md
- 2024-01-09-regresiones_pisa.md
- 2023-01-26-educacion-tabarrok.md
- 2013-02-11-voy-a-partir-una-lanza-a-favor-de-rosell-a-cuenta-de-la-epa.md
- 2012-08-06-un-paseo-por-el-paquete-microdatoses-y-la-epa-de-nuevo.md
tags:
- educación
- lmer
- pisa
- r
title: Un muy cuestionable análisis de lo de PISA
url: /2016/12/12/un-muy-cuestinoable-analisis-de-lo-de-pisa/
---

Voy a realizar un más que cuestionable (debajo desgranaré los _caveats_) de los resultados de las pruebas PISA del 2015 en España.

Primero, datos y métodos. Los primeros (y las descripciones de las variables) se pueden bajar de [aquí](https://www.oecd.org/pisa/data/2015database/). En cuanto a los segundos, he consultado [esto](http://smarterpoland.pl/index.php/2016/12/pisa-2015-how-to-readprocessplot-the-data-with-r/) (que me ha llevado a), [esto](https://cran.r-project.org/web/packages/intsvy/index.html) y [esto](https://github.com/eldafani/intsvy) (donde está actualizado para los resultados de la última oleada). Hablaré más de métodos, y sus problemas, más abajo.

[caption id="attachment_8102" align="aligncenter" width="600"]![](/img/2016/12/mono_gatos_leyendo.jpg)
Monkey reading to three cats[/caption]

Antes de entrar en materia, una observación. Lo de PISA es muy serio, pero quien pierda rato haciendo el debido análisis cualitativo de los datos, observará cosas raras. Por ejemplo, un colegio con un ratio de alumnos por profesor de 1 (¿cuál? ¿dónde? ¿por qué?). Y otras cosas que hacen que se frunzan los ceños. Pero no abundaré en esos asuntos.

Cargo datos en R (después de bajarlos del preceptivo enlace, descomprimirlos, etc.; cuidado: el fichero ocupa un giga largo):

{{< highlight R >}}
library(foreign)

tmp <- read.spss("CY6_MS_CMB_STU_QQQ.sav",
                    use.value.labels = TRUE,
                    to.data.frame = TRUE)

alumnos <- tmp[tmp$CNT == "Spain",]
rm(tmp); gc()
{{< / highlight >}}

Aquitán:

{{< highlight R >}}
dim(alumnos)
#[1] 6736  921
{{< / highlight >}}

También se puede ver que hay unos doscientos colegios y si uno se baja el fichero correspondiente, puede explorar lo que contaba antes y más. Pero hoy no toca.

Selecciono las colunnas de interés y relleno (¡primer _caveat_!) los nulos (no muchos) con la mediana:

{{< highlight R >}}
dat <- alumnos[, c("CNTSTUID", "CNTSCHID",
    "WEALTH", "CULTPOSS",
    "HEDRES", "HOMEPOS", "ICTRES",
    "ESCS", "STRATUM")]

fix.column <- function(x){
    x[is.na(x)] <- median(x, na.rm = TRUE)
    x
}

dat$WEALTH   <- fix.column(dat$WEALTH)
dat$CULTPOSS <- fix.column(dat$CULTPOSS)
dat$HEDRES   <- fix.column(dat$HEDRES)
dat$HOMEPOS  <- fix.column(dat$HOMEPOS)
dat$ICTRES   <- fix.column(dat$ICTRES)
dat$ESCS     <- fix.column(dat$ESCS)

dat$STRATUM <- as.character(dat$STRATUM)

dat$CCAA  <- gsub(".*: ([^,]*),.*", "\\1",
    dat$STRATUM)

dat$PUBPRIV <- "public"
dat$PUBPRIV[grep("private", dat$STRATUM)] <- "private"
{{< / highlight >}}

Las columnas de interés son:

* `WEALTH`: platica del hogar
* `CULTPOSS`: _posesiones culturales_
* `HEDRES`: recursos educacionales del hogar
* `HOMEPOS`: posesiones del hogar (¿en qué se diferencia de `WEALTH`?)
* `ICTRES`: tabletas, móviles, ordenadores y otros aparatejos
* `ESCS`: índice de nivel económico, social y cultural

Estas columnas parecen construirse sintéticamente a partir de las respuestas (que también aparecen en el fichero) a una encuesta concomitante. Muchas de estas columnas están muy correlacionadas entre sí, tanto como yo con alguien que no sé si me leerá:

{{< highlight R >}}
plot(dat[, c("WEALTH", "CULTPOSS", "HEDRES", "ESCS", "HOMEPOS")])
{{< / highlight >}}

![](/img/2016/12/correlacion_variables_pisa.png#center)

Voy a centrarme en las resultados de matemáticas porque yo lo valgo:

{{< highlight R >}}
targets <- grep("^PV[0-9]+MATH$", colnames(alumnos))
dat$target <- rowMeans(alumnos[, targets])
dotchart(sort(tapply(dat$target, dat$CCAA, mean)))
{{< / highlight >}}

El gráfico resultante es desconcertante:

![](/img/2016/12/matematicas_pisa_2015_ccaa.png#center)

Fundamentalmente, porque aunque los valores están en línea con los publicados en la prensa (p.e., [aquí](http://elpais.com/elpais/2016/12/05/media/1480958752_164797.html)) no coinciden con ellos cabalmente. O el resultado por alumno se calcula de otra manera, o el promedio por región tiene ajustes adicionales (seguro que sí: de ahí el paquete `intsvy`) que no contemplo, o existe algún tipo de factor de elevación que he omitido. Lo segundo que más me preocupa, en todo caso y para mis fines, es haberme equivocado en la manera de calcular el promedio por alumno; lo que más de todo, arrastrar en mi posible error a mis lectores, a los que advierto que avancen con cautela.

Con la información disponible se pueden construir gráficas tales que

{{< highlight R >}}
boxplot(dat$target ~ dat$PUBPRIV)
{{< / highlight >}}

i.e.,

![](/img/2016/12/pisa_2015_math_public_private.png#center)

que [tanto irritan](https://datanalytics.com/2016/12/07/enhorabuena-a-eldiario-es-porque-el-analisis-de-el-diario-es-de-los-resultados-de-pisa-esta-perfectamente-alineado-con-la-linea-editorial-de-eldiario-es/) a los defensores de ese tipo de educación de [rectores copipaste](http://nadaesgratis.es/fernandez-villaverde/el-rector-y-los-plagios-mas-novedades).

Pero vamos a la chicha:

{{< highlight R >}}
library(lme4)
library(lattice)

modelo <- lmer(target ~ 1 + WEALTH + CULTPOSS + HEDRES +
                    HOMEPOS + ICTRES + ESCS +
                    (1 | CCAA) + (1 | PUBPRIV),
                data = dat)

summary(modelo)
# Linear mixed model fit by REML ['lmerMod']
# Formula: target ~ 1 + WEALTH + CULTPOSS + HEDRES + HOMEPOS + ICTRES + ESCS + (1 | CCAA) + (1 | PUBPRIV)
# Data: dat
#
# REML criterion at convergence: 76079.8
#
# Scaled residuals:
#   Min      1Q  Median      3Q     Max
# -4.4830 -0.6818  0.0278  0.6915  4.2208
#
# Random effects:
#   Groups   Name        Variance Std.Dev.
# CCAA     (Intercept)  223.40  14.946
# PUBPRIV  (Intercept)   10.93   3.305
# Residual             4689.82  68.482
# Number of obs: 6736, groups:  CCAA, 18; PUBPRIV, 2
#
# Fixed effects:
#             Estimate Std. Error t value
# (Intercept) 499.7163     4.4088  113.34
# WEALTH      -47.2474     3.5227  -13.41
# CULTPOSS    -17.1966     1.9606   -8.77
# HEDRES       -7.4209     1.3823   -5.37
# HOMEPOS      69.4370     4.7987   14.47
# ICTRES        0.6887     1.9313    0.36
# ESCS         16.3323     1.0478   15.59
#
# Correlation of Fixed Effects:
#          (Intr) WEALTH CULTPO HEDRES HOMEPO ICTRES
# WEALTH   -0.029
# CULTPOSS -0.017  0.712
# HEDRES    0.021  0.563  0.448
# HOMEPOS  -0.031 -0.827 -0.849 -0.638
# ICTRES    0.064 -0.300  0.134 -0.075 -0.160
# ESCS      0.120  0.070  0.003  0.096 -0.241 -0.024
{{< / highlight >}}

Hay una correlación insidiosa (aunque prevista) entre algunas de las variables más importantes que tiene el efecto previsto: unos efectos que se intercancelan. Pero globalmente, sí, se aprecia que más es más. Los cacharrillos electrónicos van a su aire (porque parece que se los pueden permitir todos y cualquier gañán tiene mejor móvil que yo) y ni ponen ni quitan.

Eso en cuanto a lo fijo. En cuanto a lo aleatorio,

{{< highlight R >}}
dotplot(ranef(modelo, condVar = TRUE))
{{< / highlight >}}

dibuja, primero,

![](/img/2016/12/pisa_2015_pubpriv_ranef.png#center)


donde se ve cómo la diferencia entre _los dos modelos educativos_ son más estrechos de lo que parecen sin controlar por el resto de los factores. El efecto es, cualitativamente, el que se detecta también [aquí](http://www.eldiario.es/piedrasdepapel/brecha-centros-publicos-privados-PISA_6_588001207.html) (aunque véase [esto](https://datanalytics.com/2016/12/07/enhorabuena-a-eldiario-es-porque-el-analisis-de-el-diario-es-de-los-resultados-de-pisa-esta-perfectamente-alineado-con-la-linea-editorial-de-eldiario-es/)) en términos del tamaño del efecto aunque da la sensación de que en mi caso las diferencias son menos significativas estadísticamente incluso. ¿Me acabarán invitando a colaborar en eldiario.es?

Y también dibuja otra cosa mucho más, como dicen los modernos, dramática:

![](/img/2016/12/pisa_2015_math_ccaa_ranef.png#center)


Se trata del efecto de la comunidad autónoma. Aparentemente, muy por encima, se parece a la gráfica anterior, pero se aprecian dos efectos singulares. El primero, que el País Vasco cae a niveles del [_african dummy_](https://pierreenglebert.files.wordpress.com/2013/12/dummy.pdf). Y la segunda, (corred a contárselo a vuestros amigos de Podemos: veréis cómo les brilla el colmillo), que Madrid se derrumba.

Termino recordando que por el camino he dejado caer tantos avisos que no se me debe tomar en serio. Yo mismo no lo hago. Si os interesa en tema, en lugar de tuitear y retuitear esta basura, agarrad el hilo y tratad de mejorarla. A ver si se os da mejor que a mí y me quitáis la razón. No creo que sea difícil.