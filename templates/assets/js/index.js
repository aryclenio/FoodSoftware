const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');
let usuario = {
  nome: "",
  funcao: ""
}
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
      console.log('Consulta no Banco Realizada');
  });
}

//---------------------------------SELECIONA PRODUTO--------------------------------------------
router.get('/produto', (req, res) =>{
    execSQLQuery('SELECT * FROM produto', res);
})

router.get('/produto/:id?', (req, res) =>{
  let filter = '';
  if(req.params.id) filter = ' WHERE idProduto=' + parseFloat(req.params.id);
  execSQLQuery('SELECT * FROM produto' + filter, res);
})

router.get('/produto/busca/:id?', (req, res) =>{
  let filter = '';
  if(req.params.id) filter = ' WHERE Tipo=' + parseInt(req.params.id);
  execSQLQuery('SELECT * FROM produto' + filter, res);
})

//----------------------------------CADASTRA PRODUTO-------------------------------------------
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
//cad materia prima
router.post('/produtoprima', (req, res) => {
    console.log("aqui");
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
//cadastrar Manufatura
router.post('/produto/manufatura', (req, res) => {
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
//Procurar Manufatura
router.get('/produto/manufatura/:nome?', (req, res) => {
    let filter = '';
    if (req.params.nome) {
        filter = `WHERE Nome = '${req.params.nome}'`;
        execSQLQuery('SELECT * FROM produto ' + filter, res);
    }
})

//-----------------------------------LOGIN DE FUNCIONÁRIO-------------------------------------
router.get('/funcionario/:email?', (req, res) =>{
  let filter = '';
  if(req.params.id) filter = ' WHERE Email=' + parseInt(req.params.email);
  execSQLQuery('SELECT * FROM funcionario' + filter, res);
})
//-----------------------------------CADASTRA FUNCIONÁRIO-------------------------------------
router.post('/funcionario', (req, res) =>{
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const sal = req.body.sal;
  const user = req.body.user;
  const email = req.body.email;
  const senha = req.body.senha;
  const func = req.body.func;

  execSQLQuery(`INSERT INTO funcionario(Nome,CPF,Funcao,Salario,Login,Email,Senha, PrioridadeSistema) values('${nome}','${cpf}','${func}','${sal}','${user}','${email}', '${senha}', 1)`, res);
})

//------------------------------LOGIN DE FUNCIONARIO----------------------------------
router.post('/usuario', (req, res) =>{
  usuario.nome = req.body.nome;
  usuario.funcao = req.body.funcao;
})
router.get('/usuario', (req, res) =>{
  res.send(usuario);
})

//------------------------------CADASTRO DE VENDA--------------------------------------
router.post('/venda', (req, res) =>{
  const data = req.body.data;
  const desc = req.body.desc;
  const val = req.body.val;
  const valCompra = req.body.valCompra;

  execSQLQuery(`INSERT INTO venda(dataVenda,descricaoPagamento,ValorTotal,GastoTotal) values('${data}','${desc}','${val}', '${valCompra}')`, res);
})

//----------------------------CALCULOS DO FINANCEIRO--------------------------------------
router.get('/financeiro/total', (req, res) =>{
  execSQLQuery('SELECT SUM(GastoTotal) AS tot_gasto, COUNT(*) AS tot_venda, SUM(ValorTotal) AS tot_ganho FROM venda', res);
})

router.get('/financeiro/dia/:id?', (req, res) =>{
  let filter = '';
  if(req.params.id) filter = ` WHERE dataVenda LIKE '%${req.params.id}'`;
  execSQLQuery('SELECT SUM(GastoTotal) AS dat_gasto, COUNT(*) AS dat_venda, SUM(ValorTotal) AS dat_ganho FROM venda' + filter, res);
})

router.get('/financeiro/data/:id?', (req, res) =>{
  let filter = '';
  if(req.params.id) filter = ` WHERE dataVenda LIKE '${req.params.id}%'`;
  execSQLQuery('SELECT SUM(GastoTotal) AS dat_gasto, COUNT(*) AS dat_venda, SUM(ValorTotal) AS dat_ganho FROM venda' + filter, res);
})

