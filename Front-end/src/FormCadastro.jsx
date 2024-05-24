import "./formulario.css";
import { useState } from "react";
function FormCadastro() {
  const [formValores, setFormValores] = useState({
    id: "",
    nome: "",
    cpf: "",
    rg: "",
    datanascimento: "",
    telefone: "",
    email: "",
    nomepai: "",
    nomemae: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValores((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formValores.nome, formValores.cpf);

    try {
      console.log("Dados a serem enviados:", formValores);
      const response = await fetch("http://localhost:3000/asg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formValores),
      });

      const json = await response.json();
      console.log(response);
      console.log(json); //alert(json.pessoa)
    } catch (err) {
      console.error("Erro ao enviar", err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
        <div className="fundo">
            <h2>Formulário</h2>
         <input
        type="text"
        name="nome"
        value={formValores.nome}
        onChange={handleChange}
        placeholder="Nome"
      />{" "}
      <br />
      <input
        type="text"
        name="cpf"
        value={formValores.cpf}
        onChange={handleChange}
        placeholder="CPF"
      />{" "}
      <br />
      <input
        type="text"
        name="rg"
        value={formValores.rg}
        onChange={handleChange}
        placeholder="RG"
      />{" "}
      <br />
      <input
        type="date"
        name="datanascimento"
        value={formValores.datanascimento}
        onChange={handleChange}
        placeholder="Data de Nascimento"
      />{" "}
      <br />
      <input
        type="tel"
        name="telefone"
        value={formValores.telefone}
        onChange={handleChange}
        placeholder="Telefone"
      />{" "}
      <br />
      <input
        type="email"
        name="email"
        value={formValores.email}
        onChange={handleChange}
        placeholder="E-mail"
      />{" "}
      <br />
      <input
        type="text"
        name="nomepai"
        value={formValores.nomepai}
        onChange={handleChange}
        placeholder="Nome do Pai"
      />{" "}
      <br />
      <input
        type="text"
        name="nomemae"
        value={formValores.nomemae}
        onChange={handleChange}
        placeholder="Nome da Mãe"
      />{" "}
      <br />
      <button type="submit" onClick={handleSubmit}>
        Cadastrar
      </button></div>
    </form>
  );
}
export default FormCadastro;
