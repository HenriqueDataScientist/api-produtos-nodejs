// validation.js
// Validações com Joi para produtos
import Joi from 'joi';

export const produtoSchema = Joi.object({
  nome: Joi.string().min(3).max(100).required(),
  preco: Joi.number().positive().precision(2).required(),
  descricao: Joi.string().max(255).optional(),
  estoque: Joi.number().integer().min(0).required()
});
