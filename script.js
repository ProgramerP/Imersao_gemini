

let section = document.getElementById("resultados-pesquisa");



function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>nenhum jogo encontrado, eu não tenho bola de cristal >:(</p>"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || dado.tags.includes(campoPesquisa)) {

            resultados += `<div class="item-resultado">
    <h2>
    <a href="#" target="_blank">${dado.titulo}</a>
    </h2>
    <p class="descricao-meta">${dado.descricao}</p>
     <a href="${dado.informacoes}" target="_blank">Mais informações sobre o jogo</a>
 </div>`
        }

    }

    if(!resultados) {
     resultados = "<p>nenhum jogo foi encontrado, desculpa :(</p>"
    }

    section.innerHTML = resultados

};
