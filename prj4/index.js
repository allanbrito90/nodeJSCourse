/*
É preciso instalar o módulo do express primeiro:
-No prompt de comando, digite:
npm install express --save
-Caso não funcione, digite:
npm init -y 
e depois tente novamente
*/
const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Hello World")
});

app.get("/pagina1", function(req,res){
    res.send("Entrou na Página 1");
});

app.get("/teste/:nome", function(req,res){
    res.send ("Welcome to the Test Page " + req.params.nome)
})

app.listen(8081, function(){console.log("Servidor Iniciado")});