import React, { useState } from "react";
import Topo from "./Topo";
import Rodape from "./Rodape";
import "./App.css";

function App() {
  const [secaoAtual, setSecaoAtual] = useState("home");

  const cliqueSecao = (secao) => {
    setSecaoAtual(secao);
  };

  const resetarSecao = () => {
    setSecaoAtual("home");
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
            <li onClick={() => cliqueSecao("update")} className="button">
              Atualizar Cadastro
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


      {secaoAtual === 'create' && (
       <div className="tp">
        
         <button onClick={resetarSecao} className='back'>Voltar</button>

        
        </div>
      )}
    {secaoAtual === 'update' && (
          <div className="tp">
          <button onClick={resetarSecao} className='back'>Voltar</button>
          <br /><br />
            </div>
      
      )}
      
      {secaoAtual === 'view' && (
        <div className="tp">
          <button onClick={resetarSecao} className='back'>Voltar</button>
        </div>
      )}

        {secaoAtual === 'delete' && (
        <div className="tp">
          <button onClick={resetarSecao} className='back'>Voltar</button>
        </div>
      )}
      <Rodape />
    </div>
  );
}

export default App;
