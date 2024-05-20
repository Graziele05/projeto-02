class CadastroPessoa {
    constructor(nome, cpf, datanascimento, telefone, email, nomepai, nomemae) {
        this.nome = nome;
        this.cpf = cpf;
        this.datanascimento = datanascimento;
        this.telefone = telefone;
        this.email = email;
        this.nomepai = nomepai;
        this.nomemae = nomemae;
    }

    getNome() {
        return this.nome;
    }

    setNome(novoNome) {
        this.nome = novoNome;
    }

    getDataNascimento() {
        return this.datanascimento;
    }

    setDataNascimento(novaDataNascimento) {
        this.datanascimento = novaDataNascimento;
    }

    getTelefone() {
        return this.telefone;
    }

    setTelefone(novoTelefone) {
        this.telefone = novoTelefone;
    }

    getEmail() {
        return this.email;
    }

    setEmail(novoEmail) {
        this.email = novoEmail;
    }

    getNomePai() {
        return this.nomepai;
    }

    setNomePai(novoNomePai) {
        this.nomepai = novoNomePai;
    }

    getNomeMae() {
        return this.nomemae;
    }

    setNomeMae(novoNomeMae) {
        this.nomemae = novoNomeMae;
    }

    getCPF() {
        return this.cpf;
    }

    setCPF(novoCPF) {
        this.cpf = novoCPF;
    }

    getIdade() {
        const hoje = new Date();
        const nascimento = new Date(this.datanascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }
        return idade;
    }
}

export default CadastroPessoa;
