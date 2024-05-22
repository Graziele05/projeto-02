import React, { useState } from "react";
import Topo from "./Topo";
import Rodape from "./Rodape";
import "./App.css";
import Formulario from "./Formulario";
import Dados from "./Dados";

function App() {
  const [secaoAtual, setSecaoAtual] = useState("home");
  const [dados, setDados] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(null);

  const cliqueSecao = (secao) => {
    setSecaoAtual(secao);
  };

  const resetarSecao = () => {
    setSecaoAtual("home");
  };

  const adicionarDados = (novoDado) => {
    setDados([...dados, novoDado]);
  };

  const removerDado = (index) => {
    const novosDados = [...dados];
    novosDados.splice(index, 1);
    setDados(novosDados);
  };

  const editarDado = (index) => {
    setEditandoIndex(index);
    setSecaoAtual("update");
  };

  const atualizarDado = (index, novoDado) => {
    const novosDados = [...dados];
    novosDados[index] = novoDado;
    setDados(novosDados);
    setEditandoIndex(null); 
    setSecaoAtual("view");
  };

  return (
    <div className="corpo">
      <Topo />
      <div>
        <nav>
          <ul>
            <li onClick={() => cliqueSecao("create")} className="button">
              Cadastrar
            </li>
            <li onClick={() => cliqueSecao("view")} className="button">
              Visualizar Cadastro
            </li>
            <li onClick={() => cliqueSecao("delete")} className="button">
              Deletar Cadastro
            </li>
          </ul>
        </nav>
      </div>

      {secaoAtual === "create" && (
        <div className="tp">
          <Formulario adicionarDados={adicionarDados} 
            editarIndex={editandoIndex}
            dados={dados}
            atualizarDado={atualizarDado}
            />
          <button onClick={resetarSecao} className="back">
            Voltar
          </button>
        </div>
      )}

      {secaoAtual === "update" && (
        <div className="tp">
          <Formulario
            adicionarDados={adicionarDados}
            editarIndex={editandoIndex}
            dados={dados}
            atualizarDado={atualizarDado}
          />
          <button onClick={resetarSecao} className="back">
            Voltar
          </button>
          <br />
          <br />
        </div>
      )}

      {secaoAtual === "view" && (
        <div className="tp">
          <Dados
            dados={dados}
            removerDado={removerDado}
            editarDado={editarDado}
          />
          <button onClick={resetarSecao} className="back">
            Voltar
          </button>
        </div>
      )}

      {secaoAtual === "delete" && (
        <div className="tp">
          <Dados
            dados={dados}
            removerDado={removerDado}
            editarDado={editarDado}
          />
          <button onClick={resetarSecao} className="back">
            Voltar
          </button>
        </div>
      )}
      <Rodape />
    </div>
  );
}

export default App;
