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

E agora iniaciamos o servidor com o comando:

```bash
nodemon index.js
```

Para exibir um arquivo HTML criamos o metodo GET:

```js
app.get("/", function(req, res){
    // res.sendFile(__dirname + '../html/index.html');
    path=__dirname.split('src')[0]
    res.sendFile('html/index.html', { root: path });
})
```

## Conectando o node com mysql

Primeiramento devemos instalar o sequelize que é uma ORM utilizando o comando:

```bash
npm install --save sequelize
```
Assim como:
```bash
npm i --save mysql2
```

Para realizar a conexão:
```js
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '@JNL12345silva', {
    host: "localhost",
    dialect: 'mysql'
}) 
```

E para confirmar se aconexao funcionou:
```js
sequelize.authenticate().then(function(){
    console.log("Conectou")
}).catch(function(erro){
    cosnole.log("Falha ao se conectar: " + erro)
})
```

Para modelar um objeto para o banco de dados fazemos o seguinte:
```js
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
```
E para enviarmos esse model para o banco fazemos o seguinte:
```js
Postagem.sync({force: true})
```

Para adicionarmos um registro no banco utilizamos o seguinte codigo:

```js
Postagem.create({
    titulo: titulo,
    conteudo: conteudo
})
```

Vamos utilizar agora o handlebars, para instalar:
```bash
npm install --save express-handlebars
```

Para adiciona-la e configura-la no projeto:

```js
// Config
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // Conexão com o banco de dados MySql
    const sequelize = new Sequelize('escola_spring', 'root', '@JNL12345silva', {
    host: "localhost",
    dialect: 'mysql'
    })
```
Para usarmos o handlebars criamos uma pasta com o nome de 'views' e dentro outra pasta com nome layouts

Dentro de layouts criamos um main.handlebars com o seguinte codigo:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Postagens Node.jS</title>
</head>
<body>
    {{{body}}}
    
</body>
</html>
```

Para conseguirmos receber as informações dadas pelo usuario utilizamos o body-parser:

```bash
npm install --save body-parser
```

E para configura-lo fazemos:
```js
const bodyParser = require('body-parser')
// Body Parser 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.post('/adicionar', function(req, res){
res.send("Texto: " + req.body.titulo + " Conteúdo: " + req.body.conteudo)
     })
```


