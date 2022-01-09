Comando a executar:
`docker-compose up`
Após o comando ser finalizado, basta acessar localhost:80
Para adicionar um novo usuário, basta passar por query params o name. Por exemplo: localhost:80?name=Leonan.

Observações:
- Platform está especificada como linux/amd64 pois estou buildando estas imagens no MAC com M1.
- Estou utilizando a imagem do mariadb pois tem versão para arm64.
