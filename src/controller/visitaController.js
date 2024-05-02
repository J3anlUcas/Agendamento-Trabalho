const BD = require('../config/connection')
const sql = require('mssql')

// MARCAÇÃO DE VISITA
exports.cadastrarVisita = async (req, res) => {
    var { data, contato, vendedor, assunto, proximo_passo } = req.body

    sql.connect(BD, async err => {

        try {
            const requisicao = new sql.Request()

            // PEGANDO O ID DO CLIENTE

            const strSQLContato = `SELECT * FROM clientes WHERE contato = '${contato}' `
            const resultContato = await requisicao.query(strSQLContato)
            var id = await resultContato.recordset[0].id

            // PEGANDO O ID DO VENDEDOR E TESTANDO SE ELE ESTA DEMITIDO

            const strSQLnome = `SELECT * FROM vendedores WHERE nome = '${vendedor}' AND data_termino IS NULL`
            const resultNome = requisicao.query(strSQLnome)
            var idVendedor = (await resultNome).recordset[0].id

            const strSQL = `INSERT INTO visitas (data, vendedor_id, cliente_id, assunto, proximo_passo)
                VALUES('${data}','${idVendedor}','${id}','${assunto}','${proximo_passo}')`
            requisicao.query(strSQL)
            
            res.json("visita marcada")

        }

        //CASO O BANCO NÃO CONECTAR, APARECERÁ ESSE ERRO
        catch {
            res.json("Vendedor indisponivel")
        }
    })
}


// LISTAR VISITAS
exports.listarVisitas = async (req, res) => {

    var { filtro, valor, dataInicial, dataFinal } = req.query

    let dados;

    sql.connect(BD, async err => {
        const requisicao = new sql.Request()

        try {
            if (!filtro) {

                // APRENTA TODAS AS VISITAS CASO NÃO SEJA BUSCADO ALGUMA ESPECIFICA

                var strSQLlistarAll = `SELECT dbo.visitas.id, dbo.vendedores.nome, dbo.clientes.contato, dbo.visitas.assunto, dbo.visitas.proximo_passo
                FROM dbo.vendedores INNER JOIN (dbo.clientes INNER JOIN dbo.visitas ON dbo.clientes.id = dbo.visitas.cliente_id) ON dbo.vendedores.id = dbo.visitas.vendedor_id;
        
            `
                var execucao = await requisicao.query(strSQLlistarAll)
                var resultado = execucao.recordset

                return res.json({ resultado })
            }


            switch (filtro) {


                case 'cnpj':

                    var strSQLlistarAll = `SELECT c.nome_fantasia as nome_cliente, v.data, ve.nome as nome_vendedor, v.proximo_passo FROM visitas v JOIN clientes c ON v.cliente_id = c.id JOIN vendedores ve ON v.vendedor_id = ve.id where c.cnpj = ${valor}`
                    var execucao = await requisicao.query(strSQLlistarAll)
                    var resultado = execucao.recordset
                    
                    dados = {resultado : resultado}
                    
                    
                    res.render('relatorio', dados)

                    break;

                case 'cpf':

                    var strSQLlistarAll = `SELECT c.nome_fantasia as nome_cliente, v.data, ve.nome as nome_vendedor, v.proximo_passo FROM visitas v JOIN clientes c ON v.cliente_id = c.id JOIN vendedores ve ON v.vendedor_id = ve.id where c.cpf = ${valor}`
                    var execucao = await requisicao.query(strSQLlistarAll)
                    var resultado = execucao.recordset
                    
                    
                    dados = {resultado : resultado}
                    
                    
                    res.render('relatorio', dados)


                    break;

                case 'periodo':
                    var strSQLlistarAll = `SELECT c.nome_fantasia as nome_cliente, v.data, ve.nome as nome_vendedor, v.proximo_passo FROM visitas v JOIN clientes c ON v.cliente_id = c.id JOIN vendedores ve ON v.vendedor_id = ve.id where v.data between '${dataInicial}' and '${dataFinal}' `
                    var execucao = await requisicao.query(strSQLlistarAll)
                    var resultado = execucao.recordset
                    
                    dados = {resultado : resultado}
                    
                    
                    res.render('relatorio', dados)

                    break;


                    case 'proximopasso':

                    var strSQLlistarAll = `SELECT c.nome_fantasia as nome_cliente, v.data, ve.nome as nome_vendedor, v.proximo_passo FROM visitas v JOIN clientes c ON v.cliente_id = c.id JOIN vendedores ve ON v.vendedor_id = ve.id where v.proximo_passo = '${valor}'`
                    var execucao = await requisicao.query(strSQLlistarAll)
                    var resultado = execucao.recordset
                    
                    
                    dados = {resultado : resultado}
                    
                    
                    res.render('relatorio', dados)

                    break



                default:
                    res.json({ "mensagem pra um pessimo usuario": "Olá seu jumento, vc não sabe inserir a poha de dado certo" })
                    break;
            }

        } catch (err) {
            console.error("A conexão não foi efetuada: " + err)
        }
    })
}

// ATUALIZAR VISITA
exports.atualizarVisita = async (req, res) => {

    let { coluna, valor, id } = req.body

    sql.connect(BD, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`update visitas set ${coluna} = '${valor}' where id = ${id}`, (erro) => {

            if (erro) { res.status(400) }

            res.status(200).send("atualizado com sucesso")

        })

    })
}

// CANCELAR VISITA

exports.removerVisita = async (req, res) => {
    var { id } = req.params

    sql.connect(BD, err => {
        try {
            const requisicao = new sql.Request()
            let strSQLID = `DELETE FROM visitas WHERE id = ${id}`
            requisicao.query(strSQLID)
            res.send("Visita desmarcada")
        } catch (err) {
            console.error("A conexão não foi efetuada: " + err)
        }
    })
}
