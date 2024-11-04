const express = require('express');
const controle_aluno = require('./controle_aluno');

const app = express();
app.use(express.json());

app.post('/alunos', (req, res) => {
    const aluno = controle_aluno.create(req.body);
    res.status(201).json(aluno);
});

app.get('/alunos', (req, res) => {
    const alunos = controle_aluno.findAll();
    res.json(alunos);
});

app.get('/alunos/:id', (req, res) => {
    const aluno = controle_aluno.findById(req.params.id);
    if (aluno) {
        res.json(aluno);
    } else {
        res.status(404).json({ error: 'Aluno não encontrado' });
    }
});

app.put('/alunos/:id', (req, res) => {
    const aluno = controle_aluno.update(req.params.id, req.body);
    if (aluno) {
        res.json(aluno);
    } else {
        res.status(404).json({ error: 'Aluno não encontrado' });
    }
});

app.delete('/alunos/:id', (req, res) => {
    const success = controle_aluno.remove(req.params.id);
    if (success) {
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Aluno não encontrado' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
