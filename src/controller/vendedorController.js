const sql = require("mssql")
const config = require("../config/connection")

exports.createVendedor = (req, res) => {

    let { nome, cpf, dataInicio } = req.body

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`insert into vendedores (nome, cpf, data_inicio) values('${nome}','${cpf}','${dataInicio}')`)

            res.json("vendedor criado com sucesso")
        })

}


exports.readVendedor = (req, res) => {

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`select * from vendedores`, (erro, result) => {

            if (erro) { res.status(500).json({ error: erro }) }

            console.log("read feito com sucesso")

            res.status(200).json({ resultado: result.recordset })

        })

    })
}


exports.updateVendedor = (req, res) => {

    let { coluna, valor, id } = req.body

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`update vendedores set ${coluna} = '${valor}' where id = ${id}`, (erro) => {

            if (erro) { res.status(400) }

            res.status(200).send("atualizado com sucesso")

        })

    })
}




exports.deleteVendedor = (req, res) => {

    var { id } = req.params

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta") }


        sql.query(`delete from vendedores where id = '${id}'`, (erro) => {

            if (erro) { res.status(400).send("erro ao deletar") }


            res.status(200).send("delete bem sucedido")

        })

    })
}