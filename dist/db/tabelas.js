"use strict";

const Sequelize = require('sequelize');

const sequelize = require("./db");

const database = require("./db");

const {
  update
} = require("../models/personagem");

const Personagem = database.define('personagem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imagem: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
module.exports = Personagem;