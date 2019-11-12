var express = require('express');
var mysql = require('mysql');
var app = express();


var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database:'loja'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Conectado!");
    /*var sql = "INSERT INTO produto(Nome,Descricao,Fornecedor,Validade,Tipo,Estoque,Preco,PrecoCompra) values('macaVerde','vermelha','terra','1111-11-11',1,12,1.0,1.5);";
    con.query(sql, function (err, result) {
        if (err) throw err;
        //console.log("1 record inserted");
    });*/
    /*var sql = "DELETE FROM produto";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
    con.query("SELECT * FROM produto WHERE  Nome = 'maca'",function (err,result,fields) {
        if (err) throw err;
        if (result.length==0) {
            console.log("iiiiiih");
            }
    });*/
    /*var sql = "UPDATE produto SET Nome = 'Canyon 123' WHERE Nome = 'macaVerde'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });*/
});
    
//});
/*//alguma coisaFinanceiro
$(document).ready(function () {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3308,
        database: 'loja'
    });
    $('select.custom-select').change(function () {
        var OpcaoSelecionada = $(this).children("option:selected").val();
        con.query("SELECT * FROM financeiro", function (err, result, fields) {
            if (err) throw err;
            console.log(result[0]);
        });    
    }); 
   });*/
//app.listen(1337);
//CadProdutosRevenda

$(document).ready(function () {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3308,
        database: 'loja'
    });
    $('.btn btn-primary justify-content-end w-100').click(function () {//nao sei se eh assim que pega o botao
        var nome, fornecedor, validade, descricao, precoCompra, precoVenda, tipo=1;//tem que pegar as info nos campos tipo 1 indica Revenda
        con.query("SELECT * FROM produto WHERE  ((Nome ="+nome+")AND(Fornecedor="+fornecedor+")AND(Validade="+validade+"))", function (err, resultadoBusca, fields) {
            //verifica se o produto ja foi cadastrado
            if (err) throw err;
            if (resultadoBusca.length != 0) {//se nao foi cadastrado o retorno eh um vetor vazio
                var estoqueCompra;//quantidade nos campos
                var estoque = resultadoBusca[0].Estoque + estoqueCompra;//soma o valor no estoque com a quantidade nova
                var sql = "UPDATE produto SET Estoque =" + estoque + ",Preco=" + preco + ",PrecoCompra=" + precoCompra + "  WHERE idProduto =" + resultadoBusca[0].idProduto;
                //atualiza estoque preco
                con.query(sql, function (err, resultadoUpdate) {
                    if (err) throw err;
                    alert(" estoque atualizado");
                });
            }
            else {
                var sql = "INSERT INTO produto(Nome,Descricao,Fornecedor,Validade,Tipo,Estoque,Preco,PrecoCompra) values("+nome+","+descricao+","+fornecedor+","+validade+","+tipo+","+estoque+","+precoVenda+","+precoCompra+");";
                //insere o novo produto
                con.query(sql, function (err, resultadoInsereProduto) {
                    if (err) throw err;
                    alert("novo produto inserido");
                });
            }
        });
    });
*/
//CadProdutosMateriaPrima
/*
$(document).ready(function () {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3308,
        database: 'loja'
    });
    $('.btn btn-primary justify-content-end w-100').click(function () {//nao sei se eh assim que pega o botao
        var nome, fornecedor, validade, descricao, precoCompra, precoVenda, tipo=2;//tem que pegar as info nos campos tipo 2 indica o prodPrima
        con.query("SELECT * FROM produto WHERE  ((Nome ="+nome+")AND(Fornecedor="+fornecedor+")AND(Validade="+validade+"))", function (err, resultadoBusca, fields) {
            //verifica se o produto ja foi cadastrado
            if (err) throw err;
            if (resultadoBusca.length != 0) {//se nao foi cadastrado o retorno eh um vetor vazio
                var estoqueCompra;//quantidade nos campos
                var estoque = resultadoBusca[0].Estoque + estoqueCompra;//soma o valor no estoque com a quantidade nova
                var sql = "UPDATE produto SET Estoque =" + estoque + ",Preco=" + preco + ",PrecoCompra=" + precoCompra + "  WHERE idProduto =" + resultadoBusca[0].idProduto;
                //atualiza estoque preco
                con.query(sql, function (err, resultadoUpdate) {
                    if (err) throw err;
                    alert(" estoque atualizado");
                });
            }
            else {
                var sql = "INSERT INTO produto(Nome,Descricao,Fornecedor,Validade,Tipo,Estoque,Preco,PrecoCompra) values("+nome+","+descricao+","+fornecedor+","+validade+","+tipo+","+estoque+","+precoVenda+","+precoCompra+");";
                //insere o novo produto
                con.query(sql, function (err, resultadoInsereProduto) {
                    if (err) throw err;
                    alert("novo produto inserido");
                });
            }
        });
    });
*/
