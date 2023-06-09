import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Clients";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    cliente,
    clientes,
    novoCliente,
    selecionarCliente,
    salvarCliente,
    excluirCliente,
    tabelaVisisvel,
    exibirTabela,
  } = useClientes();

  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisisvel ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => exibirTabela}
          />
        )}
      </Layout>
    </div>
  );
}
