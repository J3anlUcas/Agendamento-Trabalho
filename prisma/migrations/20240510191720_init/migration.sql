-- CreateTable
CREATE TABLE "tbl_clientes" (
    "id_cliente" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "razao_social" TEXT NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "tbl_vendedores" (
    "id_vendedor" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "data_inicio" DATETIME NOT NULL,
    "data_termino" DATETIME
);

-- CreateTable
CREATE TABLE "tbl_visitas" (
    "id_visita" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_visita" DATETIME NOT NULL,
    "assunto" TEXT,
    "proximo_passo" TEXT NOT NULL,
    "vendedor_id" INTEGER NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    CONSTRAINT "tbl_visitas_vendedor_id_fkey" FOREIGN KEY ("vendedor_id") REFERENCES "tbl_vendedores" ("id_vendedor") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tbl_visitas_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "tbl_clientes" ("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_clientes_razao_social_key" ON "tbl_clientes"("razao_social");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_clientes_nome_fantasia_key" ON "tbl_clientes"("nome_fantasia");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_clientes_cnpj_key" ON "tbl_clientes"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_clientes_email_key" ON "tbl_clientes"("email");
