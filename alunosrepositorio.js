const { v4: uuidv4 } = require('uuid');

// Armazenar os dados dos alunos
let alunos = [];

// Ciar um novo aluno
function create({ nome, email, nome_curso }) {
    const aluno = {
        id: uuidv4(),
        nome,
        email,
        nome_curso
    };
    alunos.push(aluno);
    return aluno;
}

// Mostrar todos os alunos
function findAll() {
    return alunos;
}

// Encontrar um aluno específico pelo ID
function findById(id) {
    return alunos.find(aluno => aluno.id === id);
}

// Comando para atualizar um aluno existente
function update(id, { nome, email, nome_curso }) {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index === -1) {
        return null;
    }
    alunos[index] = {
        id,
        nome,
        email,
        nome_curso
    };
    return alunos[index];
}

// Remover um aluno pelo ID
function remove(id) {
    const index = alunos.findIndex(aluno => aluno.id === id);
    if (index === -1) {
        return false;
    }
    alunos.splice(index, 1);
    return true;
}

// Exporta as funções para uso em outros módulos
module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
};
