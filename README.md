##
<h1>Sistema de CRM :</h1>

Visão Geral

Este sistema de CRM em Javascript permite gerenciar visitas de vendedores a clientes potenciais. 
Ele possui funcionalidades CRUD para vendedores, clientes e visitas, além de uma rota para filtrar e listar visitas por período, 
cliente, vendedor ou próxima ação. As respostas da API são em JSON.

<h2>Modelos de Dados</h2>

**Vendedor**<br>
<b>id:</b> Número de identificação único <br>
<b>nome:</b> Nome do vendedor<br>
<b>cpf:</b> CPF do vendedor<br>
<b>data_inicio:</b> Data de início do contrato<br>
<b>data_termino:</b> Data de término do contrato<br>

**Cliente**  <br>
<b>id:</b>  Número de identificação único <br>
<b>razao_social: </b>Razão social do cliente <br>
<b>nome_fantasia: </b>Nome fantasia do cliente<br>
<b>cnpj:</b> CNPJ do cliente<br>
<b>contato:</b> Nome do contato no cliente<br>
<b>telefone:</b> Telefone do cliente<br>
<b>email:</b> Email do cliente<br>

**Visita**<br> 
<b>id:</b> Número de identificação único<br> 
<b>data:</b> Data da visita<br> 
<b>vendedor_id: </b>ID do vendedor<br> 
<b>cliente_id:</b> ID do cliente<br> 
<b>assunto:</b> Assunto da visita (máximo de 250 caracteres)<br> 
<b>proximo_passo:</b> Próxima ação a ser tomada (marcar nova visita, enviar proposta ou encerrar tentativa de venda)<br> 

##

**Funcionalidades**<br>

**CRUD para Vendedores:**<br>
<b>Criar vendedor:</b> Adiciona um novo vendedor ao sistema.<br>
<b>Ler vendedor:</b> Obtém um vendedor específico por ID.<br>
<b>Atualizar vendedor:</b> Atualiza as informações de um vendedor existente.<br>
<b>Excluir vendedor:</b> Remove um vendedor do sistema.<br>

**CRUD para Clientes:** <br>
<b>Criar cliente:</b> Adiciona um novo cliente ao sistema.<br>
<b>Ler cliente:</b> Obtém um cliente específico por ID ou CNPJ.<br>
<b>Atualizar cliente:</b> Atualiza as informações de um cliente existente.<br>
<b>Excluir cliente:</b> Remova um cliente do sistema.<br>


**CRUD para Visitas:**  <br>
<b>Criar visita:</b> Agendar uma nova visita para um vendedor a um cliente.<br>
<b>Ler visita: </b>Obtém uma visita específica por ID.<br>
<b>Atualizar visita:</b> Atualiza as informações de uma visita existente (data, vendedor, cliente, assunto ou próximo passo).<br>
<b>Excluir visita:</b> Cancelar uma visita agendada.<br>


**Listar Visitas:** <br>
Permite filtrar e listar visitas por período (data inicial e final), cliente (CNPJ), vendedor (CPF) ou próxima ação.<br>
A resposta da API é em JSON, contendo as seguintes informações para cada visita: <br>
<b>Cliente(s):</b> Razão social e nome fantasia do cliente.<br>
<b>Data: </b>Data da visita.<br>
<b>Vendedor:</b> Nome do vendedor.<br>
<b>Próximo passo:</b> Ação a ser tomada após a visita.<br>

##
<h2>Implementação</h2>
A implementação completa deste sistema de CRM envolveria a criação de diversas classes, funções e arquivos Javascript. Para fins de demonstração, apresentaremos um esboço geral da estrutura e lógica do código:<br>
<br>

**1. Arquivos:** <br>
* <b>crudVendedor.js:</b> Contém as querys / gerenciar vendedores (CRUD).<br>
* <b>crudClientes.js:</b> Contém as querys / gerenciar clientes (CRUD).<br>
* <b>crudVisitas.js:</b> Contém as querys /  gerenciar visitas (CRUD e filtro/listagem).<br>

* <b>vendedorController.js:</b> tratar bugs e erros.<br>
* <b>clienteController.js:</b> tratar bugs e erros.<br>
* <b>visitasController.js: </b>tratar bugs e erros.<br>
* <b>contratoController.js:</b> tratar bugs e erros.<br>

* <b>app.js:</b> Arquivo principal que integra os módulos de vendedores, clientes e visitas, inicia o servidor.<br>
* <b>routes.js: </b>define as rotas da API.<br>
##
**2. Arquivos sql:** <br>

<b>Vendedor:</b> Representa um vendedor, com atributos para seus dados<br>
<b>Cliente:</b> Representa um cliente, com atributos para seus dados <br>
<b>Visita: </b>Representa uma visita, com atributos para seus dados<br>
##
**3. Rotas da API:** <br>

<b>/vendedor:</b> Rota para gerenciar vendedores (CRUD).<br>
<b>/clientes:</b> Rota para gerenciar clientes (CRUD).<br>
<b>/visitas:</b> Rota para gerenciar visitas (CRUD e filtro/listagem).<br>
