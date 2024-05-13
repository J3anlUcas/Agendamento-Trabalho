const express = require('express')
const route = express.Router()
const vendedores = require('./controller/vendedorController');
const clientes = require('./controller/clienteController');
const visitasController = require('./controller/visitaController')


//Rota para tabela CLIENTE
// route.post("/cliente", clientes.createCliente)       // OK 
// route.get("/clientes", clientes.readCliente)         // OK 
// route.put("/cliente", clientes.updateCliente)        // OK 
// route.delete("/cliente/:id", clientes.deleteCliente) // OK 



// //Rota para tabela VENDEDOR
// route.post("/vendedor", vendedores.createVendedor)       // OK 
// route.get("/vendedores", vendedores.readVendedor)        // OK 
// route.put("/vendedor", vendedores.updateVendedor)        // OK 
// route.delete("/vendedor/:id", vendedores.deleteVendedor) // OK 


//ROTA para tabela VISITAS

route.post('/visita', visitasController.cadastrarVisita)      // ERRO
route.get('/visitas', visitasController.listarVisitas)        // OK 
route.put('/visita', visitasController.atualizarVisita)       // OK 
route.delete('/visita/:id', visitasController.removerVisitas)  // OK 



module.exports = route