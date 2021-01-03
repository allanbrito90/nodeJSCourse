/*
This program was used to test modules and how to write to a HTML page.

You need to download express first in order to run this program:
-In command prompt, type:
npm install express --save
-If doesn't work, type:
npm init -y 
and try again
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