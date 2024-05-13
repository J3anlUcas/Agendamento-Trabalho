const sql = require("mssql")
const config = require("../config/connection")

exports.createCliente = (req, res) => {

    let { nomeSocial, nomeFantasia, cnpj, contato, telefone, email } = req.body

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`insert into clientes values('${nomeSocial}','${nomeFantasia}','${cnpj}','${contato}','${telefone}','${email}')`, (erro) => {


            if (erro) { res.status(400).json({ error: erro }) }

            res.status(201).json("Cliente criado com sucesso")
        })

    })
}


exports.readCliente = (req, res) => {

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`select * from clientes`, (erro, result) => {

            if (erro) { res.status(500).json({ error: erro }) }

            console.log("read feito com sucesso")

            res.status(200).json({ resultado: result.recordset })

        })

    })
}


exports.updateCliente = (req, res) => {

    let { coluna, valor, id } = req.body

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`update clientes set ${coluna} = '${valor}' where id= '${id}'`, (erro) => {

            if (erro) { res.status(400) }

            res.status(200).send("atualizado com sucesso")

        })

    })
}




exports.deleteCliente = (req, res) => {

    var { id } = req.params

    sql.connect(config, async (err) => {



        if (err) { console.log("deu bosta") }


        sql.query(`delete from clientes where id = ${id}`, (erro) => {

            if (erro) { res.status(400).send("erro ao deletar") }


            res.status(200).send("delete bem sucedido")

        })

    })
}