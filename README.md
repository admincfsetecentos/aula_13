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