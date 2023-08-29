/*
permitir o usuario excluir item 

podendo ter 3 opçoes 
1 - exluir item no começo da lista 
2 - exluir item no fina da lista 
3 - excluir item independente da posicao dele 


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