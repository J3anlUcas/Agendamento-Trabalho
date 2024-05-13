const BD =  require('../config/connection')
const sql =require('mssql')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


exports.cadastrarVisita = async (req, res) => {
    var { data_visita, id_cliente, id_vendedor, assunto, proximo_passo } = req.body

    console.log(req.body)
   let create = await prisma.visitas.create({

    data:{

        data_visita: new Date(data_visita),
        assunto : assunto,
        proximo_passo : proximo_passo,
        cliente_id : id_cliente,
        vendedor_id :id_vendedor

    }
    })
   
   res.send("cadastrado com sucesso")
}


// LISTAR VISITAS
exports.listarVisitas = async (req, res) => {

}

// ATUALIZAR VISITA
exports.atualizarVisita = async (req, res) => {

    let { coluna, valor, id } = req.body

    let update = await prisma.visitas.update({

        where:{id_visita : id},
        data:{[coluna] : valor}
       })
res.send("atualizado com sucesso")
  
}



exports.removerVisitas = async(req,res)=>{


    var id = req.params.id

    let deleteVisita = await prisma.visitas.delete({

        where : {id_visita : Number(id)}
}) 

res.send("deletado com sucesso")
}