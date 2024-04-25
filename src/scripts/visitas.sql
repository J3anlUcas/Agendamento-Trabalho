USE [AGENDAMENTO]
GO

/****** Object:  Table [dbo].[visitas]    Script Date: 12/04/2024 01:55:06 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[visitas](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[data] [date] NOT NULL,
	[vendedor_id] [int] NOT NULL,
	[cliente_id] [int] NOT NULL,
	[assunto] [varchar](250) NOT NULL,
	[proximo_passo] [varchar](20) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[visitas]  WITH CHECK ADD  CONSTRAINT [FK_visitas_clientes] FOREIGN KEY([cliente_id])
REFERENCES [dbo].[clientes] ([id])
GO

ALTER TABLE [dbo].[visitas] CHECK CONSTRAINT [FK_visitas_clientes]
GO

ALTER TABLE [dbo].[visitas]  WITH CHECK ADD  CONSTRAINT [FK_visitas_vendedores] FOREIGN KEY([vendedor_id])
REFERENCES [dbo].[vendedores] ([id])
GO

ALTER TABLE [dbo].[visitas] CHECK CONSTRAINT [FK_visitas_vendedores]
GO

ALTER TABLE [dbo].[visitas]  WITH CHECK ADD CHECK  (([proximo_passo]='encerrar_venda' OR [proximo_passo]='enviar_proposta' OR [proximo_passo]='marcar_nova_visita'))
GO


