const express = require('express')
const app = express()

const routes = require('./sever/src/routes')

const routes = require('./src/routes')


const PORT = 5000

app.use(express.json());
app.use(routes)


app.listen(PORT, () => {

    console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`);

    console.log(`SERVIDOR RODANDO NA PORTA ${PORT}🚀`);

})