const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public")); //deixar um diretorio publico para acesso das urls

const dir = __dirname + "/views/"
const wrongPage = dir + "wrong.html";

/* PROTOCOLOS GETS */
app.get("/", (req,res) => {

    res.sendFile(dir + "index.html");
    //console.log(req.body);
    
});

app.get("/q1", (req,res) => {
    res.sendFile(dir + "question1.html");
});

app.get("/q2", (req,res) => {
    res.sendFile(dir + "question2.html");
});




/* PROTOCOLOS POSTS */
app.post("/", (req,res) => {
    const resposta = req.body.resp;
    console.log(resposta);
    if (resposta == "petrus" || resposta == "Petrus") {
        res.redirect("/q1");
    }
    else {
        res.sendFile(wrongPage);
    }
    
});

app.post("/q1", (req,res) => {
    const resposta = req.body.resp;
    console.log(resposta);
    if (resposta == "Dxf7" || resposta == "Dxf7#") {
        res.redirect("/q2");
    }
    else {
        res.sendFile(wrongPage);
    }
});

app.post("/q2", (req,res) => {
    const resposta = req.body.resp;
    console.log(resposta);
    if (resposta == "makesureyouwanttocontinue") {
        res.redirect("/");
    }
    else {
        res.sendFile(wrongPage);
    }
    
});


app.listen(process.env.PORT || port, () => console.log("Server up on port: " + port));