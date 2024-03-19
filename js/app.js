// obtendo o jogo clicado
function alterarStatus (id) { // o parâmetro são os Ids
    let gameClicado = document.getElementById (`game-${id}`); // concatenar e buscar o id da variavel "game" no HTML
    let imagem = gameClicado.querySelector (".dashboard__item__img"); // para alterar o status do botão (alugado/devolver)
    let botao = gameClicado.querySelector (".dashboard__item__button"); // o "." dentro significa que é uma classe 
    let nomeJogo = gameClicado.querySelector (".dashboard__item__name"); // confirmar se ele foi realmente clicado
    
    alert (nomeJogo.textContent); // textContent (parecido com o InnerHTML) = para pegar o texto dentro da tag nomeJogo e não a tag HMTL
}