# Django-Angular-Crud

## Sobre o projeto

Esta é uma aplicação desenvolvida em Angular (Front end) e Python com Django(Back end) para um teste seletivo. O projeto tem como principal objetivo apresentar um CRUD simples onde é capaz de cadastrar, editar, deletar, pesquisar, remover e calcular o IMC de um usuário. O teste seletivo consiste nas seguintes funcionalidades:
* Deverá ser usado o Django como server. O client fica livre devendo usar (html5),
desde que separado do django, com preferência em Angular;
* Crie uma entidade Pessoa, conforme modelo abaixo, e siga as instruções a seguir:

  ![image](https://github.com/larissa1998/Django-Angular-Crud/assets/19778881/ddf3e150-58a0-4ef8-aa3d-4b0dfad32e29)

* Crie uma interface onde o usuário possa informar esses dados em web(html5).
* Nesta tela deverá ter os botões Incluir, Alterar, Excluir e Pesquisar. Todos os 4
deverão ir no server. O botão Alterar e Excluir deverá ser chamado somente
depois do Pesquisar.
* O Id da tabela acima poderá ser auto-incrementado
* A chamada deverá ser REST(os dados em JSON) chegando em um controller no
server. Então o controller chamar uma classe Service com o DTO da tela. Do
Service chamar uma classe denominada Task que efetivamente faz o que tem que
fazer(incluir, alterar, excluir e pesquisar).
* Notar que a entidade do DTO acima deverá ter algum mecanismo de persistência que converta banco de dados em um objeto Python (mecanismo ORM) e vice-versa.
* Ao final, como ponto extra, você pode colocar um botão ao lado dos 4 outros
mencionados acima. O usuário com uma pessoa selecionada na tela, pode clicar neste
botão, ele deve ir no server e fazer o cálculo abaixo e retornar em uma popup.
FÓRMULA DO PESO IDEAL:
• para homens = ( 72,7 * altura )-58;
• para mulheres = ( 62,1 * altura )-44,7.

## Rodando o projeto
* Baixar o postgresql versão 11 para cima para rodar o nosso ORM

  ### Front end
  1. Instalar as dependencias do projeto
    ```
      npm install
    ```
  2. Executar o projeto
    ```
      npm start
    ```
  ### Back end
  1. Instalar o python em sua máquina
  2. Instalar as dependencias que esta no requirements.py
     ```
        pip install -r requirements.txt
      ```
  3. Com o postgresql baixado em sua máquina. Acessar o pgadmin e criar um server com o nome do banco do projeto djangodb
  4. Rodar as migrations
     ```
       python manage.py migrate
      ```
  5. Após rodar as migrations o banco ja estara criado no pgadmin (postgresql)
  6. Agora só rodar o projeto
     ```
        python manage.py runserver
    ```
