# Desafio Full Cycle:

Este projeto faz parte de um dos desafios do curso full cycle 2.0. No qual, consiste em utilizar o nginx como proxy reverso para uma aplicação node.js e MySQL com docker e docker-compose.

Comando a executar:
`docker-compose up -d`

Após o comando ser finalizado, basta acessar localhost:8080
Para adicionar um novo registro na tabela people, basta passar por query params o name. 

Por exemplo: localhost:8080?name=Leonan

Observações:
- Platform está especificada como linux/amd64 pois estou buildando estas imagens no MAC com M1.
- Estou utilizando a imagem do mariadb pois tem versão para arm64.
