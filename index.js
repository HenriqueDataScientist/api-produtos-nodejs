/**
 * Importa o framework Express para criar o servidor HTTP.
 */
import express from 'express';

/**
 * Importa o roteador de produtos definido em outro módulo.
 */
import { productsRouter } from './products.js';

/**
 * Cria uma instância da aplicação Express.
 */
const app = express();

/**
 * Define a porta em que o servidor irá escutar.
 * @constant {number}
 */
const PORT = 3000;

/**
 * Middleware para permitir o recebimento de requisições com corpo em JSON.
 */
app.use(express.json()); // Permite receber JSON no body

/**
 * Usa o roteador de produtos para todas as rotas que começam com '/produtos'.
 */
app.use('/produtos', productsRouter);

/**
 * Rota padrão para verificar se a API está rodando.
 * @name GET/
 * @function
 * @param {Object} req - Objeto de requisição do Express.
 * @param {Object} res - Objeto de resposta do Express.
 */
app.get('/', (req, res) => {
  res.send('API de Produtos está rodando!');
});

/**
 * Inicia o servidor e faz com que ele escute na porta especificada.
 * Exibe uma mensagem no console quando o servidor está pronto.
 */
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});