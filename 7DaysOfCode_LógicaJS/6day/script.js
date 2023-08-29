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
let resumofruta = document.getElementById('rfruta')
let resumolegume = document.getElementById('rlegume')
let resumolimpeza = document.getElementById('rlimpeza')
let resumocongelado = document.getElementById('rcongelado')
let resumooutro = document.getElementById('routro')
let nomeRemover = document.getElementById('nomeRemover')


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
  
function listaAdicionar(){
    if(tipos.value === 'fruta'){ 

    if(novo.value != ''){
        frutaLista.push(novo.value)
        resumofruta.innerText=`Frutas: ${frutaLista} - `
           
    }else{
        alert('o campo esta vazio')
    }
    }else if(tipos.value === 'legume'){
        legumeLista.push(novo.value)
        resumolegume.innerText=`Legumes: ${legumeLista}  `
    }
    
    else if(tipos.value === 'limpeza'){
        limpezaLista.push(novo.value)
        resumolimpeza.innerText=`Limpeza: ${limpezaLista} `
    }
    
    else if(tipos.value === 'congelado'){
        congeladoLista.push(novo.value)
        resumocongelado.innerText=`Congelados: ${congeladoLista}  `
    }
    
    else if(tipos.value === 'outro'){
        outroLista.push(novo.value)
        resumooutro.innerText=`Outros: ${outroLista}  `
    }else{
        alert("erro")
    }   
    novo.value=""
}
function removerInicio(){
    switch (tipos.value) {
        case "fruta":
            frutaLista.shift()
            resumofruta.innerText=`Frutas: ${frutaLista}  `
          break;
        case "legume":
          legumeLista.shift()
          resumolegume.innerText= `Legumes: ${legumeLista}`
          break;
        case "limpeza":
          limpezaLista.shift()
          resumolimpeza.innerText= `Limpeza: ${limpezaLista}`
          break;
          case "congelado":
          congeladoLista.shift()
          resumocongelado.innerText=`Congelados: ${congeladoLista}`
          break;
          case "outro":
          outroLista.shift()
          resumooutro.innerText=`Outros: ${outroLista}`
          break;
        default:
          console.log("fim")
      }
}
function removerFinal(){
    switch (tipos.value) {

        case "fruta":
            frutaLista.pop()
            resumofruta.innerText=`Frutas: ${frutaLista}  `
          break;
        case "legume":
          legumeLista.pop()
          resumolegume.innerText= `Legumes: ${legumeLista}`
          break;
        case "limpeza":
          limpezaLista.pop()
          resumolimpeza.innerText= `Limpeza: ${limpezaLista}`
          break;
          case "congelado":
          congeladoLista.pop()
          resumocongelado.innerText=`Congelados: ${congeladoLista}`

          break;
          case "outro":
          outroLista.pop()
          resumooutro.innerText=`Outros: ${outroLista}`
          break;
        default:
          console.log("fim")
      }

}
function removerNome(){
    let index
    switch(tipos.value){
        case "fruta":
            if(frutaLista.includes(nomeRemover.value)){
                index = frutaLista.indexOf(nomeRemover.value)
                frutaLista.splice(index, 1);
                resumofruta.innerText=`Frutas: ${frutaLista} - `
                nomeRemover.value = ' '
            }else{
                alert(`"o nome: ${nomeRemover.value} não existe nesta lista"`)
                nomeRemover.value = ' '
            }
            break;
        case "legume":
            if(legumeLista.includes(nomeRemover.value) != false){
                index = legumeLista.indexOf(nomeRemover.value)
                legumeLista.splice(index,1)
                resumolegume.innerText= `Legumes: ${legumeLista}`
                nomeRemover.innerText=""
            }else{
                alert(`"o nome: ${nomeRemover.value} não existe nesta lista"`)
                nomeRemover.value = ' '
            }
            break;
            case "limpeza":
                if(limpezaLista.includes(nomeRemover.value) != false){
                    index = limpezaLista.indexOf(nomeRemover.value)
                    limpezaLista.splice(index,1)
                    resumolimpeza.innerText= `Limpeza: ${limpezaLista}`
                    nomeRemover.innerText=""
                }else{
                    alert(`"o nome: ${nomeRemover.value} não existe nesta lista"`)
                    nomeRemover.value = ' '
                }
                break;
            case "congelado":
                if(congeladoLista.includes(nomeRemover.value) != false){
                    index = congeladoLista.indexOf(nomeRemover.value)
                    congeladoLista.splice(index, 1)
                    resumocongelado.innerText=`Congelado: ${congeladoLista}`
                    nomeRemover.innerText=""
                }else{
                    alert(`"o nome: ${nomeRemover.value} não existe nesta lista"`)
                    nomeRemover.value = ' '
                }
                break;
            case "outro":
                if(outroLista.includes(nomeRemover.value) != false){
                    index = outroLista.indexOf(nomeRemover.value)
                    outroLista.splice(index,1)
                    resumooutro.innerText=`Outros: ${outroLista}`
                    nomeRemover.value = ' '
                }else{
                    alert(`"o nome: ${nomeRemover.value} não existe nesta lista"`)
                    nomeRemover.value = ' '
                }
                break;
    }
}
