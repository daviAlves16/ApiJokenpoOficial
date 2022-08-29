import express from 'express'
const app = express()
const routes = require('../src/routes/routes')
require('../src/db/db')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())
app.use(routes)

module.exports = app
