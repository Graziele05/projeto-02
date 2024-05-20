const express = require("express");
const app = express();
const cors = require("cors");
const CadastroP = require("./CadastroP");
const connection = require("./db");

app.use(express.json());
app.use(cors());

app.post('/CadastrarP', (req, res) => {
  const { nome, cpf, rg, datanascimento, telefone, email, nomepai, nomemae } =
    req.body;
  console.log("Dados recebidos", {
    nome,
    cpf,
    rg,
    datanascimento,
    telefone,
    email,
    nomepai,
    nomemae,
  });
  const sql =
    'INSERT INTO pessoa (nome, cpf, rg, datanascimento, telefone, email, nomepai, nomemae) VALUES (?,?,?,?,?,?,?,?)';
  connection.query(
    sql,
    [nome, rg, cpf, datanascimento, telefone, email, nomepai, nomemae],
    (error, results, fields) => {
      console.log("Dados inseridos com sucesso.");
    }
  );
});

app.listen(3000, () => {
  console.log(`Servidor rodando com sucesso 3000`);
});
