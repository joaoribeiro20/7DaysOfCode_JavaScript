let valor1 = ''
let valor2 = ''
let valor 
let opracao = ''
let res

const telaValor1 = document.getElementById('telaValor1')
const telaOperador = document.getElementById('telaOperador')
const telaValor2 = document.getElementById('telaValor2')
const telaRes = document.getElementById('res')



let um = () => {
    valor = '1'
    verificar(valor)
    
    
}
let dois = () => {
    valor = '2'
    verificar(valor)
  
}
let tres = () => {
    valor = '3'
    verificar(valor)
}
let quatro = () => {
    valor = '4'
    verificar(valor)
}
let cinco = () => {
    valor = '5'
    verificar(valor)
}
let seis = () => {
    valor = '6'
    verificar(valor)
}
let sete = () => {
    valor = '7'
    verificar(valor)
}
let oito = () => {
    valor = '8'
    verificar(valor)
}
let nove = () => {
    valor = '9'
    verificar(valor)
}
let zero = () => {
    valor = '0'
    verificar(valor)

/* -------------------------- */}
let soma = () => {opracao = '+'}
let sub = () => {opracao = '-'}
let mult = () => {opracao = 'x'}
let dividir = () => {opracao = '/'}



function verificar(valor){
   
    if (opracao == '') {
        valor1 = valor1 + valor
        telaValor1.innerText = valor1 
    }
    if(opracao != ''){
        valor2 = valor2 + valor
        telaOperador.innerText = opracao
        telaValor2.innerText = valor2
    }
}

function calcular(){
    
    console.log(res)
    let valorInt1 = parseInt(valor1) 
    console.log(valorInt1, typeof valorInt1)
    let valorInt2 = parseInt(valor2) 
    console.log(valorInt2, typeof valorInt2)
console.log(opracao, valor1, valor2, valorInt1, valorInt2)


    if(opracao == '+'){
        res = valorInt1 + valorInt2
        telaRes.innerText = '= ' + res
        console.log(`A Soma é : ${res}`)
    }
    
    
    else if(opracao == '-'){
        res = valorInt1 - valorInt2
        telaRes.innerText = '= ' + res
        console.log(`A subitracao é : ${valorInt1 - valorInt2}`)
    }
    
    
    else if(opracao == 'x'){
        res = valorInt1 * valorInt2
        telaRes.innerText = '= ' + res
        console.log(`A Soma é : ${res}`)
    }
    
    else if(opracao == '/'){
        res = valorInt1 / valorInt2
        telaRes.innerText = '= ' + res
        console.log(`A subitracao é : ${valorInt1 / valorInt2}`)
    }
   
    
    valorInt1 = ''
    valorInt2 = ''
    
    
    console.log(opracao, valor1, valor2, valorInt1, valorInt2)

}

function novoCalculo(){
    telaValor1.innerText= ''
    telaOperador.innerText= ''
    telaValor2.innerText = ''
    telaRes.innerText= ''
    opracao = ''
    valor1 = ''
    valor2 = ''
    res 
}

