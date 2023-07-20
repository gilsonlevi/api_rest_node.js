# Documentação API - RESTFUL com Node.js

Anotações de estudo para criação de API's com Node.js

# Introdução 

## Informações Basicas

PACKAGE.JSON: é um arquivo de um projeto javascript que é responsável por guardar
informações, scripts e controle de versionamento de bibliotecas do projetos.
Essas dependências são gerenciadas pelo NPM.

As mensagens enviadas pelo cliente, geralmente um navegador da Web,
são chamadas de solicitações (requests), ou também requisições, e as 
mensagens enviadas pelo servidor como resposta são chamadas de respostas (responses).

NODEMON: Serve para ajudar o programador no desenvolvimento da aplicação. 
Toda vez que há uma mudança ele atualiza sistema

METODO GET: Serve para buscar coisas

METODO POST: Enviar uma informação
 
METODO PUT: Serve para atualizar informações

METODO DELETE: Serve para excluir informações

# Criação do projeto

```bash
npm init
npm install express
```

## Criar uma pasta src e dentro um arquivo index.js

```bash
mkdir src
```

Iniciando projeto:
```js
const express = require('express')
const app = express()

app.get('/', function(request, response){
    return response.send('Olá dev')
}

app.listen(300)

```

Dentro de um metodo GET podemos fazer uma response (resposta) utilizando:
```js
resquest.send("Seu texto aqui")
```

Para rodar o servidor, entre na linha de comando e utilize o comando:
```bash
node index.js
```

Para fazer rotas com caminhos diferentes
```js
app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre")
})
```

Você pode utilizar paramentos para a pesquisa usando: "/:" e o nome do parametro
```js
app.get("/ola/:cargo/:nome", function(req, res){
    res.send("<h1>Olá " + req.params.nome + "</h1>" + "<h2> Seu cargo é: " + req.params.cargo + "</h2>")
})
```
A cada alteração no codigo é preciso reiniciar o servidor node. Para automatiza essa função utilizamos o comando npm:
```bash
npm install nodemon -g
```


