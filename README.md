# 💬 FalaTu

- [Projeto](#computer-projeto)
- [Tecnologias](#toolbox-tecnologias)
- [Começando](#gear-começando)
  - [Subindo o ambiente](#building_construction-subindo-o-ambiente)


## :computer: Projeto

**FalaTu** é uma aplicação que tem como objetivo ajudar as pessoas a socializarem e fazer novas amizades. O objetivo é ser o mais simples e rápido possível. Para se conectar basta definir um nome de usuário e o nome da sala de chat que deseja entrar, caso a sala já exista você será conectado à ela, do contrário, será criada uma nova sala.

A ideia é que os usuário terão suas contas e poderão se conectar com grupos de chats onde qualquer pessoa que tenha o nome da sala poderá entrar para interagir.

A conta do usuário e as salas que ele já entrou ficarão salvas, mas as mensagens trocadas no chat irão sumir a cada sessão.


## :toolbox: Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js 16.16.0](https://nodejs.org/en)
- [MySQL 5.7](https://www.mysql.com/)

## :gear: Começando

Essas instruções vão permitir que você tenha uma cópia inteira do projeto, possibilitando rodar ele localmente na sua máqiuina.

### :building_construction: Subindo o ambiente

Você vai precisar instalar o [Git](https://git-scm.com/downloads), [Docker Engine](https://docs.docker.com/engine/install), e [Docker Compose](https://docs.docker.com/compose/install) antes de prosseguir com as intruções abaixo.

### :package: Rodando o projeto

Os passos a seguir precisam ser feitos em um terminal (Usuários de Windows podem preferir usar o [Windows Terminal](https://aka.ms/windowsterminal) mas o promp de comando também funciona).

Clone o respositório e faça o buld das imagens docker:

```bash
git clone git@github.com:VazMF/FalaTu.git
cd FalaTu
docker-compose up
```

### :flight_departure: Serviços
Os serviços da aplicação e seus endereços estão listados na tabela abaixo:

| Serivço         | URL                                                |
| --------------- | ------------------------------------------------------ |
| FalaTu     | [http://127.0.0.1:3000](http://127.0.0.1:3000)         |
| mysql      | [http://127.0.0.1:3308](http://127.0.0.1:3308) |


Made with :heart: by [VazMF](https://github.com/VazMF) and [dudulacerdadl](https://github.com/dudulacerdadl) :wave:.
