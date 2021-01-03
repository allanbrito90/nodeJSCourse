const Sequelize = require("sequelize");
const sequelize = new Sequelize("prj6", "root", "1234", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

//const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite

sequelize.authenticate().then(function(){
    console.log("Conexão realizada com Sucesso!");
}).catch(function(err){
    console.log("Erro na conexão:" + err);
});