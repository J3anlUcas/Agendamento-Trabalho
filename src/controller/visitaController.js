const BD = require('../config/connection')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

exports.cadastrarVisita = async (req, res) => {
    var { data, contato, vendedor, assunto, proximo_passo } = req.body

    try {

        res.json("visita marcada")
    }

    //CASO O BANCO NÃO CONECTAR, APARECERÁ ESSE ERRO
    catch {
        res.json("Vendedor indisponivel")
    }

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



    res.status(200).send("atualizado com sucesso")
}

// CANCELAR VISITA

exports.removerVisita = async (req, res) => {
    var { id } = req.params


    try {

        res.send("Visita desmarcada")
    } catch (err) {
        console.error("A conexão não foi efetuada: " + err)
    }

}
