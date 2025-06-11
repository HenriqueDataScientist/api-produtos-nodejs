// products.js
// Rotas e lógica para gerenciar produtos
import express from 'express';
import { produtoSchema } from './validation.js';

export const productsRouter = express.Router();

// Simulação de banco de dados em memória
let produtos = [];
let idAtual = 1;

// Listar todos os produtos
productsRouter.get('/', (req, res) => {
  res.json(produtos);
});

// Buscar produto por ID
productsRouter.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
  res.json(produto);
});

// Criar novo produto
productsRouter.post('/', (req, res) => {
  const { error, value } = produtoSchema.validate(req.body);
  if (error) return res.status(400).json({ erro: error.details[0].message });
  const novoProduto = { id: idAtual++, ...value };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

// Editar produto existente
productsRouter.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Produto não encontrado' });
  const { error, value } = produtoSchema.validate(req.body);
  if (error) return res.status(400).json({ erro: error.details[0].message });
  produtos[index] = { id, ...value };
  res.json(produtos[index]);
});

// Deletar produto
productsRouter.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Produto não encontrado' });
  produtos.splice(index, 1);
  res.status(204).send();
});
