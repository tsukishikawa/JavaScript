// Objetos
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,


    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();


/*function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade    
    };
}


const pessoa1 = criaPessoa('Luiz', 'Miranda', 25)
const pessoa2 = criaPessoa('Maria', 'Oliveira', 30)
const pessoa3 = criaPessoa('João', 'Moreira', 27)
const pessoa4 = criaPessoa('Junior', 'Silva', 43)

console.log(pessoa1.nome, pessoa1.sobrenome); */
