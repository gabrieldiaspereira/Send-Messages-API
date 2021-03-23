# Sobre

<i>Uma API responsável por fazer envio de mensagens.</i>

<b>Tecnologias utilizadas:</b>
<br>
● Node.js <br>
● MVC <br>
● Sequelize ORM <br>
● PostgreSQL <br>
● Docker <br>

# Variaveis ambiente
PORT=3333 <br>
APP_URL=0.0.0.0

# Rodando com docker
```shell
docker-compose up --build 
```
Variable `APP_URL` of .env must be" 0.0.0.0 "(it is already by default, so there is no need to change it)

# Rodando localmente
```shell
npm install
npm start
```
Change the `APP_URL` variable in .env to "localhost"
Change `host` in src/config/database.js to "localhost"

# Banco de dados
Para rodar as migrations:
```
npx sequelize db:migrate
```
Ou criar:
```
npx sequelize migration:create --name=create-messages
```
host: 'localhost',
username: 'root',
password: 'root',
database: 'postgres'

# Rotas
```bash
Enviar uma mensagem
/messages    POST
Exemplo de dados json enviados:

{
    "from": "5531997469133",
    "target_id": "553196179668",
    "media": "false",
    "message": "Text"
}

Visualizar todas as mensagens
/messages    GET

Visualizar todas as mensagens filtrando por "message"
/messages/message/textoafiltrar   GET

```

# Problemática
1. Desenvolver uma API que seja responsável por fazer o envio de mensagens. Esta API deve
conter um endpoint que receba um payload com os seguintes dados: “from”, “target_id”,
“media”, “message”.
Onde: from indica o número que está enviando a mensagem, target_id o número recebedor,
media indica true ou false para envio de arquivo (imagem, documento, áudio, etc) e message
a mensagem propriamente dita.
2. Desenvolver um endpoint que liste as mensagens enviadas e que permita filtrá-las.
3. Construa um sistema e/ou API, que faça o envio de mensagens utilizando a API criada acima
e retorne os seguintes dados: “message_status”, “message”, “from”, “target_id”.
Onde: message_status deve ser true ou false indicando o sucesso ou a negativa do envio,
from indica o número que está enviando a mensagem, target_id o número recebedor e
message a mensagem propriamente dita.