const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser")
const encoder = bodyParser.urlencoded()

const app = express();

const connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "topgear2014",
  database: "wsdb",
});

connection.connect(function (error) {
  if (error) throw error
  else console.log("Connected to the database successfully !")
})


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/formpg.html")
})

app.post("/insert", encoder, function (req, res) {
  console.log(req.body)
  var id = req.body.id
  var name = req.body.name
  var mobno = req.body.mobno
  var email = req.body.email
  var model = req.body.model
  var sid = req.body.sid
  const sqlInsert = "insert into customer (cust_id, cust_name, cust_mobno, cust_email, cust_model, cust_sid) VALUES (?, ?, ?, ? ,? ,?)";
  connection.query(sqlInsert, [id, name, mobno, email, model, sid], function (error) {
    if (error) throw error
    else console.log("Data inserted successfully !")
  })
})

app.post("/update", encoder, function (req, res) {
  console.log(req.body);
  var cust_id = req.body.cust_id
  var data = req.body.upd_data
  var value = req.body.upd_value
  console.log(value)
  var sqlUpdate = "UPDATE customer set " + data + " = " + value + " WHERE cust_id=" + cust_id + ";"
  connection.query(sqlUpdate, function (error) {
    if (error) throw error
    else console.log("Data updated successfully !")
  })
})

app.post('/delete', encoder, function (req, res) {
  console.log(req.body);
  var cust_id = req.body.del_cust
  var sqlDelete = "delete from customer WHERE cust_id=" + cust_id + ";"
  connection.query(sqlDelete, function (err) {
    if (err) throw err
    else console.log("Data deleted successfully !")
  })
})

app.post('/search', encoder, function (req, res) {
  console.log(req.body);
  var cust_id = req.body.search_cust
  var sqlSearch = "select * from customer WHERE cust_id=" + cust_id + ";"
  connection.query(sqlSearch, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})

app.post('/display', encoder, function (req, res) {
  console.log(req.body);
  var sqlDisplay = "select * from customer;"
  connection.query(sqlDisplay, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})

app.listen(3000);