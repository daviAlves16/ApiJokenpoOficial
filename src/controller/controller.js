const Personagem = require('../models/personagem')

module.exports = {
    async cadastro(req, res){
        const { nome, imagem} = req.body
        const personagem = await Personagem.create({nome, imagem})
        return res.json(personagem)
    },
    async buscar(req, res){
        const personagem = await Personagem.findAll();
        return res.json(personagem)
    },
    async buscarPorUm(req, res){
        const {id} = req.body
        const personagem = await Personagem.findByPk(id);
        return res.json(personagem)
    },
    async alterar(req, res){
        const {id, nome} = req.body
        const personagem = await Personagem.findByPk(id)
        personagem.nome = nome
        personagem.save();
        return res.json(personagem)
    },
    async excluir(req, res){
        const {id} = req.body
        const personagem = await Personagem.findByPk(id)
        personagem.destroy();
        return res.json(personagem)
    },
}