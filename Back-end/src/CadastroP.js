class CadastroP {
    constructor(nome, cpf, rg, datanascimento, telefone, email, nomepai, nomemae) {
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
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

    getCPF() {
        return this.cpf;
    }

    setCPF(novoCPF) {
        this.cpf = novoCPF;
    }

    getRG() {
        return this.rg;
    }

    setRG(novoRG) {
        this.rg = novoRG;
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
}

export default CadastroP;
