const express = require('express')
const Controller = require('../controller/controller')
const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({ message: 'World'})
});

routes.get('/buscar', Controller.buscar)
routes.post('/buscar1', Controller.buscarPorUm)
routes.post('/cadastro', Controller.cadastro)
routes.put('/alterar', Controller.alterar)
routes.delete('/excluir', Controller.excluir)



module.exports = routes;