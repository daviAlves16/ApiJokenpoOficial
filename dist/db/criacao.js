"use strict";

(async () => {
  const database = require("./db");

  const Personagem = require("./tabelas");

  await database.sync();
})();