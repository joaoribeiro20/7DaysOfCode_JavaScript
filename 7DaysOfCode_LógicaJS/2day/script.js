/*
- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?

const cidade = prompt("Digite a sua cidade:");
const msg = `Você é de ${cidade}!`;
alert(msg);

*/

/*
problemas
- a pessoa pode colocar qualquer coisa no nome, ate numero -  o certo é permitir que a pessoa coloque apenas letras 
com a qualitidade 4 caracateris no minimo

- a pessoa pode colocar qualquer coisa na idade ate texto - certo é permitir colocar apenas numeros de 0 a 100

- a pessoa pode colocar qualquer coisa ate numero - o certo é apenas letras
*/


const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)

let opcao = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);


while(opcao != 1 || opcao != 2){
    opcao = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
    if(opcao == 1){
    const sim = `Muito bom! Continue estudando e você terá muito sucesso.!`;
    alert(sim)
    break
}else if(opcao == 2){
    const nao = ` Ahh que pena... Já tentou aprender outras linguagens?`;
    alert(nao)
    break
}else{
    const erro = `erro`;
    alert(erro)
}
}

