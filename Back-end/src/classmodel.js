import connection from "./db.js";

export function read(callback) {
  connection.query('SELECT * from pessoas where ativo_asg = 1', callback);
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
    'INSERT INTO pessoa (nome, cpf, rg, datanascimento, telefone, email, nomepai, nomemae) VALUES(?, ?, ?, ?, ?, ?, ?, ?)', [nome,cpf,rg,datanascimento,telefone,email,nomepai,nomemae], callback);
}
export function update( nome, cpf, rg, datanascimento, telefone, email, nomepai, nomemae, id, novosDados, callback) {
  connection.query('Update pessoa set nome= ?, cpf= ?, rg = ?, datanascimento = ?, telefone = ?, email = ?, nomepai = ?, nomemae = ?, ativa_pessoa = 1 WHERE id_asg',[nome, cpf, rg, datanascimento, telefone, email, nomepai, nomemae, id], callback);
}

export function deletePes(id, callback) {
  connection.query('DELETE from pessoa where id_asg = ?',[id],callback);
}
