# Scripts Disponíveis
No diretório do projeto, posso rodar os seguintes comandos: "npm start". Esse comando executa o aplicativo no modo de desenvolvimento. Para visualizar no navegador, basta abrir http://localhost:3000. A página será recarregada automaticamente sempre que eu fizer alterações. Além disso, erros de lint (caso ocorram) serão exibidos no console. "npm test": Esse comando inicia o runner de testes em modo interativo, observando qualquer alteração no código. Se eu precisar de mais informações sobre como executar os testes, posso consultar a seção sobre execução de testes na documentação. "npm run build": Esse comando cria a versão otimizada do meu aplicativo para produção na pasta build. O React será empacotado corretamente em modo de produção e a construção será otimizada para garantir o melhor desempenho. Os arquivos serão minificados, e seus nomes incluirão hashes para controle de cache. Agora, meu aplicativo estará pronto para ser publicado! Se precisar de mais detalhes sobre como realizar a implantação, posso consultar a documentação específica. "npm run eject": Atenção: Essa é uma operação irreversível. Depois de usar o eject, não tem como voltar atrás! Se eu não estiver satisfeito com as opções de configuração ou ferramentas de construção, posso usar o comando eject a qualquer momento. Esse comando remove a dependência única de construção do meu projeto e copia todas as configurações e dependências (como webpack, Babel, ESLint, etc.) diretamente para o meu projeto. Com isso, terei controle total sobre elas. Todos os outros comandos continuarão funcionando normalmente, mas agora apontando para os scripts copiados, que poderei ajustar conforme necessário. A partir desse momento, o gerenciamento do projeto estará completamente sob minha responsabilidade. Não preciso usar o eject. As configurações padrão atendem bem a projetos pequenos e médios, então não há obrigatoriedade de usá-lo. No entanto, entendo que, quando estiver pronto para personalizar as configurações do projeto, o eject pode ser útil.

# React Components
Este código cria um componente Menu em "React" que exibe uma lista de pratos de um cardápio. Cada prato é representado por um objeto com informações como nome, imagem, descrição e preço. O componente utiliza a biblioteca "reactstrap" para estruturar e exibir o conteúdo de maneira responsiva e estilizada.

React é a biblioteca que estamos usando para criar a interface de usuário.
useState é um "hook" que permite criar variáveis de estado dentro de um componente funcional.
Media é um componente do reactstrap que facilita a organização do conteúdo, especialmente para layouts com imagens e textos.

O "useState" inicializa a variável dishes, que é um array de objetos representando os pratos do cardápio. Cada objeto contém detalhes como o nome, imagem, categoria, preço e descrição do prato.

Usou-se a função "map" para percorrer o array "dishes" e gerar uma lista de componentes "div" para cada prato.
Cada prato tem uma imagem, nome e descrição exibidos de forma organizada, usando o componente Media do "reactstrap".

O JSX dentro do "return" define a estrutura final do componente. Colocou-se todos os pratos dentro de um "Media list" (lista de itens de mídia), que será exibido em um layout responsivo, usando "classes" como container e "row" para alinhamento.
"{menu}" é a lista de pratos mapeada que é inserida dentro da estrutura HTML.

O Menu é exportado para ser usado em outros arquivos do projeto.

# Componentes do React - Parte 2:

# Descrição das Alterações Feitas na Aula:

Criação de um componente Menu em "React" com maior ênfase na estruturação e exibição do cardápio de forma detalhada e responsiva.

Implementação do "useState" para gerenciar o estado dos pratos (dishes), com um array de objetos contendo informações sobre os pratos.

Uso do componente "Media" do "Reactstrap" para exibir os pratos de forma organizada.
Layout responsivo utilizando classes como container e row para adaptar o cardápio a diferentes tamanhos de tela.

Modularização do código através da exportação do componente Menu.

# MenuComponent.js:

# Descrição do Arquivo:

O arquivo MenuComponent.js contém a definição do componente Menu, que exibe o cardápio de pratos de um restaurante. Ele é responsável pela iteração sobre o "array" "dishes" e pela renderização de cada prato em um formato responsivo utilizando o componente "Media" do "Reactstrap".

# Quais os imports utilizados?

React, { useState }: Importa o "React" e o "hook useState" para criar e gerenciar o estado local do componente.

Media do Reactstrap: Utilizado para estruturar a exibição dos pratos de forma organizada.

Dishes (de dishes.js): Importa os dados dos pratos ("dishes") para serem utilizados no componente.

# Há componentes? O que fazem?
Menu: Componente principal que exibe o cardápio com todos os pratos.
Media: Componente do "Reactstrap" utilizado dentro do Menu para exibir informações sobre cada prato (imagem, nome, preço, descrição).

# Para que serve o onDishSelect no projeto?

A função "onDishSelect" serve para manipular a seleção de um prato. Quando um prato é selecionado, essa função pode ser chamada para mostrar detalhes adicionais ou atualizar o estado do aplicativo.

# Para que serve o renderDish?

O "renderDish" é uma função responsável por exibir a informação de cada prato individualmente, utilizando as propriedades de cada item dentro do "array" "dishes". Ele é chamado dentro do map para renderizar os pratos dinamicamente.

# Para que serve o props.dishes.map?
O "props.dishes.map" é utilizado para iterar sobre o "array" "dishes", criando um novo componente Media para cada prato. Cada prato é exibido com sua imagem, nome, descrição e preço.

# dishes.js
# Descrição do Arquivo:

O arquivo "dishes.js" contém um "array" de objetos, onde cada objeto representa um prato do cardápio, com suas respectivas propriedades.

# Quais as propriedades?
"id": Identificador único do prato.
"name": Nome do prato.
"image": Caminho para a imagem do prato.
"category": Categoria do prato (exemplo: "mains", "desserts").
"price": Preço do prato.
"description": Descrição do prato.

