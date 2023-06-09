const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors") 

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"123123",
    database: "projeto_mobile",
    port: 3307
})
///pag de anotacoes
app.post("/anotar",(req, res) => {
    const { anotacao } = req.body;
    let SQL = "INSERT INTO anotacoes (texto) VALUES (?)"
    db.query(SQL,anotacao,(err,result)=>{
        console.log(err);
    })
});

app.get("/anotacoes",(req,res) => {

  let SQL = "select * from anotacoes";

  db.query(SQL, (err, result) => {
      if(err) console.log(err);
      else res.send(result);
  })
});

/// pag de agenda

app.post("/agendar", (req, res) => {
  const { hora, tarefa } = req.body;
  let SQL = "INSERT INTO lista (hora, tarefa) VALUES (?, ?)";
  db.query(SQL, [hora, tarefa], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao inserir tarefa na lista");
    } else {
      res.send(result);
    }
  });
});

app.get("/agenda",(req,res) => {

    let SQL = "select * from lista";

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
});

app.delete("/agenda/:id",(req,res) => {
  const {id} = req.params;
  console.log("informção id,", id)

  let SQL = "delete from lista where (`id`=?)";

  db.query(SQL, id,(err, result) => {
      if(err) console.log(err);
      else res.send(result);
  })

});

app.listen(3001,()=> {
    console.log("rodando servidor")
});