/*
This project create a single server, don't show nothing at the page, but to see that the paging is online:

Run this project by access the project path and type:

node index.js

So, you must open your browser and type:

localhost:8081

The page won't fully load , it'll load forever, but this is a signal that the server is online.
This is a way to show that you don't need too much to create a server using NodeJS.
*/
let http = require("http");

http.createServer(function(){
    console.log("Teste de server");
}).listen(8081);