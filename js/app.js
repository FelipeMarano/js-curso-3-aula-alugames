// obtendo o jogo clicado
function alterarStatus (id) { // o parâmetro são os Ids
    let gameClicado = document.getElementById (`game-${id}`); // concatenar e buscar o id da variavel "game" no HTML
    let imagem = gameClicado.querySelector (".dashboard__item__img"); // para alterar a imagem do jogo (alugado/devolver)
    let botao = gameClicado.querySelector (".dashboard__item__button"); // o "." dentro significa que é uma classe // altera o botão 

    if (imagem.classList.contains("dashboard__item__img--rented")) { // se o jogo estiver alugado/devolvido // contains = se o elemento contem uma determinada classe
        imagem.classList.remove ("dashboard__item__img--rented"); // para remover o alugado e ser devolvido 
        botao.classList.remove ("dashboard__item__button--return");
        botao.textContent = "Alugar" // textContent = muda o texto do <a> // para mudar o texto do botao para alugar ou devolver
    } else {                                                    // fazendo o contrário
        imagem.classList.add ("dashboard__item__img--rented");   // adicionando 
        botao.textContent = "Devolver";
        botao.classList.add ("dashboard__item__button--return");
    }
}

