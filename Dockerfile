## Comando obrigatório
## Baixa a imagem do node com versão alpine (versão mais simplificada e leve)
FROM node:alpine

## Define o local onde o app vai ficar no disco do container
## Pode ser o diretório que você quiser
WORKDIR /home

## Copia o package.json e o arquivo env para dentro da pasta /home
COPY package*.json ./
COPY .env ./

## Executa npm install para adicionar as dependências e criar a pasta node_modules
RUN npm install

## Copia tudo que está no diretório onde o arquivo Dockerfile está 
## para dentro da pasta /home do container(na .dockerignore ignoramos a node_modules)
## Vamos ignorar a node_modules por isso criaremos um .dockerignore
COPY . .

## Container ficará ouvindo os acessos na porta 3333
EXPOSE 3333

## Não se repete no Dockerfile
## Executa o comando npm start para iniciar o script que que está no package.json
ENTRYPOINT [ "./run.sh" ]