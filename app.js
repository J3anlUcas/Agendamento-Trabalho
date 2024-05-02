const express = require('express')
const app = express()
const path = require('path')

const routes = require('./src/routes')


const PORT = 5000

app.use(express.json());

app.set ('views', path.resolve(__dirname, './src/views'))
    
app.set ('view engine', 'ejs')

app.use(routes)


app.listen(PORT, () => {

    console.log(`SERVIDOR RODANDO NA PORTA ${PORT}🚀`);

})