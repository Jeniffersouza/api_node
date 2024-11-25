const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];

// Obter todas as tarefas
app.get('/tasks', (req, res) => { // http://localhost:3000/tasks
    res.json(tasks);
});

// Adicionar uma nova tarefa
app.post('/tasks', (req, res) => { // URL: http://localhost:3000/tasks

    const task = req.body;
    if (!task.id || !task.nome) {
        return res.status(400).json({ message: 'Task must have id and nome' });
    }
    tasks.push(task);
    res.json(task);
});


/**
Método: POST
Corpo (JSON):
{
    "id": "1",
    "nome": "Minha primeira tarefa",
    "prioridade": "alta"
}

 * 
 */

// Atualizar uma tarefa pelo id
app.put('/tasks/:id', (req, res) => { // URL: http://localhost:3000/tasks/:id
    const id = req.params.id;
    const updatedTask = req.body;
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, nome: updatedTask.nome };
        }
        return task;
    });
    res.json(updatedTask);
});

/**
URL: http://localhost:3000/tasks/:id
Método: PUT
Exemplo: Para atualizar a tarefa com id = 1, use:
URL: http://localhost:3000/tasks/1
Corpo (JSON)

{
    "nome": "Tarefa atualizada"
}

 
 */

// Excluir uma tarefa pelo id
app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;
    tasks = tasks.filter(task => task.id !== id);
    res.json({ message: 'Task deleted' });
});

/**
 * URL: http://localhost:3000/tasks/:id
Método: DELETE */

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
