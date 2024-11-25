
# API Simples com Express

Esta é uma API simples desenvolvida com Node.js e Express. A API permite gerenciar uma lista de tarefas com operações básicas de **CRUD** (Create, Read, Update, Delete). **Não possui validações avançadas** e é indicada apenas para aprendizado ou projetos iniciais.

## Funcionalidades

- **Listar todas as tarefas**: Retorna uma lista de tarefas.
- **Adicionar uma nova tarefa**: Adiciona uma nova tarefa à lista.
- **Atualizar uma tarefa**: Atualiza o nome de uma tarefa existente.
- **Excluir uma tarefa**: Remove uma tarefa da lista.

## Como executar

1. Certifique-se de ter o [Node.js](https://nodejs.org) instalado.
2. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
3. Acesse o diretório do projeto:
   ```bash
   cd nome-do-repositorio
   ```
4. Instale as dependências:
   ```bash
   npm install
   ```
5. Inicie o servidor:
   ```bash
   node app.js
   ```
6. O servidor estará disponível em `http://localhost:3000`.

## Endpoints

### 1. Listar todas as tarefas
**GET** `/tasks`  
**Descrição:** Retorna todas as tarefas cadastradas.

---

### 2. Adicionar uma nova tarefa
**POST** `/tasks`  
**Descrição:** Adiciona uma nova tarefa à lista.  
**Exemplo de corpo (JSON):**
```json
{
    "id": "1",
    "nome": "Minha primeira tarefa"
}
```

---

### 3. Atualizar uma tarefa
**PUT** `/tasks/:id`  
**Descrição:** Atualiza o nome de uma tarefa pelo ID.  
**Exemplo de corpo (JSON):**
```json
{
    "nome": "Tarefa atualizada"
}
```

---

### 4. Excluir uma tarefa
**DELETE** `/tasks/:id`  
**Descrição:** Remove uma tarefa pelo ID.

---

## Observações

- Esta API **não possui validações avançadas**.
- Foi desenvolvida apenas para fins de aprendizado.

## Tecnologias Utilizadas

- **Node.js**
- **Express**

## Como contribuir

1. Faça um fork deste repositório.
2. Crie uma branch com sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça o commit das suas alterações:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie para o seu fork:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

---

## Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar e modificar como desejar.
