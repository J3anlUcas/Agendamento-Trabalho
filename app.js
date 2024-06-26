const express = require('express')
const routes = require('./src/routes')
const app = express()

const PORT = 5000

app.use(express.json());
app.use(routes)


app.listen(PORT, () => {
    console.log(`SERVIDOR RODANDO NA PORTA ${PORT}🚀`);
})