(async () => {
    const database = require('@db/db');
    const Personagem = require('@db/tabelas');
    await database.sync();
})();