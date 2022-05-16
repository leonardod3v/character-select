

const personagens = document.querySelectorAll(".personagem")

personagens.forEach((personagem) => {

    //Caso o jogador 1 seja proibido de selecionar o mesmo personagem que o jogador 2
    //const idSelecionado = personagem.attribute.id.value
    /*
    
    if(idSelecionado === 'ultron') {
        return
    }
    
    */ 

    //OBJETIVO 1 - Ao passar o mouse em cima do personagem, temos que:
    // - Colocar a classe 'Selecionado' no personagem que passamos o mouse em cima para adicionar a animação dele
    // - Retirar a classe 'selecionado' do personagem que está selecionado

    personagem.addEventListener("mouseenter", () => {
    const personagemSelecionado = document.querySelector(".selecionado")
    personagemSelecionado.classList.remove("selecionado")

    personagem.classList.add("selecionado")

    //OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande
    // - Alterar a imagem do jogador 1
    // - Alterar o nome do jogador 1

    //Imagem precisa estar com o mesmo nome do ID
    const idSelecionado = personagem.attributes.id.value

    const imagemjogador1 = document.getElementById('personagem-jogador-1')
    //Alterando o caminho src através do script
    imagemjogador1.src = `./src/imagens/${idSelecionado}.png`

    const nomeJogador1 = document.getElementById('nome-jogador-1')
    const nomeSelecionado = personagem.getAttribute('data-name')
    nomeJogador1.innerHTML = nomeSelecionado

  })
})


