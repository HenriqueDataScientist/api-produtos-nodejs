# Documentação da API de Gerenciamento de Produtos

## Descrição Geral
A API de Gerenciamento de Produtos é uma solução RESTful desenvolvida para facilitar o cadastro, consulta, atualização e remoção de produtos em sistemas comerciais. Os dados são mantidos em memória, tornando-a ideal para fins de estudo, prototipagem e testes.

## Objetivos
- Permitir o gerenciamento completo do ciclo de vida de produtos.
- Garantir a validação e integridade dos dados.
- Fornecer uma interface simples e intuitiva para integração com outros sistemas.

## Funcionalidades
- Listar todos os produtos cadastrados.
- Buscar produto por ID.
- Criar novo produto.
- Editar produto existente.
- Remover produto por ID.

## Tecnologias Utilizadas
- **Node.js** (ambiente de execução)
- **Express** (framework para APIs REST)
- **JavaScript** (linguagem principal)
- **Nodemon** (opcional, para recarregamento automático em desenvolvimento)

## Requisitos de Instalação

### Pré-requisitos
- Node.js instalado (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Instalação
```bash
git clone <URL-do-repositório>
cd <nome-da-pasta>
npm install
```

### Execução
```bash
npm start
```
O servidor estará disponível em `http://localhost:3000`.

## Exemplos de Requisições e Respostas

### Criar Produto
**Requisição:**
```http
POST /produtos
Content-Type: application/json

{
  "nome": "Camiseta Polo",
  "preco": 59.90,
  "descricao": "Camiseta de algodão, tamanho M",
  "estoque": 10
}
```
**Resposta:**
```http
201 Created
Content-Type: application/json

{
  "id": 1,
  "nome": "Camiseta Polo",
  "preco": 59.90,
  "descricao": "Camiseta de algodão, tamanho M",
  "estoque": 10
}
```

### Listar Produtos
**Requisição:**
```http
GET /produtos
```
**Resposta:**
```http
200 OK
Content-Type: application/json

[
  {
    "id": 1,
    "nome": "Camiseta Polo",
    "preco": 59.90,
    "descricao": "Camiseta de algodão, tamanho M",
    "estoque": 10
  }
]
```

### Buscar Produto por ID
**Requisição:**
```http
GET /produtos/1
```
**Resposta:**
```http
200 OK
Content-Type: application/json

{
  "id": 1,
  "nome": "Camiseta Polo",
  "preco": 59.90,
  "descricao": "Camiseta de algodão, tamanho M",
  "estoque": 10
}
```

### Atualizar Produto
**Requisição:**
```http
PUT /produtos/1
Content-Type: application/json

{
  "nome": "Camiseta Polo Premium",
  "preco": 79.90,
  "descricao": "Camiseta de algodão premium, tamanho M",
  "estoque": 8
}
```
**Resposta:**
```http
200 OK
Content-Type: application/json

{
  "id": 1,
  "nome": "Camiseta Polo Premium",
  "preco": 79.90,
  "descricao": "Camiseta de algodão premium, tamanho M",
  "estoque": 8
}
```

### Remover Produto
**Requisição:**
```http
DELETE /produtos/1
```
**Resposta:**
```http
204 No Content
```

---

Siga as instruções acima para instalar, executar e interagir com a API. Para dúvidas ou exemplos adicionais, consulte a documentação ou entre em contato com o mantenedor do projeto.