# Que tipo de data é utilizado?

O arquivo dishes.js utiliza um array de objetos. Cada objeto contém as propriedades de um prato, como "id", "name", "image", "category", "price" e "description".

# App.js:

# Descrição do Arquivo

O arquivo App.js serve como o ponto de entrada principal do aplicativo. Ele importa o componente Menu e o utiliza para exibir o cardápio com os pratos, gerenciando o estado dos pratos e passando-os como props para o componente Menu.

# Para que serve o const [dishes]?
O const [dishes] é utilizado para declarar o estado local que armazena os dados do cardápio (pratos). Esse estado pode ser atualizado com novos dados, se necessário, e serve como fonte de dados para o componente Menu.

# Menu dishes={dishes} /

A linha Menu dishes={dishes} / está passando o estado dishes (que contém os pratos) como props para o componente Menu. Isso permite que o Menu tenha acesso aos dados do cardápio e possa renderizar cada prato dinamicamente, utilizando a iteração com map para exibir as informações de cada prato.

# Exercício 12 React Components hands on

# App.js:

# Descrição do Arquivo:
O arquivo App.js serve como ponto de entrada principal do aplicativo. Ele importa o componente Menu e fornece a lista de pratos (dishes) para esse componente. O componente App é responsável por gerenciar e passar os dados necessários para renderizar o cardápio no aplicativo.

# O que foi pedido:

Foi solicitado que o App.js exibisse o componente MenuComponent, passando a lista de pratos como props para ele. A tarefa envolveu passar esses dados para que o MenuComponent pudesse exibir a lista de pratos e permitir a seleção de um prato.

# O que foi entregue:

# Exibição do Componente Menu:

O App.js importa o componente Menu e passa a lista de pratos (dishes) como uma propriedade (props) para o Menu. Isso permite que o MenuComponent tenha acesso aos dados e os exiba corretamente.

# Declaração de dishes:

A variável dishes é um array de objetos, cada um representando um prato com propriedades como id, name, description, price, category e image.

# Estrutura Responsiva do Menu:

O MenuComponent renderiza a lista de pratos de forma responsiva, aproveitando as funcionalidades do Bootstrap para garantir que a interface se adapte a diferentes tamanhos de tela.

# MenuComponent.js:

# Descrição do Arquivo:
O arquivo MenuComponent.js contém o componente Menu, que exibe a lista de pratos e permite a seleção de um prato. Quando um prato é selecionado, os detalhes do prato escolhido são exibidos utilizando o DishDetailComponent.

# O que foi pedido:
Foi solicitado que o MenuComponent exibisse a lista de pratos e substituísse o cartão do prato selecionado por um DishDetailComponent, mostrando informações detalhadas sobre o prato escolhido. A tarefa envolveu a utilização de useState para gerenciar o estado do prato selecionado e a integração do DishDetail.

# O que foi entregue:

# Criação do Componente Menu:

O componente Menu recebe a lista de pratos via props e exibe cada prato em uma lista. Cada prato é exibido com uma imagem e nome, e, ao clicar em um prato, o estado selectedDish é atualizado para refletir o prato selecionado.

# Gerenciamento do Estado de Seleção do Prato:

Utilizando o hook useState, foi implementado o estado selectedDish para armazenar o prato selecionado. Quando um prato é clicado, a função onDishSelect é chamada, atualizando o estado com as informações do prato selecionado.

# Integração com DishDetail:

O componente DishDetail foi importado e usado para exibir os detalhes do prato selecionado. Quando um prato é selecionado, o selectedDish é passado como props para o componente DishDetail, que então exibe as informações detalhadas do prato.

# Exibição Responsiva:

O layout utiliza as classes do Bootstrap, onde os pratos são exibidos em uma grade (col-12 col-md-5 m-1). A exibição dos detalhes do prato selecionado ocorre ao lado da lista de pratos, em uma estrutura responsiva.

# DishdetailComponent.js:

# Descrição do Arquivo:

O arquivo DishdetailComponent.js contém o componente DishDetail, que exibe os detalhes de um prato selecionado, incluindo nome, descrição, preço, categoria e imagem. Além disso, ele exibe a lista de comentários do prato, se houver. Esse componente é utilizado dentro do MenuComponent para exibir os detalhes do prato quando o usuário o seleciona.

# O que foi pedido:

Foi solicitado que o DishDetailComponent exibisse os detalhes de um prato e, opcionalmente, os comentários sobre ele. O layout deveria ser responsivo e exibir os detalhes do prato e os comentários lado a lado para telas médias e maiores, e empilhados para telas pequenas.

# O que foi entregue:

# Criação do Componente DishDetail:

O componente DishDetail recebe como props o prato selecionado (dish) e seus comentários (comments).
Se o prato for null, o componente retorna uma <div> vazia.

# Renderização dos Detalhes do Prato:

A função renderDish exibe as informações detalhadas do prato, incluindo a imagem, nome, descrição, preço e categoria. Essas informações são exibidas dentro de um cartão Bootstrap (Card).

# Renderização dos Comentários:

A função renderComments exibe uma lista de comentários associados ao prato. Se não houver comentários, o componente exibe uma <div> vazia.
Os comentários são exibidos como uma lista não ordenada, onde cada comentário mostra o texto do comentário, o autor e a data.

# Exibição Responsiva:

O layout é estruturado de forma responsiva, com as classes do Bootstrap col-12 col-md-5 m-1 para garantir que os detalhes do prato e os comentários sejam exibidos corretamente em diferentes tamanhos de tela.

# Tratamento de Caso Nulo:

Caso o prato (dish) seja null, o componente retorna uma <div> vazia, garantindo que nada seja exibido quando não houver um prato selecionado.
