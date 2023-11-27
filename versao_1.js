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
console.log ("Bem vindo ao jogo!")
let iniciar = confirm("Deseja iniciar o jogo?")
if (iniciar){
   let carta1 = comprarCarta()
   let carta2 = comprarCarta()
   let cartaPc1 = comprarCarta()
   let cartaPc2 = comprarCarta()

   let soma = carta1.valor+carta2.valor
   let somaPc = cartaPc1.valor+cartaPc2.valor
   const perder = 21
console.log(`Usuario - cartas: ${carta1.texto}, ${carta2.texto} = ${soma}. \nComputador - cartas: ${cartaPc1.texto}, ${cartaPc2.texto} = ${somaPc}.`)
if (soma > somaPc && soma <=perder){
   console.log("Você ganhou!")
}else if(soma > somaPc && soma >perder){
   console.log("O computador ganhou!")
}else if(soma < somaPc && somaPc <=perder){
   console.log("O computador ganhou!")
}else if (soma < somaPc && somaPc >perder){
   console.log ("Você ganhou!")
}else{
   console.log ("O jogo empatou!")
}
}

