######################################################################################
# @gilbellosta, 2017-04-17
# Multi armed bandit
######################################################################################

n.jugadas <- 4
jugadas <- 1:n.jugadas

pes <- 1:n.jugadas / (1 + n.jugadas)

resultado <- function(jugada){
  if (!jugada %in% jugadas)
    stop("Error: jugada no permitida")
  
  rbinom(1, 1, pes[jugada])
}

juego <- function(n.tiradas, estrategia){
  historia <- data.frame(tirada = rep(0, n.tiradas),
                         resultado = rep(0, n.tiradas))
  
  tirada <- n.tirada <- 1    # se empieza eligiendo 1
  
  while(n.tirada <= n.tiradas){
    historia$tirada[n.tirada]    <- tirada
    historia$resultado[n.tirada] <- resultado(tirada)
    
    tirada <- estrategia(historia[1:(indice-1),])
    n.tirada <- n.tirada + 1
  }
  
  historia
}
  
estrategia.1 <- function(historia){
  1
}

res <- juego(1000, estrategia = estrategia.1)
mean(res$resultado)
