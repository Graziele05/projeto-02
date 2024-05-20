const connection = require("../db.js");

export function read(callback) {
  connection.query("SELECT * FROM pessoas", callback);
}
export function create(
  nome,
  rg,
  cpf,
  datanascimento,
  telefone,
  email,
  nomepai,
  nomemae,
  callback
) {
  connection.query(
    "INSERT INTO pessoas (nome, rg, cpf, datanascimento, telefone, email, nomepai, nomemae) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
    [nome, rg, cpf, datanascimento, telefone, email, nomepai, nomemae],
    callback
  );
}
export function update(id, novosDados, callback) {
  connection.query(
    "Update pessoas set ? where id = ?",
    [novosDados, id],
    callback
  );
}

export function deletePessoa(id, callback) {
  connection.query(
    "UPDATE pessoa set ativo_pessoa = 0 where id = ?",
    [id],
    callback
  );
}
