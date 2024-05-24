import { useState } from "react";
import Topo from "./Topo";
import Rodape from "./Rodape";
import "./App.css";
import Ler from "./FormLeitura";
import Cadastro from "./FormCadastro";
import Atualiza from "./FormAtualiza";
import Delete from "./FormDeleta";

const App = () => {
const [currentPage, setCurrentPage] = useState(null);
const renderPage = () => {
switch (currentPage) {
case 'create':
return <Cadastro />;
case 'read':
return <Ler />;
case 'update':
return <Atualiza />;
case 'delete':
return <Delete />;
default:
return null;
}
};
  return (
    <div className="corpo">
      <Topo />
      
<center>
<button className="button" onClick={() => setCurrentPage('create')}> Cadastrar (C)
</button>
<button className="button" onClick={() => setCurrentPage('read')}>   Ler dados (R)
</button>
<button className="button" onClick={() => setCurrentPage('update')}>  Atualizar (U)
</button>
<button className="button" onClick={() => setCurrentPage('delete')}> Deletar (D)
</button>
      {renderPage()}
      </center>
      <Rodape />
    </div>
  );
};
export default App;
