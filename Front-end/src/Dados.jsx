import React from 'react';
import "./dados.css";

function Dados({ dados, removerDado, editarDado }) {
    return (
        <div className="dados-container">
            <h2>Dados Cadastrados</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>Data de Nascimento</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>Nome do Pai</th>
                        <th>Nome da Mãe</th>
                        <th>Ações</th>
                    </tr>
                    {dados.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nome}</td>
                            <td>{item.cpf}</td>
                            <td>{item.rg}</td>
                            <td>{item.datanascimento}</td>
                            <td>{item.telefone}</td>
                            <td>{item.email}</td>
                            <td>{item.nomepai}</td>
                            <td>{item.nomemae}</td>
                            <td>
                                <button onClick={() => editarDado(index)}>Editar</button>
                                <button onClick={() => removerDado(index)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dados;
