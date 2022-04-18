# Blog

Projeto realizado referente ao curso Desenvolvendo seu Blog com as tecnologias Angular e NodeJs, realizado pela Digital Innovation One.
Neste repositório contém o Frontend da aplicação .

## Para o Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Para o Backend

O Backend da aplicação foi realizado criando um server em `NodeJs` utilizando a biblioteca `json-server`.

Crie um arquivo chamado `banco.json` , e dentro deste arquivo monte um json no seguinte formato :

{
  "posts": [
    {
      "id": 1,
      "nome": "Digite um nome aqui",
      "mensagem": "Adicione uma mensagem aqui"
    },
    {
      "id": 2,
      "nome": "Digite um nome aqui",
      "mensagem": "Adicione uma mensagem aqui"
    }
  ]  
}

Este arquivo será responsável por armazenar as informações .

Dentro do arquivo `package.json` , em scripts  , configure o start com : `json-server --watch banco.json --port 3000` .

Para iniciar o server , dentro do terminal digite `npm start` . O server estará funcionando no endereço `http://localhost:3000/posts` .




