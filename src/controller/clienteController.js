const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createCliente = async (req, res) => {
    try {
        const { nomeSocial, nomeFantasia, cnpj, contato, telefone, email } = req.body;
        await prisma.cliente.create({
            data: {
                nomeSocial,
                nomeFantasia,
                cnpj,
                contato,
                telefone,
                email
            }
        });
        res.status(201).json("Cliente criado com sucesso");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.readCliente = async (req, res) => {
    try {
        const clientes = await prisma.cliente.findMany();
        res.status(200).json({ resultado: clientes });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { coluna, valor } = req.body;
        await prisma.cliente.update({
            where: { id: parseInt(id) },
            data: {
                [coluna]: valor
            }
        });
        res.status(200).send("Atualizado com sucesso");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.cliente.delete({ where: { id: parseInt(id) } });
        res.status(200).send("Delete bem sucedido");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
