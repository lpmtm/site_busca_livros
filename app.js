function pesquisar() {
    // Obtém o elemento com o ID "resultados-pesquisa" para exibir os resultados da busca
    let section = document.getElementById("resultados-pesquisa");
    
    // Obtém o valor digitado no campo de pesquisa com o ID "campo-pesquisa"
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    // Exibe o valor digitado no console para fins de depuração
    console.log(campoPesquisa);
    
    // Se o campo de pesquisa estiver vazio, exibe uma mensagem informando que nenhuma informação foi encontrada
    if (campoPesquisa == "") {
        section.innerHTML = "Nenhuma informação encontrada!";
        return;
    }

    // Converte o texto digitado no campo de pesquisa para letras minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Variável para acumular os resultados
    let resultados = "";

    // Percorre a lista de objetos chamada "dados"
    for (let dado of dados) {
        // Converte os campos para letras minúsculas
        let titulo = dado.titulo.toLowerCase();
        let generos = dado.generos.toLowerCase();
        let autor = dado.autor.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let publicacao = dado.publicacao.toLowerCase();
        let editora = dado.editora.toLowerCase();
        let tags = dado.tags.toLowerCase();

        // Verifica se o texto digitado está presente em algum dos campos
        if (titulo.includes(campoPesquisa) || generos.includes(campoPesquisa) || descricao.includes(campoPesquisa) ||
            autor.includes(campoPesquisa) || publicacao.includes(campoPesquisa) || editora.includes(campoPesquisa) ||
            tags.includes(campoPesquisa)) {
            
            // Monta o HTML dinâmico com os dados encontrados
            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p><strong>Gêneros:</strong> ${dado.generos}</p>
                <p><strong>Autor:</strong> ${dado.autor}</p>
                <p><strong>Publicação:</strong> ${dado.publicacao}</p>
                <p><strong>Editora:</strong> ${dado.editora}</p>
                <p><strong>Descrição:</strong> ${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    // Exibe a mensagem se não houver resultados
    if (!resultados) {
        resultados = "Nenhuma informação encontrada! O livro digitado não consta no banco de dados. :( Tente buscar por algo diferente.";
    }

    // Insere os resultados na seção de resultados
    section.innerHTML = resultados;
}