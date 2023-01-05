const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

//Store Your JSON file in Local Host (Implement FS module in order to read the JSON file)
app.get('/json', (req, res) => {
  fs.readFile('lab9.json', (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

//Perform read and write operation on JSON in the server side
app.get('/json', (req, res) => {
  fs.readFile('lab9.json', (err, data) => {
    if (err) throw err;
    const json = JSON.parse(data);
    json.ownerID = '201';
    json.serviceID = '876';
    json.lastService="2020-02-02";
    json.nextService="2021-02-02";
    fs.writeFile('lab9.json', JSON.stringify(json), (err) => {
      if (err) throw err;
      res.send('JSON file updated');
    });
  });
});

//Manipulate the server response in the client side
//Implement Routing feature using NodeJS
app.get("/", (req, res) => {
  res.sendFile("lab9.html", { root: __dirname });
});

app.get("/json", (req, res) => {
  fs.readFile("lab9.json", (err, data) => {
    if (err) throw err;
    const json = JSON.parse(data);
    console.log(json);
    res.send(JSON.stringify(json));
  });
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


//run in terminal : node lab9.js