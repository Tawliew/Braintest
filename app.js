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
});
app.get("/q1", (req,res) => {
    res.sendFile(dir + "question1.html");
});
app.get("/q2", (req,res) => {
    res.sendFile(dir + "question2.html");
});
app.get("/q3", (req,res) => {
    res.sendFile(dir + "question3.html");
});
app.get("/q4", (req,res) => {
    res.sendFile(dir + "question4.html");
});
app.get("/q5", (req,res) => {
    res.sendFile(dir + "question5.html");
});
app.get("/q6", (req,res) => {
    res.sendFile(dir + "question6.html");
});
app.get("/q7", (req,res) => {
    res.sendFile(dir + "question7.html");
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
        res.redirect("/q3");
    }
    else {
        res.sendFile(wrongPage);
    } 
});

app.post("/q3", (req,res) => {
    const resposta = req.body.resp;
    console.log(resposta);
    if (resposta == "wuhan") {
        res.redirect("/q4");
    }
    else {
        res.sendFile(wrongPage);
    }
});

app.post("/q4", (req,res) => {
    const resposta = req.body.resp;
    console.log(resposta);
    if (resposta == "richard burr") {
        res.redirect("/q5");
    }
    else {
        res.sendFile(wrongPage);
    }
});

app.post("/q5", (req,res) => {
    const resposta = req.body.resp;
    console.log(resposta);
    if (resposta == "tedros") {
        res.redirect("/q6");
    }
    else {
        res.sendFile(wrongPage);
    }
});

app.post("/q6", (req,res) => {
    const resposta = req.body.resp;
    console.log(resposta);
    if (resposta == "tedros") {
        res.redirect("/q7");
    }
    else {
        res.sendFile(wrongPage);
    }
});

app.post("/q7", (req,res) => {
    const resposta = req.body.resp;
    console.log(resposta);
    if (resposta == "tedros") {
        res.redirect("/q8");
    }
    else {
        res.sendFile(wrongPage);
    }
});


app.listen(process.env.PORT || port, () => console.log("Server up on port: " + port));