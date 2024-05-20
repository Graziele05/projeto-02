import { create, read, update, deletePes } from './classmodel.js';

export async function createPessoaAsg(req, res) {
    const { nome, cpf, rg, datanascimento, telefone, email, nomepai, nomemae } = req.body;
    console.log('Dados recebidos do frontend:', { nome, cpf, rg, datanascimento, telefone, email, nomepai, nomemae });

    create(nome, cpf, rg, datanascimento, telefone, email, nomepai, nomemae, (err, result) => {
        if(err) {
            res.status(500).json({ error: err.message });
            return;
        }
res.status(201).json({ mensagem: 'Pessoa criada com sucesso' });
    });
}


//Realizando CONSULTA (READ)
export async function getAllAsg(req, res) {
    read((err, pessoas) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(pessoas);
    });
}

//Realizando ATUALIZAO (UPDATE)
export async function updateAsg(req, res) {
    const { id } = req.params;
    const novosDados = req.body;
    update(id, novosDados, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Pessoa atualizada com sucesso');
    });
}

//Realizando DELETE (UPDATE/INATIVANDO)
export async function deleteAsg(req, res) {
    const { id } = req.params;
    deletePes(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Pessoa excluída com sucesso');
    });
}