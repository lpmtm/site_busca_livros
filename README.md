##PAGINA VIRADA


Página Virada é um site que permite aos usuários pesquisar livros e obter informações detalhadas sobre eles. Com uma interface simples e uma função de pesquisa eficiente, o site busca facilitar o acesso a informações relevantes sobre títulos literários, oferecendo descrições, links para mais detalhes, e a possibilidade de buscar por tags e palavras-chave.

*Funcionalidades:*
*Pesquisa por livros: Os usuários podem pesquisar por títulos, descrições ou tags associadas aos livros.
*Resultados dinâmicos: Exibe os resultados da busca em tempo real à medida que os usuários digitam no campo de pesquisa.
*Links externos: Oferece a opção de acessar mais informações sobre cada livro pesquisado por meio de links externos.


*Estrutura do Projeto:*
O projeto é composto por três principais arquivos:

*index.html: Estrutura HTML da página, contendo o layout principal com o campo de pesquisa, área de exibição dos resultados e rodapé.
*styles.css: Arquivo de estilos que define a aparência visual do site, como cores, fontes e organização dos elementos.
*app.js: Contém a lógica JavaScript para manipular a busca, filtrar os dados e exibir os resultados na página.

*Como Utilizar: *
Abra o arquivo index.html em um navegador.
Utilize o campo de pesquisa para digitar o título ou parte da descrição do livro que deseja buscar.
Pressione o botão "Pesquisar" para visualizar os resultados diretamente na página.


*Estrutura do Código:*
HTML
O arquivo index.html segue a estrutura padrão de uma página web:

*Um header que contém o título do site.
*Um main que abriga a barra de pesquisa e a seção onde os resultados são exibidos.
*Um footer com informações de contato e direitos reservados.


*JavaScript:* 
A função pesquisar() no arquivo app.js é responsável por:
*Capturar o valor digitado pelo usuário no campo de busca.
*Filtrar os resultados baseados em uma lista de livros, verificando se o título, descrição ou tags coincidem com a busca.
*Atualizar a página em tempo real com os resultados encontrados, ou exibir uma mensagem informando que não houve correspondências.

*CSS:*
O arquivo styles.css define a aparência e layout do site, garantindo uma experiência visual agradável e consistente.

*Banco de Dados:*
A busca é realizada a partir de uma lista de livros fictícia armazenada em um arquivo dados.js. Cada livro contém os seguintes atributos:
*titulo: O nome do livro.
*generos: Generos do livro.
*descricao: Uma breve descrição do livro.
*autor: Escrito/escritora da obra.
*publicação: Data de postagem do livro.
*editora: Editora responsavel pelo livro.
*tags: Palavras-chave associadas ao conteúdo do livro.
*link: Um URL que direciona para mais informações sobre o livro.


*Contato*
Caso tenha dúvidas ou sugestões, entre em contato:
Email: lpcarolinelopes@gmail.com
