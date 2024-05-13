const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createVendedor = async (req, res) => {
    try {
        const { nome, cpf, dataInicio } = req.body;
        await prisma.vendedor.create({
            data: {
                nome,
                cpf,
                dataInicio
            }
        });
        res.json("Vendedor criado com sucesso");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.readVendedor = async (req, res) => {
    try {
        const vendedores = await prisma.vendedor.findMany();
        res.status(200).json({ resultado: vendedores });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateVendedor = async (req, res) => {
    try {
        const { id } = req.params;
        const { coluna, valor } = req.body;
        await prisma.vendedor.update({
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

exports.deleteVendedor = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.vendedor.delete({ where: { id: parseInt(id) } });
        res.status(200).send("Delete bem sucedido");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
