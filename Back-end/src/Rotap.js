const express = require("express"); 
const app = express();
const cors = require("cors");
const connection = require('./db');
import { getAllPessoas, createPessoa, updatePessoa, deletePessoa } from "./pessoasController.js";

app.use(express.json());
app.use(cors());

app.get('/asg', getAllPessoas);
app.post('/asg', createPessoa); 
app.put('/asg/:id', updatePessoa);
app.delete('/asg/:id', deletePessoa);

app.listen(3000, () => {
});
console.log("Servidor rodando com sucesso na porta 3000");