# 📝 Projeto de Cadastro de Usuários com Express e MySQL

Este é um sistema simples de cadastro de usuários, desenvolvido com **Node.js**, **Express**, **Handlebars** e **MySQL**. O projeto permite realizar operações CRUD (Create, Read, Update, Delete) de forma eficiente.

---

## 📋 **Funcionalidades**

- 📌 **Cadastro** de novos usuários.  
- 📄 **Listagem** de todos os usuários cadastrados.  
- 🔍 **Visualização** de detalhes de um usuário específico.  
- ✏️ **Edição** das informações dos usuários.  
- 🗑️ **Exclusão** de usuários.  

---

## 🚀 **Tecnologias Utilizadas**

- **Node.js** - Ambiente de execução JavaScript no servidor.  
- **Express** - Framework web para Node.js.  
- **Handlebars** - Motor de templates para renderizar HTML.  
- **MySQL** - Banco de dados relacional.  
- **CSS** - Para estilização das páginas.  

---

## ⚙️ **Configuração do Projeto**

### **Pré-requisitos**

- **Node.js** instalado.  
- **MySQL** instalado e configurado.  
- Banco de dados `systemSQL` criado com a tabela `register`.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/EduardoBach/User_Management
   ```
 2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure o banco de dados: Abra o arquivo e ajuste as informações de conexão:**
   ```bash
   const conn = mysql.createConnection({
    host: 'IP_DO_SEU_BANCO',
    user: 'SEU_USUARIO',
    password: 'SUA_SENHA',
    database: 'systemSQL',});
   ```

 4. **Criação da tabela MySQL:**
   ```bash
   CREATE TABLE register (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    address VARCHAR(255)
);
```

## 🚀 **Executando o Projeto**
1. **Inicie o servidor:**
   ```bash
   npm start
   ```
2. **Acesse a aplicação no navegador:**
   ```bash
   http://localhost:3000
   ```
   
## 🌐 **Rotas Disponíveis**
- **GET /** - Página inicial
- **GET /register** - Lista todos os usuários cadastrados
- **GET /register/:id** - Mostra detalhes de um usuário específico
- **POST /register/insertuser** - Cadastra um novo usuário.
- **GET /register/edit/:id** - Carrega o formulário para editar um usuário
- **POST /register/updateuser** - Atualiza as informações de um usuário
- **POST /register/remove/:id** - Remove um usuário do banco de dados

 
