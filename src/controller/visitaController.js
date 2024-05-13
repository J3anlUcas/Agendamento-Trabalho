const BD = require('../config/connection')

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


    var { filtro, valor, dataInicial, dataFinal } = req.query


    try {
        if (!filtro) {
            var resultado = await prisma.visitas.findMany()
            return res.json({ resultado })
        }


        switch (filtro) {

            case 'cnpj':
                var resultado = await prisma.visitas.findMany({
                    where: {
                        cliente: {
                            cnpj: valor
                        }
                    }
                })
                res.json(resultado)
                break;

            case 'cpf':
                var resultado = await prisma.visitas.findMany({
                    where: {
                        vendedor: {
                            cpf: valor
                        }
                    }
                })
                res.json(resultado)
                break;

            case 'periodo':
                var resultado = await prisma.visitas.findMany({
                    where: {
                        data_visita: {
                            lte: new Date(dataFinal), // "2022-01-30T00:00:00.000Z"
                            gte: new Date(dataInicial)
                        },
                    },
                });

                res.json(resultado)
                break;

            default:
                res.json({ "mensagem pra um pessimo usuario": "Olá seu jumento, vc não sabe inserir a poha de dado certo" })
                break;
        }

    } catch (err) {
        console.error("A conexão não foi efetuada: " + err)
    }


}

// ATUALIZAR VISITA
exports.atualizarVisita = async (req, res) => {
    let { coluna, valor, id } = req.body


    let update = await prisma.visitas.update({

        where:{id_visita : id},
        data:{[coluna] : valor}
       })
res.send("atualizado com sucesso")
  





exports.removerVisitas = async(req,res)=>{


    var id = req.params.id

    let deleteVisita = await prisma.visitas.delete({

        where : {id_visita : Number(id)}
}) 

res.send("deletado com sucesso")
}

}

