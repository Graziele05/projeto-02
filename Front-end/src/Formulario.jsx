import React, { useState, useEffect } from 'react';
import "./formulario.css";

function Formulario({ adicionarDados, dados, atualizarDado, editarIndex }) {
    const [formValores, setFormValores] = useState({
        nome: '',
        cpf: '',
        rg: '',
        datanascimento: '',
        telefone: '',
        email: '',
        nomepai: '',
        nomemae: ''
    });

    useEffect(() => {
        if (editarIndex !== null) {
            // Preenche o formulário com os dados do item em edição
            setFormValores(dados[editarIndex]);
        }
    }, [editarIndex, dados]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValores(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (editarIndex !== null) {
            atualizarDado(editarIndex, formValores);
        } else {
            adicionarDados(formValores);
        }

        // Limpa os campos do formulário após enviar
        setFormValores({
            nome: '',
            cpf: '',
            rg: '',
            datanascimento: '',
            telefone: '',
            email: '',
            nomepai: '',
            nomemae: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nome" value={formValores.nome} onChange={handleChange} placeholder="Nome" /> <br />
            <input type="text" name="cpf" value={formValores.cpf} onChange={handleChange} placeholder="CPF" /> <br />
            <input type="text" name="rg" value={formValores.rg} onChange={handleChange} placeholder="RG" /> <br />
            <input type="date" name="datanascimento" value={formValores.datanascimento} onChange={handleChange} placeholder="Data de Nascimento" /> <br />
            <input type="tel" name="telefone" value={formValores.telefone} onChange={handleChange} placeholder="Telefone" /> <br />
            <input type="email" name="email" value={formValores.email} onChange={handleChange} placeholder="E-mail" /> <br />
            <input type="text" name="nomepai" value={formValores.nomepai} onChange={handleChange} placeholder="Nome do Pai" /> <br />
            <input type="text" name="nomemae" value={formValores.nomemae} onChange={handleChange} placeholder="Nome da Mãe" /> <br />
    
            {/* Renderização condicional do texto do botão */}
            <button type="submit">{editarIndex !== null ? 'Atualizar' : 'Cadastrar'}</button>
        </form>
    );
}

export default Formulario;
