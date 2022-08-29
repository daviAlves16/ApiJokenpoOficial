"use strict";

const {
  Model,
  DataTypes
} = require('sequelize');

class Personagem extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      imagem: DataTypes.STRING
    }, {
      sequelize
    });
  }

}

module.exports = Personagem;