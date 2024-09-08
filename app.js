function pesquisar() { 
    // Obtém o elemento com o ID "resultados-pesquisa" para exibir os resultados da busca
    let section = document.getElementById("resultados-pesquisa");
    
    // Obtém o valor digitado no campo de pesquisa com o ID "campo-pesquisa"
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    // Exibe o valor digitado no console para fins de depuração
    console.log(campoPesquisa);
    
    // Se o campo de pesquisa estiver vazio, exibe uma mensagem informando que nenhuma informação foi encontrada
    if (campoPesquisa == "") {
        section.innerHTML = "nenhuma informacao encontrada!";
        return; // Encerra a função para não continuar a busca
    }
  
    // Converte o texto digitado no campo de pesquisa para letras minúsculas, facilitando a busca (ignora maiúsculas/minúsculas)
    campoPesquisa = campoPesquisa.toLowerCase();

    // Variáveis que serão usadas para acumular os resultados e realizar a comparação
    let resultados = "";
    let generos = "";
    let titulo = "";
    let autor = "";
    let publicacao = "";
    let editora = "";
    let descricao = "";
    let tags = "";

    // Percorre a lista de objetos chamada "dados" (presumivelmente vinda de um arquivo externo)
    for (let dado of dados) {
        // Converte o título e a descrição dos dados para letras minúsculas para fazer a comparação
        titulo = dado.titulo.toLocaleLowerCase();
        generos = dado.generos.toLocaleLowerCase();
        autor = dado.autor.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        publicacao = dado.publicacao.toLocaleLowerCase();
        editora = dado.editora.toLocaleLowerCase();
        tags = dado.tags.toLocaleLowerCase();

        // Se o título ou a descrição conterem o texto digitado, o livro será incluído nos resultados
        if (titulo.includes(campoPesquisa) || generos.includes (campoPesquisa)|| descricao.includes(campoPesquisa)|| autor.includes(campoPesquisa)|| publicacao.includes(campoPesquisa)|| editora.includes (campoPesquisa)|| tags.includes (campoPesquisa)) {
            // Monta o HTML dinâmico com os dados encontrados e acumula na variável "resultados"
            resultados += `
            <div class="item-resultado">
                <h2>
                     <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">mais informacoes</a>
            </div>
            `;
        }
    }

    if(!resultados){
        resultados = "nenhuma informacao encontrada! livro digitado nao consta no banco de dados :( tente buscar por algo diferente. "
    }
    
    // Insere os resultados encontrados no elemento HTML da página (ou nada se nenhum resultado for encontrado)
    section.innerHTML = resultados;
}
