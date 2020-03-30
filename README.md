![logo](https://user-images.githubusercontent.com/13801496/77876792-521c4a00-722a-11ea-86a0-b42c8d068a2c.png)

# Feedback Plataform

Feedback Plataform é um projeto desenvolvido como desafio para o processo seletivo da Deliver IT.

#### Motivação

> Desenvolvimento de um CRUD de cadastro de Feedback's para os colaboradores da empresa, em ReactJs.

## Desenvolvimento

### Back-end 

Foi disponibilizada uma API RESTful a ser consumida para o desafio, porém, foi decidido criar uma API GraphQl a frente da mesma.

obs: Para saber mais informações acesse o projeto api-grapql(https://github.com/lucasfujii/api-grapql)

### Front-end

A aplicação foi criada usando o Server Side Rendering NextJs(https://nextjs.org) e consome a API GraphQl construída.

As tecnologias, frameworks e ferramentas usadas para construir a aplicação foram:

> ReactJs, React Hooks, RamdaJS, Context API, Apollo e Material UI como framework de UI. 

Primeiramente, a aplicação busca pela API no endereço local `http://localhost:4000`. Se precisar iniciar a API em outro endereço, altere a `const GRAPHQL_URL` no arquivo `./util/apollo-client.js`.


![Record_2020_03_30_02_14_50_330](https://user-images.githubusercontent.com/13801496/77879699-5ac44e80-7231-11ea-90de-00d9d07e0437.gif)


## Instalando a aplicação

Primeiro, Clone o repositório.

Depois, navegue até a pasta raíz do projeto e instale as dependências através do Yarn:

	yarn install
	
Logo após, inicie o servidor através do comando:

    yarn dev

Pronto!
