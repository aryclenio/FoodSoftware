const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');


function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3308,
    database:'loja'
  });
 
  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}

//SELECIONA PRODUTO
router.get('/produto', (req, res) =>{
    execSQLQuery('SELECT * FROM produto', res);
})

//CADASTRA PRODUTO 
router.post('/produto', (req, res) =>{
    const nome = req.body.nome;
    const tipo = req.body.tipo;
    const desc = req.body.desc;
    const forn = req.body.forn;
    const val = req.body.val;
    const quant = req.body.quant;
    const v_compra = req.body.v_compra;
    const v_venda = req.body.v_venda;

    execSQLQuery(`INSERT INTO produto(Nome,Descricao,Fornecedor,Validade,Tipo,Estoque,Preco,PrecoCompra) values('${nome}','${desc}','${forn}','${val}','${tipo}', '${quant}', '${v_venda}', '${v_compra}')`, res);
})