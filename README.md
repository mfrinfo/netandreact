# BackEnd .NetCore 3.1
BackEnd Criado com a tecnologia Microsoft .NetCore 3.1

## Visual Code
Utilizando o Visual Code como IDE de Desenvolvimento

## xUnit para Testes
Utilizando xUnit para testes de API.
```python
Data.Test
Service.Test
Application.Test
Integration.Test
```
## Docker 
Criado o docker-compose.yml e dockerfile
```bash
Rodar deploy.sh 
```
para Criar o container da Aplicação.

## Fontes GitHub
Fontes disponível em [GitHub](https://github.com/mfrinfo/).
ou 
EndPoint /api/Source

## Banco de Dados
SQLite utilizando o Entity Framework como ORM

## Migração 
A Migração é controlada atráves de uma váriavel de ambiente
```python
MIGRATION=APLICAR
```

## Gerar Token de Acesso
```bash
EndPoint /api/Login
```

utilizar o usuário pré cadastrado
```python
{
  "email": "mfrinfo@mail.com"
}
```

## Cadastro de Novos Usuários
```bash
EndPoint /api/Users
```
Crud de Usuário, porém operação somente será realizada com authenticação.



## Front-End Países

Criado em React v17.0.1

Admin-LTE 3 como layout do projeto

Componentes Criado para Montar o Layout do Admin-LTE 3

Utilizando o Formiks para controle de form de Cadastros

Utilizando Componente PaginatedList para Páginação do Index.

Utilizando Componentes react-bootstrap para montagem de Cards e outros componentes

Componentes Criados para facilitar o uso do Formiks

## Docker

Criado deploy.sh que irá executar o docker-compose-prod.yml

que irá criar o container para ser inserido em um servidor Linux.

### Rodar aplicação

Na primeira execução executar `npm install` 

Executar `npm start`

Irá executar [http://localhost:3000](http://localhost:3000).

Antes de Executar precisa subir a API NetCore 3.1 na porta [http://localhost:5000](http://localhost:5000).

**OBS: Utilizar o usuário padrão da API para acessar mfrinfo@mail.com**
