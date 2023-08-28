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
let resumoFruta = document.getElementById('rfruta')
let resumoLegume = document.getElementById('rlegume')
let resumoLimpeza = document.getElementById('rlimpeza')
let resumoCongelado = document.getElementById('rcongelado')
let resumoOutro = document.getElementById('routro')


const frutaLista=[]
const legumeLista=[]
const limpezaLista=[]
const congeladoLista=[]
const outroLista=[]
  let cont = 0
  let contLe = 0
  let contLi =0
  let contC =0
  let contO =0
  
function lista(){

    //alert(tipos.value)
    if(tipos.value === 'fruta'){  
        if(novo.value != ''){
            fruta(novo.value) 
        
        }else{
            alert('o campo esta vazio')
        }
         
    }else if(tipos.value === 'legume'){
        legume()
    }else if(tipos.value === 'limpeza'){
        limpeza()
    }else if(tipos.value === 'congelado'){
        congelado()
    }else if(tipos.value === 'outro'){
        outro()
    }else{
        alert("erro")
    }   
 
 //geral.innerHTML(frutaLista[0])
}

function fruta(){
    frutaLista.push(novo.value)
    resumoFruta.innerText=`Frutas: ${frutaLista}`
    let ul = document.getElementById('frutasL')
    let listc = document.createElement("li")
    listc.innerHTML=(frutaLista[cont])
    ul.appendChild(listc)
    cont++
}
function legume(){
legumeLista.push(novo.value)
resumoLegume.innerText=`Legumes: ${legumeLista}`
let ul = document.getElementById('legumeL')
let listc = document.createElement("li")
listc.innerHTML=(legumeLista[contLe])
ul.appendChild(listc)
contLe++
}
function limpeza(){
limpezaLista.push(novo.value)
resumoLimpeza.innerText=`Limpeza: ${limpezaLista}`
let ul = document.getElementById('limpezaL')
let listc = document.createElement("li")
listc.innerHTML=(limpezaLista[contLi])
ul.appendChild(listc)
contLi++
}
function congelado(){
congeladoLista.push(novo.value)
resumoCongelado.innerText=`Congelados: ${congeladoLista}`
let ul = document.getElementById('congeladoL')
let listc = document.createElement("li")
listc.innerHTML=(congeladoLista[contC])
ul.appendChild(listc)
contC++
}
function outro(){
outroLista.push(novo.value)
resumoOutro.innerText=`Outros: ${outroLista}`
let ul = document.getElementById('outroL')
let listc = document.createElement("li")
listc.innerHTML=(outroLista[contO])
ul.appendChild(listc)
contO++
}