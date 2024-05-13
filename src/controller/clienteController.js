const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


 exports.createCliente = async(req,res)=>{

    let { razaoSocial, nomeFantasia, cnpj, contato, telefone, email } = req.body
    
    let newCliente = await prisma.cliente.create({

//bla
        data : {

            razao_social : razaoSocial,
            nome_fantasia :nomeFantasia,
            cnpj : cnpj,
            contato: contato,
            telefone: telefone,
            email : email

        }
    })

    res.send("cliente criado com sucesso")

}

exports.readCliente = async(req, res) => {

    let showclientes = await prisma.cliente.findMany()

    res.send(showclientes)
}


exports.updateCliente = async(req, res) => {

    let { coluna, valor, id } = req.body

    console.log(req.body)
    let updateColumn = await prisma.cliente.update({

        where: {id_cliente : id},
        

        data:{[coluna] : valor}
        })

        res.json(updateColumn)

    }


exports.deleteCliente = async (req, res) => {

    var { id } = req.params

    let delCliente = await prisma.cliente.delete({

        where: {id_cliente : Number(id)},
    })

    res.send("deletado com sucesso")

}