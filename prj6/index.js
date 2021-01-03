/*
This program is to test connection between Node JS and MySQL database.
I used the module called "Sequelize" so you must install it first using:

npm install --save sequelize

After that you must install which database you want to connect to.
You must do it because sequelize don't connect just to MySQL. Its connect to SQLite, MySQL, SQL Server and some others.

If you want to use with MySQL, type in Command Prompt:

npm install --save mysql2

Or if you want to use with SQLite, try:

npm install --save sqlite3

So, after doing that, you must initialize Sequelize with this parameters:
    -Database Name;
    -User;
    -Password;
    -Host;
    -Dialect; and
    -Port

If need to put your HOST's informations to test this program, so you need to install MySQL in your PC and after that, change the const's informations with your information.
*/
const DATABASE_NAME = "prj6";
const USER = "root";
const PASSWORD = "1234";
const HOST = "localhost";
const DIALECT = "mysql";
const PORT = 3306;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(DATABASE_NAME, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    port: PORT
});

//const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite

sequelize.authenticate().then(function(){
    console.log("Conexão realizada com Sucesso!");
}).catch(function(err){
    console.log("Erro na conexão:" + err);
});