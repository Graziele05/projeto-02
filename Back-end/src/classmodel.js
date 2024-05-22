const connection = require("../db.js");

export function read(callback) {
  connection.query("SELECT * FROM pessoas", callback);
}
export function create(
  nome,
  cpf,
  rg,
  datanascimento,
  telefone,
  email,
  nomepai,
  nomemae,
  callback
) {
  connection.query(
    "INSERT INTO pessoa (nome, cpf, rg, datanascimento, telefone, email, nomepai, nomemae) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
    [nome, cpf, rg, datanascimento, telefone, email, nomepai, nomemae],
    callback
  );
}
export function update(id, novosDados, callback) {
  connection.query(
    "Update pessoa set ? where id = ?",
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
