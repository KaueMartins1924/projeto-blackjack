   /**
    * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
    * 
    * 
       const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
      
      console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
      console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
   * 
   * 
   * 
   */


//definir jogadores
let jogador = []
let computador = []

function comprarCartaAoJogador() {
   jogador.push(comprarCarta())
}
function comprarCartaAoComputador() {
   computador.push(comprarCarta())
}
function calcularPontuacao(cartas) {
   return cartas.reduce((total, carta) => total + carta.valor, 0)
}

function mostrarCartas(participante1, cartas1, participante2, cartas2) {
   let textoCartas1 = cartas1.map(carta => carta.texto).join(" ")
   let textoCartas2 = cartas2.map(carta => carta.texto).join(" ")
   let pontuacaoJogador = calcularPontuacao(cartas1)
   let pontuacaoComputador = calcularPontuacao(cartas2)

   let comprarParaJogador = confirm(`${participante1}: ${textoCartas1}\n${participante2}: ${textoCartas2.slice(-3)}\nDeseja comprar mais uma carta?`)
   
   if (comprarParaJogador && pontuacaoJogador < 21) {
      comprarCartaAoJogador()
   }
   if (pontuacaoJogador >= 21) {
      alert(`O computador venceu! \n\nSuas cartas: ${textoCartas1}\nSua pontuação: ${pontuacaoJogador}\n\nCartas do computador: ${textoCartas2}\nPontuação do computador: ${pontuacaoComputador}`)
   } else if (pontuacaoComputador >= 21) {
      alert(`Você venceu! \n\nSuas cartas: ${textoCartas1}\nSua pontuação: ${pontuacaoJogador}\n\nCartas do computador: ${textoCartas2}\nPontuação do computador: ${pontuacaoComputador}`)
   } else if (!comprarParaJogador) {
      while (pontuacaoComputador <= 21) {
         comprarCartaAoComputador()
         pontuacaoComputador = calcularPontuacao(computador)
      }
      if (pontuacaoComputador > 21) {
         alert(`Você venceu! \n\nSuas cartas: ${textoCartas1}\nSua pontuação: ${pontuacaoJogador}\n\nCartas do computador: ${textoCartas2}\nPontuação do computador: ${pontuacaoComputador}`)
      } else {
         alert("Fim de jogo!")
      }
   } else {
      mostrarCartas("Suas cartas", jogador, "Carta revelado do computador", computador)
   }
}
function inicio() {
   let PerguntaInicio = confirm(`Bem-vindo ao jogo de Blackjack! \nQuer iniciar uma nova rodada?`)
   if (PerguntaInicio) {
      comprarCartaAoJogador()
      comprarCartaAoJogador()
      comprarCartaAoComputador()
      comprarCartaAoComputador()
      mostrarCartas("Suas cartas", jogador, "Carta revelado do computador", computador)
   }
}
inicio()
