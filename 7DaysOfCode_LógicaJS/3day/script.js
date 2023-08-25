/*1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, 
poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área
 escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica
  para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de 
conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar 
respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue 
apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois,
 apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para 
conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias 
quiser na lista de aprendizado.
*/

const area = prompt("Para qual area deseja seguir ? Front-End ou Back-End ? ");
if(area === 'Front-End'){
    const opcaoF = prompt("deseja aprender React ou aprender Vue ? ");
    if(opcaoF === 'React'){
        alert('Poxa que otimo, React é uma otima ferramenta para melhorar o desenpenho da aplicação web')
    }else if(opcaoF === 'Vue'){
        alert('Otima opção, Vue chegou recentemente na comunidade tech mas ja esta deixando claro suas qualidades')
    }else{
        alert('opção invalida')
    }
}else if(area === 'Back-End'){
    const opcaoB = prompt("deseja aprender C# ou aprender Java ? ");
    if(opcaoB === 'C#'){
        alert('Csharp é uma otima linguagem, muito flexivel e escalavel, desenvolvida pela microsoft com diversas ultilidades tanto pafa app e web ')

    }else if(opcaoB === 'Java'){
        alert('Não poderia ter escolhido melho, uma otima linguagem, bem estruturada na oop e com diversas aplicaçoes ')
    }else{
        alert('opção invalida')
    }
}else{
    alert('opção invalida')
}


const esp = prompt("Quais são as tecnologias nas quais a você gostaria de se especializar ou de conhecer? ");

const opcaoEsp = [esp]
alert(`Perfeito esse é um otimo caminho, continue focando nos estudos e bons estudos em ${opcaoEsp[0]}`)
