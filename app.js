const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public")); //deixar um diretorio publico para acesso das urls

const dir = __dirname + "/views/"

app.get("/", (req,res) => {

    res.sendFile(dir + "index.html");
    //console.log(req.body);
    

});

app.post("/", (req,res) => {
    let resposta = req.body;
    console.log(resposta);
    res.send("parabens!");
    
})


app.listen(3000, () => {
    
    console.log("on na porta 3000");
    
});