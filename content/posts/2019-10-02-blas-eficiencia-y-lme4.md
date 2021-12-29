---
author: Carlos J. Gil Bellosta
date: 2019-10-02 09:13:30+00:00
draft: false
title: BLAS, eficiencia y lme4

url: /2019/10/02/blas-eficiencia-y-lme4/
categories:
- programación
- r
tags:
- álgebra lineal
- blas
- programación
- lme4
- r
---

Cada cierto número de años me reencuentro con la cuestión de [BLAS](https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms), [ATLAS](https://en.wikipedia.org/wiki/Automatically_Tuned_Linear_Algebra_Software) y todas esas cosas por tratar de arañar un poco de eficiencia a R.

Existen el BLAS _de toda la vida_ que, parece ser, viene de serie con R y uno puede optar por otras versiones optimizadas como ATLAS u OpenBLAS, cuyas ventajas relativas, de acuerdo con estos [_benchmarks_](https://www.inwt-statistics.com/read-blog/basic-linear-algebra-subprograms-in-r.html), no parecen demasiado claras.

Lo novedoso en esta revisita al problema es que he aprendido que a los anteriores se han sumado en estos últimos años, cuando menos:

* [nvblas](https://docs.nvidia.com/cuda/nvblas/index.html), una extensión de Nvidia, que usa GPUs, CUDAs, etc.
* [Eigen](http://eigen.tuxfamily.org/index.php?title=Main_Page), una librería de C++ que puentea a BLAS y todas las anteriores, [funciona mejor que ellas en algunos casos concretos](https://stackoverflow.com/questions/10366054/how-can-the-c-eigen-library-perform-better-than-specialized-vendor-libraries) y, parece ser, es la que usa internamente [`lme4`](https://cran.r-project.org/package=lme4).