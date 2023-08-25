/*
Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se
 você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como 
frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu 
devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele 
irá exibir uma lista com todos os itens agrupados, da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho
*/



let novo = document.getElementById('item')
let tipos = document.getElementById('tipo')



const frutaLista=[]
const legumeLista=[]
const limpezaLista=[]
const congeladoLista=[]
const outro=[]

function lista(){
    alert(tipos.value)
    if(tipos.value === 'fruta'){
        fruta(tipos.value)
    }else if(tipos.value === 'legume'){

    }else if(tipos.value === 'limpeza'){
        
    }else if(tipos.value === 'congelado'){
        
    }else if(tipos.value === 'outro'){
        
    }else{
        alert("erro")
    }

}

function fruta(nome){
    alert(novo.value)
    frutaLista.push(novo.value);
    alert(frutaLista)
    
    let ul = document.getElementById('frutasL')
    let listc = document.createElement("li")
    listc.innerHTML=(frutaLista)
   ul.appendChild(listc)


}