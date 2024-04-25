const express = require('express')
const app = express()
<<<<<<< HEAD
const routes = require('./sever/src/routes')
=======
const routes = require('./src/routes')
>>>>>>> crud-visita

const PORT = 5000

app.use(express.json());
app.use(routes)


app.listen(PORT, () => {
<<<<<<< HEAD
    console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`);
=======
    console.log(`SERVIDOR RODANDO NA PORTA ${PORT}🚀`);
>>>>>>> crud-visita
})