# Django-Angular-Crud

## Sobre o projeto

Esta é uma aplicação desenvolvida em Angular (Front end) e Python com Django(Back end) para um teste seletivo. O projeto tem como principal objetivo apresentar um CRUD simples onde é capaz de cadastrar, editar, deletar, pesquisar, remover e calcular o IMC de um usuário. 

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
