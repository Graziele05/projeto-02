const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

app.use(express.json());
app.use(cors());

app.post('/CadastrarP', (req, res) => {
  const { nome, cpf, rg, datanascimento, telefone, email, nomepai, nomemae } = req.body;
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

  const sql = 'INSERT INTO pessoa (nome, cpf, rg, datanascimento, telefone, email, nomepai, nomemae) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(
    sql,
    [nome, cpf, rg, datanascimento, telefone, email, nomepai, nomemae],
    (error, results, fields) => {
      if (error) {
        console.error("Erro ao inserir dados:", error);
        res.status(500).send("Erro ao inserir dados");
        return;
      }
      console.log("Dados inseridos com sucesso.");
      res.status(200).send("Dados inseridos com sucesso");
    }
  );
});

app.listen(3000, () => {
  console.log(`Servidor rodando com sucesso na porta 3000`);
});
