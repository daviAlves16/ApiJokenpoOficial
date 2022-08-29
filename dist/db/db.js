"use strict";

const Sequelize = require('sequelize');

const Personagem = require("../models/personagem");

const sequelize = new Sequelize('heroku_bc2c59066cafa6c', 'bb9d84ba55aa1c', '9d182b95', {
  dialect: 'mysql',
  host: 'us-cdbr-east-06.cleardb.net',
  port: 3306
});
Personagem.init(sequelize);
module.exports = sequelize;