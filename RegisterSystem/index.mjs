import express from "express";
import { engine } from "express-handlebars";
import mysql from "mysql"
import dotenv from 'dotenv';

const app = express()

// configurando para pegar o body

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.engine('handlebars', engine());
app.set('view engine', 'handlebars')

app.use(express.static('public'))

// rota inicial

app.get('/', (req, res) => {
    res.render('home');
});

// Fazer a rota para inserir os usuarios

app.post('/register/insertuser', (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;

    const sql = `INSERT INTO register (name, email, phone, address) VALUES ('${name}', '${email}','${phone}','${address}')`

    conn.query(sql, function(err){
        if (err) {
            console.log(err)
        }
        res.redirect('/')
    })
})

// resgatar os dados inseridos na tabela

app.get('/register', (req,res)=> {
    const sql = "SELECT * FROM register"

    conn.query(sql, function (err,data){
        if (err) {
            console.log(err)
            return
        }
        const register = data

        res.render('register', {register})
    })
})

// fazer o resgate de certos usuarios

app.get('/register/:id', (req,res) => {
    const id = req.params.id

    const sql = `SELECT * FROM register WHERE id = ${id}`

    conn.query(sql, function(err,data){
        if (err) {
            console.log(err)
            return
        }

        const user = data[0]

        res.render('user', {user} )
    })
})

// prenchendo dados para editar

app.get('/register/edit/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM register WHERE id = ${id}`

    conn.query(sql, function(err,data){
        if (err) {
            console.log(err)
            return
        }

        const useredit = data[0]

        res.render('edituser', { useredit })
    })
})

// publicar esses dados editados

app.post('/register/updateuser', (req,res) => {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;

    const sql = `UPDATE register SET name = '${name}', email = '${email}', phone = '${phone}',
    address = '${address}' WHERE id = '${id}'`

    conn.query(sql, function(err) {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/register')
    })
})

// excluir dados

app.post('/register/remove/:id', (req,res)=> {
    const id = req.params.id

    const sql = `DELETE FROM register WHERE id = ${id}`

    conn.query(sql, function(err){
        if (err) {
            console.log(err)
            return
        }
        
        res.redirect('/register')
    })
})

// Carregar as variáveis do arquivo .env
dotenv.config();

// Criar a conexão com o MySQL
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

// Conectar ao MySQL
conn.connect(function (err) {
    if (err) {
        console.error("Erro ao conectar ao MySQL:", err);
    } else {
        console.log("Conectado ao MySQL!");

        // Iniciar o servidor Express somente após a conexão com o MySQL
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000");
        });
    }
});