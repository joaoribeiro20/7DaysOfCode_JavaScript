//const numeroCerto = 7
//const numeroCerto2 = 1

/*let escolhaUsuario = prompt('Tente adivinhar o numero que estou pensando, o numero esta entre 0 a 10. Por Favor Digite seu Chute a baixo')

while(escolhaUsuario != 1 && escolhaUsuario != 7){
    escolhaUsuario = prompt(`Poxa!!!! Não foi desa vez, O numero ${escolhaUsuario} nao era o numero que pensei, Mas irei te dar outra chance`)
}
alert('parabesns voce acerto, tava pensando nesse exato numero ' + escolhaUsuario)
*/

 let aleatorio = Math.floor(Math.random() * 10);
 alert(aleatorio) // numero correto
 let escolhaUsuario = prompt('Tente adivinhar o numero que estou pensando, o numero esta entre 0 a 10. Por Favor Digite seu Chute a baixo')


 for( let tentativas = 3; tentativas >= 1; tentativas--){
    if(escolhaUsuario == aleatorio){
        alert(`Parabens, o numero correto era ${aleatorio},voce acerto!!!`)
        break
    }
    escolhaUsuario = prompt(`poxa infelizmente voce erro, Mas você tem ainda ${tentativas} chance`)
 }

  