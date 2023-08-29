let valor1 = [] 
let valor2 = []
let opracao = ''
let valor

let um = () => {
    valor = 1
    verificar(valor)
}
let dois = () => {
    valor = 2
    verificar(valor)
}
let tres = () => {
    valor = 3
    verificar(valor)
}
let quatro = () => {
    valor = 4
    verificar(valor)
}
let cinco = () => {
    valor = 5
    verificar(valor)
}
let seis = () => {
    valor = 6
    verificar(valor)
}
let sete = () => {
    valor = 7
    verificar(valor)
}
let oito = () => {
    valor = 8
    verificar(valor)
}
let nove = () => {
    valor = 9
    verificar(valor)
}
let zero = () => {
    valor = 0
    verificar(valor)

/* -------------------------- */}
let soma = () => {opracao = '+'}
let sub = () => {opracao = '-'}
let mult = () => {opracao = 'x'}
let dividir = () => {opracao = '/'}



function verificar(valor){
    if (opracao == '') {
        valor1.push(valor)
    }
    if(opracao != ''){
        valor2.push(valor)
    }
}

function calcular(){
    console.log(valor1.length)
    console.log(valor2.length)
    console.log(valor1)
    console.log(valor2)
    console.log(opracao)
    opracao = ''
}



/* if(opracao == ''){
let um = () => {valor1.push(1) }
let dois = () => {valor1.push(2) }
let tres = () => {valor1.push(3)}
let quatro = () => {valor1.push(4) }
let cinco = () => {valor1.push(5)  }
let seis = () => {valor1.push(6)  }
let sete = () => {valor1.push(7)   }
let oito = () => {valor1.push(8)  }
let nove = () => {valor1.push(9)  }
let zero = () => {valor1.push(0) }
let soma = () => {opracao = '+'}
let sub = () => {opracao = '-'}
let mult = () => {opracao = 'x'}
let dividir = () => {opracao = '/'}
}else if (opracao != ''){
let um = () => {valor2.push(1) }
let dois = () => {valor2.push(2) }
let tres = () => {valor2.push(3) }
let quatro = () => {valor2.push(4) }
let cinco = () => {valor2.push(5) }
let seis = () => {valor2.push(6)}
let sete = () => {valor2.push(7)}
let oito = () => {valor2.push(8)}
let nove = () => {valor2.push(9) }
let zero = () => {valor2.push(0)}
} */
