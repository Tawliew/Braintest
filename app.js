const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname + "/public")); //deixar um diretorio publico para acesso das urls

const l = __dirname + "/public/views/"

app.get("/", (req,res) => {

    res.sendFile(l + "index.html");
});


app.listen(3000, () => {
    
    console.log("on na porta 3000");
    
});