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




