# DOCUMENTACAO API

* Escolher o local para criar o projeto;
* Abrir o git bash nesta pasta;

Com o gitbash aberto executar o comando para criar a raiz do projeto:

{mkdir - make directory}

```
mkdir NOME_PROJETO
```

Acessar a pasta:

```
cd NOME_PROJETO
```

Criar arquivo gerenciador de pacotes node:

```
npm init -y
```

Criar arquivo .gitignore

{touch cria arquivos dentro da pasta}

```
touch .githignore
```

Criar arquivo .env:

{Arquivo para reservar variaveis do projeto}

```
touch .env
```

## Instalar os pacotes do projeto

Instalar pacotes para o projeto:

```
npm i express nodemon dotenv
```

* express: Servidor da API;

* nodemon: Atualiza os arquivos alterados sem parar o servidor;

* dotenv: Gerenciador de variaveis de ambiente;

Criar pasta scr:

```
mkdir src
```

Criar arquivo servere.js:

```
touch src/server.js
```